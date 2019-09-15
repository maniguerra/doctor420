import React, {Component} from 'react';




export default class Formulario extends Component {
    
    feelingRef = React.createRef();
    
    
    //Al clickear el boton del fomulario, guardo el valor del malestar en la variable feeling
    sendStrains = e => {
        e.preventDefault();
        
        // Variable donde se lee el malestar seleccionado por el usuario
        const feeling = {feeling: this.feelingRef.current.value}
        
        // Voy a cargar las cepas al state una sola vez, cuando este esté vacío
        
        var res = []
        Object.keys(this.props.strains)
        
        .forEach( (key) => {
            
            let strain = this.props.strains[key]
            var isGoodFor = strain.effects.medical;
            if (!isGoodFor.includes(feeling.feeling)) { return null } else {
                Object.defineProperty(strain,'name',{value:key})
                
                res.push(strain)
            }
            
        
        })
        
        this.props.getResults(res);

        e.currentTarget.reset();
    }
    
    
    
    render() {
        
        return (
            
            <React.Fragment>
            
            
            <div className="uk-margin">
                <form onSubmit={this.sendStrains}>
                            <div className="uk-container uk-margin-bottom">
                                <div className="uk-child-width-1-1@s uk-child-width-1-3@m uk-margin-auto" uk-grid="true">
                                        <select ref={this.feelingRef} className="form-control  uk-margin-auto" id="exampleFormControlSelect1">
                                            <option value="none" defaultValue>How do you feel?</option>
                                            
                                            {Object.keys(this.props.feelings).map(key => {
                                                if (this.props.feelings[key].type === "medical"){
                                                    
                                                    return(
                                                        <option key={key} value={this.props.feelings[key].effect}>
                                                        {this.props.feelings[key].effect}
                                                        </option>
                                                        )}else{return null}
                                                    }
                                                    )}
                                        </select>
                                        <button type="submit" className="btn btn-success uk-margin-auto">Looking For Strain</button>
                                </div>                  
                            </div>          
                    
                            
                                    
                            
                    
                       
                    
                </form>
           
                </div>   
                    
                    </React.Fragment>
                    );
                }
            }