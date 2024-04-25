import { Text, StyleSheet, TouchableOpacity } from "react-native";
import React, { Component } from "react";
import Colors from "@/constants/Colors";
import { View } from "./Themed";

interface ButtonInterface {
  label: string;
  pressefect: any;
}

export default class Button extends Component<ButtonInterface> {
  render() {
    return (
      <View style = {style.container}>
        <TouchableOpacity onPress={ this.props.pressefect } style={style.button}>
          <Text style={style.text}>{this.props.label}</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const style = StyleSheet.create({
  container: {
    marginHorizontal: 8,
    marginVertical: 4,
  },
  button: {
    backgroundColor: Colors.light.tint,
    borderRadius: 8,
  },
  text: {
    color: Colors.light.background,
    textAlign: 'center',
    fontWeight: '700',
    fontSize: 22,
    marginVertical: 16
  },
});
