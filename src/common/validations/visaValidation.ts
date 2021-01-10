import { BaseValidation } from './baseValidation';

export class VisaValidation extends BaseValidation {

  public validateCardNumber = (number?: number) => {
    if (!number && number !== 0) {
      return null;
    }

    if (number.toString()[0] === '4' && number.toString().length === 16) {
      return null;
    }

    return "Please enter a correct card number.";
  }

  public validateCcv2 = (number?: number) => {
    if (!number && number !== 0) {
      return null;
    }

    if (number > 99 && number < 1000) {
      return null;
    }

    return "Please enter CCV2."
  }
}

export default VisaValidation