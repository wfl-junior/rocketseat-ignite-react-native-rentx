import Constants from "expo-constants";
import { ScrollView } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";
import styled, { css } from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.background.secondary};
`;

export const Header = styled.View`
  width: 100%;
  /* height: ${RFValue(325)}px; */
  background-color: ${({ theme }) => theme.colors.header};
  justify-content: center;
  padding: ${Constants.statusBarHeight}px ${RFValue(24)}px ${RFValue(32)}px;
`;

export const Title = styled.Text`
  color: ${({ theme }) => theme.colors.background.secondary};
  font-size: ${RFValue(30)}px;
  font-family: ${({ theme }) => theme.fonts.secondary[600]};
  margin-top: ${RFValue(24)}px;
`;

export const RentalPeriod = styled.View`
  width: 100%;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-top: ${RFValue(32)}px;
`;

export const DateInfo = styled.View`
  width: 30%;
`;

export const DateTitle = styled.Text`
  color: ${({ theme }) => theme.colors.text.DEFAULT};
  font-size: ${RFValue(10)}px;
  font-family: ${({ theme }) => theme.fonts.secondary[500]};
  text-transform: uppercase;
`;

interface DateValueProps {
  selected?: boolean;
}

export const DateValue = styled.Text<DateValueProps>`
  color: ${({ theme }) => theme.colors.background.secondary};
  font-size: ${RFValue(15)}px;
  font-family: ${({ theme }) => theme.fonts.primary[500]};
  margin-top: ${RFValue(9)}px;

  ${({ selected, theme }) => {
    if (selected) {
      return "";
    }

    return css`
      border-style: solid;
      border-bottom-width: 1px;
      border-bottom-color: ${theme.colors.text.DEFAULT};
      padding-bottom: ${RFValue(5)}px;
    `;
  }}
`;

export const Content = styled(ScrollView).attrs({
  contentContainerStyle: {
    paddingBottom: RFValue(24),
  },
})``;

export const Footer = styled.View`
  width: 100%;
  padding: ${RFValue(24)}px;
`;
