import React, { Component } from 'react';

import { StyleSheet, View, Button, Image } from 'react-native';

export default class Home extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Image source={{uri: 'https://static.vidyo.io/'}} style={{width: 256, height: 256}} />
        <Button title="Start conference" onPress={() => this.props.navigation.navigate('Conference')} />
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
});