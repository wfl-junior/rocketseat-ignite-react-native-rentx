import { RectButtonProps } from "react-native-gesture-handler";
import { RFValue } from "react-native-responsive-fontsize";
import { CarDTO } from "../../dtos/CarDTO";
import { theme } from "../../styles/theme";
import { formatPrice } from "../../utils/formatPrice";
import { getAccessoryIcon } from "../../utils/getAccessoryIcon";
import {
  About,
  Brand,
  CarImage,
  Container,
  Details,
  Model,
  Period,
  Price,
  Rent,
} from "./styles";

interface CarCardProps extends RectButtonProps {
  car: CarDTO;
}

export const CarCard: React.FC<CarCardProps> = ({ car, ...props }) => {
  const Icon = getAccessoryIcon(car.fuel_type);

  return (
    <Container {...props}>
      <Details>
        <Brand>{car.brand}</Brand>
        <Model>{car.name}</Model>

        <About>
          <Rent>
            <Period>{car.period}</Period>
            <Price>{formatPrice(car.price)}</Price>
          </Rent>

          <Icon
            width={RFValue(20)}
            height={RFValue(20)}
            color={theme.colors.text.detail}
          />
        </About>
      </Details>

      <CarImage source={{ uri: car.thumbnail }} resizeMode="contain" />
    </Container>
  );
};
