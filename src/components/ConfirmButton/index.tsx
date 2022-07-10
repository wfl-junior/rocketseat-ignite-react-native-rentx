import { RectButtonProps } from "react-native-gesture-handler";
import { Container, Title } from "./styles";

interface ConfirmButtonProps extends RectButtonProps {
  title: string;
}

export const ConfirmButton: React.FC<ConfirmButtonProps> = ({
  title,
  ...props
}) => (
  <Container {...props}>
    <Title>{title}</Title>
  </Container>
);
