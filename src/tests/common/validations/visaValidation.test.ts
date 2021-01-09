import { VisaValidation } from '../../../common/validations/visaValidation';

describe('VisaValidation', () => {
  const validation = new VisaValidation();

  describe('Validates CCV2', () => {
    const error = "Please enter CCV2."

    test('empty', () => {
      expect(validation.validateCcv2()).toEqual(null)
    })

    test('negative', () => {
      expect(validation.validateCcv2(-5)).toEqual(error)
    })

    test('> 999', () => {
      expect(validation.validateCcv2(1000)).toEqual(error)
    })

    test('< 100', () => {
      expect(validation.validateCcv2(99)).toEqual(error)
    })

    test('0', () => {
      expect(validation.validateCcv2(0)).toEqual(error)
    })

    test('correct input', () => {
      expect(validation.validateCcv2(111)).toEqual(null)
    })
  })

  describe('Validates Card Number', () => {
    const error = "Please enter correct card number."

    test('empty', () => {
      expect(validation.validateCardNumber()).toEqual(null)
    })

    test('negative', () => {
      expect(validation.validateCcv2(-5)).toEqual(error)
    })

    test('> 9999999999999999', () => {
      expect(validation.validateCcv2(10000000000000000)).toEqual(error)
    })

    test('< 1000000000000000', () => {
      expect(validation.validateCcv2(999999999999999)).toEqual(error)
    })

    test('doesn\'t start with 4', () => {
      expect(validation.validateCcv2(3434343434343434)).toEqual(error)
    })

    test('0', () => {
      expect(validation.validateCcv2(0)).toEqual(error)
    })

    test('correct input', () => {
      expect(validation.validateCcv2(111)).toEqual(null)
    })
  })

})