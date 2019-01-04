import React, {Component} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import Header from './src/components/Header'


class App extends Component {
  render() {
    return (
      
      <View style={styles.container}>
        
        <Text style={styles.welcome}>Weather App</Text>
        
      </View>
    );
  }
}

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 2,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
