import './App.css';
import { useState,useEffect } from 'react';
import axios from 'axios';

import Header from './Components/Header/Header.js';
import CollectionCard from './Components/FunkCarousel/CollectionCard';
import FunkList from './Components/FunkCarousel/FunkList';
import Mainpage from './Components/Mainpage/Mainpage';
function App() {
  
  //Adding Dynamic Values from Testnet Opensea
  const [punkListData, setPunkListData] = useState([])
  const [selectedPunk, setSelectedPunk] = useState(0)
 
  useEffect( 
    () => {
      const getMyNfts = async() =>{
        const openSeaData = await axios.get(
          'https://testnets-api.opensea.io/assets?asset_contract_address=0x4b45be9C586e9Ac3251Ce7Af50d9E85bFad32bEF&order_direction=asc'
                                            )
       
        console.log(openSeaData.data.assets)
        setPunkListData(openSeaData.data.assets)
    }

    return getMyNfts()
  }, [])

  return (
    <div className='app'>
     <Header />
     {
      punkListData.length>0 && (
      <>
        <Mainpage punkListData={punkListData} selectedPunk={selectedPunk}/>
        <FunkList punkListData={punkListData} setSelectedPunk={setSelectedPunk} />
      </>
      )
     }
     
    </div>
  );
}

export default App;
