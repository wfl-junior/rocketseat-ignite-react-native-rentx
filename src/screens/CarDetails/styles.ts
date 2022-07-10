import Constants from "expo-constants";
import { ScrollView } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.background.secondary};
`;

export const Header = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  position: absolute;
  margin-top: ${Constants.statusBarHeight + 18}px;
  margin-left: ${RFValue(24)}px;
`;

export const CarImages = styled.View`
  margin-top: ${Constants.statusBarHeight + 28}px;
`;

export const Content = styled(ScrollView).attrs({
  contentContainerStyle: { alignItems: "center" },
})`
  margin-top: ${RFValue(36)}px;
  margin-bottom: ${RFValue(16)}px;
`;

export const Details = styled.View`
  width: 100%;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 0 ${RFValue(24)}px;
`;

export const Description = styled.View``;

export const Brand = styled.Text`
  color: ${({ theme }) => theme.colors.text.detail};
  font-size: ${RFValue(10)}px;
  font-family: ${({ theme }) => theme.fonts.secondary[500]};
  text-transform: uppercase;
`;

export const Model = styled.Text`
  color: ${({ theme }) => theme.colors.title};
  font-size: ${RFValue(25)}px;
  font-family: ${({ theme }) => theme.fonts.secondary[500]};
`;

export const Rent = styled.View``;

export const Period = styled.Text`
  color: ${({ theme }) => theme.colors.text.detail};
  font-size: ${RFValue(10)}px;
  font-family: ${({ theme }) => theme.fonts.secondary[500]};
  text-transform: uppercase;
`;

export const Price = styled.Text`
  color: ${({ theme }) => theme.colors.main.DEFAULT};
  font-size: ${RFValue(25)}px;
  font-family: ${({ theme }) => theme.fonts.secondary[500]};
`;

export const Acessories = styled.View`
  width: 100%;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  padding: 0 ${RFValue(16)}px;
  margin-top: ${RFValue(16)}px;
`;

export const About = styled.Text`
  color: ${({ theme }) => theme.colors.text.DEFAULT};
  font-size: ${RFValue(15)}px;
  font-family: ${({ theme }) => theme.fonts.primary[400]};
  padding: 0 ${RFValue(24)}px;
  margin-top: ${RFValue(24)}px;
  line-height: ${RFValue(25)}px;
`;

export const Footer = styled.View`
  width: 100%;
  background-color: ${({ theme }) => theme.colors.background.primary};
  padding: ${RFValue(24)}px;
`;
