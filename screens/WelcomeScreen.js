import React from 'react';
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  AsyncStorage,
  View,
  Button,
  TextInput
} from 'react-native';

export default class WelcomeScreen extends React.Component {

  constructor() {
    super();
    this.state = {
      username: '',
      password: ''
    }
  }

  handleLogin = async () => {
    await AsyncStorage.setItem('userToken', '123456789')
    this.props.navigation.navigate('AuthLoading')
  }

  render() {
    return (
      <View style={styles.container}>
      <Text style={styles.header}>Chat</Text>
      <TextInput style={styles.textInput} placeholder={'Username'}/>
      <TextInput style={styles.textInput} placeholder={'Password'}/>
      <Button title="Login" style={styles.button} onPress={this.handleLogin}/>
      <Button title="Signup" style={styles.button} onPress={() => this.props.navigation.navigate('SignUp')}/>
      <Button title="Reset Password" style={styles.button} onPress={() => this.props.navigation.navigate('ResetPassword')}/>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#e0e0e0',
    margin: 10,
  },
  header: {
    fontSize: 100,
    color: '#00b0ff',
    margin: 60,

    fontFamily: 'SnellRoundhand-Bold',
    marginBottom: 40,
  },
  button: {
    fontSize: 30,
    color: '#00b0ff',
    fontWeight: "100",
    fontFamily: 'AppleSDGothicNeo-Thin',
    margin: 5,
  },
  textInput: {
    padding: 5,
    alignItems: 'center',
    justifyContent: 'center',
    width: 240,
    height: 40,
    borderWidth: 1,
    borderColor: '#757575',
    marginLeft: 67,
    marginBottom: 3,
    borderRadius: 5,
    backgroundColor: '#e3f2fd'
  }
});
