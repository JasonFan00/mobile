//Modify the Counter app so that it has a decrement button
//and also has a prop "name" which is used to label the component

import React, { useState } from "react";
import { Button, StyleSheet, Text,  View } from "react-native";


// const mph2fps = (mph) => mph*5280/3600

const Counter = ({start}) => {
  const [count, setCount] = useState(start);


      return (
  <View style={styles.container}>
    <Text style={styles.header}>
       Count = {count}
    </Text>

    <Button
      style = {{flex: 1}}
          color='red' title='Increment'
          onPress = {() =>
               setCount(count+1)          }
      />

    <Button
    style = {{flex: 1}}
          color='red' title='Decrement'
          onPress = {() =>
               setCount(count-1)          }
      />

  </View>
      );
    }
  const styles = StyleSheet.create ({
    container: {
      flex: 3,
      flexDirection:'column',
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
      border:'thick solid blue',
    },
    header: {
      flex: 1,
      fontSize:40,
      color:'blue'
    },
  });

  export default Counter;