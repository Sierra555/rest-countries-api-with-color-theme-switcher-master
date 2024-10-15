import React from 'react';
import useSWR from "swr";

export const CountriesContext = React.createContext();
const ENDPOINT="https://restcountries.com/v3.1/all";

async function fetcher(endpoint) {
  const response = await fetch(endpoint);
  const data = await response.json();

  return data;
}

function CountriesProvider({ children }) {
  const {data, isLoading} = useSWR(ENDPOINT, fetcher);
  const countries = data || [];

  return (
    <CountriesContext.Provider value={{ countries, isLoading }}>
      {children}
    </CountriesContext.Provider>
  );
}

export default CountriesProvider;
