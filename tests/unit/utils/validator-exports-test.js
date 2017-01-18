import {expect} from 'chai'
import {describe, it} from 'mocha'
import validator from 'validator'

describe('validator', function () {
  it('is a single module that has been exported', function () {
    expect(typeof validator).to.equal('object')
  })

  it('is specifies correct version', function () {
    expect(validator.version).to.equal('6.2.1')
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
    'isEmpty',
    'isHexColor',
    'isIn',
    'isInt',
    'isISIN',
    'isISSN',
    'isISO8601',
    'isJSON',
    'isLength',
    'isMD5',
    'isMobilePhone',
    'isMultibyte',
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
