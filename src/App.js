// App.js
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import SearchDrugs from './components/Searchpage';
import DrugDetails from './components/DrugDetailPage';
import Navbar from './Navbar';


const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<SearchDrugs />} />
        <Route path="/drugs/search" element={<SearchDrugs />} />
        <Route path="/drugs/:rxcui" element={<DrugDetails />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
