import React from 'react'
import { StyleSheet, Text, View, AsyncStorage } from 'react-native'
import { createSwitchNavigator, createStackNavigator,createDrawerNavigator,
  createBottomTabNavigator} from 'react-navigation'
import AuthScreen from './screens/AuthScreen'
import WelcomeScreen from './screens/WelcomeScreen'
import SignUpScreen from './screens/SignUpScreen'
import ProfileScreen from './screens/ProfileScreen'
import ResetPasswordScreen from './screens/ResetPasswordScreen'


const AuthStack = createStackNavigator({
  Welcome: {
    screen: WelcomeScreen,
    navigationOptions: () => ({
      title: null, // for the header screen
      headerBackTitle: 'Back'
    }),
  },
  SignUp: {
    screen: SignUpScreen,
    navigationOptions: () => ({
      title: `Create a new account`,
    }),
  },
  ResetPassword: {
    screen: ResetPasswordScreen,
    navigationOptions: () => ({
      title: `Reset Password`,
    }),
  },
})

const AppStack = createStackNavigator({
  Profile: {
    screen: ProfileScreen,
    navigationOptions: () => ({
      title: null, // for the header screen
      headerBackTitle: 'Back'
    }),
  }
})

export default createSwitchNavigator({
  AuthLoading: AuthScreen,
  Auth: AuthStack,
  App: AppStack
})

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
})
