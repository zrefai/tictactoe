import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/Feather";

export default class GameBoard extends React.Component {
  //Render an icon specific to the current turn
  renderPlayerTurn(prop) {
    const xIcon = (
      <Icon style={statusStyle.iconStyle} name="x" size={60} color="red" />
    );
    const oIcon = (
      <Icon
        style={statusStyle.iconStyle}
        name="circle"
        size={60}
        color="blue"
      />
    );

    if (prop === "X") {
      return xIcon;
    } else if (prop === "O") {
      return oIcon;
    } else {
      return null;
    }
  }

  // Render the current turn, or whether a win or tie has occurred
  gameStatus(playerTurn, status) {
    if (status === "Tie") {
      return (
        <View style={statusStyle.statusContainer}>
          <Text style={statusStyle.textStyle}>Tie</Text>
        </View>
      );
    } else if (status === "Win") {
      return (
        <View style={statusStyle.statusContainer}>
          {this.renderPlayerTurn(playerTurn)}
          <Text style={statusStyle.textStyle}> Wins</Text>
        </View>
      );
    } else if (status === "Play") {
      return (
        <View style={statusStyle.statusContainer}>
          <Text style={statusStyle.textStyle}>Turn: </Text>
          {this.renderPlayerTurn(playerTurn)}
        </View>
      );
    }
  }

  render() {
    return (
      <View style={{ flexDirection: "column", alignContent: "center" }}>
        {this.gameStatus(this.props.playerTurn, this.props.winStatus)}
        <TouchableOpacity
          style={statusStyle.buttonStyle}
          onPress={this.props.onNewGame}
        >
          <Text style={statusStyle.buttonTextStyle}>New Game</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const statusStyle = StyleSheet.create({
  statusContainer: {
    marginVertical: "2%",
    flexDirection: "row",
    alignSelf: "center"
  },
  iconStyle: {
    paddingTop: "2%",
    paddingHorizontal: "1%",
    alignSelf: "center",
    justifyContent: "center"
  },
  textStyle: {
    paddingVertical: "4%",
    textAlign: "center",
    alignSelf: "center",
    justifyContent: "center",
    fontWeight: "500",
    fontSize: 40
  },
  buttonStyle: {
    alignSelf: "center",
    marginVertical: "5%",
    width: "50%",
    backgroundColor: "#fff",
    borderWidth: 2,
    borderRadius: 12,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.8,
    shadowRadius: 3
  },
  buttonTextStyle: {
    textAlign: "center",
    color: "black",
    fontSize: 25,
    fontWeight: "500"
  }
});
