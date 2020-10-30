import React, { useState, useEffect } from 'react';
import CountryTable from "./CountryTable";
import './App.css';
import countryFacade from './countryFacade';

const App = (props) => {
  const[headInfo, setHeadInfo] = useState([]);
  const[bodyInfo, setBodyInfo] = useState([]);

  const headerItm = async () => {
    const newLabel = await countryFacade.getLabels().then(data => {return data});
    await setHeadInfo(newLabel);
  }

  const bodyItm = async () => {
    const newCountry = await countryFacade.getCountries().then(data => {return data});
    await setBodyInfo(newCountry);
    
  }

  useEffect(() => {
    setInterval(bodyItm(), 3000);
    headerItm();
  },[]);

    return (
      <div>
        <div className="App-header">
          <h2>Country Information</h2>
        </div>
        <div className="App-intro">
                  
           <CountryTable head={headInfo} body={bodyInfo}/>
        </div>
      </div>
    );
};


export default App;
