import React ,{useState} from 'react';
import { View, Text, StyleSheet, FlatList ,ActivityIndicator} from 'react-native';
import MovieItem from './MovieItem'
const MoviesList = ({results, onEnd}) => {
  //`console`.log(results.page)
  //;onMomentumScrollEnd function onScrollEndDrag
  const [loading, setLoading] = useState(false);

   renderFooter = () => {
    if (loading) return null;
    return (
      <View
        style={{
          paddingVertical: 20,
          borderTopWidth: 1,
          borderColor: "#CED0CE"
        }}
      >
        <ActivityIndicator animating size="large" />
      </View>
    );
  }; 


  return (
    <View>
        <FlatList 
        contentContainerStyle={styles.list}
        data={results}
        onEndReached={()=> {
          setLoading(true); 
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
