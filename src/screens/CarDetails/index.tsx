import LamborghiniHuracanImage from "../../assets/cars/lamborghini-huracan.png";
import { BackButton } from "../../components/BackButton";
import { ImageSlider } from "../../components/ImageSlider";
import { CarImages, Container, Header } from "./styles";

export const CarDetails: React.FC = () => (
  <Container>
    <Header>
      <BackButton onPress={() => {}} />
    </Header>

    <CarImages>
      <ImageSlider images={[LamborghiniHuracanImage]} />
    </CarImages>
  </Container>
);
