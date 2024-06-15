import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { getDrugs, getSpellingSuggestions } from '../api';

const SearchDrugs = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [results, setResults] = useState([]);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleSearch = async () => {
    /* try { */
      const response = await getDrugs(searchTerm);
      console.log(response)
      /* if (response.data.drugGroup) {
        setResults(response.data.drugGroup.conceptGroup[0].conceptProperties);
      } else {
        const suggestions = await getSpellingSuggestions(searchTerm);
        if (suggestions.data.suggestionGroup) {
          setResults(suggestions.data.suggestionGroup.suggestionList.suggestion);
        } else {
          setError('No results found');
        } */
    /*   }
     }  catch (error) {
      setError('An error occurred while searching');
    }  */ 
  };

  const handleResultClick = (drugName) => {
    navigate(`/drugs/${encodeURIComponent(drugName)}`);
  };

  return (
    <div>
      <h1>Search for drugs</h1>
      <input 
        type="text" 
        value={searchTerm} 
        onChange={(e) => setSearchTerm(e.target.value)} 
        placeholder="Enter drug name" 
      />
      <button onClick={handleSearch}>Search</button>
      {error && <p>{error}</p>}
      <ul>
        {results.map(result => (
          <li key={result.rxcui} onClick={() => handleResultClick(result.name)}>
            {result.name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SearchDrugs;
