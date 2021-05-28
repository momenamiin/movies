import { useState, useEffect } from 'react' ;
import MoviesDb from '../api/MoviesDb'

export default () => {
    const [results, setResults] = useState([]);
    const [errorMessage, setErrorMessage] = useState('');

    const MoviesApi = async page => {
        try {
            const response = await MoviesDb.get(page);
            setResults(response.data.results)
        } catch (e) {
            setErrorMessage('Something Went Wrong');
        }
    }

    useEffect(() => {
        MoviesApi('1');
    },[]);
    return [MoviesApi , results,errorMessage];
};