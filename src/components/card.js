import React from "react";
import "./styles/card.css";

const Card = ({ data, img }) => {
    
    return(
        <>{
            data.map((elem,i) => (
                
                <div key={i} className="card mx-auto Fitness-Card">
                    <div className="card-body">
                        <div className="row center">
                            <div className="col-6">
                                <img src={img} className="float-right img" />
                            </div>   
                            <div className="col-6 Fitness-Card-Info">
                                <h1>{elem.nombres+' '+elem.apellidos}</h1>
                                <div className="dato">{'CC: '+elem.documentoDeIdentidad}</div>
                                <div className="dato">{'N° CFrecuente: '+elem.numeroDeClienteFrecuente}</div>
                                <div className="cifra">{'Invirtio: '+elem.DineroInvertido+' $'}</div>
                            </div> 
                        </div>
                    </div>
                </div>

            ))
        }</>
    );
    
    

    /*return(
    //#56CCF2,#56CCF2
        <div className="card mx-auto Fitness-Card">
            <div className="card-body">
                <div className="row center">
                    <div className="col-6">
                        <img src="https://image.flaticon.com/icons/png/512/2990/2990662.png" className="float-right img" />
                    </div>   
                    <div className="col-6 Fitness-Card-Info">
                        <h1>{data.nombres+' '+data.apellidos}</h1>
                        <p>{data.documentoDeIdentidad}</p>
                        <p>{data.numeroDeClienteFrecuente}</p>
                        <p>{data.DineroInvertido}</p>
                    </div> 
                </div>
            </div>
        </div>

    );*/

}

export default Card;