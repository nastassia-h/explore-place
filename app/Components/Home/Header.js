import { View, Image, TextInput, Dimensions, TouchableOpacity } from 'react-native';
import { AntDesign } from '@expo/vector-icons'; 
import { useState } from 'react';
import { SafeAreaView } from "react-native-safe-area-context";
import React from 'react';
import { StyleSheet } from 'react-native';
import Colors from '../../Shared/Colors';

export default function Header({setSearchLocation}) {
   const [searchInput, setSearchInput]=useState('');
   return (
      <SafeAreaView>
         <View style={styles.container}>
            <View style={styles.inputContainer}>
               <TextInput placeholder='Search...'
                  style={styles.searchbar}
                  value={searchInput}
                  onChangeText={(value) => setSearchInput(value)}
                  onSubmitEditing={() => setSearchLocation(searchInput)}
               />
               {searchInput.length > 0 && (
               <TouchableOpacity 
                  onPress={()=>{setSearchInput(''); setSearchLocation('')}} 
                  style={styles.clearButton}
               >
                  <AntDesign name="close" size={20} color="gray" />
               </TouchableOpacity>
               )}
            </View>
            {/* <Image source={require('./../../../assets/logo.png')}
            style={styles.logo}
            /> */}
         </View>
      </SafeAreaView>
   )
}


const styles = StyleSheet.create({
   container: {
      paddingTop: 5,
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-around'
   },
   inputContainer: {
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center'
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
   },
   clearButton: {
      position: 'absolute',
      right: 12
   }
})