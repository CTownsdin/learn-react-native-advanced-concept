import React, { Component } from 'react';
import { View, Text, Platform } from 'react-native';
import { connect } from 'react-redux';
import { MapView } from 'expo';
import { Card, Button } from 'react-native-elements';
import * as actions from '../actions';
import Swipe from '../components/Swipe';

@connect(state => {
  return { jobs: state.jobs.results };
}, actions)
class DeckScreen extends Component {
  renderCard(job) {
    const initialRegion = {
      longitude: job.longitude,
      latitude: job.latitude,
      longitudeDelta: 0.02,
      latitudeDelta: 0.045,
    };

    let snippet = job.snippet.replace(/<b>/g, '').replace(/<\/b>/g, '');
    if (snippet.length > 123) snippet = snippet.substring(0, 120) + '...';

    let jobtitle = job.jobtitle;
    if (jobtitle.length > 33) jobtitle = jobtitle.substring(0, 30) + '...';

    return (
      <Card title={jobtitle}>
        <View style={{ height: 300 }}>
          <MapView
            scrollEnabled={false}
            style={{ flex: 1 }}
            cacheEnabled={Platform.OS === 'android'}
            initialRegion={initialRegion}
          />
        </View>
        <View style={styles.detailWrapper}>
          <Text>{job.company}</Text>
          <Text>{job.formattedRelativeTime}</Text>
        </View>
        <Text>
          {snippet}
        </Text>
      </Card>
    )
  }

  renderNoMoreCards() {
    return (
      <Card title="No more jobs"></Card>
    )
  }

  render() {
    return (
      <View style={{ marginTop: 10 }}>
        <Swipe
          data={this.props.jobs}
          renderCard={this.renderCard}
          renderNoMoreCards={this.renderNoMoreCards}
          keyProp="jobkey"
          onSwipeRight={job => this.props.likeJob(job)}
        />
      </View>
    );
  }
}

const styles = {
  detailWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 10,
  }
}

export default DeckScreen;
