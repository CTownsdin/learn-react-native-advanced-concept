import React, { Component } from 'react';
import { View, ActivityIndicator } from 'react-native';
import { Text, FormLabel, FormInput, Button, FormValidationMessage } from 'react-native-elements';
import axios from 'axios';

const ROOT_URL = 'https://us-central1-one-time-project-7f632.cloudfunctions.net';

class SignUpForm extends Component {
  state = { phone: '', error: null, loading: false };

  handleSubmit = async () => {
    this.setState({ error: null, loading: true });
    try {
      await axios.post(`${ROOT_URL}/createUser`, { phone: this.state.phone })
      await axios.post(`${ROOT_URL}/requestOTP`, { phone: this.state.phone })

      this.setState({ loading: false });
    } catch (err) {
      this.setState({ error: 'Something went wrong', loading: false });
    }
  }

  render() {
    return (
      <View>
        <Text h4>Sign Up</Text>
        <View style={{ marginBottom: 10 }}>
          <FormLabel>Enter Phone Number</FormLabel>
          <FormInput
            value={this.state.phone}
            onChangeText={phone => this.setState({ phone })}
          />
          {this.state.error && <FormValidationMessage>{this.state.error}</FormValidationMessage>}
        </View>

        {this.state.loading ? <ActivityIndicator size="large" color="#8E24AA" /> :
          <Button
            title="Submit"
            buttonStyle={{ backgroundColor: '#8E24AA' }}
            onPress={this.handleSubmit}
          />
        }
      </View>
    );
  }
}

export default SignUpForm;