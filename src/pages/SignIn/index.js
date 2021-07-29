import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import LoginScreen from './login';
import ForgetPassScreen from './forgetPass';
import NewAccountScreen from './newAccount';

const Drawer = createDrawerNavigator();

export default function SignIn({ navigation }) {
  return (
    <Drawer.Navigator initialRouteName="LoginScreen">
      <Drawer.Screen name="Login" component={LoginScreen} />
      <Drawer.Screen name="Nova conta" component={NewAccountScreen} />
      <Drawer.Screen name="Esqueceu a senha?" component={ForgetPassScreen} />
    </Drawer.Navigator>
  );
}

/* 
import { useIsDrawerOpen } from '@react-navigation/drawer';

const isDrawerOpen = useIsDrawerOpen();
 */
