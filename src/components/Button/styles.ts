import { RectButton } from "react-native-gesture-handler";
import { RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";

interface ContainerProps {
  color?: string;
  isLoading: boolean;
}

export const Container = styled(RectButton)<ContainerProps>`
  width: 100%;
  padding: ${RFValue(19)}px;
  align-items: center;
  justify-content: center;
  background-color: ${({ color, theme }) => color || theme.colors.main.DEFAULT};
  opacity: ${({ enabled, isLoading }) => {
    if (isLoading || !enabled) {
      return "0.5";
    }

    return "1";
  }};
`;

interface TitleProps {
  textColor?: string;
}

export const Title = styled.Text<TitleProps>`
  color: ${({ textColor, theme }) => {
    if (textColor) {
      return textColor;
    }

    return theme.colors.background.secondary;
  }};

  font-size: ${RFValue(15)}px;
  font-family: ${({ theme }) => theme.fonts.primary[500]};
`;
