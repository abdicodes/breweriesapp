import { configureStore } from '@reduxjs/toolkit'
import apiReducer from './apiReducer'

const store = configureStore({
  reducer: { reducer: apiReducer },
})

export default store
