import {
  Grid,
  Container,
  Card,
  CardContent,
  Typography,
  Button,
  CardHeader,
  CardActions,
  Box,
} from '@mui/material'
import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import SearchAppBar from '../SearchBar'
const Home = ({ list }) => {
  const [filtered, setFiltered] = useState(list)
  useEffect(() => {
    setFiltered(list)
  }, [list])

  const filteredList = (SearchInput) => {
    // setFiltered(SearchInput)
    if (!SearchInput) setFiltered(list)
    let keys = Object.keys(list[0])
    setFiltered(
      list.filter((element) =>
        keys.some((key) =>
          element[key]?.toLowerCase().includes(SearchInput.toLowerCase())
        )
      )
    )
  }

  const navigate = useNavigate()
  if (!list) return null

  return (
    <Box>
      <SearchAppBar breweries={list} filteringList={filteredList} />
      {filtered.length === 0 && <div> No matching result found</div>}
      <Container maxWidth="lg">
        <Grid container spacing={3}>
          {filtered.map((e, i) => (
            <Grid
              key={i}
              item
              xs={12}
              sm={6}
              md={4}
              lg={3}
              style={{ display: 'grid' }}
            >
              <Card elevation={3}>
                <CardHeader title={e.name} />

                <CardContent>
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
  )
}
export default Home
