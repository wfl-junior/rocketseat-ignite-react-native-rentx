export interface CarRentDTO {
  period: string;
  price: number;
}

export interface CarAccessoryDTO {
  type: string;
  name: string;
}

export interface CarDTO {
  id: string;
  brand: string;
  model: string;
  about: string;
  rent: CarRentDTO;
  fuel_type: string;
  thumbnail: string;
  accessories: CarAccessoryDTO[];
  photos: string[];
}
