import React, { useState, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Text, View, StyleSheet, Image, TextInput, Button } from 'react-native';

export default function Profile(props) {
  const imges = props.route.params.randImges;
  const [randImg, setRandImg] = useState(imges[Math.floor(Math.random() * imges.length)]);
  const [username, setUsername] = useState(props.route.params.username);
  const chooseRandImg = () => {
    setRandImg(imges[Math.floor(Math.random() * imges.length)])
  }

  const storeName = async (value) => {
      try {
        const jsonValue = JSON.stringify(value);
        console.log(AsyncStorage);
        await AsyncStorage.setItem('@username1', jsonValue);
        alert("Username saved!");
        chooseRandImg();
      } catch (e) {
        console.log("error in storeData ");
        console.log(e);
      }
  }

  const getData = async () => {
        try {
          // the '@profile_info' can be any string
          const jsonValue = await AsyncStorage.getItem('@username1')
          let data = null
          if (jsonValue!=null) {
            data = JSON.parse(jsonValue);
            setUsername(data.username);
            console.log('Retrieved and set data' + data);
          } else {
            setUsername("Anonymous");
          }
        } catch(e) {
          console.log("error in getData");
          console.log(e);
          // error reading value
        }
  }

  // Initialize
  useEffect(() => {getData()}, []);

  return (
    <View style={styles.container}>
      <Text style={styles.header}>
        {props.route.params.greetings}
      </Text>
      <Text style={styles.paragraph}>
        Update your username here
      </Text>
      <View style={styles.username_input}>
        <TextInput placeholder={username} onChangeText={setUsername} textAlign='center'/>
      </View>
      <View style={styles.save_button}>
        <Button
            title={'save'}
            onPress={() => {storeName({'username': username})}}
          />
      </View>
      <Image style={styles.logo} source={{uri: randImg}} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
    padding: 24,
  },
  header: {
    fontWeight: 'bold',
    textAlign: 'center',
    fontSize: 20,
  },
  username_input: {
    paddingTop: 20
  },
  paragraph: {
    margin: 24,
    marginTop: 0,
    fontSize: 14,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  save_button: {
    paddingTop: 10,
  },
  logo: {
    height: 128,
    width: 128,
  }
});