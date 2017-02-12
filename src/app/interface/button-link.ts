/*объект, описывает информацию о кнопке*/
export interface IButtonLink {

  title: string;
  action: {
    type: string;
    url: string;
  };
}
