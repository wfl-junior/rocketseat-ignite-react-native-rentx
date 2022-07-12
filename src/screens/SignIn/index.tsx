import { Fragment, useState } from "react";
import {
  Alert,
  Keyboard,
  StatusBar,
  TouchableWithoutFeedback,
} from "react-native";
import { RFValue } from "react-native-responsive-fontsize";
import * as yup from "yup";
import { Button } from "../../components/Button";
import { Input } from "../../components/Input";
import { PasswordInput } from "../../components/PasswordInput";
import { useStackNavigation } from "../../hooks/useStackNavigation";
import { theme } from "../../styles/theme";
import { Container, Footer, Form, Header, SubTitle, Title } from "./styles";

const signInValidationSchema = yup.object({
  email: yup
    .string()
    .email("Digite um e-mail válido")
    .required("O e-mail é obrigatório"),
  password: yup.string().required("A senha é obrigatória"),
});

export const SignIn: React.FC = () => {
  const { navigate } = useStackNavigation();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  async function handleSignIn() {
    try {
      await signInValidationSchema.validate({ email, password });
      Alert.alert("Tudo certo!");

      // TODO: Fazer Login
    } catch (error) {
      if (error instanceof yup.ValidationError) {
        return Alert.alert("Opa!", error.message);
      }

      Alert.alert(
        "Erro na autenticação",
        "Ocorreu um erro ao fazer login, verifique as credencias",
      );
    }
  }

  function handleCreateNewAccount() {
    navigate("SignUpFirstStep");
  }

  return (
    <Fragment>
      <StatusBar
        barStyle="dark-content"
        backgroundColor={theme.colors.background.primary}
        translucent
      />

      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <Container behavior="position" enabled>
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
            <Input
              iconName="mail"
              placeholder="E-mail"
              keyboardType="email-address"
              value={email}
              onChangeText={setEmail}
            />

            <PasswordInput
              iconName="lock"
              placeholder="Senha"
              value={password}
              onChangeText={setPassword}
            />
          </Form>

          <Footer>
            <Button title="Login" onPress={handleSignIn} />

            <Button
              title="Criar conta gratuita"
              onPress={handleCreateNewAccount}
              color={theme.colors.background.secondary}
              textColor={theme.colors.title}
              style={{ marginTop: RFValue(8) }}
            />
          </Footer>
        </Container>
      </TouchableWithoutFeedback>
    </Fragment>
  );
};
