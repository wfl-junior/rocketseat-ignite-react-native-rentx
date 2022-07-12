import { Fragment } from "react";
import { Dimensions, StatusBar } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";
import DoneIcon from "../../assets/done.svg";
import Logo from "../../assets/logo_background_gray.svg";
import { ConfirmButton } from "../../components/ConfirmButton";
import { useStackNavigation } from "../../hooks/useStackNavigation";
import { useStackRoute } from "../../hooks/useStackRoute";
import { Container, Content, Footer, Message, Title } from "./styles";

interface ConfirmationProps {}

export const Confirmation: React.FC<ConfirmationProps> = () => {
  const { navigate } = useStackNavigation();
  const {
    params: { title, message, nextScreenRoute = "Home" },
  } = useStackRoute<"Confirmation">();

  function handleConfirm() {
    navigate(nextScreenRoute);
  }

  return (
    <Fragment>
      <StatusBar
        barStyle="light-content"
        backgroundColor="transparent"
        translucent
      />

      <Container>
        <Logo width={Dimensions.get("window").width} />

        <Content>
          <DoneIcon width={RFValue(80)} height={RFValue(80)} />
          <Title>{title}</Title>
          {message ? <Message>{message}</Message> : null}
        </Content>

        <Footer>
          <ConfirmButton title="OK" onPress={handleConfirm} />
        </Footer>
      </Container>
    </Fragment>
  );
};
