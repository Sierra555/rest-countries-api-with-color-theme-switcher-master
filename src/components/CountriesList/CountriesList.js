import React, {useState, useMemo} from 'react';
import { Link } from 'react-router-dom';
import SearchInput from '../SearchInput';
import Filter from '../Filter';
import CountryCard from '../CountryCard';
import Spinner from '../Spinner/Spinner';
import { CountriesContext } from '../CountriesProvider';
import { getNestedProperty } from '../../helpers/file-helpers';

function CountriesList() {
  const { countries, isLoading } = React.useContext(CountriesContext);

  const [ query, setQuery ] = useState('');
  const [searchParams] = useState(['name.common', 'capital']);

  const [region, setRegion] = useState('');
  const REGIONS=[{label: 'Africa', value: 'Africa'}, {label: 'America', value: 'Americas'}, {label: 'Asia', value: 'Asia'}, {label: 'Europe', value: 'Europe'},{label: 'Oceania', value: 'Oceania'}];

  const handleFilterChange = (value) => {
    setRegion(value);
  }

  const filteredData = useMemo(() => {
    const queryLower = query.toLowerCase();

    return countries.filter(country => {
      const matchesQuery = searchParams.some(param =>  {
        const value = getNestedProperty(country, param);

        return value?.toString().toLowerCase().startsWith(queryLower);
      }
      );
      const matchesRegion = region ? country.region === region : true;

      return matchesQuery && matchesRegion;
    });
  }, [countries, query, region, searchParams]);

  const cardListData = [[{label: 'Population' , path: 'population'}, {label: 'Region' , path: 'region' }, {label: 'Capital', path: 'capital'}],];

  if (isLoading) {
    return <Spinner />;
  }

  return (
  <div className='wrapper cards-wrapper'>
    <div className='serach-wrapper'>
      <SearchInput placeholder="Search for a country..." query={query} setQuery={setQuery} /> 
    </div>
    <div className='filter-wrapper'>
     <Filter placeholder="Filter by region" onFilterChange={handleFilterChange} options={REGIONS}/>
    </div>
    <ul className='cards-grid'>
        {filteredData?.map(country => <li key={country.name.common}><Link to={`/country/${country.name.common}`}><CountryCard country={country} lists={cardListData} flag header={country.name.common}/></Link></li>)}
    </ul>
  </div>
  )
}

export default CountriesList;
