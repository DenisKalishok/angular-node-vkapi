import { ICurrency } from "./currency";

/*объект, описывает цену*/
export interface IPrice {

  amount: number;
  currency: ICurrency;
  text: string;
}
