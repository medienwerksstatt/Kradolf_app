/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {Component} from 'react';
import {

} from 'react-native';



import NewsScreen from './screens/NewsScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from './screens/HomeScreen';
import EventsScreen from './screens/EventsScreen';
import MyTabBar from './components/myTabBar';
import MoreScreen from './screens/MoreScreen';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import SbbScreen from './screens/SbbScreen';
import MitteilungScreen from './screens/MitteilungScreen';
import FristScreen from './screens/FristScreen';
import FotosScreen from './screens/FotosScreen';
import DetaisViews from './Views/DetialsView'



function NewsScreenSplashi() {
  return (
  <Tab.Navigator tabBar={props => <MyTabBar {...props} />} >
  <Tab.Screen name="Startseite" component={HomeScreen} options={{tabBarVisible: false}}  />
  <Tab.Screen name="News" component={NewsScreen} />
  <Tab.Screen name="Veranstaltungen" component={EventsScreen} />
  <Tab.Screen name="Mehr" component={MoreScreen} listeners={{
    tabPress: e => {
      // Prevent default action
      e.preventDefault();
      console.log('Hallo')
    },
  }}  />
</Tab.Navigator>
  )
}




const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();


export default function App() {
  return (
    <EventsScreen/>
    // <NavigationContainer>
    //   <Stack.Navigator>
    //     <Stack.Screen name="Home" component={NewsScreenSplashi} options={{headerShown: false}}  />
    //     <Stack.Screen name="News" component={NewsScreenSplashi} />
    //     <Stack.Screen name="Sbb" component={SbbScreen} />
    //     <Stack.Screen name="Veranstaltungen" component={EventsScreen} />
    //     <Stack.Screen name="Fristverlängerung" component={FristScreen} />
    //     <Stack.Screen name="Fotos" component={FotosScreen} />
    //     <Stack.Screen name="Details" component={DetaisViews}  
    //     options={
    //         ({ route }) => ({ title: route.params.name, headerTitleStyle: {

    //           fontWeight: '300',
    //           maxWidth: 300,
    //           fontSize: 18,
    //         },
    //         headerTitleAlign: 'center',
    //       })
    //     } 
    //     />

    //   </Stack.Navigator>
    // </NavigationContainer>
  );
}


