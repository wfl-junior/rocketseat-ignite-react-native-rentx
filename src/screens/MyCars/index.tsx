import { Fragment, useEffect, useState } from "react";
import { Alert, StatusBar } from "react-native";
import { CarDTO } from "../../dtos/CarDTO";
import { api } from "../../services/api";
import { Container } from "./styles";

interface UserSchedule {
  id: number;
  user_id: number;
  startDate: string;
  endDate: string;
  car: CarDTO;
}

export const MyCars: React.FC = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [schedules, setSchedules] = useState<UserSchedule[]>([]);

  useEffect(() => {
    api
      .get<UserSchedule[]>("/schedules_byuser?user_id=1")
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
        barStyle="dark-content"
        backgroundColor="transparent"
        translucent
      />

      <Container>My Cars</Container>
    </Fragment>
  );
};
