import { Fragment } from "react";
import {
  Button,
  StatusBar,
  StyleSheet,
  useWindowDimensions,
} from "react-native";
import Animated, {
  useAnimatedStyle,
  useSharedValue,
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
  const boxAnimatedStyles = useAnimatedStyle(() => ({
    transform: [{ translateX: boxAnimation.value }],
  }));

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
