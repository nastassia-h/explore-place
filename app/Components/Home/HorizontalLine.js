import { View } from 'react-native'
import React from 'react'
import { StyleSheet } from 'react-native'
import Colors from '../../Shared/Colors'

export default function HorizontalLine() {
  return (
    <View>
       <View style={style.line}/>
    </View>
  )
}

const style = StyleSheet.create({
  line: {
    borderWidth:0.3,
    marginTop:10,
    borderColor:Colors.GRAY
  }
})