import { Feather } from "@expo/vector-icons";
import { TextInputProps } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";
import { theme } from "../../styles/theme";
import {
  ChangePasswordVisibilityButton,
  Container,
  IconContainer,
  InputText,
} from "./styles";

interface InputProps extends TextInputProps {
  iconName: React.ComponentProps<typeof Feather>["name"];
  password?: {
    isHidden: boolean;
    setIsHidden: React.Dispatch<React.SetStateAction<boolean>>;
  };
}

export const Input: React.FC<InputProps> = ({
  iconName,
  password,
  ...props
}) => (
  <Container>
    <IconContainer>
      <Feather
        name={iconName}
        size={RFValue(24)}
        color={theme.colors.text.DEFAULT}
      />
    </IconContainer>

    <InputText
      placeholderTextColor={theme.colors.text.detail}
      isPassword={!!password}
      {...props}
    />

    {!!password && (
      <ChangePasswordVisibilityButton
        onPress={() => password.setIsHidden(isHidden => !isHidden)}
      >
        <Feather
          name={password.isHidden ? "eye" : "eye-off"}
          size={RFValue(24)}
          color={theme.colors.text.DEFAULT}
        />
      </ChangePasswordVisibilityButton>
    )}
  </Container>
);
