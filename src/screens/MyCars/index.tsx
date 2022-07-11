import { AntDesign } from "@expo/vector-icons";
import { Fragment, useEffect, useState } from "react";
import { Alert, FlatList, StatusBar } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";
import { BackButton } from "../../components/BackButton";
import { CarCard } from "../../components/CarCard";
import { LoadingAnimation } from "../../components/LoadingAnimation";
import { UserScheduleDTO } from "../../dtos/UserScheduleDTO";
import { api } from "../../services/api";
import { theme } from "../../styles/theme";
import {
  Appointments,
  AppointmentsQuantity,
  AppointmentsTitle,
  CarFooter,
  CarFooterDate,
  CarFooterPeriod,
  CarFooterTitle,
  CarWrapper,
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

        {isLoading ? (
          <LoadingAnimation />
        ) : (
          <Content>
            <Appointments>
              <AppointmentsTitle>Agendamentos feitos</AppointmentsTitle>
              <AppointmentsQuantity>{schedules.length}</AppointmentsQuantity>
            </Appointments>

            <FlatList
              data={schedules}
              keyExtractor={schedule => schedule.id.toString()}
              showsVerticalScrollIndicator={false}
              renderItem={({ item: schedule }) => (
                <CarWrapper>
                  <CarCard car={schedule.car} />

                  <CarFooter>
                    <CarFooterTitle>Período</CarFooterTitle>

                    <CarFooterPeriod>
                      <CarFooterDate>{schedule.startDate}</CarFooterDate>

                      <AntDesign
                        name="arrowright"
                        size={RFValue(20)}
                        color={theme.colors.text.detail}
                        style={{ marginHorizontal: RFValue(10) }}
                      />

                      <CarFooterDate>{schedule.endDate}</CarFooterDate>
                    </CarFooterPeriod>
                  </CarFooter>
                </CarWrapper>
              )}
            />
          </Content>
        )}
      </Container>
    </Fragment>
  );
};
