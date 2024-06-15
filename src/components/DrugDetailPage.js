import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { getNDCs } from '../api';

const capitalizeFirstLetter = (string) => {
  return string.charAt(0).toUpperCase() + string.slice(1);
};

const DrugDetails = () => {
  const location = useLocation();
  const drug = location.state?.drug;
  const [ndcs, setNdcs] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchDrugDetails = async () => {
      if (drug) {
        try {
          const ndcResponse = await getNDCs(drug.rxcui);
          setNdcs(ndcResponse?.data.ndcGroup.ndcList.ndc);
        } catch (error) {
          console.error('Error fetching NDCs', error);
        } finally {
          setLoading(false);
        }
      }
    };
    fetchDrugDetails();
  }, [drug]);

  if (!drug) {
    return <p>No drug details found.</p>;
  }

  if (loading) {
    return <p>Loading...</p>;
  }

  return (
    <div className="drug-details-container">
      <h1>{capitalizeFirstLetter(drug.name)}</h1>
      <p><strong>ID:</strong> {drug.rxcui}</p>
      <p><strong>Name:</strong> {drug.name}</p>
      <p><strong>Synonyms:</strong> {drug.synonym}</p>
      <h2>Associated NDCs</h2>
      <ul>
        {ndcs?.map(ndc => (
          <li className='ndc' key={ndc}>{ndc}</li>
        ))}
      </ul>
    </div>
  );
};

export default DrugDetails;
