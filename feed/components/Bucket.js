import React, {useState, useEffect} from 'react';
import { Text, TextInput, View, StyleSheet, Image } from 'react-native';
import {getData, storeData} from '../utils/storage';

export default function Bucket(props) {
  const bucketName = props.bucketName;
  const [bucketData, setBucketData] = useState([]);
  
  try {
    const storedData = getData(bucketName);
    if (storedData != null) {
      setBucketData(storedData);
    }
  } catch(e) {
    console.log("error in getData");
    console.log(e);
    // error reading value
  }

  return (
    <View style={styles.container}>
        <TextInput
            style={{flex: 1, paddingBottom: 10, paddingTop: 10}}
            placeholder="Add a new post"
        />

        <View>
          {bucketData.map((postData, i) => <Text>{postData.text}</Text>)}
        </View>
    </View> 
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 24,
    flexDirection: 'column'
  },
  paragraph: {
    margin: 24,
    marginTop: 0,
    fontSize: 14,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
