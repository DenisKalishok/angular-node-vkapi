import { IGroup } from './main_objects/group';
import { IProfile } from './profile';
import { ILikes } from './likes';
import { IReposts } from './reposts';
import { IAttachments_W } from "./attachments_w";
import { IGeoNewsfeed } from './geo-newsfeed';
import { INote } from './main_objects/note';


export interface INewsfeed {

  items: {
    type: string;
    source_id: number;
    date: number;
    post_id: number;
    post_type: string;
    final_post: string;
    copy_owner_id: number;
    copy_post_id: number;
    copy_history: INote[];
    copy_post_date: number;
    text: string;
    can_edit: number;
    can_delete: number;
    comments: {
      count: number;
      can_post: number;
    };
    likes: ILikes;
    reposts: IReposts;
    attachments: IAttachments_W;
    geo: IGeoNewsfeed;
    photos, photo_tags: {
      id: number;
      owner_id: number;
      album_id: number;
      src: string;
      src_big: string;
    }[];
    notes: INote[];
    friends: {
      uid: number;
    }
  }[];

  profiles: IProfile[];

  groups: IGroup[];

  next_from: string;

}
