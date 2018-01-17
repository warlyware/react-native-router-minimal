import React from 'react';
import {
  StyleSheet,
  Text,
  View,
} from 'react-native';
import { ExpoConfigView } from '@expo/samples';

export default class SettingsScreen extends React.Component {
  static navigationOptions = {
    title: 'Settings',
  };

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.headline}>
          Settings
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#F8759D',
  },
  headline: {
    fontWeight: 'bold',
    fontSize: 30,
    color: 'white',
  }
});
