import { RouteProp, useRoute } from "@react-navigation/native";
import Constants from "expo-constants";
import { Fragment } from "react";
import { StatusBar, StyleSheet } from "react-native";
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
import { useStackNavigation } from "../../hooks/useStackNavigation";
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
  const { navigate } = useStackNavigation();
  const {
    params: { car },
  } = useRoute<RouteProp<{ params: { car: CarDTO } }>>();

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

  function handleChooseRentalPeriod() {
    navigate("Scheduling", { car });
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
              <ImageSlider photos={car.photos} />
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
              <Model>{car.model}</Model>
            </Description>

            <Rent>
              <Period>{car.rent.period}</Period>
              <Price>{formatPrice(car.rent.price)}</Price>
            </Rent>
          </Details>

          <Accessories>
            {car.accessories.map(accessory => (
              <Acessory
                key={accessory.type}
                icon={getAccessoryIcon(accessory.type)}
                name={accessory.name}
              />
            ))}
          </Accessories>

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
          />
        </Footer>
      </Container>
    </Fragment>
  );
};
