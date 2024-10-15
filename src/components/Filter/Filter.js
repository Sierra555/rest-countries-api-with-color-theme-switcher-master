import React from 'react';
import Select from 'react-select';
import VisuallyHidden from '../VisuallyHidden';
import { ThemeContext } from '../ThemeProvider';

function Filter({ placeholder, onFilterChange, options, ...delegated }) {
  const {COLORS} = React.useContext(ThemeContext);
  const [selectedOption, setSelectedOption] = React.useState('');
  const customStyles= {
    control: (provided) => ({
      ...provided,
      border: '1px solid rgba(0, 0, 0, 0.1)',
      borderRadius: '8px',
      minHeight: '36px',
      boxShadow: COLORS.boxShadow,
      cursor: 'pointer',
      width: '200px',
      padding: '9px',
      backgroundColor: COLORS.backgroundElements,
    }),
    singleValue: (provided) => ({
      ...provided, 
      color: COLORS.text,
    }),
    placeholder: (provided) => ({
      ...provided,
      color: COLORS.text,
    }),
    indicatorSeparator: () => ({ display: 'none' }),
    indicatorContainer: (provided) => ({
      ...provided, 
      color: COLORS.text,
    }),
    menu: (provided) => ({
      ...provided,
      maxWidth: '200px',
      backgroundColor: COLORS.backgroundElements,
    }),
  };


  function handleSelectedOptionChange(selectedOption) {
    setSelectedOption(selectedOption);
    onFilterChange(selectedOption.value);
  }

  return (
    <div className='filter' tabIndex={1}>
      <VisuallyHidden>   
        <label htmlFor='FilteredLabel'>{placeholder}</label>
      </VisuallyHidden>
      <Select
        placeholder={placeholder}
        value={selectedOption}
        options={options.map(region=> ({value: region.value, label: region.label}))}
        styles={customStyles} 
        isSearchable={false}
        onChange={handleSelectedOptionChange}
        {...delegated}
      />
    </div>);
}

export default Filter;
