// Write your code here.

import {Component} from 'react'

import './index.css'

class LettersCalculator extends Component {
  state = {textInput: ''}

  onchangeInput = event => {
    this.setState({textInput: event.target.value})
  }

  render() {
    const {textInput} = this.state

    return (
      <div className="letter-calculator-container">
        <div className="letter-container">
          <h1 className="calculator-heading">
            Calculate the Letters you enter
          </h1>
          <label className="phrase-label" htmlFor="letter">
            Enter the phrase
          </label>
          <input
            type="text"
            className="input-element"
            id="letter"
            placeholder="Enter the phrase"
            onChange={this.onchangeInput}
            value={textInput}
          />
          <p className="letters-count-description">
            No. of letters: {textInput.length}
          </p>
        </div>
        <img
          src="https://assets.ccbp.in/frontend/react-js/stop-watch-with-calculator-img.png"
          alt="letters calculator"
          className="image"
        />
      </div>
    )
  }
}

export default LettersCalculator
