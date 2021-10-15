import * as React from 'react';
import { Text, View, StyleSheet, Image, Button } from 'react-native';

export default function Home({navigation}) {
  return (
    <View styles={styles.container}>
      <Text style={styles.header}>
        Community Comments
      </Text>
      <Text style={styles.paragraph}>
        Welcome to the random messaging board
      </Text>
      <View>
        <View style={styles.button}>
          <Button title="About" 
                  onPress = {() =>
                    navigation.navigate('About')
                  } />
        </View>
        <View style={styles.button}>
          <Button title="Your Feed"
                  onPress = {() => 
                    navigation.navigate('Feed')
                  } />
        </View>
        <View style={styles.button}>
          <Button title="Profile"
                  onPress = {() => 
                    navigation.navigate('Profile', {'username':'Anon'})
                  } />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    padding: 24,
  },
  header: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    flex: 1,
    paddingBottom: 10
  },
  paragraph: {
    textAlign: 'center',
    paddingBottom: 10
  },
  button: {
    paddingBottom: 5
  }
});
