import React from 'react'
import CollectionCard from './CollectionCard'

import "./FunkList.css";
const FunkList = ({punkListData, setSelectedPunk}) => {
    return (
        <div className='punkList'>
            {punkListData.map(punk => (
                    <div onClick={() => setSelectedPunk(punk.token_id)}>
                        <CollectionCard 
                            key = {punk.token_id}
                            id={punk.token_id} 
                            name={punk.name} 
                            traits={punk.traits}
                            image = {punk.image_thumbnail_url}
                            
                        />
                    </div>
                ))
            }
        </div>
    )
}

export default FunkList
