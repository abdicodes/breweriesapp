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
  // useHistory is deprecated! useNavigate does the same thing
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
            {Object.entries(clickedBrewery).map((array, i) =>
              array[1] !== null ? (
                array[0] !== 'id' ? (
                  <Typography key={i}>
                    {array[0].split('_').join(' ')} is {array[1]}
                  </Typography>
                ) : null
              ) : null
            )}
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
