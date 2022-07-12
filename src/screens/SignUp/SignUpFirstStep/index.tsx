import { Fragment } from "react";
import { StatusBar } from "react-native";
import { BackButton } from "../../../components/BackButton";
import { Bullet } from "../../../components/Bullet";
import { theme } from "../../../styles/theme";
import {
  Container,
  Form,
  FormTitle,
  Header,
  Steps,
  SubTitle,
  Title,
} from "./styles";

export const SignUpFirstStep: React.FC = () => (
  <Fragment>
    <StatusBar
      barStyle="dark-content"
      backgroundColor={theme.colors.background.primary}
      translucent
    />

    <Container>
      <Header>
        <BackButton />

        <Steps>
          <Bullet active />
          <Bullet />
        </Steps>
      </Header>

      <Title>
        Crie sua {"\n"}
        conta
      </Title>

      <SubTitle>
        Faça seu cadastro de {"\n"}
        forma rápida e fácil.
      </SubTitle>

      <Form>
        <FormTitle>1. Dados</FormTitle>
      </Form>
    </Container>
  </Fragment>
);
