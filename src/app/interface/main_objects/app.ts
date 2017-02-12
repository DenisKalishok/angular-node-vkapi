import { IPhoto } from "../media_object/photo";

/*Объект, описывающий приложение*/
export interface IApp {

  /*Базовые поля*/
  id: number;
  title: string;
  icon_278: string;
  icon_139: string;
  icon_150: string;
  icon_75: string;
  banner_560: string;
  banner_1120: string;
  type: string;
  section: string;
  author_url: string;
  author_id: number;
  author_group: number;
  members_count: number;
  published_date: number;
  catalog_position: number;
  international: number;
  leaderboard_type: number;
  genre_id: number;
  genre: string;
  platform_id: string;
  is_in_catalog: number;

  /*Опциональные поля*/
  description: string;
  screen_name: string;
  icon_16: string;
  screenshots: IPhoto[];
}
