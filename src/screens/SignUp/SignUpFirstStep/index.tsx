import { Fragment, useState } from "react";
import {
  Keyboard,
  KeyboardAvoidingView,
  StatusBar,
  TouchableWithoutFeedback,
} from "react-native";
import { BackButton } from "../../../components/BackButton";
import { Bullet } from "../../../components/Bullet";
import { Button } from "../../../components/Button";
import { Input } from "../../../components/Input";
import { theme } from "../../../styles/theme";
import {
  Container,
  Footer,
  Form,
  FormTitle,
  Header,
  Steps,
  SubTitle,
  Title,
} from "./styles";

export const SignUpFirstStep: React.FC = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [cnh, setCnh] = useState("");

  return (
    <Fragment>
      <StatusBar
        barStyle="dark-content"
        backgroundColor={theme.colors.background.primary}
        translucent
      />

      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <Container>
          <Header>
            <BackButton />

            <Steps>
              <Bullet active />
              <Bullet />
            </Steps>
          </Header>

          <KeyboardAvoidingView behavior="position" enabled>
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

              <Input
                iconName="user"
                placeholder="Nome"
                autoCapitalize="words"
                value={name}
                onChangeText={setName}
              />

              <Input
                iconName="mail"
                placeholder="E-mail"
                keyboardType="email-address"
                value={email}
                onChangeText={setEmail}
              />

              <Input
                iconName="credit-card"
                placeholder="CNH"
                keyboardType="number-pad"
                value={cnh}
                onChangeText={setCnh}
              />
            </Form>

            <Footer>
              <Button title="Próximo" />
            </Footer>
          </KeyboardAvoidingView>
        </Container>
      </TouchableWithoutFeedback>
    </Fragment>
  );
};
