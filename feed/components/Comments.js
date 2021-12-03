import React, {useState, useEffect} from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {storeData} from '../utils/storage';
import { Title, Button, TextInput, IconButton } from 'react-native-paper';

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
      <Text style={styles.header}>
        Category {props.route.params.categoryName}
      </Text>
      <View style={styles.add_section}>
        <TextInput
          onChangeText={setCurrentComment}
          placeholder="Add a new comment"
        />
        <Button
          onPress={() =>  {console.log("PRESSED"); return addCommentsData()}}
        >
        Add!
        </Button>
      </View>
      {commentsData.reverse().map(ele => { 
        return(
          <View style={{flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center'}}>
            <View style={{flex: 3}}>
              <Text style={styles.paragraph}>
                {ele.comment}
              </Text>
            </View>
            <View style={{flex: 1}}>
              <IconButton
                icon="trash-can"
                onPress = {() => {
                  const copy = commentsData.slice();
                  copy.splice(copy.indexOf(ele), 1);
                  setCommentsData(copy);
                }}
              />
            </View>
          </View>
        );
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {

  },
  comment_input: {
    marginTop: 15,
    marginBottom: 15
  },
  add_section: {
    paddingBottom: 20,
    paddingLeft: 24,
    paddingRight: 24
  },
  header: {
    fontSize: 20,
    paddingBottom: 15,
    paddingTop: 10,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  logo: {
    height: 128,
    width: 128,
  },
  paragraph: {
    marginTop: 0,
    fontSize: 14,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
