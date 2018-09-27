import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      hueValue: 50,
      saturationValue: 40,
      lightnessValue: 30
    }
  }

  handleChangingHue = event => {
    let hueValue = event.target.value

    this.setState((state, props) => {
      return {
        hueValue: hueValue
      }
    })
    console.log(hueValue)
  }
  handleChangingSaturation = event => {
    let saturationValue = event.target.value

    this.setState((state, props) => {
      return {
        saturationValue: saturationValue
      }
    })
  }
  handleChangingLightness = event => {
    let lightnessValue = event.target.value

    this.setState((state, props) => {
      return {
        lightnessValue: lightnessValue
      }
    })
  }






  render() {








    return (
      <div className='color-frame'>
        <header>
          <h1>Color Picker</h1>
        </header>
        <main className="slide">
          <div className='color-box'>
            <h2>Color</h2>
            <div className='colors' style=
              {{
                backgroundColor: `hsl(${this.state.hueValue},
              ${this.state.saturationValue}%,
              ${this.state.lightnessValue}%)`
              }}>
              {/* <div style=
                {{
                  backgroundColor: `hsl(${this.state.hueValue},
              ${this.state.saturationValue}%,
              ${this.state.lightnessValue}%)`
                }}> */}
            </div>

          </div>

          <ul>
            <li> H
          <input type="range" min="0" max="360" Value={this.state.hueValue} onChange={this.handleChangingHue} />
            </li>
            <li>S
          <input type="range" min="0" max="100" value={this.state.saturationValue} onChange={this.handleChangingSaturation} />
            </li>
            <li>L
          <input type="range" min="0" max="100" value={this.state.lightnessValue} onChange={this.handleChangingLightness} />
            </li>
          </ul>
        </main>
      </div >
    );
  }
}

export default App;