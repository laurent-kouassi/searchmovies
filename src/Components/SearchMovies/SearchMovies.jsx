import React, { useState, useEffect } from 'react';
import _ from 'lodash';
import { 
    Input, 
    Dropdown, 
    Button } from 'semantic-ui-react';
import "@material-ui/core";
import { Alert } from "@material-ui/lab";

import { movies } from '../../store/actions';
import { useDispatch } from "react-redux";

const SearchMovies = (props) => {
    const { page } = props;

    // initial pokemon search query
    const initialSearch = {
        title: 'Pokemon',
        year: 2000,
        type: 'movie'
    };

    const [title, setTitle] = useState(initialSearch.title);
    const [year, setYear] = useState(initialSearch.year);
    const [type, setType] = useState(initialSearch.type);
    const [error, setError] = useState();

    const dispatch = useDispatch();

    // dropdown search option
    const searchType = [
        {
            id: 1,
            name: 'movie',
            uri: 'movie', 
        },
        {
            id: 2,
            name: 'series',
            uri: 'series', 
        },
        {
            id: 3,
            name: 'episode',
            uri: 'episode', 
        }
    ];

    const searchOptions = searchType.map((option, index) => ({
        key: option.id,
        text: option.name,
        value: option.uri,
    }));

    // dispatch search query
    const handleSearch = () => {
        dispatch(
            movies(
              title, 
              year, 
              type,
              page,
              error => {
                setError(error.Error);
              }
            )
        );
    };

    // on page number change get new movies list
    useEffect(() => {
        handleSearch();
    }, [page]);
    
    return (
        <div style ={{marginLeft: 'auto', marginRight: 'auto', textAlign:'center', marginTop: '10px'}}>
             <Input 
                placeholder='Title' 
                style={{margin: '5px'}} 
                onChange = { e => setTitle(e.target.value)} />

             <Input 
                placeholder='Year' 
                style={{margin: '5px'}} 
                onChange = {e => setYear(e.target.value)} />

             <Dropdown 
                placeholder='Type' 
                clearable 
                selection 
                options={ searchOptions }
                style={{margin: '5px'}}
                onChange = {e => setType(e.target.textContent)} />

             <Button 
                content = 'Search' 
                style={{margin: '5px'}} 
                onClick = {e => handleSearch()} />
        {
            error &&
            (
                <Alert severity="error" onClick={() => setError(null)}>
                  { error }
                </Alert>
            )
        }
        </div>
    )
};

export default SearchMovies;
