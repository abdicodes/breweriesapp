import axios from 'axios'

const baseURL = 'https://api.openbrewerydb.org/breweries'
const getAll = async () => {
  const response = await axios.get(baseURL)
  return response.data
}
// eslint-disable-next-line import/no-anonymous-default-export
export default { getAll }
