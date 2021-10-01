/*Modify TipRate.js so that the user can change the default TipRate ...

call is
    <TipCalculator tipRate={0.2} />

code is
*/


import React, { useState } from "react";
import { Button, StyleSheet, Text, TextInput, View } from "react-native";


// const mph2fps = (mph) => mph*5280/3600

const TipCalculator = (props) => {
  const [meal, setMeal] = useState("0");
  const [tip, setTip] = useState(props.tipRate);


      return (
  <View style={styles.container}>
    <Text style={styles.header}>
       Tip Calculator for tiprate = {tip}
    </Text>
    <TextInput
          style={styles.textinput}
          placeholder="cost of meal"
          onChangeText={text => {setMeal(text)}}
      />

    <TextInput
          style={styles.textinput}
          placeholder="Tiprate"
          onChangeText={text => {setTip(parseFloat(text))}}
      />
    <Button
    style={{flex: 1}}
          color='red' title='Calculate Tip'
          onPress = {() =>
               setTip(parseFloat(meal)*tip)          }
      />

    <Text> The tip is {tip} </Text>
  </View>
      );
    }
  const styles = StyleSheet.create ({
    container: {
      flex: 5,
      flexDirection:'column',
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    textinput:{
      flex: 1,
      margin:20,
      fontSize:20
    },
    header: {
      flex: 1,
      color:'blue'
    },
    rowContainer: {
      flexDirection: 'row',
      alignItems: 'center',
    },
  });

export default TipCalculator;