import React, {Component} from 'react';
import Resultado from './Resultado';

export default class Formulario extends Component {

    feelingRef = React.createRef();


    //Al clickear el boton del fomulario, guardo el valor del malestar en la variable feeling
    sendStrains = e => {
        e.preventDefault();

        // Variable donde se lee el malestar seleccionado por el usuario
        const feeling = {feeling: this.feelingRef.current.value}
      
        // Voy a cargar las cepas al state una sola vez, cuando este esté vacío
        if (this.props.strains.length === 0) { this.props.getStrains(); } 

        
        Object.keys(this.props.strains).map( key => {
            
           var isGoodFor = this.props.strains[key].effects.medical;

           // HASTA ACA LLEGUE, ME FALTA BUSCAR EN CADA isGoodFor si se encuentra la variable feeling,
           // De ser asi, debo agregar los datos al state Resultados. Una vez hecho esto solo faltaria
           // El renderizado y el diseño de la app
           
            })
        
        
      
    }
 
    render() {
        return (

            <React.Fragment>
                
            
                <div className="container mt-4 ">
                    <form onSubmit={this.sendStrains}>
                        <div className="container">
                            <div className="row">
                                <div className="col">
                                    
                                        <select ref={this.feelingRef} className="form-control" id="exampleFormControlSelect1">
                                            <option value="none" defaultValue>How do you feel?</option>
                                            
                                            {Object.keys(this.props.feelings).map(key => 
                                            {
                                                if (this.props.feelings[key].type === "medical")
                                                 
                                                 return(
                                                 <option key={key} value={this.props.feelings[key].effect}>
                                                 {this.props.feelings[key].effect}
                                                </option>
                                                )
                                            }
                                            )}
                                        </select>
                                </div>

                                <div className="col">
                                    <button type="submit" className="btn btn-success">Looking For Strain</button>
                                </div>

                            </div>
                        </div>


                    </form>
      
                    
                            
                            
                </div>
        

            </React.Fragment>
        );
    }
}