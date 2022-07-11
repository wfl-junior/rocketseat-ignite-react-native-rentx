import { Feather } from "@expo/vector-icons";
import { TextInputProps } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";
import { theme } from "../../styles/theme";
import { Container, IconContainer, InputText } from "./styles";

interface InputProps extends TextInputProps {
  iconName: React.ComponentProps<typeof Feather>["name"];
}

export const Input: React.FC<InputProps> = ({ iconName, ...props }) => (
  <Container>
    <IconContainer>
      <Feather
        name={iconName}
        size={RFValue(24)}
        color={theme.colors.text.DEFAULT}
      />
    </IconContainer>

    <InputText placeholderTextColor={theme.colors.text.detail} {...props} />
  </Container>
);
