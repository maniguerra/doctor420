import React from 'react';


const Cepa = (props) => {

    const {name,race,flavors} = props.cepa;
    const {medical,negative,positive} = props.cepa.effects;
    
    return(
        <React.Fragment>
           
                        <div className="uk-container uk-margin-auto ">
                                <div className="uk-card uk-card-default">
                                    <div className="uh-card-media-top">
                                        <img src="img/default.png" alt="" />

                                    </div>
                                    <div className="uk-card-body uk-aling-center">
                                        <h3 className="uk-card-title d-inline strain-name">{name}</h3>
                                        <span className="uk-margin-left span-race "> {race}</span>
                                        <ul uk-accordion="multiple: true">
                                         <li>
                                            <a className="uk-accordion-title" href="#">Medicinal Uses</a>
                                                <div className="uk-accordion-content">
                                                {medical.map(medical => {
                                                return <li key={medical}>{medical}</li>
                                                })}
                                                </div>
                                        </li>
                                        <li>
                                            <a class="uk-accordion-title" href="#">Flavors</a>
                                            <div className="uk-accordion-content">
                                            {flavors.map(flavors => {
                                            return <li key={flavors}>{flavors}</li>
                                        })}
                                            </div>
                                        </li>

                                         <li>
                                            <a className="uk-accordion-title" href="#">Positive Effects</a>
                                                <div className="uk-accordion-content">
                                                    {positive.map(positive => {
                                                    return <li key={positive}>{positive}</li>
                                                    })}
                                                </div>
                                        </li>
                                        <li>
                                            <a class="uk-accordion-title" href="#">Negative Effects</a>
                                            <div className="uk-accordion-content">
                                            {negative.map(negative => {
                                            return <li key={negative}>{negative}</li>
                                        })}
                                            </div>
                                        </li>
                                       
                                    </ul>
                                    </div>
                                    
                                    <div className="uk-card-footer">
                                        <a className="uk-button uk-button-secondary" href="#" target="_blank" rel="noopener noreferrer">
                                            MAS INFO
                                        </a>
                                    </div>
                                </div>

                        </div>

                        </React.Fragment>        
                         
    )
    }

    export default Cepa;