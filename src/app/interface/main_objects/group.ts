import { IBanInfoGroup } from '../ban-info-group';
import { ICity } from '../city';
import { IContactGroup } from '../contact-group';
import { ICountersGroup } from '../counters-group';
import { ICountry } from '../country';
import { ICoverGroup } from '../cover-group';
import { ILinkGroup } from '../link-group';
import { IMarketGroup } from '../market-group';
import { IPlaceGroup } from '../place-group';

/*Объект содержит информацию о сообществе*/
export interface IGroup {

  /*Базовые поля*/
  id: number;
  name: string;
  screen_name: string;
  is_closed: number;
  deactivated: string;
  is_admin: number;
  admin_level: number;
  is_member: number;
  invited_by: number;
  type: string;
  has_photo: number;
  photo_50: string;
  photo_100: string;
  photo_200: string;

  /*Опциональные поля*/
  activity: string;
  age_limits: number;
  ban_info: IBanInfoGroup;
  can_create_topic: number;
  can_message: number;
  can_post: number;
  can_see_all_posts: number;
  can_upload_doc: number;
  can_upload_video: number;
  city: ICity;
  contacts: IContactGroup[];
  counters: ICountersGroup;
  country: ICountry;
  cover: ICoverGroup;
  description: string;
  fixed_post: number;
  is_favorite: number;
  is_hidden_from_feed: number;
  is_messages_allowed: number;
  links: ILinkGroup[];
  main_album_id: number;
  main_section: number;
  market: IMarketGroup;
  member_status: number;
  members_count: number;
  place: IPlaceGroup;
  public_date_label: string;
  site: string;
  start_date: number;
  finish_date: number;
  status: string;
  verified: number;
  wiki_page: string;
}
