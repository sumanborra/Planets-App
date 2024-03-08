// Write your code here
import Slider from 'react-slick'

import './index.css'

const PlanetItem = props => {
  const {planetsList} = props
  const settings = {
    dots: true,
    slidesToShow: 1,
    slidesToScroll: 1,
  }
  return (
    <div className="slider-container">
      <h1 className="heading-planets">PLANETS</h1>
      <Slider {...settings}>
        {planetsList.map(each => {
          return (
            <div>
              <img
                src={each.imageUrl}
                alt={`planet ${each.name}`}
                className="image-planets"
              />
              <h1 className="heading-text">{each.name}</h1>
              <p className="description-text">{each.description}</p>
            </div>
          )
        })}
      </Slider>
    </div>
  )
}

export default PlanetItem
