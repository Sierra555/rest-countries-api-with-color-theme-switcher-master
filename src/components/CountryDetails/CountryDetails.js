import React from 'react';
import Spinner from '../Spinner/Spinner';
import { useParams } from 'react-router-dom';
import { CountriesContext } from '../CountriesProvider';
import CountryCard from '../CountryCard';

function CountryDetails() {
  const { countries, isLoading } = React.useContext(CountriesContext);
  const [country, setCountry] = React.useState(null);
  const [cardListData, setCardListData] = React.useState([]);
  const { countryName } = useParams();

  React.useEffect(() => {
    const country = countries.find(country => country.name.common === countryName);

    if (country) {
      setCountry(country);

      setCardListData([[
        { label: 'Native Name', path: 'name.nativeName', props: 'common' },
        { label: 'Population', path: 'population' },
        { label: 'Region', path: 'region' },
        { label: 'Subregion', path: 'subregion' },
        { label: 'Capital', path: 'capital' },
      ],
      [ 
        { label: 'Top Level Domain', path: 'tld' },
        { label: 'Currencies', path: 'currencies', props: 'name' },
        { label: 'Languages', path: 'languages', props: 'name'}
      ]
    ]);
    }


  }, [countries, countryName]);

  if (isLoading) {
    return <Spinner />;
  }

  if (!country) {
    return <div>Country not found</div>;
  }

  return (
    <div className='wrapper'>
      <a href="/"><span className='button'>Back</span></a>
      <CountryCard country={country} lists={cardListData} modifier="card_v2" flag header={countryName}/>
    </div>
  );
}

export default CountryDetails;
