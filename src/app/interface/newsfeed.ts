import { IPhoto } from './photo';
import { IGroup } from './group';
import { IProfile } from './profile';
import { ILikes } from './likes';
import { IReposts } from './reposts';
import { IGeo } from './geo';
import { INode } from './node';

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
    copy_history: INode[];
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
    attachments: {
      type: string,
      photo: IPhoto;
    };
    geo: IGeo;
    photos, photo_tags: {
      id: number;
      owner_id: number;
      album_id: number;
      src: string;
      src_big: string;
    }[];
    nodes: INode[];
    friends: {
      uid: number;
    }
  }[];

  profiles: IProfile[];

  groups: IGroup[];

  next_from: string;

}
