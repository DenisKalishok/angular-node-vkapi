import { IPhoto } from "./photo";
import { IPrice } from "../price";
import { IButtonLink } from "../button-link";

/*объект, описывающий прикрепленную ссылку в сообщении, комментарии или записи на стене*/
export interface ILink {

  url: string;
  title: number;
  caption: string;
  description: string;
  photo: IPhoto;
  is_external: number;
  product: {
    price: IPrice;
  };
  button: IButtonLink;
  preview_page: string;
  preview_url: string;
}
