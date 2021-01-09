export interface IFormState {
  name?: string;
  cardNumber?: number;
  ccv2?: number;
  expM?: number;
  expY?: number;
}

export interface IError {
  name: string | null;
  cardNumber: string | null;
  ccv2: string | null;
  expM: string | null;
  expY: string | null
}