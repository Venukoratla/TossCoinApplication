// Write your code here
import {Component} from 'react'

class CoinToss extends Component {
  state = {
    totalCount: 0,
    heads: 0,
    tails: 0,
    imageUrl: 'https://assets.ccbp.in/frontend/react-js/heads-img.png',
  }

  tossCoin = () => {
    const {totalCount, heads, tails} = this.state
    const tossResult = Math.floor(Math.random() * 2)
    if (tossResult === 0) {
      this.setState({
        totalCount: totalCount + 1,
        heads: heads + 1,
        imageUrl: 'https://assets.ccbp.in/frontend/react-js/heads-img.png',
      })
    } else {
      this.setState({
        totalCount: totalCount + 1,
        tails: tails + 1,
        imageUrl: 'https://assets.ccbp.in/frontend/react-js/tails-img.png',
      })
    }
  }

  render() {
    const {imageUrl, totalCount, heads, tails} = this.state
    return (
      <div>
        <div>
          <h1>Coin Toss Game</h1>
          <p>Heads (or) Tails</p>
          <img src={imageUrl} alt="toss result" />
          <button type="button" onClick={this.tossCoin}>
            Toss Coin
          </button>
          <div>
            <p>Total:{totalCount}</p>
            <p>Heads:{heads}</p>
            <p>Tails:{tails}</p>
          </div>
        </div>
      </div>
    )
  }
}

export default CoinToss
