import { ImageSourcePropType } from "react-native";
import {
  CarImage,
  CarImageWrapper,
  Container,
  ImageIndex,
  ImageIndexes,
} from "./styles";

interface ImageSliderProps {
  images: ImageSourcePropType[];
}

export const ImageSlider: React.FC<ImageSliderProps> = ({ images }) => (
  <Container>
    <ImageIndexes>
      <ImageIndex active />
      <ImageIndex />
      <ImageIndex />
      <ImageIndex />
    </ImageIndexes>

    <CarImageWrapper>
      <CarImage source={images[0]} resizeMode="contain" />
    </CarImageWrapper>
  </Container>
);
