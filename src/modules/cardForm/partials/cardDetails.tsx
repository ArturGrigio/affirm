import React, { useEffect } from 'react';
import { useDebounce } from '@react-hook/debounce'
import { ValidationSingleton } from '../../../common/validations/validationSingleton';
import { IFormState, IError } from '../types';
import './cardDetails.css'

export interface ICardDetails {
  formState: IFormState;
  updateFormState: (formState: IFormState) => void;
}
export const CardDetails = ({
  formState,
  updateFormState,
}: ICardDetails) => {
  const [errors, setErrors] = useDebounce<IError>({ 
    name: null,
    cardNumber: null,
    ccv2: null,
    expM: null,
    expY: null
  }, 750)
  const validate = ValidationSingleton.getInstance();

  useEffect(() => {
    setErrors(validate.validateAll(formState))
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
          onChange={updateValue}
        />
        <input 
          className="cardDetails--input c6"
          type="number"
          name="expY"
          placeholder="Exp. Year" 
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