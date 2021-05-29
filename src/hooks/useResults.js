import { useState, useEffect } from 'react' ;
import MoviesDb from '../api/MoviesDb'

export default () => {
    const [results, setResults] = useState([]);
    const [fetchedPages, setpage] = useState([]);
    const [fetching , setfetching ] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');

    const MoviesApi = async (page) => {
        setfetching (true); 
        try {
            const response = await MoviesDb.get('/movie' , { 
                params: {
                    api_key: '47eb7c60a8dbdad32e028554514dd977',
                    page: page, 
                }
            });
            if(containsObject(fetchedPages , page)){
                console.log('object is already there')
            }else{
                setpage([...fetchedPages, page]);
                setResults(results => [...results, ...response.data.results]);               
            }
        } catch (e) {
            setErrorMessage('Something Went Wrong');
            console.log(e);
        }
        setfetching (false); 

    }

    
    fetchnewPage = () =>{
        if(fetching){
            console.log('still featching')

        }else{
            var CurrtentPage = parseInt(fetchedPages[fetchedPages.length - 1]);
            CurrtentPage ++ ;
            MoviesApi(CurrtentPage.toString());
        }

    
    }

    function containsObject(obj, list) {
        var i;
        for (i = 0; i < list.length; i++) {
            if (list[i] === obj) {
                return true;
            }
        }
    
        return false;
    }

    useEffect(() => {
        MoviesApi('1');
    },[]);

    return [MoviesApi , results,errorMessage, fetchnewPage];
};




