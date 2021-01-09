import * as React from 'react';
import './content.css'
import { CardForm } from '../modules/cardForm/cardForm';

export const Content = () => {

  return (
    <main className="content">
      <div>
        <CardForm />
      </div>
    </main>
  );
}

export default Content