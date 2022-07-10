import { Dimensions } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";
import DoneIcon from "../../assets/done.svg";
import Logo from "../../assets/logo_background_gray.svg";
import { ConfirmButton } from "../../components/ConfirmButton";
import { Container, Content, Footer, Message, Title } from "./styles";

export const SchedulingCompleted: React.FC = () => (
  <Container>
    <Logo width={Dimensions.get("window").width} />

    <Content>
      <DoneIcon width={RFValue(80)} height={RFValue(80)} />
      <Title>Carro alugado!</Title>

      <Message>
        Agora você só precisa ir {"\n"}
        até a concessionária da RENTX{"\n"}
        pegar o seu automóvel.
      </Message>
    </Content>

    <Footer>
      <ConfirmButton title="OK" />
    </Footer>
  </Container>
);
