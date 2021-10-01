import * as React from 'react';
import { Text, View, StyleSheet, Image, Button } from 'react-native';

export default function Home({navigation}) {
  return (
    <View>
      <Text>
        Welcome to the anon messaging board
      </Text>
      <View style={styles.buttons}>
        <Button title="About" 
                onPress = {() =>
                  navigation.navigate('About', { name: 'Jane', greeting:'Hi!' })
                } />
        <Button title="Your Feed"
                onPress = {() => 
                  navigation.navigate('Feed')
                } />
      </View>
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
  },
  buttons: {
    flexDirection: 'row',
    justifyContent: 'space-around'
  }
});
