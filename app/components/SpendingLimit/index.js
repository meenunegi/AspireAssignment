import React, {useState, useEffect} from 'react';
import {Image, StyleSheet, Text, View, TouchableOpacity} from 'react-native';

import AppConstant from '../Constant';
import ButtonComponent from '../Button';
import {spendingLimitStyle} from './style';
const styles = StyleSheet.create(spendingLimitStyle);

const SpendingLimitComponent = props => {

  const [amount, setAmount] = useState('5,000');

  useEffect(() => {
    const limitValue = props.limitAmount;
    setAmount(limitValue);
  }, [props.limitAmount]);
  return (
    <View style={styles.container}>
      <View style={styles.rowContainer}>
        <Image source={require('../../assets/Group/Group.png')} />
        <Text style={{fontSize: 14, marginLeft: 15}}>
          {AppConstant.SET_WEEKELY_DEBIT_LIMIT}
        </Text>
      </View>

      <View style={styles.priceContainer}>
        <View style={styles.pricebox}>
          <Text style={styles.dollarText}>{AppConstant.DOLLAR}</Text>
        </View>
        <Text style={styles.priceText}>{amount}</Text>
      </View>
      <View style={styles.line} />
      <Text style={styles.textline}>{AppConstant.HERE_WEEKELY_MEANS}</Text>
      <View style={styles.rowButtonContainer}>
        <ButtonComponent
          price={'5,000'}
          onPressButton={() => setAmount('5,000')}
        />
        <ButtonComponent
          price={'10,000'}
          onPressButton={() => setAmount('10,000')}
        />
        <ButtonComponent
          price={'20,000'}
          onPressButton={() => setAmount('20,000')}
        />
      </View>

      <TouchableOpacity
        style={styles.saveBtnContainer}
        onPress={() => props.onSavePress(amount)}>
        <Text style={styles.btnText}>{AppConstant.SAVE}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default SpendingLimitComponent;
