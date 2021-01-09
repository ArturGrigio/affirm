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

})