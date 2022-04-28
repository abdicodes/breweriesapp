import { useEffect } from 'react'
import { Link, Routes, Route } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { Grid, CssBaseline, Typography, Box, Stack } from '@mui/material/'
import { fetchApi } from './reducers/apiReducer'
import Brewery from './components/Brewery'

function App() {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchApi())

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const breweries = useSelector((state) => state.reducer)
  console.log(breweries)

  if (!breweries) return null

  return (
    <Box bgcolor="#E9967A">
      {/* <CssBaseline /> */}
      <Box>
        <Routes>
          <Route path="/:id" element={<Brewery />} />
        </Routes>
        <Grid container justifyContent="center">
          {breweries.map((e, i) => (
            <Grid key={i}>
              <Typography> {e.name}</Typography>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Box>
  )
}

export default App
