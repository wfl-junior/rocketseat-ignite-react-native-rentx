import Constants from "expo-constants";
import { BorderlessButton, RectButton } from "react-native-gesture-handler";
import { RFValue } from "react-native-responsive-fontsize";
import styled, { css } from "styled-components/native";

export const Container = styled.KeyboardAvoidingView`
  background-color: ${({ theme }) => theme.colors.background.primary};
`;

export const Header = styled.View`
  width: 100%;
  height: ${RFValue(227)}px;
  background-color: ${({ theme }) => theme.colors.header};
  padding: 0 ${RFValue(24)}px;
  align-items: center;
`;

export const HeaderTop = styled.View`
  width: 100%;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-top: ${Constants.statusBarHeight}px;
`;

export const HeaderTitle = styled.Text`
  color: ${({ theme }) => theme.colors.background.secondary};
  font-size: ${RFValue(25)}px;
  font-family: ${({ theme }) => theme.fonts.secondary[600]};
`;

export const LogoutButton = styled(BorderlessButton)`
  align-items: center;
  justify-content: center;
`;

export const PhotoContainer = styled.View`
  width: ${RFValue(180)}px;
  height: ${RFValue(180)}px;
  border-radius: ${RFValue(90)}px;
  margin-top: ${RFValue(48)}px;
  background-color: ${({ theme }) => theme.colors.shape.DEFAULT};
`;

export const Photo = styled.Image`
  width: ${RFValue(180)}px;
  height: ${RFValue(180)}px;
  border-radius: ${RFValue(90)}px;
`;

export const EditPhotoButton = styled(RectButton)`
  width: ${RFValue(40)}px;
  height: ${RFValue(40)}px;
  background-color: ${({ theme }) => theme.colors.main.DEFAULT};
  align-items: center;
  justify-content: center;
  position: absolute;
  bottom: ${RFValue(10)}px;
  right: ${RFValue(10)}px;
`;

export const Content = styled.View`
  padding: 0 ${RFValue(24)}px;
  margin-top: ${RFValue(122)}px;
`;

export const Options = styled.View`
  border-style: solid;
  border-bottom-width: 1px;
  border-bottom-color: ${({ theme }) => theme.colors.line};
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin-bottom: ${RFValue(24)}px;
`;

interface OptionsProps {
  active?: boolean;
}

export const Option = styled.TouchableOpacity<OptionsProps>`
  padding-bottom: ${RFValue(14)}px;
  margin-right: ${RFValue(24)}px;

  ${({ active, theme }) => {
    if (active) {
      return css`
        border-style: solid;
        border-bottom-width: 2px;
        border-bottom-color: ${theme.colors.main.DEFAULT};
      `;
    }

    return "";
  }};
`;

export const OptionTitle = styled.Text<OptionsProps>`
  color: ${({ active, theme }) => {
    if (active) {
      return theme.colors.title;
    }

    return theme.colors.text.detail;
  }};

  font-size: ${RFValue(20)}px;

  font-family: ${({ active, theme }) => {
    if (active) {
      return theme.fonts.secondary[600];
    }

    return theme.fonts.secondary[400];
  }};
`;

export const Section = styled.View``;

export const Footer = styled.View`
  padding: 0 ${RFValue(24)}px;
  margin-top: ${RFValue(8)}px;
`;

export const OfflineInfo = styled.Text`
  color: ${({ theme }) => theme.colors.main.DEFAULT};
  font-size: ${RFValue(10)}px;
  font-family: ${({ theme }) => theme.fonts.primary[400]};
  text-align: center;
  margin-top: ${RFValue(8)}px;
`;
