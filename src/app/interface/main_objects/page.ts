/*объект, описывающий вики-страницу*/
export interface IPage {

  id: number;
  group_id: number;
  creator_id: number;
  title: string;
  current_user_can_edit: number;
  current_user_can_edit_access: number;
  who_can_view: number;
  who_can_edit: number;
  edited: number;
  created: number;
  editor_id: number;
  views: number;
  parent: string;
  parent2: string;
  source: string;
  html: string;
  view_url: string;
}
