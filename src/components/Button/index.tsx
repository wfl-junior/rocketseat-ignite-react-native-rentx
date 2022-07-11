import { RectButtonProps } from "react-native-gesture-handler";
import { Container, Title } from "./styles";

interface ButtonProps extends RectButtonProps {
  title: string;
  color?: string;
}

export const Button: React.FC<ButtonProps> = ({
  title,
  color,
  enabled = true,
  ...props
}) => (
  <Container color={color} enabled={enabled} {...props}>
    <Title>{title}</Title>
  </Container>
);
