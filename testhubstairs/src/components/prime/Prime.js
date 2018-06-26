import React, { Component } from 'react';
import '../../App.css';

class Prime extends Component {
    constructor() {
        super();
        this.state = {
            userInput: '',
            primaryNumbers: [],
            inputNumber: 'x',
        }
    };

    //récupéré la valeur des nombres premiers
    //une fois l'application monté
    componentWillMount() {
        this.getPrimaryNumbers()
    }

    //récupéré la valeur des nombres premiers
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
           this.state.primaryNumbers.push(i)
          }
        }
        //  this.setState(previousState => ({
        //   primaryNumbers: [...previousState.primaryNumbers, primaryNumber]
        // }))
    }


    //supprimer la valeur de l'input 
    //setter-stocker le la valeur de l'input valider
    onSubmit(event) {
        event.preventDefault();
        this.setState({
            userInput: '',
            inputNumber: this.state.userInput,
        });
    }

    //Recupéré la valeur de l'input
    onChange(event) {
        this.setState({
            userInput: event.target.value
        });
    }

    //Affiché le résultat
    renderPrimaryNumber() {
        console.log(this.state)
        return (
        <div className="p-2">
            { "Le " + this.state.inputNumber + "ième nombre premier est : " + this.state.primaryNumbers[this.state.inputNumber]}
        </div> )
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
            onChange={this.onChange.bind(this)}
            className="form-control mb-2"
        />
        <button 
            onClick={this.onSubmit.bind(this)} 
            className="btn btn-primary"
        >
            Valider
        </button>

        <div className="lead">
            {this.renderPrimaryNumber()}
        </div>
        </div>
        );
    }
}

export default Prime;
