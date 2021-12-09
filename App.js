import React from 'react';
import { Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MainScreen from './components/MainScreen';
import InfoScreen from './components/InfoScreen';
import Favicon from './assets/favicon.png'

const Tab = createBottomTabNavigator();

const Theme = {
  dark: false,
  colors: {
    primary: '#88C0D0',
    card: '#4C566A',
    text: '#ECEFF4'
  }
}

export default function App() {
  return (
    <NavigationContainer theme={ Theme }>
      <Tab.Navigator>
        <Tab.Screen 
          name='Main' 
          component={ MainScreen }
          options={{
            title: 'Main',
            tabBarIcon: ({ size }) => (
              <Image source={ Favicon } style={{ width: size, height: size }}/>
            )
          }}
        ></Tab.Screen>
        <Tab.Screen 
          name='Info' 
          component={ InfoScreen }
          options={{
            title: 'Info',
            tabBarIcon: ({ size }) => (
              <Image source={ Favicon } style={{ width: size, height: size }}/>
            )
          }}
        ></Tab.Screen>
      </Tab.Navigator>
    </NavigationContainer>
  );
}
