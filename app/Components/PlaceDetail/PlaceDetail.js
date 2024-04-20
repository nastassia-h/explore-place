import { View, Text, Platform, Linking, ScrollView } from 'react-native'
import { Ionicons } from "@expo/vector-icons";
import React, { useEffect, useState } from 'react'
import { StyleSheet } from 'react-native';
import { useRoute } from '@react-navigation/native'
import PlaceDetailItem from './PlaceDetailItem';
import Colors from '../../Shared/Colors';
import GoogleMapView from '../Home/GoogleMapView';
import { TouchableOpacity } from 'react-native';
import { isPlaceInFavorites } from '../../storage/FavPlacesStorage';

export default function PlaceDetail() {
   const param = useRoute().params;
   const [place, setPlace] = useState([]);
   const [isFav, setIsFav] = useState(false);

   const fetchData = async () => {
      let isFavPlace = await isPlaceInFavorites(param.place.place_id);
      setIsFav(isFavPlace);
   }

   useEffect(()=>{
      fetchData();
      setPlace(param.place);
   },[])

   const onDirectionClick=()=>{
      const url = Platform.select({
         ios:"maps:"+place.geometry.location.lat + "," + place.geometry.location.lng + "?q=" + place.vicinity,
         android:"geo:"+place.geometry.location.lat + "," + place.geometry.location.lng + "?q=" + place.vicinity,
      });

      Linking.openURL(url)
   }

  return (
    <ScrollView style={{ padding: 20, backgroundColor: Colors.WHITE, flex: 1 }}>
      <PlaceDetailItem
        place={place}
        isFav={isFav}
        setIsFav={setIsFav}
        onDirectionClick={() => onDirectionClick()}
      />
      <GoogleMapView placeList={[place]} />
      <TouchableOpacity
        style={styles.directionBtn}
        onPress={() => onDirectionClick()}
      >
         <Ionicons name="navigate-circle-outline" size={30} color="black" />
         <Text
            style={{
               fontFamily: "Raleway",
               textAlign: "center",
               color: Colors.DARK_GRAY,
            }}
         >
         Get Direction on Google Map
         </Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
   directionBtn: {
      backgroundColor: Colors.PRIMARY,
      padding: 15,
      alignContent: "center",
      alignItem: "center",
      margin: 8,
      display:'flex',
      flexDirection:'row',
      gap:10,
      justifyContent:'center',
      alignItems:'center',
      borderRadius: 50,
      paddingBottom: 15,
   }
})