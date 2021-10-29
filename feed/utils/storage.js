import AsyncStorage from '@react-native-async-storage/async-storage';

export const storeData = async (key, value) => {
    const jsonValue = JSON.stringify(value);
    console.log(key, value);
    await AsyncStorage.setItem(key, jsonValue);
    console.log(key, 'just stored '+jsonValue);
}

  