import { RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";

interface ContainerProps {
  active?: boolean;
}

export const Container = styled.View<ContainerProps>`
  width: 6px;
  height: 6px;
  border-radius: 3px;
  margin-left: ${RFValue(8)}px;

  background-color: ${({ active, theme }) => {
    if (active) {
      return theme.colors.title;
    }

    return theme.colors.shape.DEFAULT;
  }};
`;
