import { Feather } from "@expo/vector-icons";
import { useBottomTabBarHeight } from "@react-navigation/bottom-tabs";
import { launchImageLibraryAsync, MediaTypeOptions } from "expo-image-picker";
import { Fragment, useState } from "react";
import { Keyboard, StatusBar, TouchableWithoutFeedback } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";
import { BackButton } from "../../components/BackButton";
import { Input } from "../../components/Input";
import { PasswordInput } from "../../components/PasswordInput";
import { useAuthContext } from "../../contexts/AuthContext";
import { theme } from "../../styles/theme";
import {
  Container,
  Content,
  EditPhotoButton,
  Header,
  HeaderTitle,
  HeaderTop,
  LogoutButton,
  Option,
  Options,
  OptionTitle,
  Photo,
  PhotoContainer,
  Section,
} from "./styles";

export const Profile: React.FC = () => {
  const { user } = useAuthContext();
  const tabBarHeight = useBottomTabBarHeight();
  const [option, setOption] = useState<"data" | "password">("data");
  const [avatar, setAvatar] = useState(user!.avatar);
  const [name, setName] = useState(user!.name);
  const [driverLicense, setDriverLicense] = useState(user!.driver_license);

  function handleSignOut() {}

  async function handleEditPhoto() {
    const result = await launchImageLibraryAsync({
      mediaTypes: MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 4],
      quality: 1,
    });

    if (result.cancelled) {
      return;
    }

    if (result.uri) {
      setAvatar(result.uri);
    }
  }

  return (
    <Fragment>
      <StatusBar
        barStyle="light-content"
        backgroundColor="transparent"
        translucent
      />

      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <Container behavior="position" enabled>
          <Header>
            <HeaderTop>
              <BackButton color={theme.colors.background.secondary} />
              <HeaderTitle>Editar Perfil</HeaderTitle>

              <LogoutButton onPress={handleSignOut}>
                <Feather
                  name="power"
                  size={RFValue(24)}
                  color={theme.colors.text.detail}
                />
              </LogoutButton>
            </HeaderTop>

            <PhotoContainer>
              {avatar ? <Photo source={{ uri: avatar }} /> : null}

              <EditPhotoButton onPress={handleEditPhoto}>
                <Feather
                  name="camera"
                  size={RFValue(24)}
                  color={theme.colors.background.secondary}
                />
              </EditPhotoButton>
            </PhotoContainer>
          </Header>

          <Content style={{ marginBottom: tabBarHeight + RFValue(16) }}>
            <Options>
              <Option
                active={option === "data"}
                onPress={() => setOption("data")}
                activeOpacity={0.5}
              >
                <OptionTitle active={option === "data"}>Dados</OptionTitle>
              </Option>

              <Option
                active={option === "password"}
                onPress={() => setOption("password")}
                activeOpacity={0.5}
              >
                <OptionTitle active={option === "password"}>
                  Trocar senha
                </OptionTitle>
              </Option>
            </Options>

            {option === "data" ? (
              <Section>
                <Input
                  iconName="user"
                  placeholder="Nome"
                  autoCapitalize="words"
                  defaultValue={user!.name}
                  value={name}
                  onChangeText={setName}
                />

                <Input
                  iconName="mail"
                  autoCapitalize="words"
                  editable={false}
                  defaultValue={user!.email}
                />

                <Input
                  iconName="credit-card"
                  placeholder="CNH"
                  keyboardType="number-pad"
                  defaultValue={user!.driver_license}
                  value={driverLicense}
                  onChangeText={setDriverLicense}
                />
              </Section>
            ) : (
              <Section>
                <PasswordInput iconName="lock" placeholder="Senha atual" />
                <PasswordInput iconName="lock" placeholder="Senha" />
                <PasswordInput iconName="lock" placeholder="Repetir senha" />
              </Section>
            )}
          </Content>
        </Container>
      </TouchableWithoutFeedback>
    </Fragment>
  );
};
