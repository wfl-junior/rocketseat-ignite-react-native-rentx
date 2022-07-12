import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import { AppStackNavigationParamList } from "../routes/app.stack.routes";

export function useAppStackNavigation() {
  return useNavigation<StackNavigationProp<AppStackNavigationParamList>>();
}
