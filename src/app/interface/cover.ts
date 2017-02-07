import { IImage } from './image';

/*обложка сообщества*/
export interface ICover {

  enabled: number;
  images: IImage[];
}
