import Slider from 'react-slick'

import './index.css'

import PlanetItem from '../PlanetItem'

const PlanetsSlider = props => {
  const {planetsList} = props
  return (
    <div className="planets-container" data-testid="planets">
      <h1 className="main-heading">PLANETS</h1>
      <Slider>
        {planetsList.map(eachItem => (
          <PlanetItem key={eachItem.id} planentItemDetails={eachItem} />
        ))}
      </Slider>
    </div>
  )
}
export default PlanetsSlider
