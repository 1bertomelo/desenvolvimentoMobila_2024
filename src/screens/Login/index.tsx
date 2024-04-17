import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';
import { StackTypes } from '../../routes/stack';
import UserService   from '../../services/UserService/UserService';
import CustomButton from '../../components/Button';
import { InputLogin } from '../../components/InputLogin/style';
import PassWordInput from '../../components/Password';
import { ContainerLogin } from './style';

const Login = () => {
    const [login, setLogin] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [usernameError, setUsernameError] = useState(false);
  
    const userService = new UserService();
    
    const navigation = useNavigation<StackTypes>();

    const handleLogin = async () => {
      const userId = 1;
      //navigation.navigate('ExemploEskeleton');
      if (!login) {
        setUsernameError(true);
        return;
      } else {
        setUsernameError(false);
      }

     /* const isValid = await userService.validateUser(login, password);
      if (isValid) {
        setLogin('');
        setPassword('');
        navigation.navigate('ExemploEskeleton');
      } else {
        alert('Usuário e/ou senha inválidos');
        //Alert.alert('Erro', 'Usuário e/ou senha inválidos');
      }*/
      navigation.navigate('ExemploEskeleton');
    };
  
    return (
      <ContainerLogin>
        <InputLogin  
          placeholder="Loginx"
          onChangeText={setLogin}
          value={login}
        />
        
        <PassWordInput
          placeholder="Password"
          onChangeText={setPassword}
          value={password}
        />
        <CustomButton title='Entrar' onPress={handleLogin}></CustomButton>
        
      </ContainerLogin>
    );
  };
  

export default Login;