import React, { useState, useEffect } from 'react';
import { Icon, Menu, Table } from 'semantic-ui-react'
import { useSelector } from 'react-redux';
import "@material-ui/core";
import { Alert } from "@material-ui/lab";

const Tables = (props) => {
    const [error, setError] = useState(null);
    const moviesList = useSelector(state => state.movies);
    const { page, onPageChange } = props;


    // check if current page still positif
    const handlePageChange = new_page => {
        if(page > 0) onPageChange(new_page);
        else alert('We need to go up not down :)');
    };

    // show an error if no movies found
    useEffect(() => {
        if(moviesList == undefined) setError('No movies found');
    }, [moviesList]);

    return (
        <div>
            {
                error &&
                (
                    <Alert severity="error" onClick={() => setError(null)}>
                      { error }
                    </Alert>
                )
            }
            <Table celled>
                <Table.Header>
                <Table.Row>
                    <Table.HeaderCell>Movie Title</Table.HeaderCell>
                    <Table.HeaderCell>Release Date</Table.HeaderCell>
                    <Table.HeaderCell>IMDb ID</Table.HeaderCell>
                </Table.Row>
                </Table.Header>

                <Table.Body>
                    
                    {   
                        moviesList &&
                        moviesList.length &&
                        moviesList?.map((movie, index) => (
                            <Table.Row>
                               <Table.Cell>{movie.Title}</Table.Cell>
                               <Table.Cell>{movie.Year}</Table.Cell>
                               <Table.Cell>{movie.imdbID}</Table.Cell>
                            </Table.Row>                    
                        ))
                    }

                </Table.Body>

                <Table.Footer>
                <Table.Row>
                    <Table.HeaderCell colSpan='3'>
                    <Menu floated='right' pagination>
                        <Menu.Item as='a' icon>
                        <Icon name='chevron left' onClick = {e => handlePageChange(page - 1) } />
                        </Menu.Item>
                        <Menu.Item as='a' onClick = {e => onPageChange(1)}>1</Menu.Item>
                        <Menu.Item as='a' onClick = {e => onPageChange(2)}>2</Menu.Item>
                        <Menu.Item as='a' onClick = {e => onPageChange(3)}>3</Menu.Item>
                        <Menu.Item as='a' onClick = {e => onPageChange(4)}>4</Menu.Item>
                        <Menu.Item as='a' icon>
                        <Icon name='chevron right' onClick = {e => onPageChange(page + 1)}/>
                        </Menu.Item>
                    </Menu>
                    </Table.HeaderCell>
                </Table.Row>
                </Table.Footer>
            </Table>
        </div>
    )
};

export default Tables;
