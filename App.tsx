import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { RegisterScreen } from './src/screens/RegisterScreen';
import { LoginScreen } from './src/screens/LoginScreen';
import { StackNavigator } from './src/navigator/StackNavigator';


const Stack = createNativeStackNavigator();

export function App() {
  return (
    <NavigationContainer>
       <StackNavigator/>
    </NavigationContainer>
  );
}
export default App;