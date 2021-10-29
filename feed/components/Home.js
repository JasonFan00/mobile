import React, {useState, useEffect} from 'react';
import { Text, View, StyleSheet, Image, Button, TextInput, Alert } from 'react-native';
import {storeData} from '../utils/storage';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Category from './Category'

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
      <Text style={styles.header}>
        Post Its
      </Text>
      <Text style={styles.paragraph}>
        Post some quick notes or random thoughts!
      </Text>
      <View>
        <View style={styles.button}>
          <Button title="About" 
                  onPress = {() =>
                    navigation.navigate('About', { name: 'Jane', greeting:'Hi!' })
                  } />
        </View>

        <View style={styles.add_category}>
          <TextInput placeholder="Add a new category" onChangeText={setAddCategoryText} style={{flex: 1}}/>
          <View>
            <Button
              title={'Add!'}
              onPress={() => addCategoryData()}
            />
          </View>
        </View>
        <View style={styles.categories}>
          {Object.keys(categoryData).map((key, i) => { return <Category navigation={navigation} name={key} createdDate={categoryData[key]["creation_time"]} />})}
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
  },
  header: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    flex: 1,
    paddingBottom: 30,
    paddingTop: 30
  },
  paragraph: {
    textAlign: 'center',
    paddingBottom: 10
  },
  button: {
    paddingBottom: 5
  }
});
