import React, {Component} from 'react';
import {Image, StyleSheet, Text, View, ScrollView} from 'react-native';

import SwipeableComponent from '../../components/Swipeable/SwipeableComponent';
import AppConstant from '../../components/Constant';
import {debitStyle} from './style';

const styles = StyleSheet.create(debitStyle);

export default class DebitScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      availableBal: null,
      cardDetails: null,
    };
  }

  componentDidMount() {
    fetch('https://mocki.io/v1/a4182f57-f797-4f75-936f-d94f78239d68')
      .then(response => response.json())
      .then(responseJson => {
        if (responseJson.statusCode === 200) {
          let cardData = {
            cardName: responseJson?.data?.cardName,
            cardCvv: responseJson?.data?.cvv,
            cardExpiryDate: responseJson?.data?.expiryDate,
          };
          this.setState({
            availableBal: responseJson?.data?.availableBalance,
            cardDetails: cardData,
          });
        }
      })
      .catch(error => console.log(error)); //to catch the errors if any
  }

  render() {
    const {availableBal} = this.state;
    return (
      <View style={styles.mainContainer}>
        <View
          style={{ paddingHorizontal: 24,}}
          // style={styles.imageContainer}
          >
          <Image
            source={require('../../assets/Logo/Logo.png')}
            style={styles.imageContainer}
          />
          <Text style={styles.title}>{AppConstant.DEBIT_CARD}</Text>
          <Text style={styles.avlBalText}>{AppConstant.AVL_BALANCE}</Text>
          <View style={styles.priceContainer}>
            <View style={styles.pricebox}>
              <Text style={styles.dollarText}>{AppConstant.DOLLAR}</Text>
            </View>
            <Text style={styles.priceText}>{availableBal}</Text>
          </View>
        </View>
        <ScrollView
          // scrollEventThrottle={16}
          // stickyHeaderIndices={[0]}
          style={{height: '100%', marginTop: -100, paddingTop: 100}}
          allowBounceVertical={true}>
          <SwipeableComponent />
        </ScrollView>
      </View>
    );
  }
}
