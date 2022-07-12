import { Fragment, useState } from "react";
import {
  Alert,
  Keyboard,
  KeyboardAvoidingView,
  StatusBar,
  TouchableWithoutFeedback,
} from "react-native";
import * as yup from "yup";
import { BackButton } from "../../../components/BackButton";
import { Bullet } from "../../../components/Bullet";
import { Button } from "../../../components/Button";
import { PasswordInput } from "../../../components/PasswordInput";
import { useStackNavigation } from "../../../hooks/useStackNavigation";
import { useStackRoute } from "../../../hooks/useStackRoute";
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

const signUpSecondStepValidationSchema = yup.object({
  passwordConfirmation: yup
    .string()
    .oneOf([yup.ref("password")], "As senhas devem ser iguais"),
  password: yup
    .string()
    .required("A senha é obrigatória")
    .min(8, "A senha deve conter pelo menos 8 caracteres"),
});

export const SignUpSecondStep: React.FC = () => {
  const { navigate } = useStackNavigation();
  const [isLoading, setIsLoading] = useState(false);
  const [password, setPassword] = useState("");
  const [passwordConfirmation, setPasswordConfirmation] = useState("");
  const { params } = useStackRoute<"SignUpSecondStep">();

  async function handleSignUp() {
    setIsLoading(true);

    try {
      const data = {
        password,
        passwordConfirmation,
      };

      await signUpSecondStepValidationSchema.validate(data);

      const user = {
        ...params.user,
        ...data,
      };

      console.log(user);

      navigate("Confirmation", {
        title: "Conta criada!",
        nextScreenRoute: "SignIn",
        message: "Agora é só fazer login\ne aproveitar.",
      });
    } catch (error) {
      setIsLoading(false);

      if (error instanceof yup.ValidationError) {
        return Alert.alert("Opa!", error.message);
      }

      Alert.alert(
        "Erro na autenticação",
        "Ocorreu um erro ao fazer login, verifique as credencias",
      );
    }
  }

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
              <Button
                title="Cadastrar"
                color={theme.colors.success}
                onPress={handleSignUp}
                enabled={!isLoading}
                isLoading={isLoading}
              />
            </Footer>
          </KeyboardAvoidingView>
        </Container>
      </TouchableWithoutFeedback>
    </Fragment>
  );
};
