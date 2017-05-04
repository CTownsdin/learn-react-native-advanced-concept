import React, { Component } from 'react';
import { View } from 'react-native';

class Ball extends Component {
  render() {
    return (
      <View style={styles.ball}>
        {this.props.children}
      </View>
    );
  }
}

const styles = {
  ball: {
    height: 60,
    width: 60,
    borderRadius: 30,
    borderWidth: 30,
    borderColor: '#c51162',
  },
};

export default Ball;
