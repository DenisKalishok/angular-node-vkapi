
export interface IFriends {
  count: number;
  items: {
    id: number,
    first_name: string,
    last_name: string,
    online: number,
    photo_100: string,
    last_seen: {
      platform: number,
      time: number
    }
  };
}
