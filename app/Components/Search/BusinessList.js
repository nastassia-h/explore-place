import { View, Dimensions, FlatList, TouchableOpacity, StyleSheet } from 'react-native'
import React from 'react'
import Colors from '../../Shared/Colors'
import { LinearGradient } from 'expo-linear-gradient'
import BusinessItem from './BusinessList'
import { useNavigation } from '@react-navigation/native'

export default function BusinessList({placeList}) {
  const navigation=useNavigation();
  return (
    <View >
      <LinearGradient colors={["transparent", Colors.WHITE]} style={styles.gradient} >
        <FlatList
          data={placeList}
          horizontal={true}
          renderItem={({item,index})=> (index <= 6) && (
          <TouchableOpacity onPress={() => navigation.navigate('place-detail', {place:item})} >
              <BusinessItem place={item} />
          </TouchableOpacity>
          )}
        />
      </LinearGradient>
    </View>
  )
}

const styles = StyleSheet.create({
  gradient: {
    padding: 20,  
    width: Dimensions.get("screen").width
  }
})