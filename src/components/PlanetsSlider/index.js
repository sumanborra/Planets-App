// Write your code here
import {Component} from 'react'
import PlanetItem from '../PlanetItem'

import './index.css'

class PlanetsSlider extends Component {
  render() {
    const {planetsList} = this.props
    return (
      <div className="background-container-platents" data-testid="planets">
        <PlanetItem planetsList={planetsList} />
      </div>
    )
  }
}
export default PlanetsSlider
