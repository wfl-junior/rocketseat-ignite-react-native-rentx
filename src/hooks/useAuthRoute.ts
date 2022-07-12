import { RouteProp, useRoute } from "@react-navigation/native";
import { AuthNavigationParamList } from "../routes/auth.routes";

export function useAuthRoute<T extends keyof AuthNavigationParamList>() {
  return useRoute<RouteProp<AuthNavigationParamList, T>>();
}
