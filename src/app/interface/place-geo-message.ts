/*информация о местоположении*/
export interface IPlaceGeoMessage {

  id: number;
  title: string;
  latitude: number;
  longitude: number;
  created: number;
  icon: string;
  country: string;
  city: string;
}
