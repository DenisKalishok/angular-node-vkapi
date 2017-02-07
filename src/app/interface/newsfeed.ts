import { IPhoto } from './photo';
import { IGroup } from './group';

export interface INewsfeed {

  items: {
      type: string,
      source_id: number,
      date: number,
      post_id: number,
      post_type: string,
      final_post: string,
      copy_owner_id: number,
      copy_post_id: number,
      copy_history: string[],
      copy_post_date: number,
      text: string,
      can_edit: number,
      can_delete: number,
      post_sourse: {
        type: string
      }
      comments: {
        count: number,
        can_post: number
      },
    likes: {
      count: number,
      user_likes: number,
      can_like: number,
      can_publish: number
    },
    reposts: {
      count: number,
      user_reposted: number
    },
    attachments: {
      type: string,
      photo: IPhoto;

    },
    geo: {
      place_id: number,
      title: string,
      type: string,
      country_id: number,
      city_id: number,
      address: string,
      showmap: string
    },
    photos, photo_tags: {
      id: number,
      owner_id: number,
      album_id: number,
      src: string,
      src_big: string
    },
    nodes: {
      id: number,
      owner_id: number,
      title: string,
      comments: number
    },
    friends: {
      uid: number
    }
  };

  profiles: {
    id: number,
    first_name: string,
    last_name: string,
    deactivated: string,
    hidden: number,
    photo: string,
    photo_medium_rec: string,
    screen_name: string
  };

  groups: IGroup[];

  next_from: string;

}
