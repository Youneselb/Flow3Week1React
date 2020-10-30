import React from "react";

const CountryTable = ({head, body}) => {

  const itemHoldingMultipleValues = array => {
    if(array.length > 1){
      return <>{array[0]} (+{array.length - 1})</>;
    } else{
      return <>{array[0]}</>
    }
  }  
  return (
      <div>
     
      <table className="table">
        <thead>
        <tr>
        {head.map((l, index) => {
          return (
              <th key={index}>{l}</th>
          );
        })}
        </tr> 
        </thead>
        
        <tbody>
        {body.map((c) => {
          return (
            <tr key={c.name}>
              <td>{c.name}</td>
              <td>{c.capital}</td>
              <td>{c.region}</td>
              <td>{c.population}</td>
              <td>{c.area}</td>
              <td>{itemHoldingMultipleValues(c.timezones)}</td>
              <td>{itemHoldingMultipleValues(c.borders)}</td>
              <td>{itemHoldingMultipleValues(c.topLevelDomain)}</td>
              <td>{itemHoldingMultipleValues(c.currencies)}</td>
              <td>{itemHoldingMultipleValues(c.languages)}</td>
            </tr>
          );
        })}
        </tbody>
      </table>
      </div>
    );
};

export default CountryTable;