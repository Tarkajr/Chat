import React from 'react';
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Button,
  TextInput
} from 'react-native';
export default class ResetPasswordScreen extends React.Component {

  constructor() {
    super();
    this.state = {
      username: '',
      password: ''
    }
  }

  render() {
    return (
      <View style={styles.container}>
      <Text style={styles.header}>Reset</Text>
      <TextInput style={styles.textInput} placeholder={'Username'}/>
      <TextInput style={styles.textInput} placeholder={'Password'}/>
      <Button title="Reset" style={styles.button}/>
      <Button title="Back" style={styles.button} onPress={() => this.props.navigation.navigate('Welcome')}/>
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
