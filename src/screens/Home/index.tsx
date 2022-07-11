import { Ionicons } from "@expo/vector-icons";
import { Fragment, useEffect, useState } from "react";
import {
  ActivityIndicator,
  Alert,
  FlatList,
  StatusBar,
  StyleSheet,
} from "react-native";
import { PanGestureHandler, RectButton } from "react-native-gesture-handler";
import Animated, {
  useAnimatedGestureHandler,
  useAnimatedStyle,
  useSharedValue,
  withSpring,
} from "react-native-reanimated";
import { RFValue } from "react-native-responsive-fontsize";
import Logo from "../../assets/logo.svg";
import { CarCard } from "../../components/CarCard";
import { Loading } from "../../components/Loading";
import { CarDTO } from "../../dtos/CarDTO";
import { useStackNavigation } from "../../hooks/useStackNavigation";
import { api } from "../../services/api";
import { theme } from "../../styles/theme";
import { Container, Header, HeaderContent, TotalCars } from "./styles";

const ButtonAnimated = Animated.createAnimatedComponent(RectButton);

const styles = StyleSheet.create({
  myCarsButtonContainer: {
    position: "absolute",
    bottom: RFValue(13),
    right: RFValue(22),
  },
  myCarsButton: {
    width: RFValue(60),
    height: RFValue(60),
    borderRadius: RFValue(30),
    backgroundColor: theme.colors.main.DEFAULT,
    alignItems: "center",
    justifyContent: "center",
  },
});

type Position = {
  positionX: number;
  positionY: number;
};

export const Home: React.FC = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [cars, setCars] = useState<CarDTO[]>([]);
  const { navigate } = useStackNavigation();
  const myCarsButtonPositionX = useSharedValue(0);
  const myCarsButtonPositionY = useSharedValue(0);
  const myCarsButtonStyle = useAnimatedStyle(() => ({
    transform: [
      { translateX: myCarsButtonPositionX.value },
      { translateY: myCarsButtonPositionY.value },
    ],
  }));

  const handleGestureEvent = useAnimatedGestureHandler({
    onStart(_event, _context: Position) {
      _context.positionX = myCarsButtonPositionX.value;
      _context.positionY = myCarsButtonPositionY.value;
    },
    onActive(event, context) {
      myCarsButtonPositionX.value = context.positionX + event.translationX;
      myCarsButtonPositionY.value = context.positionY + event.translationY;
    },
    onEnd() {
      myCarsButtonPositionX.value = withSpring(0);
      myCarsButtonPositionY.value = withSpring(0);
    },
  });

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

  function handleOpenMyCars() {
    navigate("MyCars");
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
              <CarCard onPress={() => handleCarDetails(car)} car={car} />
            )}
          />
        )}

        <PanGestureHandler onGestureEvent={handleGestureEvent}>
          <Animated.View
            style={[myCarsButtonStyle, styles.myCarsButtonContainer]}
          >
            <ButtonAnimated
              onPress={handleOpenMyCars}
              style={styles.myCarsButton}
            >
              <Ionicons
                name="ios-car-sport"
                size={RFValue(32)}
                color={theme.colors.background.secondary}
              />
            </ButtonAnimated>
          </Animated.View>
        </PanGestureHandler>
      </Container>
    </Fragment>
  );
};
