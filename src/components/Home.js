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
import { useNavigate } from 'react-router-dom'
import SearchAppBar from '../SearchBar'
const Home = ({ list }) => {
  const navigate = useNavigate()

  return (
    <Box>
      <SearchAppBar breweries={list} />
      <Container maxWidth="lg">
        <Grid container spacing={3}>
          {list.map((e, i) => (
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
