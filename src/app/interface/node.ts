/*Объект, описывающий заметку*/
export interface INode {

  id: number;
  owner_id: number;
  title: string;
  text: string;
  date: number;
  comments: number;
  read_comments: number;
  view_url: string;
}
