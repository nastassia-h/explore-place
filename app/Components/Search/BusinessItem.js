import { View, Text, Image, StyleSheet } from 'react-native'
import React from 'react'
import { AntDesign } from "@expo/vector-icons";
import Colors from '../../Shared/Colors';
import GlobalApi from '../../Services/GlobalApi'

export default function BusinessItem({place}) {
   return (
      <View style={styles.container}>
         {place?.photos
            ? <Image source={{uri: GlobalApi.getPlaceImageUri(place?.photos[0]?.photo_reference)}} style={styles.image} />
            : <Image source={require('./../../../assets/placeholder.jpg')} style={styles.placeholderImage}/>
         }
         <Text numberOfLines={2} style={styles.bigText}>
            {place.name}
         </Text>
         <Text numberOfLines={2} style={styles.smallText}>
            {place.vicinity ? place.vicinity : place.formatted_address}
         </Text>
         <View style={styles.ratingContainer}>
            <AntDesign name="star" size={20} color={Colors.YELLOW} />
            <Text>{place.rating}</Text>
         </View>
      </View>
   )
}

const styles = StyleSheet.create({
   container: {
      width:140,
      backgroundColor:Colors.WHITE,
      borderRadius:10,
      padding:10,
      margin:5,
      elevation:0.4
   },
   image: {
      width: 120, 
      height: 80, 
      borderRadius: 10
   },
   placeholderImage: {
      width: 130, 
      height: 100, 
      borderRadius: 9 
   },
   smallText: {
      fontFamily:'Raleway',
      fontSize:13,
      marginTop:5,
      color:Colors.DARK_GRAY
   },
   bigText: {
      fontFamily:'Raleway',
      fontSize:16,
      marginTop:5
   },
   ratingContainer: {
      display: "flex",
      alignItems: "center",
      gap: 5,
      marginTop:5,
      flexDirection: "row",
      marginBottom:-5
   }
})