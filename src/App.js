import logo from './logo.svg';
import './App.css';
import React from 'react'

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input: 0,
      isOperator: false,
      formula: [],
    }
    this.putNumber = this.putNumber.bind(this)
    this.putOperator = this.putOperator.bind(this)
  }
  handleChange(event) {
    this.setState({
      input: event.target.value,
    })
  }

  putNumber({target}) {
    const digit = target.innerText;
    let input = this.state.input;

    if (input === 0) {
      this.setState({
        input: digit,
      })
    } else if (this.state.isOperator === true) {
      this.setState({
        input: digit,
        isOperator: false,
      })
    } else {
      this.setState({
        input: input.concat(digit),
      })
    }
  }

  putDecimal({target}) {
    const point = target.innerText;
    let input = this.state.input;
    this.setState({
      input: input.concat(point),
      formula: input.concat(point)
    })
  }

  putOperator({target}) {
    let operator = target.innerText;
    let input = this.state.input;

    if (input.length > 1 && input[0] === 0) {
      this.setState({
        input: 0,
        isOperator: false,
      })
    } else {
      this.setState({
        input: operator,
        isOperator: true,
        formula: input.concat(operator)
      })
    }
  }

  onEqual() {
    let formula = eval(this.state.formula.concat(this.state.input))
    
    this.setState({
      input: formula,
    })
  }

  clear() {
    this.setState({
      input: 0,
    })
  }
  render() {
    return (
      <div className="calc">
        <div className="input">
          <input id="display" value={this.state.input} onChange={this.handleChange.bind(this)}></input>
        </div>
        <div className="row first_row">
          <button id="clear" onClick={this.clear.bind(this)}>AC</button>
          <button id="divide" onClick={this.putOperator}>/</button>
          <button id="multiply" onClick={this.putOperator}>*</button>
        </div>
        <div className="row second_row">
          <button id="seven" onClick={this.putNumber}>7</button>
          <button id="eight" onClick={this.putNumber}>8</button>
          <button id="nine" onClick={this.putNumber}>9</button>
          <button id="subtract" onClick={this.putOperator}>-</button>
        </div>
        <div className="row second_row">
          <button id="four" onClick={this.putNumber}>4</button>
          <button id="five" onClick={this.putNumber}>5</button>
          <button id="six" onClick={this.putNumber}>6</button>
          <button id="add" onClick={this.putOperator}>+</button>
        </div>
        <div className="row second_row row_with_equal">
          <button id="one" onClick={this.putNumber}>1</button>
          <button id="two" onClick={this.putNumber}>2</button>
          <button id="three" onClick={this.putNumber}>3</button>
          <button id="equals" onClick={this.onEqual.bind(this)}>=</button>
        </div>
        <div className="third_row">
          <button id="zero" onClick={this.putNumber}>0</button>
          <button id="decimal" onClick={this.putDecimal.bind(this)}>.</button>
        </div>
      </div>
    )
  }
}

export default App;
