import axios from 'axios';

const API_BASE_URL = 'https://rxnav.nlm.nih.gov/REST';

export const getDrugs = (name) => {
  return axios.get(`${API_BASE_URL}/drugs.json?name=${name}`);
};

export const getSpellingSuggestions = (name) => {
  return axios.get(`${API_BASE_URL}/spellingsuggestions.json?name=${name}`);
};

export const getNDCs = (rxcui) => {
  return axios.get(`${API_BASE_URL}/rxcui/${rxcui}/ndcs.json`);
};
