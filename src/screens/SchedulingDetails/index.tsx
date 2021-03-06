import { Feather } from "@expo/vector-icons";
import { useNetInfo } from "@react-native-community/netinfo";
import { format } from "date-fns";
import Constants from "expo-constants";
import { Fragment, useEffect, useMemo, useState } from "react";
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
import { getPlatformDate } from "../../utils/getPlatformDate";
import {
  Accessories,
  Brand,
  CalendarIcon,
  CarImages,
  Container,
  DateInfo,
  DateTitle,
  DateValue,
  Description,
  Details,
  Footer,
  Header,
  Model,
  OfflineInfo,
  Period,
  Price,
  Rent,
  RentalPeriod,
  RentalPrice,
  RentalPriceDetails,
  RentalPriceLabel,
  RentalPriceQuota,
  RentalPriceTotal,
} from "./styles";

const styles = StyleSheet.create({
  header: {
    position: "absolute",
    overflow: "hidden",
    zIndex: 1,
    backgroundColor: theme.colors.background.secondary,
  },
});

export const SchedulingDetails: React.FC = () => {
  const { isConnected } = useNetInfo();
  const [isLoading, setIsLoading] = useState(false);
  const { navigate } = useAppStackNavigation();
  const {
    params: { car, dates },
  } = useAppStackRoute<"SchedulingDetails">();
  const [carUpdated, setCarUpdated] = useState(car);

  const { startDateFormatted, endDateFormatted } = useMemo(() => {
    const startDateFormatted = format(
      getPlatformDate(new Date(dates[0])),
      "dd/MM/yyyy",
    );

    const endDateFormatted = format(
      getPlatformDate(new Date(dates[dates.length - 1])),
      "dd/MM/yyyy",
    );

    return { startDateFormatted, endDateFormatted };
  }, [dates]);

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
          Alert.alert("N??o foi poss??vel buscar os dados mais recentes.");
        });
    }
  }, [isConnected]);

  const rentTotal = useMemo((): number => {
    return carUpdated.price * dates.length;
  }, [carUpdated.price, dates]);

  async function handleRentNow() {
    setIsLoading(true);

    try {
      await api.post("/rentals", {
        car_id: carUpdated.id,
        start_date: new Date(dates[0]),
        end_date: new Date(dates[dates.length - 1]),
        total: rentTotal,
      });

      navigate("Confirmation", {
        title: "Carro alugado!",
        message:
          "Agora voc?? s?? precisa ir\nat?? a concession??ria da RENTX\npegar o seu autom??vel.",
      });
    } catch (error) {
      setIsLoading(false);
      console.warn(error);
      Alert.alert("N??o foi poss??vel concluir o agendamento.");
    }
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
              <ImageSlider photos={carUpdated.photos} />
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
              <Brand>{carUpdated.brand}</Brand>
              <Model>{carUpdated.name}</Model>
            </Description>

            <Rent>
              <Period>{carUpdated.period}</Period>

              <Price>
                {isConnected ? formatPrice(carUpdated.price) : "R$ ..."}
              </Price>
            </Rent>
          </Details>

          <Accessories>
            {carUpdated.accessories.map(accessory => (
              <Acessory
                key={accessory.type}
                icon={getAccessoryIcon(accessory.type)}
                name={accessory.name}
              />
            ))}
          </Accessories>

          <RentalPeriod>
            <CalendarIcon>
              <Feather
                name="calendar"
                size={RFValue(24)}
                color={theme.colors.background.secondary}
              />
            </CalendarIcon>

            <DateInfo>
              <DateTitle>De</DateTitle>
              <DateValue>{startDateFormatted}</DateValue>
            </DateInfo>

            <Feather
              name="chevron-right"
              size={RFValue(15)}
              color={theme.colors.text.detail}
            />

            <DateInfo>
              <DateTitle>At??</DateTitle>
              <DateValue>{endDateFormatted}</DateValue>
            </DateInfo>
          </RentalPeriod>

          <RentalPrice>
            <RentalPriceLabel>Total</RentalPriceLabel>

            <RentalPriceDetails>
              <RentalPriceQuota>
                {formatPrice(carUpdated.price)} x{dates.length} di??ria
                {dates.length !== 1 && "s"}
              </RentalPriceQuota>

              <RentalPriceTotal>{formatPrice(rentTotal)}</RentalPriceTotal>
            </RentalPriceDetails>
          </RentalPrice>
        </Animated.ScrollView>

        <Footer>
          <Button
            title="Alugar agora"
            color={theme.colors.success}
            onPress={handleRentNow}
            enabled={!(isLoading || isConnected === false)}
            isLoading={isLoading}
          />

          {isConnected === false && (
            <OfflineInfo>
              Conecte-se ?? Internet para poder alugar um carro
            </OfflineInfo>
          )}
        </Footer>
      </Container>
    </Fragment>
  );
};
