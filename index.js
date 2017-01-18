'use strict'

const commonJsTransform = require('5to6-codemod/transforms/cjs')
const exportsTransform = require('5to6-codemod/transforms/exports')
const jscodeshift = require('jscodeshift')
const mergeTrees = require('broccoli-merge-trees')
const metal = require('broccoli-metal')
const path = require('path')
const replace = require('broccoli-replace')

module.exports = {
  name: 'validator',

  _convertCommonJsToEs6 (tree) {
    return metal(tree, (files) => {
      Object.keys(files).forEach((key) => {
        // Ignore non-Javascript files
        if (!/\.js$/.test(key)) {
          return
        }

        const source = files[key]

        const transformedSource = [
          commonJsTransform,
          exportsTransform
        ]
          .reduce(
            (source, transformFn) => {
              return transformFn({source}, {jscodeshift})
            },
            source
          )

        files[key] = transformedSource
      })
    })
  },

  _fixConversionBugs (tree) {
    return replace(tree, {
      files: [
        '**/*.js'
      ],
      patterns: [
        {
          match: /export let [a-zA-Z0-9]+ = undefined;/g,
          replacement: ''
        }
      ]
    })
  },

  _getValidatorTree () {
    const validatorPath = path.dirname(require.resolve('validator/index.js'))
    const validatorTree = this.treeGenerator(validatorPath)

    return [
      this._prepForConversion,
      this._convertCommonJsToEs6,
      this._fixConversionBugs
    ]
      .reduce((tree, broccoliFn) => broccoliFn.call(this, tree), validatorTree)
  },

  _prepForConversion (tree) {
    return replace(tree, {
      files: [
        '**/*.js'
      ],
      patterns: [
        {
          match: /module\.exports = exports\['default'];/g,
          replacement: ''
        },
        {
          match: /exports.default = ([^;]+);/,
          replacement: 'module.exports = $1'
        }
      ]
    })
  },

  treeForAddon (tree) {
    const validatorTree = this._getValidatorTree()

    if (!tree) {
      return this._super.treeForAddon.call(this, validatorTree)
    }

    const trees = mergeTrees([validatorTree, tree], {
      overwrite: true
    })

    return this._super.treeForAddon.call(this, trees)
  }
}
