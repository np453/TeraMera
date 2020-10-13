import React, { Component } from 'react'
import {View,Text} from 'react-native'
import { withNavigation } from 'react-navigation';

 class SendScreen extends Component{
    render(){
        return(
          <View>
              <Text>Send Screen</Text>
          </View>
        );
    }
};

export default withNavigation(SendScreen);