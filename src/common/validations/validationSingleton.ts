import AmexValidation from './amexValidation';
import VisaValidation from './visaValidation';
import BaseValidation from './baseValidation';
import { IFormState } from '../../modules/cardForm/types';

export class ValidationSingleton {
  private static instance: ValidationSingleton;

  public static getInstance(): ValidationSingleton {
    if (!ValidationSingleton.instance) {
      ValidationSingleton.instance = new ValidationSingleton();
    }

    return ValidationSingleton.instance;
  }

  public validateAll(formState: IFormState) {
    let validation = null;
    const cardNumber = formState?.cardNumber;
    if (cardNumber && cardNumber.toString()[0] === '3') {
      // Use Amex validation
      validation = new AmexValidation();
    } else if (cardNumber && cardNumber.toString()[0] === '4') {
      // Use Visa validation
      validation = new VisaValidation();
    } else {
      // It doesn't matter... just using Visa
      validation = new VisaValidation();
    }

    return {
      name: validation.validateName(formState.name) || null,
      cardNumber: validation.validateCardNumber(formState.cardNumber) || null,
      ccv2: validation.validateCcv2(formState.ccv2) || null,
      expM: validation.validateExpM(formState.expM) || null,
      expY: validation.validateExpY(formState.expY) || null,
    }
  }
}