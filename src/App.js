import React, { Component } from 'react';
import Header from './components/Header';
import Formulario from './components/Formulario';
import Cepas from './components/Cepas';

import axios from 'axios'






class App extends Component {
  
  token = 'qGDuWWv'
  // Cargo el state vacio
  state = {
    feelings: [],
    strains: [],
    results: []
  }
  
  // Cuando se carga la pagina, se obtienen los estados de animo y las cepas
  async componentDidMount() {
    this.getFeelings();
    this.getStrains();
  }

  
  // Método para obtener los malestares 
  getFeelings = async () => {
    const urlFeelings=`http://strainapi.evanbusse.com/${this.token}/searchdata/effects`;
    await axios.get(urlFeelings)
    .then(response => {
      const feel = response.data
      this.setState({
        feelings:  feel
      })
    })
    .catch(error => {console.log(error)})   
  }
  
  // Traigo todas as cepas al state
  getStrains = async () => {
    const url = `http://strainapi.evanbusse.com/${this.token}/strains/search/all`
    await axios.get(url)
    .then(response => {
      const stainNeed = response.data
      this.setState({
        strains: stainNeed
      })
    }).catch(error => {console.log(error)})
  }
  
  getResults = async (res) => {
    
    this.setState({
      results: res
      
    })

    
  }
  
  
  render(){
    return (
      <React.Fragment>
      
      <Header
      
      />
      
      <Formulario 
          strains = {this.state.strains}
          feelings={this.state.feelings}
          getStrains={this.getStrains}
          getResults={this.getResults}
       />
      
      <Cepas 
          results={this.state.results}  
      />
      
      </React.Fragment>
      
      
      );
    }
  }
  
  export default App;
