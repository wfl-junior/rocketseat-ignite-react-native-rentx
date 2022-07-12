import { RouteProp, useRoute } from "@react-navigation/native";
import { AppStackNavigationParamList } from "../routes/app.stack.routes";

export function useAppStackRoute<
  T extends keyof AppStackNavigationParamList,
>() {
  return useRoute<RouteProp<AppStackNavigationParamList, T>>();
}
