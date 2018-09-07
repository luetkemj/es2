import React, { Component } from 'react';
import { chunk } from 'lodash';

import { Range } from 'rc-slider';
import 'rc-slider/assets/index.css';

import './App.css';

const data = require('./data.json');

class App extends Component {
  state = {
    zoom: 100,
  }

  rows = chunk(data, 20);

  zoom = value => {
    this.setState(() => ({ zoom: value }));
  }

  render() {
    console.log(this.state.zoom);

    return (
      <div className="App" style={{width: this.state.zoom + 'vw'}}>
        <header>
          <h1>Experimental Sequential 2</h1>

          <div className="zoom">
          <div>-</div>
            <Range 
              className="range"
              value={[this.state.zoom]}
              min={100}
              max={790}
              step={20}
              onChange={v => this.zoom(v)}
            />
          <div>+</div>
          </div>
        </header>
        {
          this.rows.map((row, i) => (
            <div className="row" key={i}>
              { row.map((p, i) => (<img className="img" key={p} src={p} alt={`panel-${i}`} />)) }
            </div>
          ))
        }
      </div>
    );
  }
}

export default App;
