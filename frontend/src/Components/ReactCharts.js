import React from "react";
import {Link} from 'react-router-dom';

import BarChart from 'react-bar-chart';
import { useEffect } from "react";
 
const data = [
  {text: 'Class Obs', value: 50}, 
  {text: 'Unit Eval', value: 30} 
];
 
const margin = {top: 20, right: 2, bottom: 2, left: 2};
 
const ReactCharts = props =>{
//   const getInitialState = () => {
//     return { width: 500 };
//   },
//  useEffect(()=>{
    // window.onresize = () => {
    //          this.setState({width: refs.root.offsetWidth}); 
    //         };
//  })
//   componentDidMount: () => {
//     window.onresize = () => {
//      this.setState({width: this.refs.root.offsetWidth}); 
//     };
 
  const handleBarClick = (element, id)=>{ 
    console.log(`The bin ${element.text} with id ${id} was clicked`);
  }
 
    return (
        // <div ref='root'>
            <div style={{width: '50%'}}> 
                <BarChart ylabel='Quantity'
                  width={300}
                  height={400}
                  margin={margin}
                  data={data}
                  onBarClick={handleBarClick}/>
            </div>
        // </div>
    );
};

export default ReactCharts;
