/*информация о карьере пользователя*/
export interface ICareer {

  group_id: number;
  company: string;
  country_id: number;
  city_id: number;
  city_name: string;
  from: number;
  until: number;
  position: string;
}
