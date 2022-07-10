import { createStackNavigator } from "@react-navigation/stack";
import { CarDetails } from "../screens/CarDetails";
import { Home } from "../screens/Home";
import { Scheduling } from "../screens/Scheduling";
import { SchedulingCompleted } from "../screens/SchedulingCompleted";
import { SchedulingDetails } from "../screens/SchedulingDetails";

export type StackNavigationParamList = {
  Home: undefined;
  CarDetails: undefined;
  Scheduling: undefined;
  SchedulingDetails: undefined;
  SchedulingCompleted: undefined;
};

const { Navigator, Screen } = createStackNavigator<StackNavigationParamList>();

export const StackRoutes: React.FC = () => (
  <Navigator screenOptions={{ headerShown: false }}>
    <Screen name="Home" component={Home} />
    <Screen name="CarDetails" component={CarDetails} />
    <Screen name="Scheduling" component={Scheduling} />
    <Screen name="SchedulingDetails" component={SchedulingDetails} />
    <Screen name="SchedulingCompleted" component={SchedulingCompleted} />
  </Navigator>
);
