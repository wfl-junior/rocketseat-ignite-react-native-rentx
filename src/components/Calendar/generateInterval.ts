import { eachDayOfInterval, format } from "date-fns";
import { DateData } from "react-native-calendars";
import { MarkedDateProps } from ".";
import { theme } from "../../styles/theme";
import { getPlatformDate } from "../../utils/getPlatformDate";

export function generateInterval(
  start: DateData,
  end: DateData,
): MarkedDateProps {
  const intervalDates = eachDayOfInterval({
    start: new Date(start.timestamp),
    end: new Date(end.timestamp),
  });

  return intervalDates.reduce<MarkedDateProps>((interval, date) => {
    const dateString = format(getPlatformDate(date), "yyyy-MM-dd");
    const isStartOrEnd =
      start.dateString === dateString || end.dateString === dateString;

    return {
      ...interval,
      [dateString]: {
        color: isStartOrEnd
          ? theme.colors.main.DEFAULT
          : theme.colors.main.light,
        textColor: isStartOrEnd
          ? theme.colors.main.light
          : theme.colors.main.DEFAULT,
      },
    };
  }, {});
}
