import React from 'react'

import "../Header/Header.css";

//Assets
import punkLogo from "../../Assets/Images/Header/cryptopunk-logo.png";
import searchIcon from "../../Assets/Images/Header/search.png";
import themeSwitchIcon from "../../Assets/Images/Header/theme-switch.png";
const Header = () => {
    return (
        <div  className='globalHeader'>
            <div className='logoContainer'>
                <img src = {punkLogo} className='punkLogo' alt='' />
            </div>

            <div className='searchBar'>
                <div className='searchIconContainer'>
                    <img src={searchIcon} />
                </div>

                <input className='searchInput' placeholder='Search your Collections, Items and Users'/>
            </div>

            <div className='globalHeaderItems'>
                <p>Drops</p>
                <p>Marketplace</p>
                <p>Create</p>
            </div>

            <div className='globalHeaderActions'>
                <div className='themeSwitchContainer'>
                    <img src ={themeSwitchIcon}/>
                </div>
                <div className=''></div>
            </div>

            <div className='logInButton'>Log In</div>
        </div>
    )
}

export default Header
