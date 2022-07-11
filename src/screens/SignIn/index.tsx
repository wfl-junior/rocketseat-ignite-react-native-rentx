import { Fragment } from "react";
import { StatusBar } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";
import { Button } from "../../components/Button";
import { Input } from "../../components/Input";
import { theme } from "../../styles/theme";
import { Container, Footer, Form, Header, SubTitle, Title } from "./styles";

export const SignIn: React.FC = () => (
  <Fragment>
    <StatusBar
      barStyle="dark-content"
      backgroundColor="transparent"
      translucent
    />

    <Container>
      <Header>
        <Title>
          Estamos {"\n"}
          quase lá.
        </Title>

        <SubTitle>
          Faça seu login para começar {"\n"}
          uma experiência incrível.
        </SubTitle>
      </Header>

      <Form>
        <Input iconName="mail" />
      </Form>

      <Footer>
        <Button
          title="Login"
          onPress={() => {}}
          enabled={false}
          isLoading={false}
        />

        <Button
          title="Criar conta gratuita"
          onPress={() => {}}
          color={theme.colors.background.secondary}
          textColor={theme.colors.title}
          style={{ marginTop: RFValue(8) }}
        />
      </Footer>
    </Container>
  </Fragment>
);