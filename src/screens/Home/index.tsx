import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';
import { Text, View, StyleSheet, Button } from 'react-native';
import { StackTypes } from '../../routes/stack';

const Home = () => {

    const navigation = useNavigation<StackTypes>();

return (
    <View>
        <Text>Estou na Home</Text>
        <Button title='Fazer Login' onPress={() => {  navigation.navigate("Login");}} />
    </View>

);

};

export default Home;