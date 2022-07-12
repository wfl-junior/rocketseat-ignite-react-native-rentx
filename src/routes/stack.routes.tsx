import { createStackNavigator } from "@react-navigation/stack";
import { CarDTO } from "../dtos/CarDTO";
import { CarDetails } from "../screens/CarDetails";
import { Home } from "../screens/Home";
import { MyCars } from "../screens/MyCars";
import { Scheduling } from "../screens/Scheduling";
import { SchedulingCompleted } from "../screens/SchedulingCompleted";
import { SchedulingDetails } from "../screens/SchedulingDetails";
import { SignIn } from "../screens/SignIn";
import { SignUpFirstStep } from "../screens/SignUp/SignUpFirstStep";
import { SignUpSecondStep } from "../screens/SignUp/SignUpSecondStep";
import { Splash } from "../screens/Splash";

export type StackNavigationParamList = {
  SignIn: undefined;
  SignUpFirstStep: undefined;
  SignUpSecondStep: {
    user: {
      name: string;
      email: string;
      driverLicense: string;
    };
  };
  Splash: undefined;
  Home: undefined;
  CarDetails: {
    car: CarDTO;
  };
  Scheduling: {
    car: CarDTO;
  };
  SchedulingDetails: {
    car: CarDTO;
    dates: string[];
  };
  SchedulingCompleted: undefined;
  MyCars: undefined;
};

const { Navigator, Screen } = createStackNavigator<StackNavigationParamList>();

export const StackRoutes: React.FC = () => (
  <Navigator screenOptions={{ headerShown: false }} initialRouteName="SignIn">
    <Screen name="SignIn" component={SignIn} />
    <Screen name="SignUpFirstStep" component={SignUpFirstStep} />
    <Screen name="SignUpSecondStep" component={SignUpSecondStep} />
    <Screen name="Splash" component={Splash} />
    <Screen name="Home" component={Home} />
    <Screen name="CarDetails" component={CarDetails} />
    <Screen name="Scheduling" component={Scheduling} />
    <Screen name="SchedulingDetails" component={SchedulingDetails} />
    <Screen name="SchedulingCompleted" component={SchedulingCompleted} />
    <Screen name="MyCars" component={MyCars} />
  </Navigator>
);
