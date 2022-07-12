import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import { AuthNavigationParamList } from "../routes/auth.routes";

export function useAuthNavigation() {
  return useNavigation<StackNavigationProp<AuthNavigationParamList>>();
}
