import React from 'react';
import Banner from './Banner';
import moment from 'moment';
import Authors from './Authors';
import Books from './Books';
import Footer from './Footer';

const Home = () => {
    return (
        <div className='text-center '>
            
            <p>Today: {moment().format('MMMM Do YYYY')}</p>
            <Banner></Banner>
            <Authors></Authors>
            <Books></Books>
            <Footer></Footer>
        </div>
    );
};

export default Home;