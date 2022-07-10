import { Fragment } from "react";
import { StatusBar } from "react-native";
import AccelerationIcon from "../../assets/acceleration.svg";
import LamborghiniHuracanImage from "../../assets/cars/lamborghini-huracan.png";
import ExchangeIcon from "../../assets/exchange.svg";
import ForceIcon from "../../assets/force.svg";
import GasolineIcon from "../../assets/gasoline.svg";
import PeopleIcon from "../../assets/people.svg";
import SpeedIcon from "../../assets/speed.svg";
import { Acessory } from "../../components/Acessory";
import { BackButton } from "../../components/BackButton";
import { Button } from "../../components/Button";
import { ImageSlider } from "../../components/ImageSlider";
import { useStackNavigation } from "../../hooks/useStackNavigation";
import {
  About,
  Acessories,
  Brand,
  CarImages,
  Container,
  Content,
  Description,
  Details,
  Footer,
  Header,
  Model,
  Period,
  Price,
  Rent,
} from "./styles";

export const CarDetails: React.FC = () => {
  const { navigate } = useStackNavigation();

  function handleChooseRentalPeriod() {
    navigate("Scheduling");
  }

  return (
    <Fragment>
      <StatusBar
        barStyle="dark-content"
        backgroundColor="transparent"
        translucent
      />

      <Container>
        <Header>
          <BackButton />
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

          <Acessories>
            <Acessory icon={SpeedIcon} name="380 km/h" />
            <Acessory icon={AccelerationIcon} name="3.2s" />
            <Acessory icon={ForceIcon} name="800 HP" />
            <Acessory icon={GasolineIcon} name="Gasolina" />
            <Acessory icon={ExchangeIcon} name="Auto" />
            <Acessory icon={PeopleIcon} name="2 pessoas" />
          </Acessories>

          <About>
            Este é automóvel desportivo. Surgiu do lendário touro de lide
            indultado na praça Real Maestranza de Sevilla. É um belíssimo carro
            para quem gosta de acelerar.
          </About>
        </Content>

        <Footer>
          <Button
            title="Escolher período do aluguel"
            onPress={handleChooseRentalPeriod}
          />
        </Footer>
      </Container>
    </Fragment>
  );
};
