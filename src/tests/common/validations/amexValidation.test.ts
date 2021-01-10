import { AmexValidation } from '../../../common/validations/amexValidation';

describe('AmexValidation', () => {
  const validation = new AmexValidation();

  describe('Validates CCV2', () => {
    const error = "Please enter CCV2."

    test('empty', () => {
      expect(validation.validateCcv2()).toEqual(null)
    })

    test('negative', () => {
      expect(validation.validateCcv2(-5)).toEqual(error)
    })

    test('> 9999', () => {
      expect(validation.validateCcv2(10000)).toEqual(error)
    })

    test('< 1000', () => {
      expect(validation.validateCcv2(999)).toEqual(error)
    })

    test('0', () => {
      expect(validation.validateCcv2(0)).toEqual(error)
    })

    test('correct input', () => {
      expect(validation.validateCcv2(1111)).toEqual(null)
    })
  })

  describe('Validates Card Number', () => {
    const error = "Please enter a correct card number."

    test('empty', () => {
      expect(validation.validateCardNumber()).toEqual(null)
    })

    test('negative', () => {
      expect(validation.validateCardNumber(-5)).toEqual(error)
    })

    test('> 999999999999999', () => {
      expect(validation.validateCardNumber(1000000000000000)).toEqual(error)
    })

    test('< 100000000000000', () => {
      expect(validation.validateCardNumber(99999999999999)).toEqual(error)
    })

    test('doesn\'t start with 34', () => {
      expect(validation.validateCardNumber(443434343434343)).toEqual(error)
    })

    test('doesn\'t start with 37', () => {
      expect(validation.validateCardNumber(443434343434343)).toEqual(error)
    })

    test('0', () => {
      expect(validation.validateCardNumber(0)).toEqual(error)
    })

    test('correct input 1', () => {
      expect(validation.validateCardNumber(344444444444444)).toEqual(null)
    })

    test('correct input 2', () => {
      expect(validation.validateCardNumber(374444444444444)).toEqual(null)
    })
  })

})