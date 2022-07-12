import Constants from "expo-constants";
import { RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  padding: 0 ${RFValue(24)}px;
  background-color: ${({ theme }) => theme.colors.background.primary};
`;

export const Header = styled.View`
  width: 100%;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding-top: ${Constants.statusBarHeight + RFValue(19)}px;
  padding-bottom: ${RFValue(16)}px;
  background-color: ${({ theme }) => theme.colors.background.primary};
  z-index: 1;
`;

export const Steps = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const Title = styled.Text`
  color: ${({ theme }) => theme.colors.title};
  font-size: ${RFValue(40)}px;
  font-family: ${({ theme }) => theme.fonts.secondary[600]};
  margin-top: ${RFValue(44)}px;
`;

export const SubTitle = styled.Text`
  color: ${({ theme }) => theme.colors.text.DEFAULT};
  font-size: ${RFValue(15)}px;
  font-family: ${({ theme }) => theme.fonts.primary[400]};
  line-height: ${RFValue(25)}px;
  margin-top: ${RFValue(16)}px;
`;

export const Form = styled.View`
  width: 100%;
  margin-top: ${RFValue(64)}px;
`;

export const FormTitle = styled.Text`
  color: ${({ theme }) => theme.colors.title};
  font-size: ${RFValue(20)}px;
  font-family: ${({ theme }) => theme.fonts.secondary[600]};
  margin-bottom: ${RFValue(24)}px;
`;

export const Footer = styled.View`
  margin: ${RFValue(16)}px 0 ${RFValue(139)}px;
`;
