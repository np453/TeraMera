import React,{Component} from 'react'
import {View,Text,StyleSheet, FlatList} from 'react-native'
import { withNavigation } from 'react-navigation';


const availableConnections= [{id:"Java"},{id:"C++"},{id:"Python"}];
 class ConnectScreen extends Component{
    static navigationOptions={
        title: "TM"
    };
    render(){
        const renderItem = ({ item }) => {
            return(
                <View style={styles.item}>
               <Text style={styles.title}>{item.id}</Text>
                </View>
            );
        };
        return(
            <View>
                <FlatList data={availableConnections}
                    renderItem={renderItem}
                />
                <Text>hello</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      marginTop: 20,
    },
    item: {
      backgroundColor: '#f9c2ff',
      padding: 20,
      marginVertical: 8,
      marginHorizontal: 16,
    },
    title: {
      fontSize: 32,
    },
  });
  

export default ConnectScreen;