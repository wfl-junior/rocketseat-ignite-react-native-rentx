import { Dimensions } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";

export const Container = styled.View`
  width: 100%;
`;

export const ImageIndexes = styled.View`
  flex-direction: row;
  align-self: flex-end;
  padding-right: ${RFValue(24)}px;
`;

interface ImageIndexProps {
  active?: boolean;
}

export const ImageIndex = styled.View<ImageIndexProps>`
  width: 6px;
  height: 6px;
  border-radius: 3px;
  margin-left: ${RFValue(8)}px;
  margin-bottom: ${RFValue(36)}px;

  background-color: ${({ active, theme }) => {
    if (active) {
      return theme.colors.title;
    }

    return theme.colors.shape.DEFAULT;
  }};
`;

export const CarImageWrapper = styled.View`
  width: ${Dimensions.get("window").width}px;
  height: ${RFValue(132)}px;
  justify-content: center;
  align-items: center;
`;

export const CarImage = styled.Image`
  max-width: ${RFValue(280)}px;
  height: 100%;
`;
