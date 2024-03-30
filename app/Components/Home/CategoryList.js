import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'
import { FlatList } from 'react-native'
import CategoryItem from './CategoryItem'

export default function CategoryList({setSelectedCategory}) {
   const categoryList=[
      {
          id:1,
          name:'Gas Station',
          value:'gas_station',
          icon:require('./../../../assets/gas.png')
      },
      {
          id:2,
          name:'Restaurants',
          value:'restaurant',
          icon:require('./../../../assets/food.png')
      },
      {
          id:3,
          name:'Cafe',
          value:'cafe',
          icon:require('./../../../assets/cafe.png')
      },
   ]
  return (
   <View style={styles.container}>
   <Text style={styles.text} >Select Top Category</Text>
   <FlatList
     data={categoryList}
     horizontal={true}
     contentContainerStyle={styles.list}
     showsHorizontalScrollIndicator={false}
     renderItem={({item})=>(
       <TouchableOpacity 
       onPress={()=>setSelectedCategory(item.value)} >
         <CategoryItem category={item} />
       </TouchableOpacity>
     )}
   />
   
 </View>
  )
}

const styles = StyleSheet.create({
   container: {

      gap: 10
   },
   text: {
      fontSize:20,
      fontFamily:'Raleway',
   },
   list: {
      width: '100%',
      justifyContent: 'space-between'
   },
 });