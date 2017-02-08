import { IUser } from './user';

/*Объект содержит информацию о друзьях пользователя*/
export interface IFriends {

  count: number;
  items: IUser[];
}
