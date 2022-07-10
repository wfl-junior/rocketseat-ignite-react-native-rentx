import { CarDTO } from "../../dtos/CarDTO";
import {
  CarImage,
  CarImageWrapper,
  Container,
  ImageIndex,
  ImageIndexes,
} from "./styles";

interface ImageSliderProps {
  photos: CarDTO["photos"];
}

export const ImageSlider: React.FC<ImageSliderProps> = ({ photos }) => (
  <Container>
    <ImageIndexes>
      <ImageIndex active />
      <ImageIndex />
      <ImageIndex />
      <ImageIndex />
    </ImageIndexes>

    <CarImageWrapper>
      <CarImage source={{ uri: photos[0] }} resizeMode="contain" />
    </CarImageWrapper>
  </Container>
);
