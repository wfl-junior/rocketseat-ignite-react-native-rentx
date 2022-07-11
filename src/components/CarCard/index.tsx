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
  data: CarDTO;
}

export const CarCard: React.FC<CarCardProps> = ({ data, ...props }) => {
  const Icon = getAccessoryIcon(data.fuel_type);

  return (
    <Container {...props}>
      <Details>
        <Brand>{data.brand}</Brand>
        <Model>{data.model}</Model>

        <About>
          <Rent>
            <Period>{data.rent.period}</Period>
            <Price>{formatPrice(data.rent.price)}</Price>
          </Rent>

          <Icon
            width={RFValue(20)}
            height={RFValue(20)}
            stroke={theme.colors.text.detail}
          />
        </About>
      </Details>

      <CarImage source={{ uri: data.thumbnail }} resizeMode="contain" />
    </Container>
  );
};
