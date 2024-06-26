import { Text, StyleSheet, TouchableOpacity, View } from "react-native";
import React, { Component } from "react";
import Colors from "@/constants/Colors";

interface ButtonInterface {
  label: string;
}

export default class Button extends Component<ButtonInterface> {
  render() {
    return (
      <View style = {style.container}>
        <TouchableOpacity style={style.button}>
          <Text style={style.text}>{this.props.label}</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const style = StyleSheet.create({
  container: {
    marginHorizontal: 8,
    marginVertical: 16
  },
  button: {
    backgroundColor: Colors.light.background,
    borderColor: Colors.light.lightGrey,
    borderWidth: 2,
    borderRadius: 8
  },
  text: {
    color: Colors.light.tint,
    textAlign: 'center',
    fontWeight: '700',
    fontSize: 22,
    marginVertical: 16
  },
});
