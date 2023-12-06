import './index.css'
import Slider from 'react-slick'
import PlanetItem from '../PlanetItem'

const PlanetsSlider = props => {
  const {planetsList} = props
  const settings = {
    dots: false,
    slidesToShow: 1,
    slidesToScroll: 1,
  }
  return (
    <div className="container" data-testid="planets">
      <h1>PLANETS</h1>
      <Slider {...settings}>
        {planetsList.map(eachItem => (
          <PlanetItem key={eachItem.id} {...eachItem} />
        ))}
      </Slider>
    </div>
  )
}

export default PlanetsSlider
