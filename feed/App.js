import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import Constants from 'expo-constants';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


import Feed from './components/Feed';
import About from './components/About';
import Home from './components/Home';

import { Card } from 'react-native-paper';
import Profile from './components/Profile';

const Stack = createNativeStackNavigator();

export default function App() {
  const imges = ['https://static01.nyt.com/images/2021/09/14/science/07CAT-STRIPES/07CAT-STRIPES-mediumSquareAt3X-v2.jpg',
                 'https://c.files.bbci.co.uk/151AB/production/_111434468_gettyimages-1143489763.jpg',
                 'https://i.natgeofe.com/n/f0dccaca-174b-48a5-b944-9bcddf913645/01-cat-questions-nationalgeographic_1228126_2x3.jpg',
                 'https://www.rd.com/wp-content/uploads/2021/04/GettyImages-988013222-scaled-e1618857975729.jpg',
                 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQtwDUT66rGcuOz3urrDnrpYFWn5dMoWTm-Yg&usqp=CAU'];
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Feed" component={Feed} />
        <Stack.Screen name="About" component={About} />
        <Stack.Screen name="Profile" component={Profile} initialParams={{'randImges': imges, 'username':'Anon', 'greetings': 'Hello!'}} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#ecf0f1',
    padding: 8,
  },
  paragraph: {
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

