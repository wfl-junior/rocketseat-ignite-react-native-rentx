import Constants from "expo-constants";
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
  margin-top: ${Constants.statusBarHeight + RFValue(18)}px;
  margin-left: ${RFValue(24)}px;
`;

export const CarImages = styled.View`
  margin-top: ${Constants.statusBarHeight + RFValue(28)}px;
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

export const Accessories = styled.View`
  width: 100%;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  padding: 0 ${RFValue(16)}px;
  margin-top: ${RFValue(16)}px;
`;

export const RentalPeriod = styled.View`
  width: 100%;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-top: ${RFValue(40)}px;
  padding: 0 ${RFValue(24)}px ${RFValue(16)}px;
  border-bottom-width: 1px;
  border-bottom-color: ${({ theme }) => theme.colors.line};
`;

export const CalendarIcon = styled.View`
  width: ${RFValue(48)}px;
  height: ${RFValue(48)}px;
  background-color: ${({ theme }) => theme.colors.main.DEFAULT};
  align-items: center;
  justify-content: center;
`;

export const DateInfo = styled.View``;

export const DateTitle = styled.Text`
  color: ${({ theme }) => theme.colors.text.detail};
  font-size: ${RFValue(10)}px;
  font-family: ${({ theme }) => theme.fonts.secondary[500]};
  text-transform: uppercase;
`;

export const DateValue = styled.Text`
  color: ${({ theme }) => theme.colors.title};
  font-size: ${RFValue(15)}px;
  font-family: ${({ theme }) => theme.fonts.primary[500]};
`;

export const RentalPrice = styled.View`
  width: 100%;
  margin-top: ${RFValue(16)}px;
  padding: 0 ${RFValue(24)}px;
`;

export const RentalPriceLabel = styled.Text`
  color: ${({ theme }) => theme.colors.text.detail};
  font-size: ${RFValue(10)}px;
  font-family: ${({ theme }) => theme.fonts.secondary[500]};
  text-transform: uppercase;
`;

export const RentalPriceDetails = styled.View`
  width: 100%;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const RentalPriceQuota = styled.Text`
  color: ${({ theme }) => theme.colors.title};
  font-size: ${RFValue(15)}px;
  font-family: ${({ theme }) => theme.fonts.primary[500]};
`;

export const RentalPriceTotal = styled.Text`
  color: ${({ theme }) => theme.colors.success};
  font-size: ${RFValue(24)}px;
  font-family: ${({ theme }) => theme.fonts.secondary[500]};
`;

export const Footer = styled.View`
  width: 100%;
  background-color: ${({ theme }) => theme.colors.background.primary};
  padding: ${RFValue(24)}px;
`;

export const OfflineInfo = styled.Text`
  color: ${({ theme }) => theme.colors.main.DEFAULT};
  font-size: ${RFValue(10)}px;
  font-family: ${({ theme }) => theme.fonts.primary[400]};
  text-align: center;
  margin-top: ${RFValue(8)}px;
`;
