import { ICareerUser } from '../career-user';
import { ICity } from '../city';
import { IContactsUser } from '../contacts-user';
import { ICountersUser } from '../counters-user';
import { ICountry } from '../country';
import { ICropPhotoUser } from '../crop-photo-user';
import { IEducationUser } from '../education-user';
import { ILastSeen } from '../last-seen';
import { IMilitaryUser } from '../military-user';
import { IOccupationUser } from '../occupation-user';
import { IPersonalUser } from '../personal-user';
import { IRelativeUser } from '../relative-user';
import { ISchoolUser } from '../school-user';
import { IUniversitiUser } from '../universiti-user';

/*информация пользователя*/
export interface IUser {

  /*Базовые поля*/
  id: number;
  first_name: string;
  last_name: string;
  deactivated: string;
  hidden: number;

  /*Опциональные поля*/
  about: string;
  activities: string;
  bdate: string;
  blacklisted: number;
  blacklisted_by_me: number;
  books: string;
  can_post: number;
  can_see_all_posts: number;
  can_see_audio: number;
  can_send_friend_request: number;
  can_write_private_message: number;
  career: ICareerUser;
  city: ICity;
  common_count: number;
  /*connections: string;*/
  contacts: IContactsUser;
  counters: ICountersUser;
  country: ICountry;
  crop_photo: ICropPhotoUser;
  domain: string;
  education: IEducationUser;
  /*exports: string;*/
  first_name_nom: string;
  first_name_gen: string;
  first_name_dat: string;
  first_name_acc: string;
  first_name_inc: string;
  first_name_abl: string;
  followers_count: number;
  friend_status: number;
  games: string;
  has_mobile: number;
  has_photo: number;
  home_town: string;
  interests: string;
  is_favorite: number;
  is_friend: number;
  is_hidden_from_feed: number;
  last_name_nom: string;
  last_name_gen: string;
  last_name_dat: string;
  last_name_acc: string;
  last_name_inc: string;
  last_name_abl: string;
  last_seen: ILastSeen;
  lists: string;
  maiden_name: string;
  military: IMilitaryUser;
  movies: string;
  music: string;
  nickname: string;
  occupation: IOccupationUser;
  online: number;
  online_mobile: number;
  online_app: number;
  personal: IPersonalUser;
  photo_50: string;
  photo_100: string;
  photo_200_orig: string;
  photo_200: string;
  photo_400_orig: string;
  photo_id: string;
  photo_max: string;
  photo_max_orig: string;
  quotes: string;
  relatives: IRelativeUser[];
  relation: number;
  schools: ISchoolUser[];
  screen_name: string;
  sex: number;
  site: string;
  status: string;
  status_audio: string;
  timezone: number;
  tv: string;
  universities: IUniversitiUser[];
  verified: number;
  wall_comments: number;
}

