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
import { Input } from "../../../components/Input";
import { useStackNavigation } from "../../../hooks/useStackNavigation";
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

const signUpFirstStepValidationSchema = yup.object({
  driverLicense: yup.string().required("A CNH é obrigatória"),
  email: yup
    .string()
    .email("Digite um e-mail válido")
    .required("O e-mail é obrigatório"),
  name: yup.string().required("O nome é obrigatório"),
});

export const SignUpFirstStep: React.FC = () => {
  const { navigate } = useStackNavigation();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [driverLicense, setDriverLicense] = useState("");

  async function handleNextStep() {
    try {
      const data = {
        name,
        email,
        driverLicense,
      };

      await signUpFirstStepValidationSchema.validate(data);

      navigate("SignUpSecondStep", { user: data });
    } catch (error) {
      if (error instanceof yup.ValidationError) {
        return Alert.alert("Opa!", error.message);
      }

      console.warn(error);
      Alert.alert("Opa!", "Não foi possível prosseguir");
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
                value={driverLicense}
                onChangeText={setDriverLicense}
              />
            </Form>

            <Footer>
              <Button title="Próximo" onPress={handleNextStep} />
            </Footer>
          </KeyboardAvoidingView>
        </Container>
      </TouchableWithoutFeedback>
    </Fragment>
  );
};
