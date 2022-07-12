import { Container } from "./styles";

interface BulletProps {
  active?: boolean;
}

export const Bullet: React.FC<BulletProps> = ({ active }) => (
  <Container active={active} />
);
