import React ,{useState} from 'react';
import { View, Text, StyleSheet, FlatList ,ActivityIndicator} from 'react-native';
import MovieItem from './MovieItem'
const MoviesList = ({fetching, results, onEnd }) => {
 
  renderFooter = () => {
    //console.log(fetching);
    return fetching ? <View
    style={{
      paddingVertical: 20,
      borderTopWidth: 1,
      borderColor: "#000000"
    }}
  >
    <ActivityIndicator animating size="large" />
  </View> : null
  }; 


  return (
    <View>
        <FlatList 
        contentContainerStyle={styles.list}
        data={results}
        onEndReached={()=> {
          onEnd()
        }
        }
        onEndThreshold={0}  
        ListFooterComponent={renderFooter}
        keyExtractor= {(results) => results.id.toString()}
        renderItem={({ item }) =>{
            return <MovieItem item={item}/>
        }}
        />
    </View>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: 18,
    fontWeight: 'bold'
  },
  list: {
    alignItems : 'center',
  }
});

export default MoviesList;
