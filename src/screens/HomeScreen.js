import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet , ActivityIndicator} from 'react-native';
import MovieItem from '../components/MovieItem'
import useResults from '../hooks/useResults'
import MoviesList from '../components/MoviesList'

const HomeScreen = () => {
    const [MoviesApi,results,errorMessage, feachnewPage] = useResults();

    return (
        <View>
            {errorMessage ? <Text>{errorMessage} </Text> : null}
            <MoviesList 
            results={results} 
            onEnd={()=> {
                fetchnewPage();
            }} />
           
        </View>
    );
};

const styles = StyleSheet.create({});

export default HomeScreen;
