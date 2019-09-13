import React, { Component } from 'react';
import Header from './components/Header';
import Formulario from './components/Formulario';
import Resultado from './components/Resultado';

import axios from 'axios'


const token="qGDuWWv";



class App extends Component {

  // Cargo el state vacio

  state = {
    feelings: [],
    strains: [],
    results: []
  }

  // Cuando se carga la pagina, se obtienen los estados de animo
  async componentDidMount() {
    this.getFeelings();
  }



 // Método para obtener los estados de ánimo de la API Strain
  getFeelings = async () => {
    const urlFeelings=`http://strainapi.evanbusse.com/${token}/searchdata/effects`;
    await axios.get(urlFeelings)
      .then(response => {
          this.setState({
            feelings:  response.data
          })
      })
      .catch(error => {console.log(error)})
        

  }

  // Traigo todas as cepas, luego las filtro (HAY QUE CAMBIAR ESTO ES POCO OPTIMO)
  getStrains = async () => {
    
    const url = `http://strainapi.evanbusse.com/${token}/strains/search/all`
    
    await axios.get(url)
      .then(response => {
        this.setState({
          strains:  response.data
        })
      }).catch(error => {console.log(error)})
  }





  render(){
    
 
  return (
    <React.Fragment>
      
          <Header/>
      
          <Formulario 
              strains = {this.state.strains}
              feelings={this.state.feelings}
              getStrains={this.getStrains}
              results={this.state.results}
              
          />
           

           <Resultado 
              
           />
    </React.Fragment>


   );
  }

}

export default App;
