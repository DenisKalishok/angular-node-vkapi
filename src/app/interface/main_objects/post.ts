import { ICommentsPost } from "../comments-post";
import { ILikes } from "../likes";
import { IReposts } from "../reposts";
import { IPostSourse } from "../post-sourse";
import { IAttachments_W } from "../attachments_w";
import { IGeoPost } from "../geo-post";
import { INote } from "./note";

/*объект, описывающий запись на стене пользователя или сообщества*/
export interface IPost {

  id: number;
  owner_id: number;
  from_id: number;
  date: number;
  text: string;
  reply_owner_id: number;
  reply_post_id: number;
  friends_only: number;
  comments: ICommentsPost;
  likes: ILikes;
  reposts: IReposts;
  post_type: string;
  post_source: IPostSourse;
  attachments: IAttachments_W[];
  geo: IGeoPost;
  signer_id: number;
  copy_history: INote[];
  can_pin: number;
  can_delete: number;
  can_edit: number;
  is_pinned: number;
  marked_as_ads: number;
}
