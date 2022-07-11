import { Feather } from "@expo/vector-icons";
import { RouteProp, useRoute } from "@react-navigation/native";
import { Fragment } from "react";
import { StatusBar } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";
import AccelerationIcon from "../../assets/acceleration.svg";
import ExchangeIcon from "../../assets/exchange.svg";
import ForceIcon from "../../assets/force.svg";
import GasolineIcon from "../../assets/gasoline.svg";
import PeopleIcon from "../../assets/people.svg";
import SpeedIcon from "../../assets/speed.svg";
import { Acessory } from "../../components/Acessory";
import { BackButton } from "../../components/BackButton";
import { Button } from "../../components/Button";
import { ImageSlider } from "../../components/ImageSlider";
import { CarDTO } from "../../dtos/CarDTO";
import { useStackNavigation } from "../../hooks/useStackNavigation";
import { theme } from "../../styles/theme";
import {
  Acessories,
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
  const { navigate } = useStackNavigation();
  const {
    params: { car },
  } = useRoute<RouteProp<{ params: { car: CarDTO } }>>();

  function handleRentNow() {
    navigate("SchedulingCompleted");
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
              <Brand>Lamborghini</Brand>
              <Model>Huracán</Model>
            </Description>

            <Rent>
              <Period>Ao dia</Period>
              <Price>R$ 580,00</Price>
            </Rent>
          </Details>

          <Acessories>
            <Acessory icon={SpeedIcon} name="380 km/h" />
            <Acessory icon={AccelerationIcon} name="3.2s" />
            <Acessory icon={ForceIcon} name="800 HP" />
            <Acessory icon={GasolineIcon} name="Gasolina" />
            <Acessory icon={ExchangeIcon} name="Auto" />
            <Acessory icon={PeopleIcon} name="2 pessoas" />
          </Acessories>

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
              <DateValue>18/06/2021</DateValue>
            </DateInfo>

            <Feather
              name="chevron-right"
              size={RFValue(15)}
              color={theme.colors.text.detail}
            />

            <DateInfo>
              <DateTitle>Até</DateTitle>
              <DateValue>20/06/2021</DateValue>
            </DateInfo>
          </RentalPeriod>

          <RentalPrice>
            <RentalPriceLabel>Total</RentalPriceLabel>

            <RentalPriceDetails>
              <RentalPriceQuota>R$ 580,00 x3 diárias</RentalPriceQuota>
              <RentalPriceTotal>R$ 1740,00</RentalPriceTotal>
            </RentalPriceDetails>
          </RentalPrice>
        </Content>

        <Footer>
          <Button
            title="Alugar agora"
            color={theme.colors.success}
            onPress={handleRentNow}
          />
        </Footer>
      </Container>
    </Fragment>
  );
};
