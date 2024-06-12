import React from 'react';
import { View, Text, Button } from 'react-native';
import { useAuth } from '../../provider/AuthProvider';  // Atualize o caminho conforme necessário
import { useNavigation } from '@react-navigation/native';
import { StackTypes } from '../../routes/stack';  // Atualize o caminho conforme necessário

const Home3 = () => {
  const { user, logout } = useAuth();
  const navigation = useNavigation<StackTypes>();

  const handleLogout = () => {
    logout();
    navigation.navigate('Login');
  };

  return (
    <View>
      <Text>Home Screen</Text>
      <Text>Bem-vindo, {user}</Text>
      <Button title="Logout" onPress={handleLogout} />
    </View>
  );
};

export default Home3;
