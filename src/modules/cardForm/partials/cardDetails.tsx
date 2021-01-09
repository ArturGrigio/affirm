import React, { useEffect } from 'react';
import { useDebounce } from '@react-hook/debounce'
import AmexValidation from '../../../common/validations/amexValidation';
import VisaValidation from '../../../common/validations/visaValidation';
import { IFormState, IError } from '../types';
import './cardDetails.css'

export interface ICardDetails {
  formState: IFormState;
  setHasErrors: (hasErrors: boolean) => void;
  updateFormState: (formState: IFormState) => void;
}
export const CardDetails = ({
  formState,
  setHasErrors,
  updateFormState,
}: ICardDetails) => {
  const [errors, setErrors] = useDebounce<IError>({ 
    name: null,
    cardNumber: null,
    ccv2: null,
    expM: null,
    expY: null
  }, 750)
  const visaValidation = new VisaValidation();
  const amexValidation = new AmexValidation();

  useEffect(() => {
    let validation = null;
    const cardNumber = formState?.cardNumber;
    if (cardNumber && cardNumber.toString()[0] === '3') {
      // Use Amex validation
      validation = amexValidation;
    } else if (cardNumber && cardNumber.toString()[0] === '4') {
      // Use Visa validation
      validation = visaValidation;
    } else {
      // It doesn't matter... just using Visa
      validation = visaValidation
    }

    setErrors({
      name: validation.validateName(formState.name) || null,
      cardNumber: validation.validateCardNumber(formState.cardNumber) || null,
      ccv2: validation.validateCcv2(formState.ccv2) || null,
      expM: validation.validateExpM(formState.expM) || null,
      expY: validation.validateExpY(formState.expY) || null,
    })
    console.log("has errors", (Object.values(errors)).every((value: any) => value === null))
    setHasErrors((Object.values(errors)).every((value: any) => value === null))
  }, [formState])

  const updateValue = (event: React.FormEvent) => {
    const target = event.target as HTMLSelectElement;
    updateFormState({
      ...formState,
      [target.name]: target.value,
    })
  }
  return (
    <div className="cardDetails flex-column">

      <div className="flex-row">
        <input 
          className="cardDetails--input c12"
          type="text" 
          name="name"
          placeholder="Name" 
          value={formState.name}
          onChange={updateValue}
        />
        <div className="cardDetails--error">
          {errors.name}
        </div>
      </div>

      <div className="flex-row">
        <input 
          className="cardDetails--input c12"
          type="number" 
          name="cardNumber"
          placeholder="Card Number" 
          value={formState.cardNumber}
          onChange={updateValue}
        />
        <div className="cardDetails--error">
          {errors.cardNumber}
        </div>
      </div>

      <div className="flex-row">
        <input 
          className="cardDetails--input c12"
          type="number" 
          name="ccv2"
          placeholder="CCV2" 
          onChange={updateValue}
          value={formState.ccv2}
          disabled={!formState.cardNumber}
        />
        <div className="cardDetails--error">
          {errors.ccv2}
        </div>
      </div>

      <div className="flex-row">
        <input 
          className="cardDetails--input c6"
          type="number"
          name="expM"
          placeholder="Exp. Month" 
          value={formState.expM}
          onChange={updateValue}
        />
        <input 
          className="cardDetails--input c6"
          type="number"
          name="expY"
          placeholder="Exp. Year" 
          value={formState.expY}
          onChange={updateValue}
        />
        <div className="cardDetails--error">
          {`${errors.expM ? errors.expM : ''} ${errors.expY ? errors.expY : ''}`}
        </div>
      </div>

    </div>
  );
}

export default CardDetails