import { format } from "date-fns";
import { Fragment, useState } from "react";
import { StatusBar } from "react-native";
import { DateData } from "react-native-calendars";
import ArrowIcon from "../../assets/arrow.svg";
import { BackButton } from "../../components/BackButton";
import { Button } from "../../components/Button";
import { Calendar, MarkedDateProps } from "../../components/Calendar";
import { generateInterval } from "../../components/Calendar/generateInterval";
import { useStackNavigation } from "../../hooks/useStackNavigation";
import { useStackRoute } from "../../hooks/useStackRoute";
import { theme } from "../../styles/theme";
import { getPlatformDate } from "../../utils/getPlatformDate";
import {
  Container,
  Content,
  DateInfo,
  DateTitle,
  DateValue,
  Footer,
  Header,
  RentalPeriod,
  Title,
} from "./styles";

interface RentalPeriod {
  startFormatted: string;
  endFormatted: string;
}

export const Scheduling: React.FC = () => {
  const { navigate } = useStackNavigation();
  const {
    params: { car },
  } = useStackRoute<"Scheduling">();
  const [markedDates, setMarkedDates] = useState<MarkedDateProps>({});
  const [lastSelectedDate, setLastSelectedDate] = useState<DateData | null>(
    null,
  );
  const [rentalPeriod, setRentalPeriod] = useState<RentalPeriod | null>(null);

  function handleChangeDate(date: DateData) {
    let start = lastSelectedDate ?? date;
    let end = date;

    if (start.timestamp > end.timestamp) {
      start = end;
      end = start;
    }

    setLastSelectedDate(end);
    const interval = generateInterval(start, end);
    setMarkedDates(interval);

    const intervalKeys = Object.keys(interval);
    const firstDate = intervalKeys[0];
    const endDate = intervalKeys[intervalKeys.length - 1];

    setRentalPeriod({
      startFormatted: format(
        getPlatformDate(new Date(firstDate)),
        "dd/MM/yyyy",
      ),
      endFormatted: format(getPlatformDate(new Date(endDate)), "dd/MM/yyyy"),
    });
  }

  function handleConfirmRental() {
    // if (!rentalPeriod) {
    //   return Alert.alert("Selecione o intervalo para alugar.");
    // }

    navigate("SchedulingDetails", {
      car,
      dates: Object.keys(markedDates),
    });
  }

  return (
    <Fragment>
      <StatusBar
        barStyle="light-content"
        backgroundColor="transparent"
        translucent
      />

      <Container>
        <Header>
          <BackButton color={theme.colors.background.secondary} />

          <Title>
            Escolha uma {"\n"}
            data de início e {"\n"}
            fim do aluguel
          </Title>

          <RentalPeriod>
            <DateInfo>
              <DateTitle>De</DateTitle>
              <DateValue selected={!!rentalPeriod}>
                {rentalPeriod?.startFormatted}
              </DateValue>
            </DateInfo>

            <ArrowIcon />

            <DateInfo>
              <DateTitle>Até</DateTitle>
              <DateValue selected={!!rentalPeriod}>
                {rentalPeriod?.endFormatted}
              </DateValue>
            </DateInfo>
          </RentalPeriod>
        </Header>

        <Content showsVerticalScrollIndicator={false}>
          <Calendar markedDates={markedDates} onDayPress={handleChangeDate} />
        </Content>

        <Footer>
          <Button
            title="Confirmar"
            onPress={handleConfirmRental}
            enabled={!!rentalPeriod}
          />
        </Footer>
      </Container>
    </Fragment>
  );
};
