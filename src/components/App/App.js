import React from 'react';
import { BrowserRouter as Router} from 'react-router-dom';
import ErrorBoundary from '../ErrorBoundary';
import ThemeProvider from '../ThemeProvider';
import CountriesProvider from '../CountriesProvider';
import HomePage from '../HomePage/HomePage';

function App () {
    return (
      <ThemeProvider>
        <CountriesProvider> 
          <Router>
            <ErrorBoundary
              fallback={
                <p className="error">
                  Something went wrong...
                </p>
              }
            >
                <HomePage />
            </ErrorBoundary>
          </Router>
        </CountriesProvider>
     </ThemeProvider>
    );
}

export default App;