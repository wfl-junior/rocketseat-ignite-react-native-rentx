import { Feather } from "@expo/vector-icons";
import { Fragment } from "react";
import { StatusBar } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";
import { BackButton } from "../../components/BackButton";
import { theme } from "../../styles/theme";
import {
  Container,
  EditPhotoButton,
  Header,
  HeaderTitle,
  HeaderTop,
  LogoutButton,
  Photo,
  PhotoContainer,
} from "./styles";

export const Profile: React.FC = () => {
  function handleSignOut() {}

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

            <EditPhotoButton onPress={() => {}}>
              <Feather
                name="camera"
                size={RFValue(24)}
                color={theme.colors.background.secondary}
              />
            </EditPhotoButton>
          </PhotoContainer>
        </Header>
      </Container>
    </Fragment>
  );
};
