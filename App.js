import React from 'react';
import { createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation';

import { HomeNavigator } from './src/views/homeNavigator';

import { AuthScreen } from './src/views/authScreen';
import { LoginScreen } from './src/views/loginScreen';
import { RegisterScreen } from './src/views/registerScreen';
import { ForgotScreen } from './src/views/forgotScreen';

export default class App extends React.Component {
    render() {
      return <AppNavigator />;
    }
}

const AuthNavigator = createStackNavigator(
    {
        Choose: AuthScreen,
        Login: LoginScreen,
        Register: RegisterScreen,
        Forgot: ForgotScreen
    },
    {
        initialRouteName: 'Choose',
    }
);

const AppNavigator = createSwitchNavigator(
    {
        Auth: AuthNavigator,
        Home: HomeNavigator
    },
    {
        initialRouteName: 'Auth'
    }
);