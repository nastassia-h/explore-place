import { View, Text, Image, StyleSheet } from 'react-native'
import React from 'react'
import Colors from '../../Shared/Colors'

export default function CategoryItem({category}) {


  return (
    <View style={styles.container}>
        <Image source={category.icon}
            style={styles.image}
        />
         <Text style={styles.text}>
         {category.name}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
   container: {
      alignItems:'center',
      width:90,
      height:90,
      gap: 5,
      justifyContent:'center',
      borderRadius:16,
      backgroundColor:Colors.GRAY
   },
   text: {
      fontSize:13,
      fontFamily:'Raleway',
   },
   image: {
      width:40,
      height:30
   },
 });