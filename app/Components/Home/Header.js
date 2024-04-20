import { View, Image, TextInput, Dimensions } from 'react-native';
import { SafeAreaView } from "react-native-safe-area-context";
import React from 'react';
import { StyleSheet } from 'react-native';
import Colors from '../../Shared/Colors';

export default function Header() {
  return (
    <SafeAreaView>
      <View style={styles.container}>
         <Image source={require('./../../../assets/logo.png')}
         style={styles.logo}
         />
         <View>
            <TextInput placeholder='Search...'
               style={styles.searchbar}
            />
         </View>
      </View>
    </SafeAreaView>
  )
}


const styles = StyleSheet.create({
   container: {
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-evenly'
   },
   logo: {
      width: 50,
      height: 50
   },
   searchbar: {
      borderWidth: 1,
      borderColor: Colors.blank,
      padding: 10,
      borderRadius: 50,
      paddingLeft: 10,
      width: Dimensions.get('screen').width*0.6
      
   },
   userImage: {
      width: 50,
      height: 50,
      borderRadius: 100
   }
})