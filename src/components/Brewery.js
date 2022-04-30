import { useMatch, useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'
import dateConverter from '../assets/dateConverter'
import {
  Box,
  Button,
  Grid,
  Card,
  CardContent,
  Typography,
  CardActions,
  CardHeader,
  Link,
} from '@mui/material'

const Brewery = () => {
  // useHistory is deprecated! useNavigate does the same thing
  const history = useNavigate()
  const match = useMatch('/:id')

  // to pull all breweries object from the Redux store and find a specific element using match hook
  const breweries = useSelector((state) => state.reducer)
  const clickedBrewery = breweries.find(
    (element) => element.id === match.params.id
  )

  // this is to prevent rendering error when information are yet to be pulled from redux store
  if (!clickedBrewery) return null
  return (
    <Box
      height="100vh"
      display="flex"
      flexDirection="column"
      justifyContent="center"
    >
      <Grid
        item
        style={{
          display: 'flex',
          justifyContent: 'center',
        }}
      >
        <Card elevation={3} style={{ minheight: '70%' }}>
          <CardHeader title={clickedBrewery.name} />

          {/* I added logic to dismiss id value, null values also replaced _ with space and improved date appearance */}
          <CardContent>
            {Object.entries(clickedBrewery).map((array, i) =>
              array[1] !== null ? (
                array[0] !== 'id' ? (
                  <Typography key={i}>
                    {array[0].split('_').join(' ')} :{' '}
                    {array[0].includes('_at') ? (
                      dateConverter(array[1])
                    ) : array[0].includes('url') ? (
                      <Link href={array[1]}>{array[1]}</Link>
                    ) : (
                      array[1]
                    )}
                  </Typography>
                ) : null
              ) : null
            )}
            <CardActions>
              <Button variant="text" onClick={() => history('/')}>
                {' '}
                Go back{' '}
              </Button>
            </CardActions>
          </CardContent>
        </Card>
      </Grid>
    </Box>
  )
}

export default Brewery
