import { Fragment } from "react";
import { StatusBar, useWindowDimensions } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";
import DoneIcon from "../../assets/done.svg";
import Logo from "../../assets/logo_background_gray.svg";
import { ConfirmButton } from "../../components/ConfirmButton";
import { useAppStackNavigation } from "../../hooks/useAppStackNavigation";
import { useAppStackRoute } from "../../hooks/useAppStackRoute";
import { Container, Content, Footer, Message, Title } from "./styles";

export const Confirmation: React.FC = () => {
  const { width: windowWidth } = useWindowDimensions();
  const { navigate } = useAppStackNavigation();
  const {
    params: { title, message, nextScreenRoute = "Home" },
  } = useAppStackRoute<"Confirmation">();

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
        <Logo width={windowWidth} />

        <Content>
          <DoneIcon width={RFValue(80)} height={RFValue(80)} />
          <Title>{title}</Title>
          <Message>{message}</Message>
        </Content>

        <Footer>
          <ConfirmButton title="OK" onPress={handleConfirm} />
        </Footer>
      </Container>
    </Fragment>
  );
};
