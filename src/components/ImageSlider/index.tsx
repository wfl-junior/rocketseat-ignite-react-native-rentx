import { useRef, useState } from "react";
import { FlatList, ViewToken } from "react-native";
import { CarDTO } from "../../dtos/CarDTO";
import {
  CarImage,
  CarImageWrapper,
  Container,
  ImageIndex,
  ImageIndexes,
} from "./styles";

interface ViewableItemsChangedInfo {
  viewableItems: ViewToken[];
  changed: ViewToken[];
}

interface ImageSliderProps {
  photos: CarDTO["photos"];
}

export const ImageSlider: React.FC<ImageSliderProps> = ({ photos: images }) => {
  const [activeImageIndex, setActiveImageIndex] = useState(0);

  const handleIndexChange = useRef((info: ViewableItemsChangedInfo) => {
    setActiveImageIndex(info.viewableItems[0].index!);
  });

  return (
    <Container>
      <ImageIndexes>
        {images.map((image, index) => (
          <ImageIndex key={image} active={index === activeImageIndex} />
        ))}
      </ImageIndexes>

      <CarImageWrapper>
        <FlatList
          data={images}
          keyExtractor={image => image}
          horizontal
          showsHorizontalScrollIndicator={false}
          onViewableItemsChanged={handleIndexChange.current}
          renderItem={({ item: image }) => (
            <CarImageWrapper>
              <CarImage source={{ uri: image }} resizeMode="contain" />
            </CarImageWrapper>
          )}
        />
      </CarImageWrapper>
    </Container>
  );
};
