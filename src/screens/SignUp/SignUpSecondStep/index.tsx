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
import { PasswordInput } from "../../../components/PasswordInput";
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

export const SignUpSecondStep: React.FC = () => {
  const [password, setPassword] = useState("");
  const [passwordConfirmation, setPasswordConfirmation] = useState("");

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
              <Bullet />
              <Bullet active />
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
              <FormTitle>2. Senha</FormTitle>

              <PasswordInput
                iconName="lock"
                placeholder="Senha"
                value={password}
                onChangeText={setPassword}
              />

              <PasswordInput
                iconName="lock"
                placeholder="Repetir senha"
                value={passwordConfirmation}
                onChangeText={setPasswordConfirmation}
              />
            </Form>

            <Footer>
              <Button title="Cadastrar" color={theme.colors.success} />
            </Footer>
          </KeyboardAvoidingView>
        </Container>
      </TouchableWithoutFeedback>
    </Fragment>
  );
};
