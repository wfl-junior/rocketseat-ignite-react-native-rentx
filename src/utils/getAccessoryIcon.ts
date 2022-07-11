import { SvgProps } from "react-native-svg";
import AccelerationIcon from "../assets/acceleration.svg";
import CarIcon from "../assets/car.svg";
import EnergyIcon from "../assets/energy.svg";
import ExchangeIcon from "../assets/exchange.svg";
import ForceIcon from "../assets/force.svg";
import GasolineIcon from "../assets/gasoline.svg";
import HybridIcon from "../assets/hybrid.svg";
import PeopleIcon from "../assets/people.svg";
import SpeedIcon from "../assets/speed.svg";

export function getAccessoryIcon(type: string): React.FC<SvgProps> {
  switch (type) {
    case "speed": {
      return SpeedIcon;
    }
    case "acceleration": {
      return AccelerationIcon;
    }
    case "turning_diameter": {
      return ForceIcon;
    }
    case "gasoline_motor": {
      return GasolineIcon;
    }
    case "electric_motor": {
      return EnergyIcon;
    }
    case "hybrid_motor": {
      return HybridIcon;
    }
    case "exchange": {
      return ExchangeIcon;
    }
    case "seats": {
      return PeopleIcon;
    }
    default: {
      return CarIcon;
    }
  }
}
