import { RectButton } from "react-native-gesture-handler";
import { RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";

export const Container = styled(RectButton)`
  width: 100%;
  height: ${RFValue(126)}px;
  background-color: ${({ theme }) => theme.colors.background.secondary};
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: ${RFValue(24)}px;
  margin-bottom: ${RFValue(16)}px;
`;

export const Details = styled.View``;

export const Brand = styled.Text`
  color: ${({ theme }) => theme.colors.text.detail};
  font-size: ${RFValue(10)}px;
  font-family: ${({ theme }) => theme.fonts.secondary[500]};
  text-transform: uppercase;
`;

export const Model = styled.Text`
  color: ${({ theme }) => theme.colors.title};
  font-size: ${RFValue(15)}px;
  font-family: ${({ theme }) => theme.fonts.secondary[500]};
`;

export const About = styled.View`
  flex-direction: row;
  align-items: center;
  margin-top: ${RFValue(16)}px;
`;

export const Rent = styled.View`
  margin-right: ${RFValue(24)}px;
`;

export const Period = styled.Text`
  color: ${({ theme }) => theme.colors.text.detail};
  font-size: ${RFValue(10)}px;
  font-family: ${({ theme }) => theme.fonts.secondary[500]};
  text-transform: uppercase;
`;

export const Price = styled.Text`
  color: ${({ theme }) => theme.colors.main.DEFAULT};
  font-size: ${RFValue(15)}px;
  font-family: ${({ theme }) => theme.fonts.secondary[500]};
`;

export const CarImage = styled.Image`
  max-width: ${RFValue(170)}px;
`;
