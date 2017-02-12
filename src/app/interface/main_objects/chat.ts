/*объект, описывающий чат*/
export interface IChat {

  id: number;
  type: string;
  title: string;
  admin_id: number;
  users: number[];
  push_settings: {
    sound: number;
    disabled_until: number;
  };
  photo_50: string;
  photo_100: string;
  photo_200: string;
  left: number;
  kicked: number;
}
