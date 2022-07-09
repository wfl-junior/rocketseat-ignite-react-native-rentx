import { RFValue } from "react-native-responsive-fontsize";
import { SvgProps } from "react-native-svg";
import { Container, Name } from "./styles";

interface AcessoryProps {
  name: string;
  icon: React.FC<SvgProps>;
}

export const Acessory: React.FC<AcessoryProps> = ({ name, icon: Icon }) => (
  <Container>
    <Icon width={RFValue(32)} height={RFValue(32)} />
    <Name>{name}</Name>
  </Container>
);
