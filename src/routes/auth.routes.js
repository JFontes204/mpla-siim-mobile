import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Login from '../pages/SignIn';
import NewAccount from '../pages/SignIn/newAccount';
import ForgetPass from '../pages/SignIn/forgetPass';
import Dashboard from '../pages/Dashboard';

const AuthStack = createStackNavigator();

export default function AuthRoutes() {
  return (
    <AuthStack.Navigator>
      <AuthStack.Screen name="Login" component={Login} />
      {/* <AuthStack.Screen name="NewAccount" component={NewAccount} /> */}
      <AuthStack.Screen name="ForgetPass" component={ForgetPass} />
      <AuthStack.Screen name="Dashboard" component={Dashboard} />
    </AuthStack.Navigator>
  );
}
