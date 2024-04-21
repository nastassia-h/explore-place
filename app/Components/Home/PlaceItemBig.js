import { View, Text, Image } from "react-native";
import React from "react";
import { StyleSheet } from "react-native";
import Colors from "../../Shared/Colors";
import { AntDesign } from "@expo/vector-icons";
import HorizontalLine from "./HorizontalLine";
import GlobalApi from "../../Services/GlobalApi";

export default function PlaceItemBig({ place }) {
  return (
    <View style={styles.container}>
     {place?.photos
      ? <Image source={{uri: GlobalApi.getPlaceImageUri(place?.photos[0]?.photo_reference)}} style={styles.image} />
      : null
     }
     <View>
      <Text numberOfLines={2} style={styles.textTitle}>
          {place.name}
        </Text>
        <Text style={styles.textLocation} numberOfLines={2}>
          {place.vicinity}
        </Text>
        {place.rating && 
          <View style={styles.ratingContainer}>
            <AntDesign name="star" size={20} color={Colors.YELLOW} />
            <Text>{place.rating}</Text>
          </View>
        }
     </View>
     <HorizontalLine/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    display: 'flex',
    gap: 10,
  },
  image: {
    width: "100%", 
    height: 130, 
    borderRadius: 16
  },
  textTitle: {
    fontSize: 18, 
    marginBottom: 5, 
    fontFamily: "Raleway" 
  },
  textLocation: {
    fontSize: 16, 
    marginBottom: 5, 
    color: Colors.DARK_GRAY 
  },
  ratingContainer: {
    display: "flex",
    alignItems: "center",
    gap: 5,
    flexDirection: "row",
  },
})