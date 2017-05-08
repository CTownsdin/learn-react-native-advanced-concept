import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { FormLabel, FormInput, Button, FormValidationMessage } from 'react-native-elements';
import axios from 'axios';

const ROOT_URL = 'https://us-central1-one-time-project-7f632.cloudfunctions.net';

class SignInForm extends Component {
  state = { phone: '', code: '', error: null };

  handleSubmit = async () => {
    this.setState({ error: null });
    try {
      await axios.post(`${ROOT_URL}/verifyOTP`, { phone: this.state.phone, code: this.state.code })
    } catch (err) {
      this.setState({ error: 'Something went wrong' });
    }
  }

  render() {
    return (
      <View>
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
          onPress={this.handleSubmit}
        />
      </View>
    );
  }
}

export default SignInForm;