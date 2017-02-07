/*школа, в которой учился пользователь*/
export interface ISchool {

  id: string;
  country: number;
  city: number;
  name: string;
  year_from: number;
  year_to: number;
  year_graduated: number;
  class: string;
  speciality: string;
  type: number;
  type_str: string;
}
