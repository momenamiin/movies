import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import MovieItem from './MovieItem'
const MoviesList = ({results}) => {
  //  console.log(results);

  return (
    <View>
        <FlatList 
        data={results}
        keyExtractor= {(results) => results.id.toString()}
        renderItem={({ item }) =>{
            return <MovieItem item={item}/>
        }  }
        />
    </View>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: 18,
    fontWeight: 'bold'
  }
});

export default MoviesList;
