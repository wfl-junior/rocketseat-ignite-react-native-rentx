export interface CarAccessoryDTO {
  id: string;
  type: string;
  name: string;
}

export interface CarPhotoDTO {
  id: string;
  photo: string;
}

export interface CarDTO {
  id: string;
  brand: string;
  model: string;
  about: string;
  period: string;
  price: number;
  fuel_type: string;
  thumbnail: string;
  accessories: CarAccessoryDTO[];
  photos: CarPhotoDTO[];
}
