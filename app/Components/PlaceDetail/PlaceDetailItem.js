import { View, Text, TouchableOpacity, Image, StyleSheet } from 'react-native'
import React from 'react'
import { AntDesign, Ionicons, FontAwesome, MaterialIcons  } from "@expo/vector-icons";
import Colors from '../../Shared/Colors';
import Share from '../../Services/Share';
import GlobalApi from '../../Services/GlobalApi';
import { useFavoritePlaces } from '../../Context/FavPlacesContext';

export default function PlaceDetailItem({place,onDirectionClick,isFav,setIsFav}) {  
   const {patchFavPlaces} = useFavoritePlaces();
   return (
      <View>
         <Text style={{ fontSize: 26, fontFamily: "Raleway" }}>
         {place.name}
         </Text>
         <View style={styles.ratingContainer}>
         <AntDesign name="star" size={20} color={Colors.YELLOW} />
         <Text>{place.rating}</Text>
         </View>
         {place?.photos 
            ? <Image source={{uri: GlobalApi.getPlaceImageUri(place?.photos[0]?.photo_reference)}} style={styles.image} />
            : null
         }
         <Text style={styles.textBig} numberOfLines={2}>
            {place.vicinity 
               ? place.vicinity
               : place.formatted_address
            }
         </Text>
         {place?.opening_hours 
            ?  <Text style={{ fontFamily: "Raleway" }}>
                  {place?.opening_hours?.open_now == true ? "(Open)" : "(Closed)"}
               </Text>
            : null
         }
         <View style={styles.container}>
            <TouchableOpacity onPress={()=>onDirectionClick()}
               
            >
               <Ionicons name="navigate-circle-outline" size={24} color="black" />
            </TouchableOpacity>
            <TouchableOpacity onPress={()=>Share.SharePlace(place)}
               
            >
            <FontAwesome  name="share" size={24} color="black" />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => {patchFavPlaces(place.place_id); setIsFav(!isFav)}}>
            {isFav 
               ? <MaterialIcons name="favorite" size={24} color="pink" />
               : <MaterialIcons name="favorite-outline" size={24} color="pink" />
            }
            </TouchableOpacity>
         </View>
      </View>
   )
}  

const styles = StyleSheet.create({
   container: {
      marginVertical: 15,
      flexDirection:'row',
      display:'flex', 
      justifyContent: 'space-around',
      gap:10
   },
   ratingContainer: {
      display: "flex",
      alignItems: "center",
      gap: 5,
      marginTop: 5,
      flexDirection: "row",
   },
   image: {
      width: "100%",
      height: 160,
      borderRadius: 15,
      marginTop: 10,
   },
   textSmall: {
      fontFamily: "Raleway",
       fontSize: 16
   },
   textBig: {
      fontSize: 16,
      marginTop: 10, 
      color: Colors.DARK_GRAY
   },
   btn: {
      direction: "flex",
      flexDirection: "row",
      alignItems: "center",
      gap: 5,
      backgroundColor:Colors.GRAY,
      width:110,
      padding:3,
      borderRadius:40,
      justifyContent:'center'
   },
   directionBtn: {
      width:110,
   },
   shareBtn: {
      width: 90,
   }
 })