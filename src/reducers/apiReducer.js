import { createSlice } from '@reduxjs/toolkit'
import breweriesApi from '../services/breweriesApi'

/*  Although the task is simple and does not require Redux for Fetching data, 
and local useState suffices I just felt like this is more robust :P */
const brewerySlice = createSlice({
  name: 'breweries',
  initialState: [],
  reducers: {
    fetchAll(state, action) {
      return action.payload
    },
  },
})

export const fetchApi = () => {
  return async (dispatch) => {
    const response = await breweriesApi.getAll()
    console.log(response)
    dispatch(fetchAll(response))
  }
}

export const { fetchAll } = brewerySlice.actions
export default brewerySlice.reducer
