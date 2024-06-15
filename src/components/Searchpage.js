// SearchDrugs.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { getDrugs, getSpellingSuggestions } from '../api';

const SearchDrugs = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [results, setResults] = useState([]);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleSearch = async () => {
    setError(null);
    setResults([]);
    try {
      const response = await getDrugs(searchTerm);
      if (response.data.drugGroup) {
        const allConceptProperties = response.data.drugGroup.conceptGroup
          .filter(group => group.conceptProperties)  // filter out groups without conceptProperties
          .flatMap(group => group.conceptProperties);  // flatten the array of conceptProperties
        setResults(allConceptProperties);
      } else {
        const suggestions = await getSpellingSuggestions(searchTerm);
        if (suggestions.data.suggestionGroup && suggestions.data.suggestionGroup.suggestionList.suggestion) {
          setResults(suggestions.data.suggestionGroup.suggestionList.suggestion.map(s => ({ name: s })));
        } else {
          setError('No results found');
        }
      }
    } catch (error) {
      setError('An error occurred while searching');
    }
  };

  const handleResultClick = async (result) => {
    navigate(`/drugs/${encodeURIComponent(result.rxcui)}`, { state: { drug: result } });
  };

  return (
    <div className="search-container">
      <h1>Search for drugs</h1>
      <input
        type="text"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        placeholder="Enter drug name"
      />
      <button onClick={handleSearch}>Search</button>
      {error && <p>{error}</p>}
      <div className="results-table">
        <table>
          <thead>
            <tr>
              <th>#</th>
              <th>Drug Name</th>
            </tr>
          </thead>
          <tbody>
            {results.map((result, index) => (
              <tr key={result.rxcui} onClick={() => handleResultClick(result)}>
                <td>{index + 1}</td>
                <td>{result.name}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default SearchDrugs;
