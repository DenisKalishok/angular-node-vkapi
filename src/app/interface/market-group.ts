import { ICurrency } from './currency';

/*информация о магазине в сообществе*/
export interface IMarketGroup {

  enabled: number;
  price_min: number;
  price_max: number;
  main_album_id: number;
  contact_id: number;
  currency: ICurrency;
  currency_text: string;
}
