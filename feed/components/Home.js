import React, {useState, useEffect} from 'react';
import { Text, View, StyleSheet, Image, Alert } from 'react-native';
import { Title, Button, TextInput, IconButton } from 'react-native-paper';
import {storeData} from '../utils/storage';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Category from './Category'
import ValueProvider from './ValueContext';
import Profile from './Profile';

export default function Home({navigation}) {
  const [addCategoryText, setAddCategoryText] = useState(null);
  const [categoryData, setCategoryData] = useState(new Map());
  const storageKey = "@data7";
  
  const loadData = async () => {
    try {
       const jsonValue = await AsyncStorage.getItem(storageKey)
      let data = null
      if (jsonValue!=null) {
        data = JSON.parse(jsonValue);
        setCategoryData(data);
      }
      console.log("LOADED", JSON.stringify(data));
    } catch(e) {
      console.log("error in getData");
      console.log(e);
      // error reading value
    }
  }

  const addCategoryData = () => {
    let newData = {...categoryData};
    newData[addCategoryText] = {
      "creation_time": new Date(),
    };
    setCategoryData(newData);
  }

  useEffect(() => {
    loadData();
  }, []);

  useEffect(() => {
    storeData(storageKey, categoryData);
  }, [categoryData]);

  return (
    <View styles={styles.container}>
      <Title style={styles.header}>
        Post Its
      </Title>
      <Text style={styles.paragraph}>
        Post some quick notes or random thoughts!
      </Text>
      <View>
        <View style={styles.button}>
          <Button 
                  icon="book-open"
                  onPress = {() =>
                    navigation.navigate('About', { name: 'Jane', greeting:'Hi!' })
                  } >
            About
          </Button>
        </View>
        <View style={styles.button}>
          <Button 
                  icon="account"
                  onPress = {() =>
                    navigation.navigate('Profile')
                  } >
            Profile
          </Button>
        </View>

        <View style={styles.add_category}>
          <TextInput placeholder="Add a new category" onChangeText={setAddCategoryText} style={{flex: 1}} right={<TextInput.Icon name="folder"/>}/>
          <View>
            <Button
              title={'Add!'}
              onPress={() => addCategoryData()}
            >
              Add!
            </Button>
          </View>
        </View>
        <View style={styles.categories}>
          {
            Object.keys(categoryData).map((key, i) => { 
              return (
                  <View style={{flexDirection: 'row'}}>
                    <View style={{flex: 2}}>
                      <Category navigation={navigation} name={key} createdDate={categoryData[key]["creation_time"]} />
                    </View>
                    <View style={{flex: 1, justifyContent: 'center'}}>
                      <IconButton
                        icon="trash-can"
                        onPress = {() => {
                          const copy = JSON.parse(JSON.stringify(categoryData));
                          delete copy[key];
                          setCategoryData(copy);
                        }}
                      />
                    </View>
                  </View>
                )})
          }
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    padding: 24,
    flexDirection: 'row',
    flex: 1
  },
  add_category: {
    paddingLeft: 15,
    paddingTop: 15,
    flexDirection: 'row',
    alignItems: 'center'
  },
  header: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    flex: 1,
    paddingTop: 10
  },
  paragraph: {
    textAlign: 'center',
    paddingBottom: 10
  },
  button: {
    paddingBottom: 5
  }
});
