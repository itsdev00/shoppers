import AsyncStorage from '@react-native-async-storage/async-storage';
// export const setData = async (name) => {
//     if (name.length == 0) Alert.alert('Please write your name');
//     else {
//        try {
//         await AsyncStorage.setItem('userName', name);
//         console.warn('successfully done');
//       } catch (error) {
//         console.warn('some error in setdata code');
//       }
//     }
//   };
export const setData = async (key, value) => {
  try {
    let user= await getData(key);
    console.log(JSON.stringify(user));
    if(user!==null){
      await AsyncStorage.setItem(key, JSON.stringify(value));
      console.warn('successfully done');
    return 200;
      
    }
    else{
    return 400

    }
  } catch (error) {
    console.warn('some error in setdata code');
  }

};

export const getData = async (key) => {
  try {
    const value = await AsyncStorage.getItem(key);
    if (value !==null) {
    console.log('getData fetch successfully');
    return JSON.parse(value);
    }
  } catch (error) {
    console.warn('error in getData');
    //console.warn(error);
  }
};
