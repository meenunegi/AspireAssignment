/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import type {Node} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Provider} from 'react-redux';

import configureStore from './app/database/store';
import DebitScreen from './app/screen/DebitCardScreen';
import SpendingLimitScreen from './app/screen/SpendingLimitScreen';

const Stack = createNativeStackNavigator();
const store = configureStore();

const App: () => Node = () => {
  // return <SpendingLimitScreen />;
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="Debit"
            component={DebitScreen}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="SpendingLimit"
            component={SpendingLimitScreen}
            options={{headerShown: false}}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
};

export default App;
