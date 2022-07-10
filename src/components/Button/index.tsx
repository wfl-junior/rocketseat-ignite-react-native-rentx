import { RectButtonProps } from "react-native-gesture-handler";
import { Container, Title } from "./styles";

interface ButtonProps extends RectButtonProps {
  title: string;
  color?: string;
}

export const Button: React.FC<ButtonProps> = ({ title, color, ...props }) => (
  <Container color={color} {...props}>
    <Title>{title}</Title>
  </Container>
);
