/*объект, описывающий видеозапись*/
export interface IVideo {

  id: number;
  owner_id: number;
  title: string;
  description: string;
  duration: string;
  photo_130: string;
  photo_320: string;
  photo_640: string;
  photo_800: string;
  date: number;
  adding_date: number;
  views: number;
  comments: number;
  player: string;
  access_key: string;
  processing: number;
  live: number;
}
