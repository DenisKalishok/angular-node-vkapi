import { IPrice } from "../price";
import { ICategoryMarketItem } from "../category-market-item";
import { IPhoto } from "../media_object/photo";

/*Объект, описывающий товар*/
export interface IMarketItem {

  id: number;
  owner_id: number;
  title: string;
  description: string;
  price: IPrice;
  category: ICategoryMarketItem;
  thumb_photo: string;
  date: number;
  availability: number;

  /*Опциональные поля*/
  photos: IPhoto[];
  can_comment: number;
  can_repost: number;
  likes: {
    user_likes: number;
    count: number;
  };
}
