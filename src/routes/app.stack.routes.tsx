import { createStackNavigator } from "@react-navigation/stack";
import { Car } from "../database/models/Car";
import { CarDTO } from "../dtos/CarDTO";
import { CarDetails } from "../screens/CarDetails";
import { Confirmation } from "../screens/Confirmation";
import { Home } from "../screens/Home";
import { Scheduling } from "../screens/Scheduling";
import { SchedulingDetails } from "../screens/SchedulingDetails";

export type AppStackNavigationParamList = {
  Home: undefined;
  CarDetails: {
    car: Car;
  };
  Scheduling: {
    car: CarDTO;
  };
  SchedulingDetails: {
    car: CarDTO;
    dates: string[];
  };
  Confirmation: {
    title: string;
    message: string;
    nextScreenRoute?: keyof AppStackNavigationParamList;
  };
};

const { Navigator, Screen } =
  createStackNavigator<AppStackNavigationParamList>();

export const AppStackRoutes: React.FC = () => (
  <Navigator screenOptions={{ headerShown: false }} initialRouteName="Home">
    <Screen name="Home" component={Home} />
    <Screen name="CarDetails" component={CarDetails} />
    <Screen name="Scheduling" component={Scheduling} />
    <Screen name="SchedulingDetails" component={SchedulingDetails} />
    <Screen name="Confirmation" component={Confirmation} />
  </Navigator>
);
