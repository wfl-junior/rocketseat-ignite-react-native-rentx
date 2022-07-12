import { Feather } from "@expo/vector-icons";
import { format } from "date-fns";
import Constants from "expo-constants";
import { Fragment, useMemo, useState } from "react";
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
  const [isLoading, setIsLoading] = useState(false);
  const { navigate } = useAppStackNavigation();
  const {
    params: { car, dates },
  } = useAppStackRoute<"SchedulingDetails">();

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

  async function handleRentNow() {
    setIsLoading(true);

    try {
      const response = await api.get<{
        id: string;
        unavailable_dates: string[];
      }>(`/schedules_bycars/${car.id}`);

      await api.post("/schedules_byuser", {
        user_id: 1,
        car,
        startDate: startDateFormatted,
        endDate: endDateFormatted,
      });

      await api.put(`/schedules_bycars/${car.id}`, {
        id: car.id,
        unavailable_dates: [...response.data.unavailable_dates, ...dates],
      });

      navigate("Confirmation", {
        title: "Carro alugado!",
        message:
          "Agora você só precisa ir\naté a concessionária da RENTX\npegar o seu automóvel.",
      });
    } catch (error) {
      console.warn(error);
      setIsLoading(false);
      Alert.alert("Não foi possível concluir o agendamento.");
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
              <Model>{car.name}</Model>
            </Description>

            <Rent>
              <Period>{car.period}</Period>
              <Price>{formatPrice(car.price)}</Price>
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
              <DateTitle>Até</DateTitle>
              <DateValue>{endDateFormatted}</DateValue>
            </DateInfo>
          </RentalPeriod>

          <RentalPrice>
            <RentalPriceLabel>Total</RentalPriceLabel>

            <RentalPriceDetails>
              <RentalPriceQuota>
                {formatPrice(car.price)} x{dates.length} diária
                {dates.length !== 1 && "s"}
              </RentalPriceQuota>

              <RentalPriceTotal>
                {formatPrice(car.price * dates.length)}
              </RentalPriceTotal>
            </RentalPriceDetails>
          </RentalPrice>
        </Animated.ScrollView>

        <Footer>
          <Button
            title="Alugar agora"
            color={theme.colors.success}
            onPress={handleRentNow}
            enabled={!isLoading}
            isLoading={isLoading}
          />
        </Footer>
      </Container>
    </Fragment>
  );
};
