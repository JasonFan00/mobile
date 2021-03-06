import React from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';
import { Title, Button, IconButton } from 'react-native-paper';

export default function Category(props) {
  return (
    <View style={styles.container}>
      <Text style={styles.header} onPress = {() => props.navigation.navigate('Comments', {categoryName: props.name})}>
        {props.name}
      </Text>
      <Text>
        Created: {props.createdDate.toString()}
      </Text>
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    alignItems: 'left',
    justifyContent: 'center',
    padding: 24,
    flexDirection: 'column',
  },
  header: {
    fontSize: 28,
    fontWeight: 'bold',
    textAlign: 'Left',
  },
});