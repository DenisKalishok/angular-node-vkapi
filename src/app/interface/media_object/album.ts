import { IPhoto } from "./photo";

/*объект, описывающий  альбом с фотографиями*/
export interface IAlbum {

  id: number;
  thumb: IPhoto;
  owner_id: number;
  title: string;
  description: string;
  created: number;
  updated: number;
  size: number;
}
