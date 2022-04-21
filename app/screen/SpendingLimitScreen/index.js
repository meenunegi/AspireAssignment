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
      <View style={{backgroundColor: 'white'}}>
        <View style={styles.mainContainer}>
          <View style={styles.innerContainer}>
            <Image
              source={require('../../assets/Logo/Logo.png')}
              style={styles.imageContainer}
            />
            <Text style={styles.title}>{AppConstant.SPENDING_LIMIT}</Text>
          </View>
          <ScrollView
            contentContainerStyle={{flex: 1}}
            style={{height: '100%', marginTop: -100, paddingTop: 100}}
            allowBounceVertical={true}>
            <SpendingLimitComponent
              onSavePress={amount => this.onSaveClicked(amount)}
              limitAmount={balanceLimitValue}
            />
          </ScrollView>
        </View>
      </View>
    );
  }
}

function mapStateToProps(state) {
  return {
    balanceLimitValue: state.amount.balanceLimitValue,
  };
}

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
