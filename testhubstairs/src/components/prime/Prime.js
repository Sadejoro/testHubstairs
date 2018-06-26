import React, { Component } from 'react';
import '../../App.css';

class Prime extends Component {
    constructor() {
        super();
        this.state = {
            userInput: '',
        }
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
    <div>
      <div className="prime container">
        Prime
      </div>

     <h3>Cette calculatrice permet de trouver n-ième nombre premier</h3>
     <input 
        value={this.state.userInput} 
        type="text" 
        placeholder="Renseigner un nombre inférieur à 1000"
        // onChange={/* Recupéré la valeur de l'input */}
        className="form-control mb-2"
      />
      <button 
        // onClick={/* Renvoyer le résultat sur la page */} 
        className="btn btn-primary"
      >
        Valider
      </button>

       <div className="lead">
         {/* Renvoyer nombre premier */}
        </div>
    </div>
    );
  }
}

export default Prime;
