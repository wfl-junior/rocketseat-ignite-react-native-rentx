import { ImageSourcePropType } from "react-native";
import { RectButtonProps } from "react-native-gesture-handler";
import { RFValue } from "react-native-responsive-fontsize";
import { SvgProps } from "react-native-svg";
import { theme } from "../../styles/theme";
import { formatPrice } from "../../utils/formatPrice";
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

export interface Car {
  id: string;
  brand: string;
  model: string;
  rent: {
    period: string;
    price: number;
  };
  typeIcon: React.FC<SvgProps>;
  image: ImageSourcePropType;
}

type CarCardProps = Car & RectButtonProps;

export const CarCard: React.FC<CarCardProps> = ({
  brand,
  model,
  rent,
  typeIcon: TypeIcon,
  image,
  ...props
}) => (
  <Container {...props}>
    <Details>
      <Brand>{brand}</Brand>
      <Model>{model}</Model>

      <About>
        <Rent>
          <Period>{rent.period}</Period>
          <Price>{formatPrice(rent.price)}</Price>
        </Rent>

        <TypeIcon
          width={RFValue(20)}
          height={RFValue(20)}
          stroke={theme.colors.text.detail}
        />
      </About>
    </Details>

    <CarImage source={image} resizeMode="contain" />
  </Container>
);
