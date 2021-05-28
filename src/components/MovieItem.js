import React from 'react';
import { View, Image, Text, StyleSheet } from 'react-native';


const MovieItem = ({item}) => {

   console.log(item.original_title);
    return (
      <View>
        <Text>{item.original_title}</Text>
        <Image style={styles.image} source={{ uri: `https://image.tmdb.org/t/p/w500/${item.poster_path}` }} />
        <Text>{item.overview}</Text>
        <Text>{item.release_date}</Text>
      </View>
    );
  };
  
  const styles = StyleSheet.create({
    image: {
      width: 250,
      height: 320,
      borderRadius: 4
    },
    name: {
      fontWeight: 'bold'
    }
  });
  
  export default MovieItem;
  