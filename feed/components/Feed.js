import * as React from 'react';
import { Text, TextInput, View, StyleSheet, Image } from 'react-native';

export default function Feed() {
  return (
    <View style={styles.container}>
        <Image
        style={{flex: 1}}
          source={{uri: "https://cdn.pixabay.com/photo/2014/11/30/14/11/cat-551554__340.jpg"}}
          style={{width: "100%", height: "100%"}}
        />

        <TextInput
      style={{flex: 1}}
            placeholder="Add a new comment"
        />
        
      <Text style={styles.paragraph}>
        Text comment 1
      </Text>
      <Text style={styles.paragraph}>
        Text comment 2
      </Text>
      <Text style={styles.paragraph}>
        Text comment 3
      </Text>
      <Text style={styles.paragraph}>
        Text comment 4
      </Text>
      <Image style={styles.logo} source={require('../assets/snack-icon.png')} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 24,
  },
  paragraph: {
    margin: 24,
    marginTop: 0,
    fontSize: 14,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  logo: {
    height: 128,
    width: 128,
  }
});
