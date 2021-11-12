import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import Constants from 'expo-constants';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Provider as PaperProvider } from 'react-native-paper';

import Comments from './components/Comments';
import About from './components/About';
import Home from './components/Home';
import Profile from './components/Profile';

// or any pure javascript modules available in npm
import { Card } from 'react-native-paper';

const Stack = createNativeStackNavigator();
export default function App() {
  return (
    <PaperProvider>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="Comments" component={Comments} />
          <Stack.Screen name="About" component={About} />
          <Stack.Screen name="Profile" component={Profile} />
        </Stack.Navigator>
      </NavigationContainer>
    </PaperProvider>
  );
}

