import { Fragment, useEffect, useState } from "react";
import { Alert, FlatList, StatusBar } from "react-native";
import { BackButton } from "../../components/BackButton";
import { CarCard } from "../../components/CarCard";
import { Loading } from "../../components/Loading";
import { UserScheduleDTO } from "../../dtos/UserScheduleDTO";
import { api } from "../../services/api";
import { theme } from "../../styles/theme";
import {
  Appointments,
  AppointmentsQuantity,
  AppointmentsTitle,
  Container,
  Content,
  Header,
  SubTitle,
  Title,
} from "./styles";

export const MyCars: React.FC = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [schedules, setSchedules] = useState<UserScheduleDTO[]>([]);

  useEffect(() => {
    api
      .get<UserScheduleDTO[]>("/schedules_byuser?user_id=1")
      .then(response => setSchedules(response.data))
      .catch(error => {
        console.warn(error);
        Alert.alert("Não foi possível buscar os dados.");
      })
      .finally(() => setIsLoading(false));
  }, []);

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
            Seus agendamentos {"\n"}
            estão aqui.
          </Title>

          <SubTitle>Conforto, segurança e praticidade.</SubTitle>
        </Header>

        <Content>
          {isLoading ? (
            <Loading />
          ) : (
            <Fragment>
              <Appointments>
                <AppointmentsTitle>Agendamentos feitos</AppointmentsTitle>
                <AppointmentsQuantity>{schedules.length}</AppointmentsQuantity>
              </Appointments>

              <FlatList
                data={schedules}
                keyExtractor={schedule => schedule.id.toString()}
                showsVerticalScrollIndicator={false}
                renderItem={({ item: schedule }) => (
                  <CarCard car={schedule.car} />
                )}
              />
            </Fragment>
          )}
        </Content>
      </Container>
    </Fragment>
  );
};
