import React from 'react';
import {ThemeContext} from '../ThemeProvider';

function Header() {
  const {theme, setTheme} = React.useContext(ThemeContext);

  return (
  <header className="header">
    <div className='row'>
      <div className="header__wrapper">
        <h1><b>Where in the world?</b></h1>
        <button 
        className="darkModeBtn"
        onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
        >
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill={theme === 'light' ?  "transparent": "#fff" } stroke={theme === 'light' ? "currentColor": "transparent" } strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-moon"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path></svg>
        {theme === 'light' ? 'Dark Mode' : 'Light mode'}
        </button> 
      </div>
    </div>
  </header>
  )
}

export default Header;
