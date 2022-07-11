import { TextInput } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";

export const Container = styled.View`
  flex-direction: row;
`;

export const IconContainer = styled.View`
  width: ${RFValue(56)}px;
  height: ${RFValue(56)}px;
  background-color: ${({ theme }) => theme.colors.background.secondary};
  align-items: center;
  justify-content: center;
  margin-right: 2px;
`;

export const InputText = styled(TextInput)`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.background.secondary};
  color: ${({ theme }) => theme.colors.title};
  font-size: ${RFValue(15)}px;
  font-family: ${({ theme }) => theme.fonts.primary[400]};
  padding: 0 ${RFValue(23)}px;
`;
