import { useEffect } from 'react'
import { Link, Routes, Route, useNavigate } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import {
  Grid,
  CssBaseline,
  Typography,
  Box,
  Container,
  Card,
  CardContent,
  CardActions,
  Button,
  CardHeader,
} from '@mui/material/'
import { fetchApi } from './reducers/apiReducer'
import Brewery from './components/Brewery'
import SearchAppBar from './SearchBar'
import Home from './components/Home'

function App() {
  const navigate = useNavigate()
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchApi())

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const breweries = useSelector((state) => state.reducer)

  if (!breweries) return null

  return (
    <Box bgcolor="#E9967A">
      <CssBaseline />
      <Box>
        <Routes>
          <Route path="/:id" element={<Brewery />} />
          <Route path="/" element={<Home list={breweries} />} />
        </Routes>
      </Box>
    </Box>
  )
}

export default App
