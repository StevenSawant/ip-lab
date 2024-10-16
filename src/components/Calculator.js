// src/components/Calculator.js
import React, { Component } from 'react';

class Calculator extends Component {
  constructor(props) {
    super(props);
    this.state = {
      display: ''
    };
  }

  appendCalc = (value) => {
    this.setState((prevState) => ({
      display: prevState.display + value
    }));
  };

  clearCalc = () => {
    this.setState({ display: '' });
  };

  calculateResult = () => {
    try {
      this.setState({ display: eval(this.state.display).toString() });
    } catch {
      this.setState({ display: 'Error' });
    }
  };

  render() {
    return (
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-6">
            <input type="text" value={this.state.display} className="form-control text-end mb-3" readOnly />
            <div className="row g-2">
              {/* Calculator Buttons */}
              {[7, 8, 9, '/', 4, 5, 6, '*', 1, 2, 3, '-', 'C', 0, '=', '+'].map((item) => (
                <div key={item} className="col-3">
                  <button
                    className="btn btn-secondary w-100"
                    onClick={() => (item === '=' ? this.calculateResult() : item === 'C' ? this.clearCalc() : this.appendCalc(item))}
                  >
                    {item}
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Calculator;
