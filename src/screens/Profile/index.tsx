import { Feather } from "@expo/vector-icons";
import { Fragment, useState } from "react";
import { StatusBar } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";
import { BackButton } from "../../components/BackButton";
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
} from "./styles";

export const Profile: React.FC = () => {
  const [option, setOption] = useState<"data" | "password">("data");

  function handleSignOut() {}

  function handleEditPhoto() {}

  return (
    <Fragment>
      <StatusBar
        barStyle="light-content"
        backgroundColor="transparent"
        translucent
      />

      <Container>
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
            <Photo source={{ uri: "https://github.com/wfl-junior.png" }} />

            <EditPhotoButton onPress={handleEditPhoto}>
              <Feather
                name="camera"
                size={RFValue(24)}
                color={theme.colors.background.secondary}
              />
            </EditPhotoButton>
          </PhotoContainer>
        </Header>

        <Content>
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
        </Content>
      </Container>
    </Fragment>
  );
};
