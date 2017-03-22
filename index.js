
'use strict'

module.exports = {
  name: 'validator',

  included (parent) {
    this._super.included(parent)

    this.import({
      development: 'vendor/validator/validator.js',
      production: 'vendor/validator/validator.min.js'
    })
  }
}
