import { synchronize } from "@nozbe/watermelondb/sync";
import { useNetInfo } from "@react-native-community/netinfo";
import { Fragment, useEffect, useState } from "react";
import { ActivityIndicator, Alert, FlatList, StatusBar } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";
import Logo from "../../assets/logo.svg";
import { CarCard } from "../../components/CarCard";
import { LoadingAnimation } from "../../components/LoadingAnimation";
import { database } from "../../database";
import { Car } from "../../database/models/Car";
import { CarSyncPullDTO } from "../../dtos/CarSyncPullDTO";
import { useAppStackNavigation } from "../../hooks/useAppStackNavigation";
import { api } from "../../services/api";
import { theme } from "../../styles/theme";
import { Container, Header, HeaderContent, TotalCars } from "./styles";

export const Home: React.FC = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [cars, setCars] = useState<Car[]>([]);
  const { navigate } = useAppStackNavigation();
  const { isConnected } = useNetInfo();

  useEffect(() => {
    const carCollection = database.get<Car>("cars");

    carCollection
      .query()
      .fetch()
      .then(setCars)
      .catch(error => {
        console.warn(error);
        Alert.alert("Não foi possível buscar os dados.");
      })
      .finally(() => setIsLoading(false));
  }, []);

  useEffect(() => {
    if (isConnected) {
      synchronize({
        database,
        pullChanges: async ({ lastPulledAt }) => {
          try {
            const {
              data: { changes, latestVersion },
            } = await api.get<CarSyncPullDTO>(
              `/cars/sync/pull?lastPulledVersion=${lastPulledAt || 0}`,
            );

            return {
              changes,
              timestamp: latestVersion,
            };
          } catch (error) {
            console.warn(error);

            return {
              changes: {},
              timestamp: lastPulledAt || 0,
            };
          }
        },
        pushChanges: async ({ changes }) => {
          try {
            await api.post("/users/sync", changes.users);
          } catch (error) {
            console.warn(error);
          }
        },
      });
    }
  }, [isConnected]);

  function handleCarDetails(car: Car) {
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
