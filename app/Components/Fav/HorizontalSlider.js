import React, { useRef, useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { View, FlatList, Text, TouchableOpacity, StyleSheet, Dimensions } from 'react-native';
import { PlaceItem } from '../Home';
import Colors from '../../Shared/Colors';

const SCREEN_WIDTH = Dimensions.get('window').width;

const HorizontalSlider = ({ data, setSelected }) => {
  const [visibleIndex, setVisibleIndex] = useState(0);
  const flatListRef = useRef();

  const calculateVisibleIndex = (event) => {
    const { contentOffset } = event.nativeEvent;
    const index = Math.floor(contentOffset.x / SCREEN_WIDTH);
    if (index < 0) return;
    setVisibleIndex(index);
    setSelected(index);
  };

  const navigator = useNavigation();
  const onPlaceClick = (item) => {
    navigator.navigate('place-detail', {place:item}); 
  }

  return (
    <View style={styles.container}>
      <Text style={styles.text}>{visibleIndex+1}/{data.length}</Text>
      <FlatList
        ref={flatListRef}
        horizontal
        data={data}
        renderItem={({ item, index }) => (
            <TouchableOpacity key={index} style={styles.item} onPress={()=>onPlaceClick(item)}>
               <PlaceItem place={item} />
            </TouchableOpacity>
        )}
        keyExtractor={(item, index) => index.toString()}
        snapToInterval={SCREEN_WIDTH} 
        decelerationRate={'fast'}
        showsHorizontalScrollIndicator={false}
        onScroll={calculateVisibleIndex}
        scrollEventThrottle={16}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingTop: 5,
    height: 150, 
  },
  text: {
    fontSize: 14,
    color: Colors.DARK_GRAY
  },
  item: {
    width: SCREEN_WIDTH, 
    justifyContent: 'center',
    alignItems: 'center',
  }
});

export default HorizontalSlider;
