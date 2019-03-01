import { API_KEY } from './constants';

export const SEARCH_ARTICLE = (searchTerms, typeOfMaterial, page) => {
  const uri = `https://api.nytimes.com/svc/search/v2/articlesearch.json?q=${searchTerms}&fq=type_of_material:"${typeOfMaterial}"&page=${page}&api-key=${API_KEY}`;
  return encodeURI(uri);
};
