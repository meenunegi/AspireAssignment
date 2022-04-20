import React, {Component} from 'react';
import {
  Image,
  Animated,
  StyleSheet,
  Text,
  View,
  ScrollView,
  Alert,
} from 'react-native';
import {connect} from 'react-redux';

import {balanceLimitUpdate} from '../../database/action';
import SpendingLimitComponent from '../../components/SpendingLimit';
import AppConstant from '../../components/Constant';
import {spendingStyle} from './style';

let AnimatedHeaderValue = new Animated.Value(0);
const Header_Maximum_Height = 180;
//Max Height of the Header
const Header_Minimum_Height = 0;
//Min Height of the Header

const animateHeaderHeight = AnimatedHeaderValue.interpolate({
  inputRange: [0, Header_Maximum_Height - Header_Minimum_Height],
  outputRange: [Header_Maximum_Height, Header_Minimum_Height],
  extrapolate: 'clamp',
});
const styles = StyleSheet.create(spendingStyle);

class SpendingLimitScreen extends Component {
  constructor(props) {
    super(props);
  }

  onSaveClicked = amount => {
    this.props.onUpdateBalanceLimit(amount);
    Alert.alert('Updated Successfully!!!', 'Data Saved in Redux.', [
      {
        text: 'Cancel',
      },
      {text: 'OK', onPress: () => this.props.navigation.navigate('Debit')},
      ,
    ]);
  };

  render() {
    const {balanceLimitValue} = this.props;
    return (
      <View style={{flex: 1, backgroundColor: 'white'}}>
        <View style={styles.mainContainer}>
          <Animated.View
            style={[
              styles.innerContainer,
              {
                height: animateHeaderHeight,
              },
            ]}>
            <Image
              source={require('../../assets/Logo/Logo.png')}
              style={styles.imageContainer}
            />
            <Text style={styles.title}>{AppConstant.SPENDING_LIMIT}</Text>
          </Animated.View>
        </View>
        <ScrollView
          // scrollEventThrottle={16}
          scrollEnabled={false}
          style={{borderRadius: 30, top: -70}}
          allowBounceVertical={true}
          onScroll={Animated.event(
            [{nativeEvent: {contentOffset: {y: AnimatedHeaderValue}}}],
            {useNativeDriver: false},
          )}>
          <SpendingLimitComponent
            onSavePress={amount => this.onSaveClicked(amount)}
            limitAmount={balanceLimitValue}
          />
        </ScrollView>
      </View>
    );
  }
}

function mapStateToProps(state) {
  return {
    balanceLimitValue: state.amount.balanceLimitValue,
  };
}

// const ActionCreators = Object.assign({}, balanceLimitUpdate);

export function mapDispatchToProps(dispatch) {
  return {
    onUpdateBalanceLimit: data => {
      dispatch(balanceLimitUpdate(data));
    },
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(SpendingLimitScreen);
