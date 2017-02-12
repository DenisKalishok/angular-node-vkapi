import { IPlaceGeoMessage } from './place-geo-message';

/*информация о местоположении*/
export interface IGeoMessage {

  type: string;
  coordinates: string;
  place: IPlaceGeoMessage;
}
