/*объект, описывающий опрос*/
export interface IPoll {

  id: number;
  owner_id: number;
  created: number;
  question: string;
  votes: number;
  answer_id: number;
  answers: {
    id: number;
    text: string;
    votes: number;
    rate: number;
  }[];
  anonymous: number;
}
