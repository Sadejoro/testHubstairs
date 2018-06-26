import React, { Component } from 'react';
import '../../App.css';

class Prime extends Component {
    constructor() {
        super();
    };


    getPrimaryNumbers(){
        let max = 10000;
        let primaryNumber = []
        let i = 2;
      
        for(i; i <= max; i++) {
          let j = 1;
          let racine = Math.floor(Math.sqrt(i))
          do {
            j++;
          } while(j <= racine && i%j !== 0)
          if(j > racine) {
           primaryNumber.push(i)
           console.log(primaryNumber)
          }
        }
    }
    

  render() {
    return (
      <div className="prime">
        Prime
      </div>
    );
  }
}

export default Prime;
