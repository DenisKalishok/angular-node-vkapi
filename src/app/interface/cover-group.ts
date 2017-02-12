import { IImage } from './image';

/*обложка сообщества*/
export interface ICoverGroup {

  enabled: number;
  images: IImage[];
}
