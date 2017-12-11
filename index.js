/* eslint-env node */
'use strict'

module.exports = {
  name: 'validator',

  included () {
    this._super.included.apply(this, arguments)

    this.import({
      development: 'vendor/validator/validator.js',
      production: 'vendor/validator/validator.min.js'
    })
  }
}
