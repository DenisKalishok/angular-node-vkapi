import { IPhoto } from "../media_object/photo";

/*объект, описывающий подборку товаров*/
export interface IMarketAlbum {

  id: number;
  owner_id: number;
  title: string;
  photo: IPhoto;
  count: number;
  updated_time: number;
}
