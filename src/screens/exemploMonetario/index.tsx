import React, { useState } from 'react';
import { View, TextInput, StyleSheet, Text } from 'react-native';
import { TextInputMask } from 'react-native-masked-text';

const ExemploMonetario = () => {
  const [valor, setValor] = useState('');

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Digite o valor:</Text>
      <TextInputMask
        style={styles.input}
        type={'money'}
        options={{
          precision: 2,
          separator: ',',
          delimiter: '.',
          unit: 'R$',
          suffixUnit: ''
        }}
        value={valor}
        onChangeText={setValor}
      />
      <Text style={styles.valor}>Valor digitado: {valor}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20
  },
  label: {
    fontSize: 18,
    marginBottom: 10
  },
  input: {
    width: '100%',
    height: 40,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 20
  },
  valor: {
    fontSize: 18,
    marginTop: 20
  }
});

export default ExemploMonetario;
