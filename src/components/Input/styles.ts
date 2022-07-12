import { TextInput } from "react-native";
import { BorderlessButton } from "react-native-gesture-handler";
import { RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";

export const Container = styled.View`
  flex-direction: row;
  margin-bottom: ${RFValue(8)}px;
`;

export const IconContainer = styled.View`
  width: ${RFValue(56)}px;
  height: ${RFValue(56)}px;
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
  width: ${RFValue(56)}px;
  height: ${RFValue(56)}px;
  background-color: ${({ theme }) => theme.colors.background.secondary};
  align-items: center;
  justify-content: center;
`;
