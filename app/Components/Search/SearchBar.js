import { View, Text, Image, TextInput, Dimensions, StyleSheet } from "react-native";
import React, { useState } from "react";
import { LinearGradient } from "expo-linear-gradient";
import Colors from "../../Shared/Colors";
import { Ionicons } from "@expo/vector-icons";

export default function SearchBar({setSearchText}) {
   const [searchInput,setSearchInput]=useState();

   return (
      <View>
         <View style={{ padding: 20, width: Dimensions.get("screen").width }}>
            <View style={styles.titleContainer}>
               <Text style={styles.text}>
                  Discover
               </Text>
            </View>
            <View style={styles.inputContainer}>
               <Ionicons name="search" size={24} color={Colors.DARK_GRAY} />
               <TextInput
                  placeholder="Search"
                  style={{ backgroundColor: Colors.WHITE, width: "80%"}}
                  onChangeText={(value) => setSearchInput(value)}
                  onSubmitEditing={() => setSearchText(searchInput)}
               />
            </View>
         </View>
      </View>
   );
}

const styles = StyleSheet.create({
   titleContainer: {
      marginBottom: 10,
   },
   inputContainer: {
      display: "flex",
      marginTop: 5,
      flexDirection: "row",
      padding: 10,
      gap: 5,
      elevation: 0.7,
      alignItems: "center",
      backgroundColor: Colors.WHITE,
      borderRadius: 8,
   },
   image: {
      width: 50, 
      height: 50, 
      borderRadius: 100 
   },
   text: {
      fontFamily: "Raleway", 
      fontSize: 35
   }
})