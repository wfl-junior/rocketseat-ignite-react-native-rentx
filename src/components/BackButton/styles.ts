import { BorderlessButton } from "react-native-gesture-handler";
import { RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";

export const Container = styled(BorderlessButton)`
  width: ${RFValue(24)}px;
  height: ${RFValue(24)}px;
  align-items: center;
  justify-content: center;
`;
