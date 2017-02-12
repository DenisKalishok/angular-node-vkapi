import { IAttachments_W } from "../attachments_w";

/*объект, описывающий комментарий к записи*/
export interface IComment {

  id: number;
  from_id: number;
  date: number;
  text: string;
  reply_to_user: number;
  reply_to_comment: number;
  attachments: IAttachments_W;
}
