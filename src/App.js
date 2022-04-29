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
} from '@mui/material/'
import { fetchApi } from './reducers/apiReducer'
import Brewery from './components/Brewery'
import SearchAppBar from './SearchBar'

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
        <SearchAppBar breweries={breweries} />
        <Routes>
          <Route path="/:id" element={<Brewery />} />
        </Routes>
        <Container maxWidth="md">
          <Grid container spacing={4}>
            {breweries.map((e, i) => (
              <Grid key={i} item>
                <Card>
                  <CardContent>
                    <Typography variant="h10">name: {e.name}</Typography>
                    <Typography>Brewey Type: {e.brewery_type}</Typography>
                    <Typography>City: {e.city}</Typography>
                    <CardActions>
                      <Button onClick={() => navigate(`/${e.id}`)}>
                        {' '}
                        View details
                      </Button>
                    </CardActions>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>
    </Box>
  )
}

export default App
