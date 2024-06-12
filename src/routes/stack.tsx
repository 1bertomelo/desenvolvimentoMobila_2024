import * as React from 'react';
import { NavigationContainer} from '@react-navigation/native';
import { createNativeStackNavigator, NativeStackNavigationProp } from '@react-navigation/native-stack';
import Home from '../screens/Home';
import Home2 from '../screens/Home2';
import Home3 from '../screens/Home3';
import Login from '../screens/Login';
import Details from '../screens/Details';
import ExemploEskeleton from '../screens/ExemploEskeleton';
import { RouteProp } from '@react-navigation/native';
import ExemploData from '../screens/exemploData';
import ExemploMonetario from '../screens/exemploMonetario';
import Splash from '../screens/Splash';

const Stack = createNativeStackNavigator();

type StackNavigation = {
    Splash : undefined;
    Home : undefined;
    Home2 : undefined;
    Home3 : undefined;
    Login : undefined;
    Details: { userId : number | undefined};
    ExemploEskeleton: undefined;
    ExemploData: undefined;
    ExemploMonetario: undefined;
}

export type RootStackParamList = {
    Splash : undefined;
    Home: undefined;
    Home2: undefined;
    Home3: undefined;
    Login: undefined;
    Details: { userId: number};
    ExemploEskeleton: undefined;
    ExemploData: undefined;
    ExemploMonetario: undefined;

};

export type StackTypes = NativeStackNavigationProp<StackNavigation>

export type StackNavigationProp<ScreenName extends keyof RootStackParamList> = NativeStackNavigationProp<RootStackParamList, ScreenName>;
export type StackRouteProp<ScreenName extends keyof RootStackParamList> = RouteProp<RootStackParamList, ScreenName>;

export default function StackComponent(){
    return (
        <NavigationContainer>
            <Stack.Navigator>
             {/* <Stack.Screen name="Splash" component={Splash} options={{ headerShown: false */}
                <Stack.Screen  name="Login" component={Login}   options={{headerShown: false }}  />
                <Stack.Screen  name="Home" component={Home} />
                <Stack.Screen  name="Home2" component={Home2} />
                <Stack.Screen  name="Home3" component={Home3} />
                <Stack.Screen  name="Details" component={Details}   />
                <Stack.Screen  name="ExemploEskeleton" component={ExemploEskeleton}   />
                <Stack.Screen  name="ExemploData" component={ExemploData}   />
                <Stack.Screen  name="ExemploMonetario" component={ExemploMonetario}   />
            </Stack.Navigator>
        </NavigationContainer>

    );
}