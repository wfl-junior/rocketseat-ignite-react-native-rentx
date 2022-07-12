import { Fragment, useEffect, useState } from "react";
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
import { useAuthContext } from "../../contexts/AuthContext";
import { database } from "../../database";
import { useAuthNavigation } from "../../hooks/useAuthNavigation";
import { theme } from "../../styles/theme";
import { Container, Footer, Form, Header, SubTitle, Title } from "./styles";

const signInValidationSchema = yup.object({
  password: yup.string().required("A senha é obrigatória"),
  email: yup
    .string()
    .email("Digite um e-mail válido")
    .required("O e-mail é obrigatório"),
});

export const SignIn: React.FC = () => {
  const { navigate } = useAuthNavigation();
  const [isLoading, setIsLoading] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { signIn } = useAuthContext();

  useEffect(() => {
    const userCollection = database.get("users");
    userCollection.query().fetch().then(console.log).catch(console.warn);
  }, []);

  async function handleSignIn() {
    setIsLoading(true);

    try {
      const credentials = { email, password };
      await signInValidationSchema.validate(credentials);
      await signIn(credentials);
    } catch (error) {
      setIsLoading(false);

      if (error instanceof yup.ValidationError) {
        return Alert.alert("Opa!", error.message);
      }

      Alert.alert(
        "Erro na autenticação",
        "Ocorreu um erro ao fazer login, verifique as credenciais",
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
            <Button
              title="Login"
              onPress={handleSignIn}
              enabled={!isLoading}
              isLoading={isLoading}
            />

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
