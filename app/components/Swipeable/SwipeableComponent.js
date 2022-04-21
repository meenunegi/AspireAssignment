import React, {useState} from 'react';
import {Image, StyleSheet, Text, View, Switch, Platform} from 'react-native';
import {ProgressBar} from 'react-native-paper';
import {useNavigation} from '@react-navigation/native';

import AppConstant from '../Constant';
import DebitCardComponent from '../DebitCard';
import {swipeableStyle} from './style';
const styles = StyleSheet.create(swipeableStyle);

const SwipeableComponent = props => {
  const {navigate} = useNavigation();
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);
  return (
    <View style={styles.swipeContainer}>
      <DebitCardComponent cardDetails={props.cardDetails} />
      <View style={{top: '-8%'}}>
        <View style={styles.rowContent}>
          <Text style={styles.debitCardLimitText}>
            {AppConstant.DEBIT_CARD_LIMIT}
          </Text>
          <View style={{flexDirection: 'row'}}>
            <Text style={{color: '#01D167'}}>$345</Text>
            <Text style={{color: '#22222233', marginHorizontal: 10}}>|</Text>
            <Text style={{color: '#22222233'}}>$5,000</Text>
          </View>
        </View>
        <ProgressBar
          progress={0.3}
          color={'#01D167'}
          style={styles.progressBar}
        />
        <View style={styles.rowContainer}>
          <Image source={require('../../assets/insight/insight.png')} />
          <View style={{paddingLeft: 10}}>
            <Text style={styles.heading}>{AppConstant.TOP_UP_ACC}</Text>
            <Text style={styles.greyText}>{AppConstant.DEPOSIT_MONEY_ACC}</Text>
          </View>
        </View>
        <View style={styles.rowContainer}>
          <Image source={require('../../assets/Transfer/Transfer.png')} />
          <View style={{paddingLeft: 10, flex: 1}}>
            <Text style={styles.heading}>
              {AppConstant.WEEKELY_SPENDING_LIMIT}
            </Text>
            <Text style={styles.greyText}>
              {AppConstant.YOUR_WEEKELY_SPENDING + AppConstant.DOLLAR} 5,000
            </Text>
          </View>
          <Switch
            trackColor={{false: '#f4f3f4', true: '#01D167'}}
            thumbColor={isEnabled ? '#f4f3f4' : '#f4f3f4'}
            onValueChange={() => {
              toggleSwitch();
              navigate('SpendingLimit');
            }}
            value={isEnabled}
            style={{
              transform:
                Platform.OS === 'ios'
                  ? [{scaleX: 0.6}, {scaleY: 0.6}]
                  : [{scaleX: 0.8}, {scaleY: 0.8}],
            }}
          />
        </View>
        <View style={styles.rowContainer}>
          <Image source={require('../../assets/FreezeCard/FreezeCard.png')} />
          <View style={{paddingLeft: 10}}>
            <Text style={styles.heading}>{AppConstant.FREEZE_CARD}</Text>
            <Text style={styles.greyText}>
              {AppConstant.YOUR_DEBIT_CARD_ACTIVE}
            </Text>
          </View>
        </View>
        <View style={styles.rowContainer}>
          <Image source={require('../../assets/newCard/newCard.png')} />
          <View style={{paddingLeft: 10}}>
            <Text style={styles.heading}>{AppConstant.GET_NEW_CARD}</Text>
            <Text style={styles.greyText}>
              {AppConstant.DEACTIVATE_CURRENT_CARD}
            </Text>
          </View>
        </View>
        <View style={styles.rowContainer}>
          <Image source={require('../../assets/deactivate/deactivate.png')} />
          <View style={{paddingLeft: 10}}>
            <Text style={styles.heading}>{AppConstant.DEACTIVATED_CARD}</Text>
            <Text style={styles.greyText}>
              {AppConstant.PREVIUOS_DEACTIVATED_CARD}
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export default SwipeableComponent;
