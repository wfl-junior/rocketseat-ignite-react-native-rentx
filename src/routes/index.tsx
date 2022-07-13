import { NavigationContainer } from "@react-navigation/native";
import { useCallback, useState } from "react";
import { useAuthContext } from "../contexts/AuthContext";
import { Splash } from "../screens/Splash";
import { AppTabRoutes } from "./app.tab.routes";
import { AuthRoutes } from "./auth.routes";

export const Routes: React.FC = () => {
  const [isReady, setIsReady] = useState(false);
  const { isAuthenticated, isUserLoading } = useAuthContext();

  const startApp = useCallback(() => {
    setIsReady(true);
  }, []);

  if (!isReady || isUserLoading) {
    return <Splash onEnd={startApp} />;
  }

  return (
    <NavigationContainer>
      {isAuthenticated ? <AppTabRoutes /> : <AuthRoutes />}
    </NavigationContainer>
  );
};
