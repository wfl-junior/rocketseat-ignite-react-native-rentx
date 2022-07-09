import { Fragment } from "react";
import { StatusBar } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";
import AudiRS5Coupe from "../../assets/cars/audi-rs-5-coupe.png";
import PorschePanamera from "../../assets/cars/porsche-panamera.png";
import EnergyIcon from "../../assets/energy.svg";
import GasolineIcon from "../../assets/gasoline.svg";
import Logo from "../../assets/logo.svg";
import { CarCard } from "../../components/CarCard";
import { Container, Header, HeaderContent, TotalCars } from "./styles";

interface HomeProps {}

export const Home: React.FC<HomeProps> = () => (
  <Fragment>
    <StatusBar
      barStyle="light-content"
      backgroundColor="transparent"
      translucent
    />

    <Container>
      <Header>
        <HeaderContent>
          <Logo width={RFValue(108)} height={RFValue(12)} />
          <TotalCars>Total de 12 carros</TotalCars>
        </HeaderContent>
      </Header>

      <CarCard
        brand="AUDI"
        model="RS 5 Coupé"
        rent={{ period: "Ao dia", price: 120 }}
        typeIcon={EnergyIcon}
        image={AudiRS5Coupe}
      />

      <CarCard
        brand="Porsche"
        model="Panamera"
        rent={{ period: "Ao dia", price: 340 }}
        typeIcon={GasolineIcon}
        image={PorschePanamera}
      />
    </Container>
  </Fragment>
);
