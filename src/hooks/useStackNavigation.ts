import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import { StackNavigationParamList } from "../routes/stack.routes";

export function useStackNavigation() {
  return useNavigation<StackNavigationProp<StackNavigationParamList>>();
}
