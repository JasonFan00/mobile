import React, {useState, useEffect} from 'react';
import { SafeAreaView, FlatList, Text, View, StyleSheet, Image } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {storeData} from '../utils/storage';
import ValueProvider from './ValueContext';
import MessageContext from './MessageContext';
import { Card, Title, Button, TextInput } from 'react-native-paper';

export default function Comments(props) {
  const data = {
    ["First Name"]: "(N/A)",
    ["Last Name"]: "(N/A)"
  }
  const [tempProfileData, setTempProfileData] = useState(data);
  const [profileData, setProfileData] = useState(data);
  const storageKey = "@profile2";
  const messageData = {randomMessage: "Context Message!"};
  const loadData = async () => {
    try {
      const jsonValue = await AsyncStorage.getItem(storageKey)
      let data = null
      if (jsonValue != null) {
        data = JSON.parse(jsonValue);
        setProfileData(data);
      }
      console.log("LOADED", JSON.stringify(data));
    } catch(e) {
      console.log("error in getData");
      console.log(e);
      // error reading value
    }
  }
  const updateProfileDataTemp = (key, val) => {
    let newData = JSON.parse(JSON.stringify(tempProfileData));
    newData[key] = val
    setTempProfileData(newData);
  }

  const updateProfileDataActual = () => {
    let newData = JSON.parse(JSON.stringify(tempProfileData));
    setProfileData(newData);
  }

  useEffect(() => {
    loadData();
  }, []);

  useEffect(() => {
    storeData(storageKey, profileData);
  }, [profileData]);
  
  const Item = ({ key, val }) => (
    <View>
      <Text>
        {key}:
      </Text>
      <TextInput
        onChangeText={text => updateProfileDataTemp(key, text)}
        style={styles.comment_input}
        placeholder={val}/>
    </View>
  );

  const renderItem = ({ key, val }) => (
    <Item key={key, val}/>
  );
  
  return (
    <View style={styles.container}>
      <Text style={styles.header}>
        Your Profile
      </Text>
      <ValueProvider value={messageData}>
        <View style={{paddingTop: 5}}>
          <MessageContext subtext={<Card.Title subtitle="Subtext Container Component"/>}/>
        </View>
      </ValueProvider>
      <View style={{paddingTop: 15}}>
        {Object.entries(profileData).map(([key, value]) => {
          console.log("Profile Data", key);
          // Pretty straightforward - use key for the key and value for the value.
          // Just to clarify: unlike object destructuring, the parameter names don't matter here.
          return(
            <View>
              <Text>
                {key}:
              </Text>
              <TextInput
                onChangeText={text => updateProfileDataTemp(key, text)}
                style={styles.comment_input}
                placeholder={value}/>
            </View>
          );
        })}
      </View>
      <View style={styles.add_section}>
        <Button
          onPress={updateProfileDataActual}
          title={'SAVE PROFILE!'}
        >
          SAVE PROFILE!
        </Button>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
    flex: 1
  },
  comment_input: {
    fontSize: 15,
    marginTop: 15,
    marginBottom: 15
  },
  add_section: {
    paddingBottom: 20
  },
  header: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
