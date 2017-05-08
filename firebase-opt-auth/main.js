import Expo from 'expo';
import React from 'react';
import firebase from 'firebase';
import { StyleSheet, View } from 'react-native';
import { Divider, Text } from 'react-native-elements';
import firebaseConfig from './firebase_config.json';
import SignUpForm from './components/SignUpForm';
import SignInForm from './components/SignInForm';

class App extends React.Component {
  componentDidMount() {
    const config = {
      apiKey: firebaseConfig.apiKey,
      authDomain: firebaseConfig.authDomain,
      databaseURL: firebaseConfig.databaseURL,
      projectId: firebaseConfig.projectId,
      storageBucket: firebaseConfig.storageBucket,
      messagingSenderId: firebaseConfig.messagingSenderId
    };
    firebase.initializeApp(config);
  }

  render() {
    return (
	    <View style={styles.container}>
        <View style={styles.title}>
          <Text h3 style={styles.text}>One Time Password</Text>
        </View>
        <View style={styles.form}>
          <SignUpForm />
          <Divider style={styles.divider} />
          <SignInForm />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  form: {
    width: '80%',
  },
  divider: {
    height: 2,
    marginTop: 20,
    marginBottom: 20,
    backgroundColor: '#9C27B0',
  },
  title: {
    alignItems: 'center',
    marginBottom: 60,
  },
  text: {
    color: '#9C27B0',
  }
});

Expo.registerRootComponent(App);
