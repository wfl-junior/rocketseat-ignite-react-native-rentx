import LottieView from "lottie-react-native";
import { RFValue } from "react-native-responsive-fontsize";
import loadingAnimation from "../../assets/loading_animation.json";
import { Container } from "./styles";

export const LoadingAnimation: React.FC = () => (
  <Container>
    <LottieView
      source={loadingAnimation}
      autoPlay
      loop
      style={{ height: RFValue(350) }}
      resizeMode="contain"
    />
  </Container>
);
