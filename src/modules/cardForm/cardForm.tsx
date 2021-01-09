import React, { useState } from 'react';
import './cardForm.css'
import { IFormState } from './types';
import { CardDetails } from './partials/cardDetails';
import { CardImages } from './partials/cardImages';

export const CardForm = () => {
  const [formState, setFormState] = useState<IFormState>({})
  const [hasErrors, setHasErrors] = useState<boolean>(true)
  const [loading, setLoading] = useState<boolean>(false)

  const onSubmit = () => {
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
    }, 1500)
  }

  return (
    <div className="cardForm">
      <div className="cardForm--container">
        <h3>Enter your credit card information</h3>
        <div className="cardForm--max-width">
          <CardDetails 
            formState={formState} 
            updateFormState={setFormState}
            setHasErrors={setHasErrors}
          />
        </div>
        <CardImages />
        <div className="cardForm--max-width">
          <button 
            className="cardForm--submit--button" 
            onClick={onSubmit}
            disabled={hasErrors}
          >
            { loading && (
              <div className="loader"></div>
            )}
            {!loading && (
              <span>Submit</span>
            )}
          </button>
        </div>
      </div>
    </div>
  );
}

export default CardForm