import React, { useState } from 'react';
import { SearchMovies } from '../../Components/SearchMovies';
import { Movies } from '../Movies';

const Home = () => {
    const [page, setPage] = useState(1);

    return (
        <div>
            <div>
                <SearchMovies page = { page } />
            </div>
            <div>
                <Movies page = { page } onPageChange = { newPage => setPage(newPage) } />
            </div>
        </div>
    )
};

export default Home;
