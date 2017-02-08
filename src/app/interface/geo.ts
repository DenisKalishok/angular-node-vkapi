/*находится в записях со стен, информация о местоположении*/
export interface IGeo {

  place_id: number;
  title: string;
  type: string;
  country_id: number;
  city_id: number;
  address: string;
  showmap: string;
}
