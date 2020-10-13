import React, { Component } from 'react'
import {View,Text} from 'react-native'
import { withNavigation } from 'react-navigation';


class ReceiveScreen extends Component{
    render(){
        return(
          <View>
              <Text>Receive Screen</Text>
          </View>
        );
    }
};

export default withNavigation(ReceiveScreen);