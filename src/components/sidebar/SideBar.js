import React from 'react';
import './SideBar.css';

const SideBar = () => {
    return (
        
            <div className="sidebar">
                <div className="sidebarItem">
                    <span className="sidebarTitle">About Me</span>
                    <img 
                        src="https://images.pexels.com/photos/906150/pexels-photo-906150.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                        alt=""
                        className="sidebarImg"
                    />
                    <p className="sidebarPARA">
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                    </p>
                    <div className="sidebarItem">
                    <span className="sidebarTitle">CATEGORIES</span>
                    <ul className="sidebarList">
                        <li className="sidebarListItems">Life</li>
                        <li className="sidebarListItems">Cinema</li>
                        <li className="sidebarListItems">Sport</li>
                        <li className="sidebarListItems">Tech</li>
                        <li className="sidebarListItems">Style</li>
                        <li className="sidebarListItems">Music</li>
                    </ul>
                    </div>
                    <div className="sidebarItem">
                        <span className="sidebarTitle">SOCIAL MEDIA ICON</span>
                    <div className="sidebarSocial">                  
                        <i className=" sidebarIcon fab fa-facebook-square"></i>
                        <i className=" sidebarIcon fab fa-twitter-square"></i>
                        <i className=" sidebarIcon fab fa-instagram-square"></i>
                        <i className=" sidebarIcon fab fa-pinterest-square"></i>
                    </div>
                    </div>
                </div>
            </div>
    )
}

export default SideBar
