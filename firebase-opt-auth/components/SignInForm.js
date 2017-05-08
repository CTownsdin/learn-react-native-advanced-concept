import React, { Component } from 'react';
import { View } from 'react-native';
import { Text, FormLabel, FormInput, Button, FormValidationMessage } from 'react-native-elements';
import axios from 'axios';
import firebase from 'firebase';

const ROOT_URL = 'https://us-central1-one-time-project-7f632.cloudfunctions.net';

class SignInForm extends Component {
  state = { phone: '', code: '', error: null };

  handleSubmit = async () => {
    this.setState({ error: null });
    try {
      let { data } = await axios.post(`${ROOT_URL}/verifyOTP`, { phone: this.state.phone, code: this.state.code })

      firebase.auth().signInWithCustomToken(data.token);
    } catch (err) {
      this.setState({ error: 'Something went wrong' });
    }
  }

  render() {
    return (
      <View>
        <Text h4>Sign In</Text>

        <View style={{ marginBottom: 10 }}>
          <FormLabel>Enter Phone Number</FormLabel>
          <FormInput
            value={this.state.phone}
            onChangeText={phone => this.setState({ phone })}
          />
        </View>

        <View style={{ marginBottom: 10 }}>
          <FormLabel>Enter Code</FormLabel>
          <FormInput
            value={this.state.code}
            onChangeText={code => this.setState({ code })}
          />
        </View>

        {this.state.error && <FormValidationMessage>{this.state.error}</FormValidationMessage>}

        <Button
          title="Submit"
          buttonStyle={{ backgroundColor: '#8E24AA' }}
          onPress={this.handleSubmit}
        />
      </View>
    );
  }
}

export default SignInForm;