import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Button } from 'react-native-elements';
import { connect } from 'react-redux';
import { clearLikedJobs } from '../actions';

@connect(null, { clearLikedJobs })
class SettingScreen extends Component {
  render() {
    return (
      <View style={{ marginTop: 10 }}>
        <Button
          large
          icon={{ name: 'delete-forever' }}
          backgroundColor="#F44336"
          title="Reset Liked Jobs"
          onPress={this.props.clearLikedJobs}
        />
      </View>
    );
  }
}

export default SettingScreen;