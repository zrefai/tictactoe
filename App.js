/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import Board from './src/Board';
import {SafeAreaView, StyleSheet} from 'react-native';

export default class App extends React.Component {
  render() {
    return (
      <SafeAreaView style={styles.container}>
        <Board />
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
});
