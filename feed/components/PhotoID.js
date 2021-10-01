import React, { useState } from "react";
import { Image, Button, StyleSheet, Text, TextInput, View } from "react-native";
const PhotoID = (props) => {
  const [name, setName] = useState(props.name);
  const [url, setURL] = useState(props.url);
  return (
    <View style={{flexDirection: "column", flex: 3}}>
      <TextInput
        style={{flex: 1}}
          placeholder="Name"
          onChangeText={text => {setName(text)}}
      />

    <TextInput
    style={{flex: 1}}
          placeholder="Photo URL"
          onChangeText={text => {setURL(text)}}
      />
      <Image
      style={{flex: 1}}
        source={{uri: url}}
        style={{width: "100%", height: "100%"}}
      />
    </View>
  );
};

export default PhotoID;