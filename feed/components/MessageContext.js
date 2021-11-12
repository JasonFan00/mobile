import React, {useState, useEffect} from 'react';
import { Text, TextInput, View, StyleSheet, Image, Button } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {storeData} from '../utils/storage';
import {useValue} from './ValueContext';

export default function MessageContext({subtext}) {
  const {currentValue} = useValue();
  const randomMessage = currentValue.randomMessage

  return (
    <View>
      <Text style={{textAlign: 'center'}}>
        {randomMessage}
      </Text>
      {subtext}
    </View>
  );
}

