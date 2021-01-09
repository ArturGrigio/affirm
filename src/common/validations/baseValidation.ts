export class BaseValidation {
  public validateName = (name = '') => {
    if (name === '') {
      return null;
    }
    const regex = /^[\w'\-,.][^0-9_!¡?÷?¿/\\+=@#$%ˆ&*(){}|~<>;:[\]]{2,}$/;
    const result = regex.test(name);

    if (result) {
      return null;
    }
    return 'Please enter your name.'
  }

  public validateExpM = (expM?: number) => {
    if (!expM && expM !== 0) {
      return null
    }

    if (expM > 0 && expM <= 12) {
      return null
    }

    return 'Please enter a month between 1 - 12.'
  }

  public validateExpY = (expY?: number) => {
    const year = new Date().getFullYear();
    if (!expY && expY !== 0) {
      return null
    }

    if (expY >= year && expY <= year+8) {
      return null
    }

    return `Please enter a year between ${year} - ${year+8}`
  }
}

export default BaseValidation;