import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import SearchDrugs from './components/Searchpage';
import DrugDetails from './components/DrugDetailPage';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/drugs/search" element={<SearchDrugs />} />
        <Route path="/drugs/:drug_name" element={<DrugDetails />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
