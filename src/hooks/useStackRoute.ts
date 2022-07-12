import { RouteProp, useRoute } from "@react-navigation/native";
import { StackNavigationParamList } from "../routes/stack.routes";

export function useStackRoute<T extends keyof StackNavigationParamList>() {
  return useRoute<RouteProp<StackNavigationParamList, T>>();
}
