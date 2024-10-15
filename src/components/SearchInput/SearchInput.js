import React from 'react';
import VisuallyHidden from '../VisuallyHidden';
import { Search } from 'react-feather';

function SearchInput({ placeholder, query, setQuery }) {
  return (
    <div className='input-wrapper' tabIndex={1}>
      <label htmlFor="search-input">
        <VisuallyHidden>{placeholder}</VisuallyHidden>
      </label>
      <Search aria-hidden="true" />
      <input
        type="search"
        className='input'
        id="search-input"
        name="search-form"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder={placeholder}
      />
    </div>
  );
}

export default SearchInput;
