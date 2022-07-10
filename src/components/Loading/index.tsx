import { ActivityIndicator } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";
import { theme } from "../../styles/theme";

export const Loading: React.FC = () => (
  <ActivityIndicator
    color={theme.colors.main.DEFAULT}
    size={RFValue(48)}
    style={{ flex: 1 }}
  />
);
