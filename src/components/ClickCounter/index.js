import {Component} from 'react'
import './index.css'

class ClickCounter extends Component {
  state = {Counter: 0}

  onClickButton = () => {
    this.setState(prevState => ({Counter: prevState.Counter + 1}))
  }

  render() {
    const {Counter} = this.state
    return (
      <div className="ClickCounterContainer">
        <h1 className="title">
          The Button has been clicked <span className="counter">{Counter}</span>{' '}
          times
        </h1>
        <p className="description">Click the button to increase the count</p>
        <button className="button" onClick={this.onClickButton}>
          click Me!
        </button>
      </div>
    )
  }
}

export default ClickCounter
