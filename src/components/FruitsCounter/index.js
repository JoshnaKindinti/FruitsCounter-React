// Write your code here
import {Component} from 'react'
import './index.css'
class FruitsCounter extends Component {
  state = {mangoes: 0, bananas: 0}
  onMango = () => {
    this.setState(prevState => ({mangoes: prevState.mangoes + 1}))
  }
  onBanana = () => {
    this.setState(prevState => ({bananas: prevState.bananas + 1}))
  }
  render() {
    const {mangoes, bananas} = this.state
    return (
      <div className="background">
        <div className="container">
          <h1 className="heading">
            Bob ate <span className="number">{mangoes}</span> mangoes
            <span className="number">{bananas}</span> bananas
          </h1>
          <div className="blocks">
            <div className="block">
              <img
                src="https://assets.ccbp.in/frontend/react-js/mango-img.png"
                alt="mango"
                className="image"
              />
              <button type="button" className="button" onClick={this.onMango}>
                Eat Mango
              </button>
            </div>
            <div className="block">
              <img
                src="https://assets.ccbp.in/frontend/react-js/banana-img.png"
                alt="banana"
                className="image"
              />
              <button type="button" className="button" onClick={this.onBanana}>
                Eat Banana
              </button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
export default FruitsCounter
