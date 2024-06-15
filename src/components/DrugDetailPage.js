import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getDrugs, getNDCs } from '../api';

const DrugDetails = () => {
  const { drug_name } = useParams();
  const [drugDetails, setDrugDetails] = useState(null);
  const [ndcs, setNdcs] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchDrugDetails = async () => {
      try {
        const response = await getDrugs(drug_name);
        const drug = response.data[0];
        setDrugDetails(drug);
        const ndcResponse = await getNDCs(drug.rxcui);
        setNdcs(ndcResponse.data);
      } catch (error) {
        console.error('Error fetching drug details', error);
      } finally {
        setLoading(false);
      }
    };
    fetchDrugDetails();
  }, [drug_name]);

  if (loading) return <p>Loading...</p>;

  return (
    <div>
      <h1>{drugDetails.name}</h1>
      <p>rxcui: {drugDetails.rxcui}</p>
      <p>Synonyms: {drugDetails.synonym}</p>
      <h2>Associated NDCs</h2>
      <ul>
        {ndcs.map(ndc => (
          <li key={ndc.ndc}>{ndc.ndc}</li>
        ))}
      </ul>
    </div>
  );
};

export default DrugDetails;
