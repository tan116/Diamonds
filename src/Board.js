import React, { Component } from 'react';
import './App.css';
import questionMark from './assets/question.png';
import diamond from './assets/diamond.png';
import cross from './assets/close.png';

class Board extends Component {

    constructor() {
      super();
      this.state ={
          message: 'welcome',
          cells: [],
          clicks: 0,
          diamondsFound: 0,
      }
    }
  
    changeCell(key) {
        // console.log("changeCell(), key = " + this.state.cells[key].key + ', turned = '  + this.state.cells[key].turned + ', value = '  + this.state.cells[key].value);
        var clicks = this.state.clicks + 1;
        var cell = this.state.cells[key];
        cell.turned = true;
        this.state.cells[key] = cell;
        this.setState({cells: this.state.cells, clicks: clicks});

        setTimeout(() => {
            if (this.state.cells[key]['value'] === 'd') {
                var diamondsFound = this.state.diamondsFound + 1;
                this.setState({diamondsFound: diamondsFound});
                if (diamondsFound === 8) {
                    console.log("You win! You took only " + this.state.clicks + " attempts.");
                    alert("You win! You took only " + this.state.clicks + " attempts.");
                }
            }
        }, 200);
        
        var direction = '', nextDiamondKey;// findNearestDiamond(key);
        if (key%8 !== 0 && this.state.cells[key-1]['value'] === 'd') {
            direction = 'left';
            nextDiamondKey = key-1;
        }
        else if (key>=8 && this.state.cells[key-8]['value'] === 'd') {
            direction = 'up';
            nextDiamondKey = key-8;
        }
        else if (key%8 !== 7 && this.state.cells[key+1]['value'] === 'd') {
            direction = 'right';
            nextDiamondKey = key+1;
        }
        else if (key<=55 && this.state.cells[key+8]['value'] === 'd') {
            direction = 'down';
            nextDiamondKey = key+8;
        }

        if(direction !== '' && this.state.cells[nextDiamondKey]['turned'] == false)
            alert('Nearest diamond -> ' + direction);
    }

    renderDiamond(key) {
        var value = this.state.cells[key]['value'];
        console.log(key + ' ' + value);

        if (value === 'd') {
            return (
                <img className="Diamond" src={diamond} alt="diamond"/>
            )
        } else {
            return (
                <img className="Cross" src={cross} alt="cross"/>
            )
        }
    }

    renderCells() {
        return this.state.cells.map((data, key) => {
            if(this.state.cells[key]['turned']) {
                return (
                    <button className="CellTurned"
                                key = {key}>
                        {this.renderDiamond(key)}
                    </button>
                )
            } else {
                return (
                    <button className="Cell"
                            key = {key}
                            onClick={() => this.changeCell(key)}>
                        <img className="QuestionMark" src={questionMark} alt="questionMark"/>
                    </button>
                )
            }
          })
    }

    render() {
        return (
        <div className="Board">
            <div className="CellsContainer">
                {this.renderCells()}
            </div>
            <div>
                {this.state.clicks} attempts
                <br/>
                {this.state.diamondsFound} diamonds found
            </div>
        </div>
        );
    }

    componentDidMount() {
        // place diamonds
        var diamondArray = [-1, -1, -1, -1, -1, -1, -1, -1]; // stores indexes of cells where there will be a diamond, hence length = 8
        var counter = 0;
        while (counter < 8) {
            var random = Math.floor(Math.random() * 64);
            if (diamondArray.indexOf(random) > -1)
                continue;
            else {
                diamondArray[counter] = random;
                counter++;
            }
        }
        console.log(diamondArray);
        counter = 0;

        // set cell values
        var array = [];
        for(var i = 0; i<64; i++) {
            // console.log(diamondArray.indexOf(i));
            var object;
            if(diamondArray.indexOf(i) >= 0) {
                object = {key: i, turned: false, value: 'd'}
                counter++;
            }
            else
                object = {key: i, turned: false, value: 'nd'}
            array[i] = object;
        }
        this.setState({cells: array});
        console.log(array);
    }
  }
  
  export default Board;