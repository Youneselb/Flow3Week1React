//Add imports here

const countryFacade = () => {

  const getLabels = () => {
    //TODO: Get Labels from server
    return fetch("http://localhost:3333/labels").then(res => res.json());
  }

  const getCountries = () => {
    //TODO: Get Countries from server
    return fetch(" http://localhost:3333/countries").then(res => res.json());
  }
  return {
    getLabels,
    getCountries
  }
}

export default  countryFacade();