import { Model } from "@nozbe/watermelondb";
import { field } from "@nozbe/watermelondb/decorators";

export class Car extends Model {
  static table = "cars";

  @field("car_id")
  car_id: string;

  @field("brand")
  brand: string;

  @field("name")
  name: string;

  @field("about")
  about: string;

  @field("period")
  period: string;

  @field("price")
  price: number;

  @field("fuel_type")
  fuel_type: string;

  @field("thumbnail")
  thumbnail: string;
}
