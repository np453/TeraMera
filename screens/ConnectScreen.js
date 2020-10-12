import React,{Component} from 'react'
import {View,Text,StyleSheet, FlatList} from 'react-native'

const availableConnections= ["Java","C++","Python"];
export default class ConnectScreen extends Component{
    static navigationOptions={
        title: "TM"
    };
    render(){
        return(
            <View>
                <Flatlist data={this.availableConnections}
                    renderItem={({item})=>{
                           <View>
                               <Text>{item}</Text>
                           </View>
                    }
                    }
                />
                
            </View>
        );
    }
}