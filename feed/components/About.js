import * as React from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';

export default function About() {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>
        About Us
      </Text>
      <Text style={styles.paragraph}>
        This is a quick post-it note taking app.
      </Text>
      <Image style={styles.logo} source={require('../assets/sticky-note-solid.svg')} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 24,
  },
  header: {
    fontWeight: 'bold',
    textAlign: 'center',
    fontSize: 20
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
    flex: 1
  }
});
