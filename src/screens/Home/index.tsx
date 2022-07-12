import { Fragment, useEffect, useState } from "react";
import { ActivityIndicator, Alert, FlatList, StatusBar } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";
import Logo from "../../assets/logo.svg";
import { CarCard } from "../../components/CarCard";
import { LoadingAnimation } from "../../components/LoadingAnimation";
import { CarDTO } from "../../dtos/CarDTO";
import { useAppStackNavigation } from "../../hooks/useAppStackNavigation";
import { api } from "../../services/api";
import { theme } from "../../styles/theme";
import { Container, Header, HeaderContent, TotalCars } from "./styles";

export const Home: React.FC = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [cars, setCars] = useState<CarDTO[]>([]);
  const { navigate } = useAppStackNavigation();

  useEffect(() => {
    api
      .get<CarDTO[]>("/cars")
      .then(response => setCars(response.data))
      .catch(error => {
        console.warn(error);
        Alert.alert("Não foi possível buscar os dados.");
      })
      .finally(() => setIsLoading(false));
  }, []);

  function handleCarDetails(car: CarDTO) {
    navigate("CarDetails", { car });
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

            {isLoading ? (
              <ActivityIndicator
                size={RFValue(22)}
                color={theme.colors.text.DEFAULT}
              />
            ) : (
              <TotalCars>Total de {cars.length} carros</TotalCars>
            )}
          </HeaderContent>
        </Header>

        {isLoading ? (
          <LoadingAnimation />
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
              <CarCard onPress={() => handleCarDetails(car)} car={car} />
            )}
          />
        )}
      </Container>
    </Fragment>
  );
};
