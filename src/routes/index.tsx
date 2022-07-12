import { NavigationContainer } from "@react-navigation/native";
import { useAuthContext } from "../contexts/AuthContext";
import { AppTabRoutes } from "./app.tab.routes";
import { AuthRoutes } from "./auth.routes";

export const Routes: React.FC = () => {
  const { isAuthenticated } = useAuthContext();

  return (
    <NavigationContainer>
      {isAuthenticated ? <AppTabRoutes /> : <AuthRoutes />}
    </NavigationContainer>
  );
};
