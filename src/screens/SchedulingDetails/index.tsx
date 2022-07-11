import { Feather } from "@expo/vector-icons";
import { RouteProp, useRoute } from "@react-navigation/native";
import { format } from "date-fns";
import { Fragment, useMemo, useState } from "react";
import { ActivityIndicator, Alert, StatusBar } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";
import { Acessory } from "../../components/Acessory";
import { BackButton } from "../../components/BackButton";
import { Button } from "../../components/Button";
import { ImageSlider } from "../../components/ImageSlider";
import { CarDTO } from "../../dtos/CarDTO";
import { useStackNavigation } from "../../hooks/useStackNavigation";
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
  Content,
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

export const SchedulingDetails: React.FC = () => {
  const [isLoading, setIsLoading] = useState(false);
  const { navigate } = useStackNavigation();
  const {
    params: { car, dates },
  } = useRoute<RouteProp<{ params: { car: CarDTO; dates: string[] } }>>();

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
        unavailable_dates: {
          ...response.data.unavailable_dates,
          ...dates,
        },
      });

      navigate("SchedulingCompleted");
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
        <Header>
          <BackButton />
        </Header>

        <CarImages>
          <ImageSlider photos={car.photos} />
        </CarImages>

        <Content showsVerticalScrollIndicator={false}>
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
                {formatPrice(car.rent.price)} x{dates.length} diária
                {dates.length !== 1 && "s"}
              </RentalPriceQuota>

              <RentalPriceTotal>
                {formatPrice(car.rent.price * dates.length)}
              </RentalPriceTotal>
            </RentalPriceDetails>
          </RentalPrice>
        </Content>

        <Footer>
          <Button
            title="Alugar agora"
            color={theme.colors.success}
            onPress={handleRentNow}
          />

          {isLoading && (
            <ActivityIndicator
              color={theme.colors.main.DEFAULT}
              size={RFValue(36)}
            />
          )}
        </Footer>
      </Container>
    </Fragment>
  );
};
