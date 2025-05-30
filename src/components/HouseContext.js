import React, { useState, useEffect, createContext } from 'react';

// import date
import { housesData } from "../data";

// create context
export const HouseContext = createContext();

const HouseContextProvider = ({ children }) => {
  const [houses, setHouses] = useState(housesData);
  const [country, setCountry] = useState('Location (any)');
  const [countries, setCountries] = useState([]);
  const [property, setProperty] = useState('Property type (any)');
  const [properties, setProperties] = useState([]);
  const [price, setPrice] = useState('Price range (any)');
  const [loading, setLoading] = useState(false);

  // return all countries
  useEffect(() => {
    const allCountries = houses.map((house) => {
      return house.country;
    });
    // remove duplicates
    const uniqueCountries = ['Location (any)', ...new Set(allCountries)];
    // set countries state
    setCountries(uniqueCountries);
  }, [houses]);

  // return all properties
  useEffect(() => {
    const allProperties = houses.map((house) => {
      return house.type;
    });
    // remove duplicates
    const uniqueProperties = ['Property type (any)', ...new Set(allProperties)];
    // set properties state
    setProperties(uniqueProperties);
  }, [houses]);

  const handleClick = () => {
  setLoading(true);

  const isDefault = (str) => str.toLowerCase().includes('any');

  // Parse min and max price safely
  const minPrice = parseInt(price.split(' ')[0].replace(/[^0-9]/g, '')) || 0;
  const maxPrice = parseInt(price.split(' ')[2].replace(/[^0-9]/g, '')) || Infinity;

  const filteredHouses = housesData.filter(house => {
    const housePrice = parseInt(house.price.replace(/[^0-9]/g, '')) || 0;

    // Check each filter only if it's not 'any'
    const countryMatch = isDefault(country) || house.country === country;
    const propertyMatch = isDefault(property) || house.type === property;
    const priceMatch = isDefault(price) || (housePrice >= minPrice && housePrice <= maxPrice);

    return countryMatch && propertyMatch && priceMatch;
  });

  setTimeout(() => {
    setHouses(filteredHouses.length > 0 ? filteredHouses : []);
    setLoading(false);
  }, 1000);
};


return  <HouseContext.Provider 
value={{
  country,
  setCountry,
  countries,
  property,
  setProperty,
  properties,
  price,
  setPrice,
  houses,
  loading,
  handleClick,

}}>
      {children}
    </HouseContext.Provider>;
};

export default HouseContextProvider;
