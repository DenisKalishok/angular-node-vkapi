import { IGeoMessage } from "../geo-message";
import { IAttachments_M } from "../attachments_m";

/*Объект, описывающий личное сообщение*/
export interface IMessage {

  id: number;
  user_id: number;
  from_id: number;
  date: number;
  read_state: number;
  out: number;
  title: string;
  body: string;
  geo: IGeoMessage;
  attachments: IAttachments_M[];
  /*fwd_messages: dfd;*/
  emoji: number;
  important: number;
  deleted: number;
  random_id: number;

  /*Дополнительные поля в сообщениях из мультидиалогов*/
  chat_id: number;
  chat_active: number[];
  push_settings: any;
  users_count: number;
  admin_id: number;
  action: string;
  action_mid: number;
  action_email: string;
  action_text: string;
  photo_50: string;
  photo_100: string;
  photo_200: string;
}
