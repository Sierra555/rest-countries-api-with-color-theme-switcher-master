import React from 'react';
import { getNestedProperty } from '../../helpers/file-helpers';
import Spinner from '../Spinner/Spinner';

function CountryCard({ country, lists, modifier, flag,  header }) {
  const [isImgLoading, setIsImgLoading] = React.useState(true);

  return (
    <div className={`card ${modifier ? modifier : ''}`}>
      {flag && (
        <div className='card-image' >
          {isImgLoading && <Spinner />}
          <img 
            src={country.flags.png || country.flags.svg} 
            alt={country.flags.alt || 'Country flag'} 
            onLoad={()=> setIsImgLoading(false)}
            style={{ display: isImgLoading ? 'none' : 'block' }}
          />
        </div> 
      )}

      <div className='card-content'>
        {header && <h2>{header}</h2> }

        <div className='card-info'>
          {lists && (
            lists.map(list => (
              <ul className='card-list' key={list[0].label}>
                {list.map(item => {
                  const path = getNestedProperty(country, item.path)
                    let value = '';

                    if (typeof path === 'object' && path != null) {
                      Object.values(path).map(val => {
                        if(typeof val === 'object' && val != null) {
                          value = (item.props ? val[item.props] : val);
                        }
                        else {
                          value = val;
                        }
                      })
                    }
                    else {
                      value = path;
                    }

                    return (<li key={item.label}><p><b>{item.label}</b>: {value}</p></li>);
                })}
              </ul>
            ))
          )}
        </div>
      </div> 
    </div>
  );
}

export default CountryCard;
