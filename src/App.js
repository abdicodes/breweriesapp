import { useEffect } from 'react'
import { Routes, Route } from 'react-router-dom'
import { ThemeProvider } from '@mui/material/styles'
import theme from './assets/theme'
import myImage from './assets/img.png'
import { useSelector, useDispatch } from 'react-redux'
import {
  // Grid,
  CssBaseline,
  // Typography,
  Box,
  // Container,
  // Card,
  // CardContent,
  // CardActions,
  // Button,
  // CardHeader,
} from '@mui/material/'
import { fetchApi } from './reducers/apiReducer'
import Brewery from './components/Brewery'
import Home from './components/Home'

function App() {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchApi())

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const breweries = useSelector((state) => state.reducer)
  if (!breweries) return null

  return (
    <ThemeProvider theme={theme}>
      <Box>
        <CssBaseline />
        <Box>
          <Routes>
            <Route path="/:id" element={<Brewery />} />
            <Route path="/" element={<Home list={breweries} />} />
          </Routes>
        </Box>
      </Box>
    </ThemeProvider>
  )
}

export default App
