import React, { Component } from 'react'
import {View,Text, Button} from 'react-native'
import {Icon,Foundation} from 'react-native-vector-icons';
import { withNavigation } from 'react-navigation';
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { MaterialCommunityIcons } from '@expo/vector-icons';


// const Tab = createMaterialBottomTabNavigator();
// const BottomTabs = () => {
//     return (
//         <Tab.Navigator

//           initialRouteName="Feed"
//           activeColor="#e91e63"
//           style={{ backgroundColor: 'tomato' }}
//         >
//           <Tab.Screen
//             name="Feed"
//             component={Feed}
//             options={{
//               tabBarLabel: 'Home',
//               tabBarIcon: ({ color }) => (
//                 <MaterialCommunityIcons name="home" color={color} size={26} />
//               ),
//             }}
//           />
//           <Tab.Screen
//             name="Notifications"
//             component={Notifications}
//             options={{
//               tabBarLabel: 'Updates',
//               tabBarIcon: ({ color }) => (
//                 <MaterialCommunityIcons name="bell" color={color} size={26} />
//               ),
//             }}
//           />
//           <Tab.Screen
//             name="Profile"
//             component={Profile}
//             options={{
//               tabBarLabel: 'Profile',
//               tabBarIcon: ({ color }) => (
//                 <MaterialCommunityIcons name="account" color={color} size={26} />
//               ),
//             }}
//           />
//         </Tab.Navigator>
//       );
// }
class MainScreen extends Component{
    static navigationOptions = {
        title : "TERAMERA",
        headerRight : (
            <Button 
                      style={{paddingLeft: 10}}
                onPress={() => {this.props.navigation.navigationOptions.toggleDrawer()}}
                title="list"
            size={30}/>
        )
        }

        
    render(){
        return(
          <View style={{alignItems: 'center', justifyContent: 'center', marginTop: 80}}>
              <Text style={{color:'black'}}>Main Screen</Text>
              {/* <NavigationContainer>
                <BottomTabs/>
              </NavigationContainer> */}
          </View>
        );
    }
}
export default withNavigation(MainScreen);