
export default interface AddCardPayload {
  number: number;

  vendor: string;

  cvv: number;

  user_id: number;

  currency_id: number;
}