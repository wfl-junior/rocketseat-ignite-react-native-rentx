import { MaterialCommunityIcons } from "@expo/vector-icons";
import { BorderlessButtonProps } from "react-native-gesture-handler";
import { RFValue } from "react-native-responsive-fontsize";
import { useStackNavigation } from "../../hooks/useStackNavigation";
import { theme } from "../../styles/theme";
import { Container } from "./styles";

interface BackButtonProps extends BorderlessButtonProps {
  color?: string;
}

export const BackButton: React.FC<BackButtonProps> = ({ color, ...props }) => {
  const { goBack } = useStackNavigation();

  function handleGoBack() {
    goBack();
  }

  return (
    <Container onPress={handleGoBack} {...props}>
      <MaterialCommunityIcons
        name="chevron-left"
        size={RFValue(24)}
        color={color || theme.colors.text.DEFAULT}
      />
    </Container>
  );
};
