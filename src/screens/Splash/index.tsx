import { Fragment, useEffect } from "react";
import { StatusBar, StyleSheet } from "react-native";
import Animated, {
  Extrapolate,
  interpolate,
  runOnJS,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from "react-native-reanimated";
import { RFValue } from "react-native-responsive-fontsize";
import Brand from "../../assets/brand.svg";
import Logo from "../../assets/logo.svg";
import { useStackNavigation } from "../../hooks/useStackNavigation";
import { Container } from "./styles";

const styles = StyleSheet.create({
  logo: {
    position: "absolute",
  },
});

export const Splash: React.FC = () => {
  const { navigate } = useStackNavigation();
  const splashAnimation = useSharedValue(0);
  const brandStyle = useAnimatedStyle(() => ({
    opacity: interpolate(splashAnimation.value, [0, 50], [1, 0]),
    transform: [
      {
        translateX: interpolate(
          splashAnimation.value,
          [0, 50],
          [0, -50],
          Extrapolate.CLAMP,
        ),
      },
    ],
  }));

  const logoStyle = useAnimatedStyle(() => ({
    opacity: interpolate(splashAnimation.value, [0, 25, 50], [0, 0.3, 1]),
    transform: [
      {
        translateX: interpolate(
          splashAnimation.value,
          [0, 50],
          [-50, 0],
          Extrapolate.CLAMP,
        ),
      },
    ],
  }));

  function startApp() {
    navigate("Home");
  }

  useEffect(() => {
    splashAnimation.value = withTiming(50, { duration: 1500 }, () => {
      "worklet";
      runOnJS(startApp)();
    });
  }, []);

  return (
    <Fragment>
      <StatusBar
        barStyle="light-content"
        backgroundColor="transparent"
        translucent
      />

      <Container>
        <Animated.View style={[brandStyle, styles.logo]}>
          <Brand width={RFValue(80)} height={RFValue(50)} />
        </Animated.View>

        <Animated.View style={[logoStyle, styles.logo]}>
          <Logo width={RFValue(180)} height={RFValue(20)} />
        </Animated.View>
      </Container>
    </Fragment>
  );
};
