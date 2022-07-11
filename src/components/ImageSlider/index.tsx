import { FlatList } from "react-native";
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

export const ImageSlider: React.FC<ImageSliderProps> = ({ photos: images }) => (
  <Container>
    <ImageIndexes>
      {images.map((image, index) => (
        <ImageIndex key={image} active={index === 0} />
      ))}
    </ImageIndexes>

    <CarImageWrapper>
      <FlatList
        data={images}
        keyExtractor={image => image}
        horizontal
        showsHorizontalScrollIndicator={false}
        renderItem={({ item: image }) => (
          <CarImageWrapper>
            <CarImage source={{ uri: image }} resizeMode="contain" />
          </CarImageWrapper>
        )}
      />
    </CarImageWrapper>
  </Container>
);
