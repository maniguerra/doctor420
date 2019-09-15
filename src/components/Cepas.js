import React,{Component} from 'react';
import Cepa from './Cepa';

class Cepas extends Component {
    
    render() {
        return (
            
                        <div className="uk-child-width-1-2@s uk-child-width-1-4@m uk-margin-auto uk-margin-large-top" uk-grid="true">
                                {Object.keys(this.props.results).map(key => (
                                    <Cepa 
                                    key= {key}
                                    cepa = {this.props.results[key]}
                                    />
                                    ))}
                        </div>

                      
                );
            }
        }
        
        export default Cepas;