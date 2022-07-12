import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MyCars } from "../screens/MyCars";
import { AppStackRoutes } from "./app.stack.routes";

export type AppTabNavigationParamList = {
  AppStackRoutes: undefined;
  MyCars: undefined;
  Profile: undefined;
};

const { Navigator, Screen } =
  createBottomTabNavigator<AppTabNavigationParamList>();

export const AppTabRoutes: React.FC = () => (
  <Navigator
    screenOptions={{ headerShown: false }}
    initialRouteName="AppStackRoutes"
  >
    <Screen name="AppStackRoutes" component={AppStackRoutes} />
    <Screen name="MyCars" component={MyCars} />
    <Screen name="Profile" component={AppStackRoutes} />
  </Navigator>
);
