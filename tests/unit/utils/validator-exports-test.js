import {expect} from 'chai'
import {describe, it} from 'mocha'
import validator from 'validator'

describe('validator', function () {
  it('is a single module that has been exported', function () {
    expect(typeof validator).to.equal('object')
  })

  it('is specifies correct version', function () {
    expect(validator.version).to.equal('6.2.0')
  })

  ;[
    'equals',
    'escape',
    'isAlpha',
    'isAscii',
    'isBase64',
    'isBoolean',
    'isCreditCard',
    'isCurrency',
    'isDate',
    'isEmail',
    'isHexColor',
    'isIn',
    'isInt',
    'isISIN',
    'isISO8601',
    'isJSON',
    'isLength',
    'isMobilePhone',
    'isMultibyte',
    'isEmpty',
    'isUUID',
    'isWhitelisted',
    'ltrim',
    'normalizeEmail',
    'toBoolean',
    'toDate',
    'toFloat',
    'toString',
    'whitelist'
  ]
    .forEach((key) => {
      it(`has ${key} method`, function () {
        expect(typeof validator[key]).to.equal('function')
      })
    })
})
