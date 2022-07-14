import { Model } from "@nozbe/watermelondb";
import { field } from "@nozbe/watermelondb/decorators";

export interface ICar {
  id: string;
  brand: string;
  name: string;
  about: string;
  period: string;
  price: number;
  fuel_type: string;
  thumbnail: string;
}

export class Car extends Model implements ICar {
  static table = "cars";

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
