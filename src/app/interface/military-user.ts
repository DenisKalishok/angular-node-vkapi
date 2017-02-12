/*информация о военной службе пользователя*/
export interface IMilitaryUser {

  unit: string;
  unit_id: number;
  country_id: number;
  from: number;
  until: number;
}
