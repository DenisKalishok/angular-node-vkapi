import { IUser } from './main_objects/user';

/*массив объектов пользователей с дополнительными полями*/
export interface IProfile extends IUser{

  photo: string;
  photo_medium_rec: string;
  screen_name: string;
}
