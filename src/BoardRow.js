import React from 'react';
import {View} from 'react-native';
import Tile from './Tile';

export default class BoardRow extends React.Component {
  render() {
    return (
      <View style={{flexDirection: 'row'}}>
        <Tile
          tag={this.props.tiles[this.props.index]}
          onPress={this.props.handleMove.bind(this.props, this.props.index)}
        />
        <Tile
          tag={this.props.tiles[this.props.index + 1]}
          onPress={this.props.handleMove.bind(this.props, this.props.index + 1)}
        />
        <Tile
          tag={this.props.tiles[this.props.index + 2]}
          onPress={this.props.handleMove.bind(this.props, this.props.index + 2)}
        />
      </View>
    );
  }
}
