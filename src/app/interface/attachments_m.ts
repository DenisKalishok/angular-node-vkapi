import { IPhoto } from "./media_object/photo";
import { IVideo } from "./media_object/video";
import { IAudio } from "./media_object/audio";
import { IDoc } from "./media_object/doc";
import { ILink } from "./media_object/link";
import { IMarketItem } from "./main_objects/market-item";
import { IMarketAlbum } from "./main_objects/market-album";
import { ISticker } from "./media_object/sticker";
import { IGift } from './media_object/gift';

/*Медиавложения в личных сообщениях*/
export interface IAttachments_M {

  type: string;
  photo: IPhoto;
  video: IVideo;
  audio: IAudio;
  doc: IDoc;
  link: ILink;
  market: IMarketItem;
  market_album: IMarketAlbum;
  sticker: ISticker;
  gift: IGift;
}
