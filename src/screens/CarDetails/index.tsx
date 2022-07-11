import { RouteProp, useRoute } from "@react-navigation/native";
import { Fragment } from "react";
import { StatusBar } from "react-native";
import { Acessory } from "../../components/Acessory";
import { BackButton } from "../../components/BackButton";
import { Button } from "../../components/Button";
import { ImageSlider } from "../../components/ImageSlider";
import { CarDTO } from "../../dtos/CarDTO";
import { useStackNavigation } from "../../hooks/useStackNavigation";
import { formatPrice } from "../../utils/formatPrice";
import { getAccessoryIcon } from "../../utils/getAccessoryIcon";
import {
  About,
  Accessories,
  Brand,
  CarImages,
  Container,
  Content,
  Description,
  Details,
  Footer,
  Header,
  Model,
  Period,
  Price,
  Rent,
} from "./styles";

export const CarDetails: React.FC = () => {
  const { navigate } = useStackNavigation();
  const {
    params: { car },
  } = useRoute<RouteProp<{ params: { car: CarDTO } }>>();

  function handleChooseRentalPeriod() {
    navigate("Scheduling");
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

          <About>{car.about}</About>
        </Content>

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
