import { Fragment } from "react";
import { StatusBar } from "react-native";
import { Container } from "./styles";

export const MyCars: React.FC = () => (
  <Fragment>
    <StatusBar
      barStyle="dark-content"
      backgroundColor="transparent"
      translucent
    />

    <Container>My Cars</Container>
  </Fragment>
);
