import axios from 'axios';

const API_BASE_URL = 'https://rxnav.nlm.nih.gov';

export const getDrugs = (name) => {
  return axios.get(`${API_BASE_URL}/REST/drugs.xml?name=${name}`);
};

export const getSpellingSuggestions = (name) => {
  return axios.get(`${API_BASE_URL}/REST/spellingsuggestions.xml?name=${name}`);
};

export const getNDCs = (rxcui) => {
  return axios.get(`${API_BASE_URL}/REST/rxcui/${rxcui}/ndcs.json`);
};



