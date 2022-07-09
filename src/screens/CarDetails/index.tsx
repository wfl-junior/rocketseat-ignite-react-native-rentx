import LamborghiniHuracanImage from "../../assets/cars/lamborghini-huracan.png";
import { BackButton } from "../../components/BackButton";
import { ImageSlider } from "../../components/ImageSlider";
import {
  About,
  Brand,
  CarImages,
  Container,
  Content,
  Description,
  Details,
  Header,
  Model,
  Period,
  Price,
  Rent,
} from "./styles";

export const CarDetails: React.FC = () => (
  <Container>
    <Header>
      <BackButton onPress={() => {}} />
    </Header>

    <CarImages>
      <ImageSlider images={[LamborghiniHuracanImage]} />
    </CarImages>

    <Content showsVerticalScrollIndicator={false}>
      <Details>
        <Description>
          <Brand>Lamborghini</Brand>
          <Model>Huracán</Model>
        </Description>

        <Rent>
          <Period>Ao dia</Period>
          <Price>R$ 580,00</Price>
        </Rent>
      </Details>

      <About>
        Este é automóvel desportivo. Surgiu do lendário touro de lide indultado
        na praça Real Maestranza de Sevilla. É um belíssimo carro para quem
        gosta de acelerar.
      </About>
    </Content>
  </Container>
);
