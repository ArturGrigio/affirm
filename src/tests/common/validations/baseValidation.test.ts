import { BaseValidation } from '../../../common/validations/baseValidation';

describe('BaseValidation', () => {
  const baseValidation = new BaseValidation();

  describe('Validates Name', () => {
    const error = "Please enter your name."

    test('empty string', () => {
      expect(baseValidation.validateName('')).toEqual(null)
    })

    test('numbers', () => {
      expect(baseValidation.validateName('2')).toEqual(error)
    })

    test('special characters', () => {
      expect(baseValidation.validateName('#')).toEqual(error)
    })

    test('spaces', () => {
      expect(baseValidation.validateName('   ')).toEqual(error)
    })

    test('correct input 1', () => {
      expect(baseValidation.validateName('Artur')).toEqual(null)
    })

    test('correct input 2', () => {
      expect(baseValidation.validateName('Artur Grigio')).toEqual(null)
    })

    test('correct input 3', () => {
      expect(baseValidation.validateName('Artur Grigio Jr.')).toEqual(null)
    })

    test('correct input 4', () => {
      expect(baseValidation.validateName('Mr. Artur Grigio')).toEqual(null)
    })
  })

  describe('Validates Exp Month', () => {
    const error = "Please enter a month between 1 - 12."

    test('empty', () => {
      expect(baseValidation.validateExpM()).toEqual(null)
    })

    test('negative', () => {
      expect(baseValidation.validateExpM(-5)).toEqual(error)
    })

    test('> 12', () => {
      expect(baseValidation.validateExpM(15)).toEqual(error)
    })

    test('0', () => {
      expect(baseValidation.validateExpM(0)).toEqual(error)
    })

    test('correct input', () => {
      expect(baseValidation.validateExpM(3)).toEqual(null)
    })
  })

  describe('Validates Exp Year', () => {
    const error = `Please enter a year between ${new Date().getFullYear()} - ${new Date().getFullYear()+8}`

    test('empty', () => {
      expect(baseValidation.validateExpY()).toEqual(null)
    })

    test('negative', () => {
      expect(baseValidation.validateExpY(-5)).toEqual(error)
    })

    test('> current year + 8', () => {
      expect(baseValidation.validateExpY(new Date().getFullYear()+9)).toEqual(error)
    })

    test('0', () => {
      expect(baseValidation.validateExpY(0)).toEqual(error)
    })

    test('correct input', () => {
      expect(baseValidation.validateExpY(new Date().getFullYear()+4)).toEqual(null)
    })
  })
})