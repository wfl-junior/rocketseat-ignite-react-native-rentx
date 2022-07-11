import { CarDTO } from "./CarDTO";

export interface UserScheduleDTO {
  id: number;
  user_id: number;
  startDate: string;
  endDate: string;
  car: CarDTO;
}
