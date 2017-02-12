import { IPlaceGeoPost } from "./place-geo-post";

/*информация о местоположении*/
export interface IGeoPost {

  type: string;
  coordinates: string;
  place: IPlaceGeoPost;
}
