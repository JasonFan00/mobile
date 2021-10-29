import React, {useState, useEffect} from 'react';
import { Text, TextInput, View, StyleSheet, Image, Button } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {storeData} from '../utils/storage';

export default function Comments(props) {
  const [commentsData, setCommentsData] = useState([]);
  const [currentComment, setCurrentComment] = useState(null);
  const storageKey = "@comments_" + props.route.params.categoryName;

  const loadData = async () => {
    try {
       const jsonValue = await AsyncStorage.getItem(storageKey)
      let data = null
      if (jsonValue!=null) {
        data = JSON.parse(jsonValue);
        setCommentsData(data);
      }
      console.log("LOADED", JSON.stringify(data));
    } catch(e) {
      console.log("error in getData");
      console.log(e);
      // error reading value
    }
  }

  const addCommentsData = () => {
    let newData = commentsData.map(ele => ({...ele}));
    newData.push({
      comment: currentComment,
      "creation_time": new Date(),
    });
    setCommentsData(newData);
  }

  useEffect(() => {
    loadData();
  }, []);

  useEffect(() => {
    storeData(storageKey, commentsData);
  }, [commentsData]);
  
  return (
    <View style={styles.container}>
      <Image
        source={source=require('../assets/sticky-note-solid.svg')}
        style={styles.logo}
      />

      <Text style={styles.header}>
        Category {props.route.params.categoryName}
      </Text>
      <View style={styles.add_section}>
        <TextInput
          onChangeText={setCurrentComment}
          style={styles.comment_input}
          placeholder="Add a new comment"
        />
        <Button
          onPress={() =>  {console.log("PRESSED"); return addCommentsData()}}
          title={'Add!'}
        />
      </View>
      {commentsData.reverse().map(ele => { 
        return(<Text style={styles.paragraph}>
          {ele.comment}
        </Text>);
      })}
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
  logo: {
    height: 128,
    width: 128,
  },
  paragraph: {
    margin: 24,
    marginTop: 0,
    fontSize: 14,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
