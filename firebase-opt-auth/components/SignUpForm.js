import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { FormLabel, FormInput, Button, FormValidationMessage } from 'react-native-elements';
import axios from 'axios';

const ROOT_URL = 'https://us-central1-one-time-project-7f632.cloudfunctions.net';

class SignUpForm extends Component {
  state = { phone: '', error: null };

  handleSubmit = async () => {
    this.setState({ error: null });
    try {
      await axios.post(`${ROOT_URL}/createUser`, { phone: this.state.phone })
      await axios.post(`${ROOT_URL}/requestOTP`, { phone: this.state.phone })
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
          {this.state.error && <FormValidationMessage>{this.state.error}</FormValidationMessage>}
        </View>
        <Button
          title="Submit"
          onPress={this.handleSubmit}
        />
      </View>
    );
  }
}

export default SignUpForm;