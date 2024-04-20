import { View, Text, Image } from "react-native";
import React from "react";
import { StyleSheet } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import Colors from "../../Shared/Colors";
import HorizontalLine from "./HorizontalLine";
import GlobalApi from "../../Services/GlobalApi";

export default function PlaceItem({ place }) {
  return (
    <View style={styles.container} >
    {place?.photos
      ? <Image source={{uri: GlobalApi.getPlaceImageUri(place?.photos[0]?.photo_reference)}} style={styles.image} />
      : <Image source={require('./../../../assets/placeholder.jpg')} style={styles.image}/>
    }
      <View style={{flex:1}}>
        <Text numberOfLines={2} style={styles.textSmall}>
          {place.name}
        </Text>
        <Text style={styles.textBig} numberOfLines={2}>
          {place.vicinity}
        </Text>
        <View style={styles.ratingContainer}>
          <AntDesign name="star" size={20} color={Colors.YELLOW} />
          <Text>{place.rating}</Text>
        </View>
      </View>
      <HorizontalLine/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    gap: 15,
    marginTop:20
  },
  ratingContainer: {
    display: "flex",
    alignItems: "center",
    gap: 5,
    flexDirection: "row",
  },
  image: {
    width: 110, 
    height: 110, 
    borderRadius: 16
  },
  textSmall: {
    fontSize: 18,
    marginBottom: 5, 
    fontFamily: "Raleway"
  },
  textBig: {
    fontSize: 16, 
    marginBottom: 5,
    color:Colors.DARK_GRAY 
  }
})