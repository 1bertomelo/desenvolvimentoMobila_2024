import React, { useState } from 'react';
import { View, Button, StyleSheet, Text } from 'react-native';
import DatePicker from '@react-native-community/datetimepicker';

const ExemploData = () => {
  const [date, setDate] = useState(new Date());

  const onChange = (event: any, selectedDate: Date | undefined) => {
    const currentDate = selectedDate || date;
    setDate(currentDate);
  };

  // Função para formatar a data em português
  const formatarData = (data: Date) => {
    return new Intl.DateTimeFormat('pt-BR', {
      weekday: 'long', // dia da semana
      month: 'long', // nome do mês
      day: 'numeric', // dia do mês
      year: 'numeric', // ano
      hour: 'numeric', // hora
      minute: 'numeric', // minuto
      second: 'numeric' // segundo
    }).format(data);
  };

  const formatarDataCustomizada = (data: Date) => {
    const dia = data.getDate();
    const mes = data.getMonth() + 1; // Lembrando que os meses começam do zero
    const ano = data.getFullYear();
    return `${dia}/${mes}/${ano}`;
  };

  return (
    <View style={styles.container}>
      <View style={styles.buttonContainer}>
        
      </View>
      {
        <DatePicker
          testID="dateTimePicker"
          value={date}
          mode="date"
          is24Hour={true}
          locale="pt"
          display="default"
          onChange={onChange}
        />
      }
      <Text style={styles.dateText}>Data Selecionada: {formatarData(new Date())}</Text>
      <Text style={styles.dateText}>
        Mês selecionado: {new Intl.DateTimeFormat('pt-BR', { month: 'long' }).format(date)}
      </Text>
      <Text style={styles.dateText}>Dia do mês selecionado: {date.getDate()}</Text>
      <Text style={styles.dateText}>Ano selecionado: {date.getFullYear()}</Text>
      <Text style={styles.dateText}>Formato dia/mês/ano: {formatarDataCustomizada(date)}</Text>

    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonContainer: {
    marginBottom: 20,
  },
  dateText: {
    marginTop: 20,
    fontSize: 18,
  },
});

export default ExemploData;
