import { ISizes } from '../sizes';

/*Объект, описывающий фотографию*/
export interface IPhoto {

  id: number;
  album_id: number;
  owner_id: number;
  user_id: number;
  text: string;
  date: number;
  sizes: ISizes[];
  photo_75: string;
  photo_130: string;
  photo_604: string;
  photo_807: string;
  photo_1280: string;
  photo_2560: string;
  width: number;
  height: number;
}
