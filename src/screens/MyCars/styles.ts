import Constants from "expo-constants";
import { RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.background.primary};
`;

export const Header = styled.View`
  width: 100%;
  background-color: ${({ theme }) => theme.colors.header};
  justify-content: center;
  padding: ${Constants.statusBarHeight}px ${RFValue(24)}px ${RFValue(32)}px;
`;

export const Title = styled.Text`
  color: ${({ theme }) => theme.colors.background.secondary};
  font-size: ${RFValue(30)}px;
  font-family: ${({ theme }) => theme.fonts.secondary[600]};
  margin-top: ${RFValue(24)}px;
  line-height: ${RFValue(34)}px;
`;

export const SubTitle = styled.Text`
  color: ${({ theme }) => theme.colors.background.secondary};
  font-size: ${RFValue(15)}px;
  font-family: ${({ theme }) => theme.fonts.secondary[400]};
  margin-top: ${RFValue(18)}px;
`;

export const Content = styled.View`
  flex: 1;
  padding: 0 ${RFValue(16)}px;
`;

export const Appointments = styled.View`
  width: 100%;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: ${RFValue(24)}px ${RFValue(8)}px;
`;

export const AppointmentsTitle = styled.Text`
  color: ${({ theme }) => theme.colors.text.DEFAULT};
  font-size: ${RFValue(15)}px;
  font-family: ${({ theme }) => theme.fonts.primary[400]};
`;

export const AppointmentsQuantity = styled.Text`
  color: ${({ theme }) => theme.colors.title};
  font-size: ${RFValue(15)}px;
  font-family: ${({ theme }) => theme.fonts.secondary[500]};
`;

export const CarWrapper = styled.View`
  margin-bottom: ${RFValue(16)}px;
`;

export const CarFooter = styled.View`
  width: 100%;
  padding: ${RFValue(12)}px;
  margin-top: ${RFValue(-10)}px;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  background-color: ${({ theme }) => theme.colors.background.secondary};
`;

export const CarFooterTitle = styled.Text`
  color: ${({ theme }) => theme.colors.text.detail};
  font-size: ${RFValue(10)}px;
  font-family: ${({ theme }) => theme.fonts.secondary[500]};
  text-transform: uppercase;
`;

export const CarFooterPeriod = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const CarFooterDate = styled.Text`
  color: ${({ theme }) => theme.colors.title};
  font-size: ${RFValue(13)}px;
  font-family: ${({ theme }) => theme.fonts.primary[400]};
`;
