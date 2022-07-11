import { Feather } from "@expo/vector-icons";
import {
  Calendar as ReactNativeCalendar,
  DateData,
} from "react-native-calendars";
import { RFValue } from "react-native-responsive-fontsize";
import { theme } from "../../styles/theme";
import "./locale-config";

export interface MarkedDateProps {
  [date: string]: {
    color: string;
    textColor: string;
    disabled?: boolean;
    disableTouchEvent?: boolean;
  };
}

interface CalendarProps {
  markedDates: MarkedDateProps;
  onDayPress: (date: DateData) => void;
}

export const Calendar: React.FC<CalendarProps> = props => (
  <ReactNativeCalendar
    minDate={new Date().toISOString()}
    markingType="period"
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
