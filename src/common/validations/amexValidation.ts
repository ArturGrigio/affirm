import { BaseValidation } from './baseValidation';

export class AmexValidation extends BaseValidation {

  public validateCardNumber = (number?: number) => {
    if (!number && number !== 0) {
      return null;
    }

    if (
      number.toString()[0] === '3' 
      && (number.toString()[1] === '4' || number.toString()[1] === '7')  
      && number.toString().length === 15) {
      return null;
    }

    return "Please enter a correct card number.";
  }

  public validateCcv2 = (number?: number) => {
    if (!number && number !== 0) {
      return null;
    }

    if (number > 999 && number < 10000) {
      return null;
    }

    return "Please enter CCV2."
  }
}

export default AmexValidation;