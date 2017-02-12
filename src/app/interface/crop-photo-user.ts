import { IPhoto } from './media_object/photo';
import { ICropUser } from './crop-user';

/*возвращает данные о точках, по которым вырезаны профильная и миниатюрная фотографии пользователя*/
export interface ICropPhotoUser {

  photo: IPhoto;
  crop: ICropUser;
  rect: ICropUser;
}
