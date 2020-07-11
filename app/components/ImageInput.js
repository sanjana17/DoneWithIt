import React, {useEffect} from 'react';
import { View, Image, StyleSheet, TouchableWithoutFeedback, Alert } from 'react-native';
import colors from '../config/colors';
import Icon from './Icon';
import * as ImagePicker from "expo-image-picker";


export default function ImageInput({imageUri, onChangeImage}){
   const requestPermissions = async ()=>{
    const {granted} = await ImagePicker.requestCameraRollPermissionsAsync();
    if(!granted){
      alert('you need to get permisssions')
    }
  }
  useEffect(() => {
    requestPermissions();
  }, []);
   
    const handlePress = () => {
       if(!imageUri) {
           selectImage();
       }else{
        Alert.alert('Delete', 'Are yu sure you want to delete?', [
            {text: 'Yes', onPress: () => onChangeImage(null)},
            {text: 'No'}
        ])
       }
   } 
  const selectImage = async () => {
    const result  = await ImagePicker.launchImageLibraryAsync();
    if(!result.cancelled)
      onChangeImage(result.uri);
  }
    return (
        <TouchableWithoutFeedback onPress={handlePress}>
        <View style={styles.container}>
            {!imageUri && <Icon backgroundColor={colors.light} name="camera" iconColor={colors.black} size={70} />}
            {imageUri && <Image source={{uri: imageUri}} style={styles.image}/>}
        </View>
        </TouchableWithoutFeedback>
    );

}

const styles = StyleSheet.create({
    container:{
        width: 100,
        height: 100,
        borderRadius: 15,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: colors.light,
        overflow: 'hidden'
    },
    image:{
        width: '100%',
        height: '100%',
        
    }
})