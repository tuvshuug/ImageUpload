/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  View,
  Button
} from 'react-native';
import { launchCamera, launchImageLibrary } from 'react-native-image-picker';

const URL='http://192.168.0.3:8080/ci3/index.php/files/upload'
const options = {
  title: 'Select Image',
  type: 'library',
  options: {
    maxHeight: 200,
    maxWidth: 200,
    selectionLimit: 1,
    mediaType: 'photo',
    includeBase64: false,

  },
}
const App = () => {

  const openGallery = async () => {
    const images = await launchImageLibrary(options);
    console.log(images.assets[0])
    const formdata = new FormData()
    formdata.append('userfile',{
      uri:images.assets[0].uri,
      type:images.assets[0].type,
      name:images.assets[0].fileName,
    })
    //formdata.append('array',JSON.stringify())
    let res = await fetch(
      URL,
      {
        method: 'post',
        body: formdata,
        headers: {
          'Content-Type': 'multipart/form-data; ',
        },
      }
    );
    let responseJson = await res.json();
    console.log(responseJson,"responseJson")

  }
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Button title='upload' onPress={openGallery}></Button>
    </View>
  );
};


export default App;
