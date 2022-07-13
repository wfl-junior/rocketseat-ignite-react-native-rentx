import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Platform } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";
import CarIcon from "../assets/car.svg";
import HomeIcon from "../assets/house.svg";
import PeopleIcon from "../assets/people.svg";
import { MyCars } from "../screens/MyCars";
import { Profile } from "../screens/Profile";
import { theme } from "../styles/theme";
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
    initialRouteName="AppStackRoutes"
    screenOptions={{
      headerShown: false,
      tabBarActiveTintColor: theme.colors.main.DEFAULT,
      tabBarInactiveTintColor: theme.colors.text.detail,
      tabBarShowLabel: false,
      tabBarStyle: {
        paddingVertical: Platform.OS === "ios" ? RFValue(20) : 0,
        height: RFValue(78),
        backgroundColor: theme.colors.background.primary,
      },
    }}
  >
    <Screen
      name="AppStackRoutes"
      component={AppStackRoutes}
      options={{
        tabBarIcon: ({ color }) => (
          <HomeIcon width={RFValue(24)} height={RFValue(24)} color={color} />
        ),
      }}
    />

    <Screen
      name="MyCars"
      component={MyCars}
      options={{
        tabBarIcon: ({ color }) => (
          <CarIcon width={RFValue(24)} height={RFValue(24)} color={color} />
        ),
      }}
    />

    <Screen
      name="Profile"
      component={Profile}
      options={{
        tabBarIcon: ({ color }) => (
          <PeopleIcon width={RFValue(24)} height={RFValue(24)} color={color} />
        ),
      }}
    />
  </Navigator>
);
