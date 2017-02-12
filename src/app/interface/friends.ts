import { IUser } from './main_objects/user';

/*Объект содержит информацию о друзьях пользователя*/
export interface IFriends {

  count: number;
  items: IUser[];
}
