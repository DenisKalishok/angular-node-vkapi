/*объект, описывающий обсуждение в сообществе*/
export interface ITopic {

  id: number;
  title: string;
  created: number;
  created_by: number;
  updated: number;
  updated_by: number;
  is_closed: number;
  is_fixed: number;
  comments: number;
  first_comment: string;
  last_comment: string;
}
