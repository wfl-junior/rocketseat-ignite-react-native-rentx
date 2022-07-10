import { Feather } from "@expo/vector-icons";
import {
  Calendar as ReactNativeCalendar,
  CalendarProps,
  LocaleConfig,
} from "react-native-calendars";
import { RFValue } from "react-native-responsive-fontsize";
import { theme } from "../../styles/theme";

LocaleConfig.locales["pt-br"] = {
  monthNames: [
    "Janeiro",
    "Fevereiro",
    "Março",
    "Abril",
    "Maio",
    "Junho",
    "Julho",
    "Agosto",
    "Setembro",
    "Outubro",
    "Novembro",
    "Dezembro",
  ],
  monthNamesShort: [
    "Jan",
    "Fev",
    "Mar",
    "Abr",
    "Mai",
    "Jun",
    "Jul",
    "Ago",
    "Set",
    "Out",
    "Nov",
    "Dez",
  ],
  dayNames: [
    "Domingo",
    "Segunda",
    "Terça",
    "Quarta",
    "Quinta",
    "Sexta",
    "Sábado",
  ],
  dayNamesShort: ["DOM", "SEG", "TER", "QUA", "QUI", "SEX", "SAB"],
  today: "Hoje",
};

LocaleConfig.defaultLocale = "pt-br";

export const Calendar: React.FC<CalendarProps> = props => (
  <ReactNativeCalendar
    minDate={new Date().toISOString()}
    renderArrow={direction => (
      <Feather
        size={RFValue(24)}
        color={theme.colors.text.DEFAULT}
        name={`chevron-${direction}`}
      />
    )}
    headerStyle={{
      backgroundColor: theme.colors.background.secondary,
      borderBottomWidth: 0.5,
      borderBottomColor: theme.colors.text.detail,
      paddingBottom: RFValue(10),
      marginBottom: RFValue(10),
    }}
    theme={{
      textDayFontFamily: theme.fonts.primary[400],
      textDayHeaderFontFamily: theme.fonts.secondary[600],
      textDayHeaderFontSize: RFValue(10),
      textMonthFontFamily: theme.fonts.secondary[600],
      textMonthFontSize: RFValue(20),
      monthTextColor: theme.colors.title,
      arrowStyle: {
        marginHorizontal: RFValue(-15),
      },
      // @ts-ignore
      "stylesheet.calendar.header": {
        week: {
          flexDirection: "row",
          justifyContent: "space-between",
          paddingHorizontal: 12,
          marginTop: RFValue(14), // month já tem 10 de margin
        },
      },
    }}
    {...props}
  />
);
