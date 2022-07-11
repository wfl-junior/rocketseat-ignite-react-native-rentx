import { Fragment } from "react";
import {
  Button,
  StatusBar,
  StyleSheet,
  useWindowDimensions,
} from "react-native";
import Animated, {
  Easing,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from "react-native-reanimated";
import { Container } from "./styles";

const styles = StyleSheet.create({
  box: {
    width: 100,
    height: 100,
    backgroundColor: "red",
  },
});

export const Splash: React.FC = () => {
  const { width } = useWindowDimensions();
  const boxAnimation = useSharedValue(0);
  const boxAnimatedStyles = useAnimatedStyle(
    () => ({
      transform: [
        {
          translateX: withTiming(boxAnimation.value, {
            duration: 500,
            easing: Easing.bezier(0.63, 0.13, 0, 1.01),
          }),
        },
      ],
    }),
    [boxAnimation],
  );

  function handleAnimationPosition() {
    boxAnimation.value = Math.random() * (width - 100);
  }

  return (
    <Fragment>
      <StatusBar
        barStyle="light-content"
        backgroundColor="transparent"
        translucent
      />

      <Container>
        <Animated.View style={[styles.box, boxAnimatedStyles]} />
        <Button title="Mover" onPress={handleAnimationPosition} />
      </Container>
    </Fragment>
  );
};
