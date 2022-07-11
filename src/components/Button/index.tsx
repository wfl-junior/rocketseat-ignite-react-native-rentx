import { ActivityIndicator } from "react-native";
import { RectButtonProps } from "react-native-gesture-handler";
import { theme } from "../../styles/theme";
import { Container, Title } from "./styles";

interface ButtonProps extends RectButtonProps {
  title: string;
  color?: string;
  textColor?: string;
  isLoading?: boolean;
}

export const Button: React.FC<ButtonProps> = ({
  title,
  color,
  textColor,
  enabled = true,
  isLoading = false,
  ...props
}) => (
  <Container color={color} enabled={enabled} isLoading={isLoading} {...props}>
    {isLoading ? (
      <ActivityIndicator color={theme.colors.background.secondary} />
    ) : (
      <Title textColor={textColor}>{title}</Title>
    )}
  </Container>
);
