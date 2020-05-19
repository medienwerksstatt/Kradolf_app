import React, { Component } from 'react'
import { View, Text, TouchableOpacity, Image } from 'react-native';
import Logo from '../images/Logo.svg'
import Icon from 'react-native-vector-icons/FontAwesome5';








function MyTabBar({ state, descriptors, navigation }) {





  const icons = ['home','bell', 'compress-arrows-alt', 'ellipsis-h' ];
  const colors = ['', '#27b273', '#00acac', '#de2a39'];
   

  return (
    <View style={{ flexDirection: 'row'}}>
      {state.routes.map((route, index) => {
        const { options } = descriptors[route.key];
        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
            ? options.title
            : route.name;


        

        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name);
          }
        };

        const onLongPress = () => {
          navigation.emit({
            type: 'tabLongPress',
            target: route.key,
          });
        };

        return (
          <TouchableOpacity
            accessibilityRole="button"
            accessibilityStates={isFocused ? ['selected'] : []}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            testID={options.tabBarTestID}
            onPress={onPress}
            onLongPress={onLongPress}
            style={{ flex: 1, height: 60, justifyContent: 'center', alignItems: 'center', backgroundColor: isFocused ? colors[index] : Colors.tabColor }}
          >
            <Icon name={icons[index]} size={20} color="white" />
            <Text style={{ color: 'white' , fontSize: 10, fontWeight: 'bold', marginTop: 3 }}>
              {label}
            </Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
}



export default MyTabBar;

