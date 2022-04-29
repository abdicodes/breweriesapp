import { useMatch, useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'

const Brewery = () => {
  //useNavigation can also be used to achieve the same thing
  const history = useNavigate()
  const match = useMatch('/:id')
  console.log(match.params.id)
  const breweries = useSelector((state) => state.reducer)
  const clickedBrewery = breweries.find(
    (element) => element.id === match.params.id
  )

  if (!clickedBrewery) return null
  return (
    <div>
      {clickedBrewery.name}
      <button onClick={() => history('/')}>click me </button>
    </div>
  )
}

export default Brewery
