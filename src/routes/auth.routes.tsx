import { createStackNavigator } from "@react-navigation/stack";
import { Confirmation } from "../screens/Confirmation";
import { SignIn } from "../screens/SignIn";
import { SignUpFirstStep } from "../screens/SignUp/SignUpFirstStep";
import { SignUpSecondStep } from "../screens/SignUp/SignUpSecondStep";

export type AuthNavigationParamList = {
  SignIn: undefined;
  SignUpFirstStep: undefined;
  SignUpSecondStep: {
    user: {
      name: string;
      email: string;
      driverLicense: string;
    };
  };
  Confirmation: {
    title: string;
    message: string;
    nextScreenRoute?: keyof AuthNavigationParamList;
  };
};

const { Navigator, Screen } = createStackNavigator<AuthNavigationParamList>();

export const AuthRoutes: React.FC = () => (
  <Navigator screenOptions={{ headerShown: false }} initialRouteName="SignIn">
    <Screen name="SignIn" component={SignIn} />
    <Screen name="SignUpFirstStep" component={SignUpFirstStep} />
    <Screen name="SignUpSecondStep" component={SignUpSecondStep} />
    <Screen name="Confirmation" component={Confirmation} />
  </Navigator>
);
