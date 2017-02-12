import { IPreviewDoc } from "../preview-doc";

/*объект, описывающий документ*/
export interface IDoc {

  id: number;
  owner_id: number;
  title: string;
  size: number;
  ext: string;
  url: string;
  date: number;
  type: number;
  preview: IPreviewDoc;
}
