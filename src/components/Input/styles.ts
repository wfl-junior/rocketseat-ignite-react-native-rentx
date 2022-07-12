import { TextInput } from "react-native";
import { BorderlessButton } from "react-native-gesture-handler";
import { RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";

interface ContainerProps {
  isFocused: boolean;
}

export const Container = styled.View<ContainerProps>`
  flex-direction: row;
  margin-bottom: ${RFValue(8)}px;
  border-style: solid;
  border-bottom-width: 2px;

  border-bottom-color: ${({ isFocused, theme }) => {
    if (isFocused) {
      return theme.colors.main.DEFAULT;
    }

    return theme.colors.background.secondary;
  }};
`;

export const IconContainer = styled.View`
  width: ${RFValue(54)}px;
  height: ${RFValue(54)}px;
  background-color: ${({ theme }) => theme.colors.background.secondary};
  align-items: center;
  justify-content: center;
  margin-right: 2px;
`;

interface InputTextProps {
  isPassword?: boolean;
}

export const InputText = styled(TextInput)<InputTextProps>`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.background.secondary};
  color: ${({ theme }) => theme.colors.title};
  font-size: ${RFValue(15)}px;
  font-family: ${({ theme }) => theme.fonts.primary[400]};

  padding: ${({ isPassword }) => {
    if (isPassword) {
      return `0 ${RFValue(8)}px 0 ${RFValue(24)}px`;
    }

    return `0 ${RFValue(24)}px`;
  }};
`;

export const ChangePasswordVisibilityButton = styled(BorderlessButton)`
  width: ${RFValue(54)}px;
  height: ${RFValue(54)}px;
  background-color: ${({ theme }) => theme.colors.background.secondary};
  align-items: center;
  justify-content: center;
`;
