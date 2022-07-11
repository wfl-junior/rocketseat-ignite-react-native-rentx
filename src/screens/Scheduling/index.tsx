import { Fragment, useState } from "react";
import { StatusBar } from "react-native";
import { DateData } from "react-native-calendars";
import ArrowIcon from "../../assets/arrow.svg";
import { BackButton } from "../../components/BackButton";
import { Button } from "../../components/Button";
import { Calendar, MarkedDateProps } from "../../components/Calendar";
import { generateInterval } from "../../components/Calendar/generateInterval";
import { useStackNavigation } from "../../hooks/useStackNavigation";
import { theme } from "../../styles/theme";
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

export const Scheduling: React.FC = () => {
  const { navigate } = useStackNavigation();
  const [markedDates, setMarkedDates] = useState<MarkedDateProps>({});
  const [lastSelectedDate, setLastSelectedDate] = useState<DateData | null>(
    null,
  );

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
  }

  function handleConfirm() {
    navigate("SchedulingDetails");
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
              <DateValue selected>18/06/2021</DateValue>
            </DateInfo>

            <ArrowIcon />

            <DateInfo>
              <DateTitle>Até</DateTitle>
              <DateValue></DateValue>
            </DateInfo>
          </RentalPeriod>
        </Header>

        <Content showsVerticalScrollIndicator={false}>
          <Calendar markedDates={markedDates} onDayPress={handleChangeDate} />
        </Content>

        <Footer>
          <Button title="Confirmar" onPress={handleConfirm} />
        </Footer>
      </Container>
    </Fragment>
  );
};
