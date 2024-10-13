// Write your code here
import {Component} from 'react'
import './index.css'

const headImg = 'https://assets.ccbp.in/frontend/react-js/heads-img.png'
const tailImg = 'https://assets.ccbp.in/frontend/react-js/tails-img.png'

class CoinToss extends Component {
  state = {headCount: 0, tailCount: 0, isHead: true}

  onClickToss = () => {
    const tossResult = Math.floor(Math.random() * 2)

    if (tossResult === 0) {
      this.setState(prevState => ({
        headCount: prevState.headCount + 1,
      }))
      this.setState({isHead: true})
    } else {
      this.setState(prevState => ({
        tailCount: prevState.tailCount + 1,
      }))
      this.setState({isHead: false})
    }
  }

  render() {
    const {headCount, tailCount, isHead} = this.state

    return (
      <div className="bg-conatiner">
        <div className="white-container">
          <h1 className="main-heading"> Coin Toss Game </h1>
          <p className="head-tail"> Heads (or) Tails </p>
          <img
            src={isHead ? headImg : tailImg}
            alt="toss result"
            className="coin-img"
          />
          <button className="button" type="button" onClick={this.onClickToss}>
            Toss Coin
          </button>
          <div className="results-container">
            <p className="count"> Total: {headCount + tailCount} </p>
            <p className="count"> Heads: {headCount} </p>
            <p className="count"> Tails: {tailCount} </p>
          </div>
        </div>
      </div>
    )
  }
}

export default CoinToss
