import React from 'react'
import { SinglePost } from '../SinglePost/SinglePost';
import SideBar from '../sidebar/SideBar';
import './Single.css';

const single = () => {
    return (
        <div className="single">
            <SinglePost />
            <SideBar />
        </div>
    )
}

export default single
