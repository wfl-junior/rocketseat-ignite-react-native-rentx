import { Feather } from "@expo/vector-icons";
import { useState } from "react";
import {
  NativeSyntheticEvent,
  TextInputFocusEventData,
  TextInputProps,
} from "react-native";
import { RFValue } from "react-native-responsive-fontsize";
import { theme } from "../../styles/theme";
import {
  ChangePasswordVisibilityButton,
  Container,
  IconContainer,
  InputText,
} from "./styles";

export interface InputProps extends TextInputProps {
  iconName: React.ComponentProps<typeof Feather>["name"];
  password?: {
    isHidden: boolean;
    setIsHidden: React.Dispatch<React.SetStateAction<boolean>>;
  };
}

export const Input: React.FC<InputProps> = ({
  iconName,
  password,
  value,
  onFocus,
  onBlur,
  ...props
}) => {
  const [isFocused, setIsFocused] = useState(false);

  const isFilled = !!value;
  const isPassword = !!password;

  function handleInputFocus(
    event: NativeSyntheticEvent<TextInputFocusEventData>,
  ) {
    setIsFocused(true);
    onFocus?.(event);
  }

  function handleInputBlur(
    event: NativeSyntheticEvent<TextInputFocusEventData>,
  ) {
    setIsFocused(false);
    onBlur?.(event);
  }

  return (
    <Container isFocused={isFocused}>
      <IconContainer>
        <Feather
          name={iconName}
          size={RFValue(24)}
          color={
            isFilled || isFocused
              ? theme.colors.main.DEFAULT
              : theme.colors.text.DEFAULT
          }
        />
      </IconContainer>

      <InputText
        placeholderTextColor={theme.colors.text.detail}
        isPassword={isPassword}
        value={value}
        onFocus={handleInputFocus}
        onBlur={handleInputBlur}
        autoCorrect={false}
        autoCapitalize="none"
        {...props}
      />

      {isPassword && (
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
};
