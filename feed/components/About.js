import * as React from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';

export default function About() {
  return (
    <View style={styles.container}>
      <Text style={styles.paragraph}>
        About
      </Text>
      <Image style={styles.logo} source={{uri: "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/close-up-of-cat-wearing-sunglasses-while-sitting-royalty-free-image-1571755145.jpg"}} />
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
