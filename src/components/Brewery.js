import { useMatch, useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { Button } from '@mui/material'

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
    <div>
      {clickedBrewery.name}
      <Button onClick={() => history('/')}> Go back </Button>
    </div>
  )
}

export default Brewery
