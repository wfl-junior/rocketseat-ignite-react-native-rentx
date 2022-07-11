import { Fragment } from "react";
import { StatusBar, Text } from "react-native";
import { Container } from "./styles";

export const Splash: React.FC = () => (
  <Fragment>
    <StatusBar
      barStyle="light-content"
      backgroundColor="transparent"
      translucent
    />

    <Container>
      <Text style={{ color: "white" }}>Splash Screen</Text>
    </Container>
  </Fragment>
);
