/*объект, описывающий стикер*/
export interface ISticker {

  id: number;
  product_id: number;
  photo_64: string;
  photo_128: string;
  photo_256: string;
  photo_352: string;
  width: number;
  height: number;
}
