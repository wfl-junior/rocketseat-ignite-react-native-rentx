import { RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";

export const Container = styled.View`
  width: ${RFValue(109)}px;
  height: ${RFValue(92)}px;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.colors.background.primary};
  padding: ${RFValue(16)}px;
  margin-bottom: ${RFValue(8)}px;
`;

export const Name = styled.Text`
  color: ${({ theme }) => theme.colors.text.DEFAULT};
  font-size: ${RFValue(13)}px;
  font-family: ${({ theme }) => theme.fonts.primary[500]};
  margin-top: ${RFValue(12)}px;
`;
