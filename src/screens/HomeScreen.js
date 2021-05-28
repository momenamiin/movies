import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import MovieItem from '../components/MovieItem'
import useResults from '../hooks/useResults'
import MoviesList from '../components/MoviesList'

const HomeScreen = () => {
   const [MoviesApi,results,errorMessage] = useResults();
    //console.log(results[1].original_title);
    return (
        <View>
            {errorMessage ? <Text>{errorMessage} </Text> : null}
            <MoviesList results={results}/>
        </View>
    );
};

const styles = StyleSheet.create({});

export default HomeScreen;
