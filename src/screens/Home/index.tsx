import { Fragment } from "react";
import { FlatList, StatusBar } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";
import AudiRS5CoupeImage from "../../assets/cars/audi-rs-5-coupe.png";
import ChevroletCorvetteZ06Image from "../../assets/cars/chevrolet-corvette-z06.png";
import LamborghiniHuracanImage from "../../assets/cars/lamborghini-huracan.png";
import PorschePanameraImage from "../../assets/cars/porsche-panamera.png";
import VolvoXC40Image from "../../assets/cars/volvo-xc40.png";
import EnergyIcon from "../../assets/energy.svg";
import GasolineIcon from "../../assets/gasoline.svg";
import HybridIcon from "../../assets/hybrid.svg";
import Logo from "../../assets/logo.svg";
import { Car, CarCard } from "../../components/CarCard";
import { useStackNavigation } from "../../hooks/useStackNavigation";
import { Container, Header, HeaderContent, TotalCars } from "./styles";

const cars: Car[] = [
  {
    id: "1",
    brand: "AUDI",
    model: "RS 5 Coupé",
    rent: {
      period: "Ao dia",
      price: 120,
    },
    image: AudiRS5CoupeImage,
    typeIcon: HybridIcon,
  },
  {
    id: "2",
    brand: "Porsche",
    model: "Panamera",
    rent: {
      period: "Ao dia",
      price: 340,
    },
    image: PorschePanameraImage,
    typeIcon: GasolineIcon,
  },
  {
    id: "3",
    brand: "Chevrolet",
    model: "Corvette Z06",
    rent: {
      period: "Ao dia",
      price: 620,
    },
    image: ChevroletCorvetteZ06Image,
    typeIcon: GasolineIcon,
  },
  {
    id: "4",
    brand: "Lamborghini",
    model: "Huracán",
    rent: {
      period: "Ao dia",
      price: 770,
    },
    image: LamborghiniHuracanImage,
    typeIcon: GasolineIcon,
  },
  {
    id: "5",
    brand: "Volvo",
    model: "XC 40",
    rent: {
      period: "Ao dia",
      price: 120,
    },
    image: VolvoXC40Image,
    typeIcon: EnergyIcon,
  },
];

export const Home: React.FC = () => {
  const { navigate } = useStackNavigation();

  function handleCarCardPress() {
    navigate("CarDetails");
  }

  return (
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
            <TotalCars>Total de {cars.length} carros</TotalCars>
          </HeaderContent>
        </Header>

        <FlatList
          data={cars}
          keyExtractor={car => car.id}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{
            paddingTop: RFValue(16),
            paddingHorizontal: RFValue(16),
          }}
          renderItem={({ item: car }) => (
            <CarCard onPress={handleCarCardPress} {...car} />
          )}
        />
      </Container>
    </Fragment>
  );
};
