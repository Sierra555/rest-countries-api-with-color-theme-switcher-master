import React from 'react';
import { ThemeContext } from '../ThemeProvider';
import Header from '../Header';
import { Routes, Route } from 'react-router-dom';
import CountriesList from '../CountriesList';
import CountryDetails from '../CountryDetails';

function HomePage() {
  const {theme, COLORS} = React.useContext(ThemeContext);
  
  return (
    <div
      data-theme={theme}
      style={{
        color: COLORS.text,
        backgroundColor: COLORS.background,
        }}>
      <Header />
        <div className="row">
            <Routes>
              <Route path="/" element={<CountriesList />} />
              <Route path="/country/:countryName" element={<CountryDetails />} />
            </Routes>
        </div>
    </div>);
}

export default HomePage;
