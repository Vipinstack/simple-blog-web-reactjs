import React from 'react';
import './TopBar.css'


const TopBar = () => {
    return (
        <div className="topBar">
            <div className="leftBar">
            <i className=" topIcon fab fa-facebook-square"></i>
            <i className=" topIcon fab fa-twitter-square"></i>
            <i className=" topIcon fab fa-instagram-square"></i>
            <i className=" topIcon fab fa-pinterest-square"></i>
            </div>
            <div className="CenterBar">
            <ul className="topList">
                <li className="topListItems">Home</li>
                <li className="topListItems">Write</li>
                <li className="topListItems">LogOut</li>
            </ul>
            </div>
            <div className="RightBar">
                <img 
                    src="https://cdn.pixabay.com/photo/2015/01/08/18/29/entrepreneur-593358__340.jpg"
                    alt="logo"
                    className="RightImg"
                />
                <i className="topSearchIcon fas fa-search"></i>
            </div>
        </div>
    )
}

export default TopBar
