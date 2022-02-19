import React from 'react'

import { useState,useEffect } from 'react';

import instagramLogo from "../../Assets/Images/Owner/instagram.png";
import twitterLogo from "../../Assets/Images/Owner/twitter.png";
import moreIcon from "../../Assets/Images/Owner/more.png";

import "./Mainpage.css"
const Mainpage = ({selectedPunk, punkListData}) => {
    const [activePunk, setActivePunk] = useState(punkListData[0]) 

    useEffect(() =>{
        setActivePunk(punkListData[selectedPunk])
    }, [punkListData, selectedPunk])
    return (
        <div className='main'>
            <div className='mainContent'>
                <div className='punkHighlight'>
                    <div className='punkContainer'>
                        <img 
                            className ="selectedPunk" 
                            src = {activePunk.image_thumbnail_url} 
                        />
                    </div>
                </div>
                <div className='punkDetails' style={{color:"white"}}>
                    <div className='title'>
                        {activePunk.name}
                    </div>
                    <span className='itemNumber'>#{activePunk.token_id}</span>
                </div>
                <div className='owner'>
                    <div className='ownerImageContainer'>
                        <img src={activePunk.owner.profile_img_url} alt="" />
                    </div>
                    <div className='ownerDetails'>
                        <div className='ownerNameAndHandle'>
                            <div>{activePunk.owner.address}</div>
                            <div className='ownerHandle'>@kashyab_19</div>
                        </div>
                    </div>
                    <div className='ownerLink'>
                        <img src={instagramLogo} alt="" />
                    </div>
                    <div className='ownerLink'>
                        <img src={twitterLogo} alt="" />
                    </div>
                </div>
            </div>
            
        </div>
    )
}

export default Mainpage
