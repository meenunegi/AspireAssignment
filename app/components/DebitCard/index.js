import React, {useState} from 'react';
import {Image, StyleSheet, Text, View, TouchableOpacity} from 'react-native';

import AppConstant from '../Constant';
import {debitCardStyle} from './style';
const styles = StyleSheet.create(debitCardStyle);

const DebitCardComponent = props => {
  const [isShow, setIsShow] = useState(true);
  let showText = !isShow
    ? AppConstant.SHOW_CARD_NUMBER
    : AppConstant.HIDE_CARD_NUMBER;
  let showImage = !isShow
    ? require('../../assets/remove_red_eye/remove_red_eye.png')
    : require('../../assets/hide_eye/hide_eye.png');

  const cardNum = isShow
    ? AppConstant.CARD_NUMBER
    : AppConstant.CARD_NUMBER_HIDE;

  let cardHolderName = AppConstant.NAME;
  let cvv = AppConstant.CVV;
  let expiryDate = AppConstant.EXPIRY_DATE;

  if (props.cardDetails !== null) {
    let {cardName, cardCvv, cardExpiryDate} = props.cardDetails;
    cardHolderName = cardName;
    cvv = cardCvv;
    expiryDate = cardExpiryDate;
  }
  cvv = isShow ? cvv : AppConstant.CVV_HIDE;
  return (
    <View>
      <TouchableOpacity
        style={styles.showCardContainer}
        onPress={() => setIsShow(!isShow)}>
        <Image source={showImage} style={{marginBottom: 10}} />
        <Text style={styles.showCardText}>{showText}</Text>
      </TouchableOpacity>
      <View style={styles.card}>
        <Image
          source={require('../../assets/AspireLogo/AspireLogo.png')}
          style={styles.aspireLogo}
        />
        <Text style={styles.name}>{cardHolderName}</Text>
        <Text style={[styles.aspireText, {letterSpacing: 2}]}>{cardNum}</Text>
        <View style={styles.cardCvvContainer}>
          <Text style={styles.aspireText}>Thru: {expiryDate}</Text>
          <Text style={[styles.aspireText, {marginLeft: 30, letterSpacing: 1}]}>
            CVV: {cvv}
          </Text>
        </View>
        <Image
          source={require('../../assets/VisaLogo/VisaLogo.png')}
          style={styles.visaLogo}
        />
      </View>
    </View>
  );
};

export default DebitCardComponent;
