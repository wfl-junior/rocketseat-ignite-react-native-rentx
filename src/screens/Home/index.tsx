import { Fragment, useEffect, useState } from "react";
import { FlatList, StatusBar } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";
import Logo from "../../assets/logo.svg";
import { CarCard } from "../../components/CarCard";
import { Loading } from "../../components/Loading";
import { CarDTO } from "../../dtos/CarDTO";
import { useStackNavigation } from "../../hooks/useStackNavigation";
import { api } from "../../services/api";
import { Container, Header, HeaderContent, TotalCars } from "./styles";

export const Home: React.FC = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [cars, setCars] = useState<CarDTO[]>([]);
  const { navigate } = useStackNavigation();

  useEffect(() => {
    api
      .get<CarDTO[]>("/cars")
      .then(response => setCars(response.data))
      .catch(console.warn)
      .finally(() => setIsLoading(false));
  }, []);

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

        {isLoading ? (
          <Loading />
        ) : (
          <FlatList
            data={cars}
            keyExtractor={car => car.id}
            showsVerticalScrollIndicator={false}
            contentContainerStyle={{
              paddingTop: RFValue(16),
              paddingHorizontal: RFValue(16),
            }}
            renderItem={({ item: car }) => (
              <CarCard onPress={handleCarCardPress} data={car} />
            )}
          />
        )}
      </Container>
    </Fragment>
  );
};
