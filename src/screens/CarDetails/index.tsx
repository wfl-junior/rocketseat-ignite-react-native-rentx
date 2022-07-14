import { useNetInfo } from "@react-native-community/netinfo";
import Constants from "expo-constants";
import { Fragment, useEffect, useState } from "react";
import { Alert, StatusBar, StyleSheet } from "react-native";
import Animated, {
  Extrapolate,
  interpolate,
  useAnimatedScrollHandler,
  useAnimatedStyle,
  useSharedValue,
} from "react-native-reanimated";
import { RFValue } from "react-native-responsive-fontsize";
import { Acessory } from "../../components/Acessory";
import { BackButton } from "../../components/BackButton";
import { Button } from "../../components/Button";
import { ImageSlider } from "../../components/ImageSlider";
import { CarDTO } from "../../dtos/CarDTO";
import { useAppStackNavigation } from "../../hooks/useAppStackNavigation";
import { useAppStackRoute } from "../../hooks/useAppStackRoute";
import { api } from "../../services/api";
import { theme } from "../../styles/theme";
import { formatPrice } from "../../utils/formatPrice";
import { getAccessoryIcon } from "../../utils/getAccessoryIcon";
import {
  About,
  Accessories,
  Brand,
  CarImages,
  Container,
  Description,
  Details,
  Footer,
  Header,
  Model,
  OfflineInfo,
  Period,
  Price,
  Rent,
} from "./styles";

const styles = StyleSheet.create({
  header: {
    position: "absolute",
    overflow: "hidden",
    zIndex: 1,
    backgroundColor: theme.colors.background.secondary,
  },
});

export const CarDetails: React.FC = () => {
  const { navigate } = useAppStackNavigation();
  const [carUpdated, setCarUpdated] = useState<CarDTO | null>(null);
  const { isConnected } = useNetInfo();
  const {
    params: { car },
  } = useAppStackRoute<"CarDetails">();

  const contentScrollY = useSharedValue(0);
  const handleContentScroll = useAnimatedScrollHandler(event => {
    contentScrollY.value = event.contentOffset.y;
  });

  const headerStyleAnimation = useAnimatedStyle(() => ({
    height: interpolate(
      contentScrollY.value,
      [0, 200],
      [Constants.statusBarHeight + 200, Constants.statusBarHeight + 50],
      Extrapolate.CLAMP,
    ),
  }));

  const carSliderStyleAnimation = useAnimatedStyle(() => ({
    opacity: interpolate(
      contentScrollY.value,
      [0, 150],
      [1, 0],
      Extrapolate.CLAMP,
    ),
  }));

  useEffect(() => {
    if (isConnected) {
      api
        .get<CarDTO>(`/cars/${car.id}`)
        .then(response => setCarUpdated(response.data))
        .catch(error => {
          console.warn(error);
          Alert.alert("Não foi possível buscar os dados.");
        });
    }
  }, [isConnected]);

  function handleChooseRentalPeriod() {
    navigate("Scheduling", { car: carUpdated! });
  }

  return (
    <Fragment>
      <StatusBar
        barStyle="dark-content"
        backgroundColor="transparent"
        translucent
      />

      <Container>
        <Animated.View style={[headerStyleAnimation, styles.header]}>
          <Header>
            <BackButton />
          </Header>

          <Animated.View style={carSliderStyleAnimation}>
            <CarImages>
              <ImageSlider
                photos={
                  carUpdated?.photos ?? [
                    { id: car.thumbnail, photo: car.thumbnail },
                  ]
                }
              />
            </CarImages>
          </Animated.View>
        </Animated.View>

        <Animated.ScrollView
          onScroll={handleContentScroll}
          scrollEventThrottle={1000 / 60}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{
            alignItems: "center",
            paddingTop: Constants.statusBarHeight + RFValue(180),
          }}
          style={{
            marginTop: RFValue(36),
            marginBottom: RFValue(16),
          }}
        >
          <Details>
            <Description>
              <Brand>{car.brand}</Brand>
              <Model>{car.name}</Model>
            </Description>

            <Rent>
              <Period>{car.period}</Period>

              <Price>
                {isConnected && carUpdated
                  ? formatPrice(carUpdated.price)
                  : "R$ ..."}
              </Price>
            </Rent>
          </Details>

          {carUpdated && (
            <Accessories>
              {carUpdated.accessories.map(accessory => (
                <Acessory
                  key={accessory.type}
                  icon={getAccessoryIcon(accessory.type)}
                  name={accessory.name}
                />
              ))}
            </Accessories>
          )}

          <About>
            {car.about}
            {"\n\n"}
            {car.about}
            {"\n\n"}
            {car.about}
            {"\n\n"}
            {car.about}
            {"\n\n"}
            {car.about}
          </About>
        </Animated.ScrollView>

        <Footer>
          <Button
            title="Escolher período do aluguel"
            onPress={handleChooseRentalPeriod}
            enabled={!!isConnected}
          />

          {isConnected === false && (
            <OfflineInfo>
              Conecte-se à Internet para ver mais detalhes e agendar seu carro
            </OfflineInfo>
          )}
        </Footer>
      </Container>
    </Fragment>
  );
};
