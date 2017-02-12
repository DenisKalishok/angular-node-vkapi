import { IPhoto } from "./media_object/photo";
import { IVideo } from "./media_object/video";
import { IAudio } from "./media_object/audio";
import { IDoc } from "./media_object/doc";
import { ILink } from "./media_object/link";
import { INote } from "./main_objects/note";
import { IPoll } from "./main_objects/poll";
import { IPage } from "./main_objects/page";
import { IAlbum } from "./media_object/album";
import { IMarketItem } from "./main_objects/market-item";
import { IMarketAlbum } from "./main_objects/market-album";
import { ISticker } from "./media_object/sticker";

/*медиавложения*/
export interface IAttachments_W{

  type: string;
  photo: IPhoto;
  video: IVideo;
  audio: IAudio;
  doc: IDoc;
  link: ILink;
  note: INote;
  poll: IPoll;
  page: IPage;
  album: IAlbum;
  market: IMarketItem;
  market_album: IMarketAlbum;
  sticker: ISticker;
}
