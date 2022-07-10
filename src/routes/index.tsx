import { NavigationContainer } from "@react-navigation/native";
import { StackRoutes } from "./stack.routes";

export const Routes: React.FC = () => (
  <NavigationContainer>
    <StackRoutes />
  </NavigationContainer>
);
