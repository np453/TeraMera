// /* eslint-disable react-native/no-inline-styles */
// /* eslint-disable react/react-in-jsx-scope */
// /* eslint-disable prettier/prettier */
import React from 'react'
import {
  createSwitchNavigator,
  createDrawerNavigator,
  createAppContainer,
} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack'
import MainScreen from './MainScreen';
import ConnectScreen from './ConnectScreen.js';
import ReceiveScreen from './ReceiveScreen.js';
import SendScreen from './SendScreen.js';
import {Icon,Foundation} from 'react-native-vector-icons';



const MainStackNavigator = createStackNavigator(
  {
    screen: MainScreen,
  },
  {
    navigationOptions: ({navigation}) => {
      return {
        headerTitle: "Main",
        headerRight: (
          <Button
            style={{paddingLeft: 10}}
            onPress={() => {navigation.openDrawer()}}
            title="list"
            size={30}
          />
        ),
      };
    },
  },
);

const ConnectStackNavigator = createStackNavigator(
  {
    screen: ConnectScreen,
  },
  {
    navigationOptions: ({navigation}) => {
      return {
        headerRight: (
          <Button
            style={{paddingLeft: 10}}
            onPress={() => navigation.navigationOptions.toggleDrawer()}
            title="md-menu"
            size={30}
          />
        ),
      };
    },
  },
);

const ReceiveStackNavigator = createStackNavigator(
  {
    screen: ReceiveScreen,
  },
  {
    navigationOptions: ({navigation}) => {
      return {
        headerLeft: (
          <Icon
            style={{paddingLeft: 10}}
            onPress={() => navigation.openDrawer()}
            name="md-menu"
            size={30}
          />
        ),
      };
    },
  },
);

const SendStackNavigator = createStackNavigator(
  {
    screen: SendScreen,
  },
  {
    navigationOptions: ({navigation}) => {
      return {
        headerLeft: (
          <Icon
            style={{paddingLeft: 10}}
            onPress={() => navigation.openDrawer()}
            name="md-menu"
            size={30}
          />
        ),
      };
    },
  },
);

const AppDrawerNavigator = createDrawerNavigator({
  Main: {
    screen: MainStackNavigator,
  },
  Connect: {
    screen: ConnectStackNavigator,
  },
  Send: {
    screen: SendStackNavigator,
  },
  Receive: {
    screen: ReceiveStackNavigator,
  },
});

const AppSwitchNavigator = createSwitchNavigator({
  Main: {
    screen: AppDrawerNavigator,
  },
  Connect: {
    screen: ConnectScreen,
  },
  Send: {
    screen: SendScreen,
  },
  Receive: {
    screen: ReceiveScreen,
  },
});

const AppContainer = createAppContainer(AppSwitchNavigator);
export default AppContainer ;
