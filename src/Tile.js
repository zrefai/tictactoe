import React from "react";
import { Text, StyleSheet, Dimensions, TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/Feather";

export const deviceWidth = Dimensions.get("window").width;
export const deviceHeight = Dimensions.get("window").height;

export default class Tile extends React.Component {
  // Render the icon based on what was played
  renderIcon(tag) {
    const xIcon = <Icon name="x" size={60} color="red" />;
    const oIcon = <Icon name="circle" size={60} color="blue" />;

    if (tag === "X") {
      return xIcon;
    } else if (tag === "O") {
      return oIcon;
    } else {
      return null;
    }
  }

  render() {
    return (
      <TouchableOpacity
        style={tileStyles.tileStyle}
        onPress={this.props.onPress}
      >
        <Text style={tileStyles.textStyle}>
          {this.renderIcon(this.props.tag)}
        </Text>
      </TouchableOpacity>
    );
  }
}

const tileStyles = StyleSheet.create({
  tileStyle: {
    width: deviceWidth * 0.25,
    height: deviceWidth * 0.25,
    justifyContent: "center",
    borderWidth: 5,
    borderColor: "black"
  },

  textStyle: {
    textAlign: "center",
    fontSize: 30,
    fontWeight: "bold"
  }
});
