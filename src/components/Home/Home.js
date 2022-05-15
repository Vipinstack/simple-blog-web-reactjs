import React from 'react';
import Header from '../Header/Header';
import Posts from '../Posts/Posts';
import SideBar from '../sidebar/SideBar';
import  './Home.css';

const Home = () => {
    return (
        <div>
            <Header />
            <div className="Home">
                
                <Posts />
                <SideBar />

            </div>
        </div>
    )
}

export default Home
