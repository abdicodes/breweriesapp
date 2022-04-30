import axios from 'axios' // API that makes HTTP requests

const baseURL = 'https://api.openbrewerydb.org/breweries'
const getAll = async () => {
  const response = await axios.get(baseURL)
  return response.data // array that contains all breweries details.
}
// eslint-disable-next-line import/no-anonymous-default-export
export default { getAll }
