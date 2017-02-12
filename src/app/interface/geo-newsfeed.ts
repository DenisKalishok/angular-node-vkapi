/*информация о местоположении*/
export interface IGeoNewsfeed {

  place_id: number;
  title: string;
  type: string;
  country_id: number;
  city_id: number;
  address: string;
  showmap: string;
}
