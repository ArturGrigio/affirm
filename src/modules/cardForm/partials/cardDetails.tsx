import React, { useEffect } from 'react';
import { useDebounce } from '@react-hook/debounce'
import { ValidationSingleton } from '../../../common/validations/validationSingleton';
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
  }, 550)
  const validate = ValidationSingleton.getInstance();

  useEffect(() => {
    const validatedErrors = validate.validateAll(formState)
    setErrors(validatedErrors)

    if (
      formState.name
      && formState.cardNumber
      && formState.ccv2
      && formState.expM
      && formState.expY
      && Object.values(validatedErrors).every((val: string | null) => val === null)
    ) {
      setHasErrors(false)
    } else {
      setHasErrors(true)
    }
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