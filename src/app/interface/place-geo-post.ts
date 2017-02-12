/* описание места*/
export interface IPlaceGeoPost {

  id: number;
  title: string;
  latitude: number;
  longitude: number;
  created: number;
  icon: string;
  country: string;
  city: string;

  type: number;
  group_id: number;
  group_photo: string;
  checkins: number;
  updated: number;
  address: number;
}
