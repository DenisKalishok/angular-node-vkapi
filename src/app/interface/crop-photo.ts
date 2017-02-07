import { IPhoto } from './photo';
import { ICrop } from './crop';

/*возвращает данные о точках, по которым вырезаны профильная и миниатюрная фотографии пользователя*/
export interface ICropPhoto {

  photo: IPhoto;
  crop: ICrop;
  rect: ICrop;
}
