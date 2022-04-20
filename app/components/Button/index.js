import React, {useState} from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';

import {buttonStyle} from './style';
const styles = StyleSheet.create(buttonStyle);

const ButtonComponent = props => {
  return (
    <TouchableOpacity style={styles.buttonContainer} onPress={props.onPressButton}>
      <Text style={styles.buttonTitle}>S$ {props.price}</Text>
    </TouchableOpacity>
  );
};

export default ButtonComponent;
