/*категория товара*/
export interface ICategoryMarketItem {

  id: number;
  name: string;
  section: {
    id: number;
    name: string;
  };
}
