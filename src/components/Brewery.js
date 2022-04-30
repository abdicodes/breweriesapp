import { useMatch, useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'
import {
  Box,
  Button,
  Grid,
  Card,
  CardContent,
  Typography,
  CardActions,
  CardHeader,
} from '@mui/material'

const Brewery = () => {
  //useNavigation can also be used to achieve the same thing
  const history = useNavigate()
  const match = useMatch('/:id')

  const breweries = useSelector((state) => state.reducer)
  const clickedBrewery = breweries.find(
    (element) => element.id === match.params.id
  )

  if (!clickedBrewery) return null
  return (
    <Box
      height="100vh"
      display="flex"
      flexDirection="column"
      justifyContent="center"
    >
      <Grid item style={{ display: 'flex', justifyContent: 'center' }}>
        <Card elevation={3}>
          <CardHeader title={clickedBrewery.name} />

          <CardContent>
            <Typography>Brewey Type: {clickedBrewery.brewery_type}</Typography>
            <Typography>City: {clickedBrewery.city}</Typography>
            <CardActions>
              <Button onClick={() => history('/')}> Go back </Button>
            </CardActions>
          </CardContent>
        </Card>
      </Grid>
    </Box>
  )
}

export default Brewery
