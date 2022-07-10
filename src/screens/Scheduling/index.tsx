import { Fragment } from "react";
import { StatusBar } from "react-native";
import ArrowIcon from "../../assets/arrow.svg";
import { BackButton } from "../../components/BackButton";
import { Button } from "../../components/Button";
import { Calendar } from "../../components/Calendar";
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
          <Calendar />
        </Content>

        <Footer>
          <Button title="Confirmar" onPress={handleConfirm} />
        </Footer>
      </Container>
    </Fragment>
  );
};
