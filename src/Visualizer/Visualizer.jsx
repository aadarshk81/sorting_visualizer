import React from 'react'
import "./Visualizer.css";
import bS from "../Algos/bubbleSort"
import qS from "../Algos/quickSort"
import iS from "../Algos/insertionSort"
import mS from "../Algos/mergeSort"
import sS from "../Algos/selectionSort"
import hS from "../Algos/heapSort"

export default class Visualizer extends React.Component
{
    constructor(props) {
        super(props);
    
        this.state = {
          array: [],
        };
      }
    
      componentDidMount() {
        this.resetArray();
      }
    
      //function to reset and generate new array
      resetArray() {
        const array = [];
        for (let i = 0; i < document.getElementById("arr_sz").value; i++) {
          array.push(randomIntFromInterval(5, 500));
        }
        this.setState({array});
      }

      

      //function for bubble sort
      bubbleSort() {
        
        bS(500-document.getElementById("speed_input").value);
        
      }

      //function for selection sort
      selectionSort() {
        sS(500-document.getElementById("speed_input").value);
      }
       
      //function for insertion sort
      insertionSort() {
        iS(500-document.getElementById("speed_input").value);
      }

      //function for merge sort
      mergeSort() {
        mS(500-document.getElementById("speed_input").value);
      }

      //function for quick sort
      quickSort() {
        qS(500-document.getElementById("speed_input").value);
      }

      heapSort() {
        hS(500-document.getElementById("speed_input").value);
      }


      //main rendering function
      render() {
          const {array} = this.state;
        return(
            <div>
                <div>
                    <h1> Sorting Visualizer </h1>
                </div>
                <div className="col">
                <span >Size
                    5<input id="arr_sz" type="range" min="5" max="100" step={1} onChange={() => this.resetArray()}/>100
                </span>
                <span id="speed">Speed
                    <input id="speed_input" type="range" min="20" max="490" step={10}/>
                </span>
                <br></br>
                <br></br>
                <span>
                    <input id="new-array" type="button" value="Generate New Array" onClick={()=> this.resetArray()} />
                </span>
                </div>
                <br/>
                <div className="array-container">
                    {array.map((value, idx) => (
                    <div
                    className="array-bar"
                    key={idx}
                    style={{backgroundColor: `blue`,height: `${value}px`}}></div>
                    ))}
                </div>

                <br></br>

                <div className="btns">
                    <input type="button" value="Bubble Sort" onClick={() => this.bubbleSort()}/>
                    <input type="button" value="Merge Sort" onClick={() => this.mergeSort()}/>
                    <input type="button" value="Quick Sort" onClick={() => this.quickSort()}/>
                    <input type="button" value="Selection Sort" onClick={() => this.selectionSort()}/>
                    <input type="button" value="Insertion Sort" onClick={() => this.insertionSort()}/>
                    <input type="button" value="Heap Sort" onClick={() => this.heapSort()}/>
                </div>
            </div>
        )
      }
}

//function to generate random numbers between min and max
function randomIntFromInterval(min, max) {
    // min and max included
    return Math.floor(Math.random() * (max - min + 1) + min);
  }



