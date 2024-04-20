import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { FlatList } from 'react-native'
import PlaceItem from './PlaceItem'
import PlaceItemBig from './PlaceItemBig'
import { useNavigation } from '@react-navigation/native'
import { StyleSheet } from 'react-native'

export default function PlaceList({placeList}) {

  const navigator = useNavigation();
  const onPlaceClick = (item) => {
    navigator.navigate('place-detail', {place:item}); 
  }

  return (
    <View>
      <Text style={styles.text}>
         Found {placeList.length} Places
      </Text>
      <FlatList
         data={placeList}
         renderItem={({item,index}) => (
            <TouchableOpacity key={index} onPress={()=>onPlaceClick(item)}>
               {index % 4 == 0
                  ? <PlaceItemBig place={item} />
                  : <PlaceItem place={item} />
               }
            </TouchableOpacity>
         )}
      />
    </View>
  )
}

const styles = StyleSheet.create({
   text: {
      fontSize:20,
      fontFamily:'Raleway',
      marginTop:10
   },
 })