import React from 'react'
import { Tables } from '../../Components/Tables'

const Movies = (props) => {
    const { page, onPageChange } = props;

    return (
        <div>
            <Tables page = { page } onPageChange = { onPageChange } />
        </div>
    )
};

export default Movies;