import { ICar } from "../database/models/Car";

export interface UserScheduleDTO {
  id: string;
  user_id: string;
  start_date: string;
  end_date: string;
  car: ICar & {
    created_at: string;
    updated_at: string;
  };
  created_at: string;
  updated_at: string;
  total: number;
}
