import React from "react";
import "./styles/card.css";

const CardProduct = ({ data, img }) => {
    
    return(
        <>{
            data.map((elem,i) => (
                
                <div key={i} className="cardP mx-auto Fitness-CardP">
                    <div className="card-body">
                        <div className="row center">
                            <div className="col-6">
                                <img src={img} className="float-right imgP" />
                            </div>   
                            <div className="col-6 Fitness-Card-InfoP">
                                <h1>{elem.Producto}</h1>
                                <div className="datoP">{'Cat: '+elem.Categoria}</div>
                                <div className="datoP">{'Precio: '+elem.Precio+' $'}</div>
                                <div className="cifraP">{'Recaudo: '+elem.DineroIngresadoPorVentas+' $'}</div>
                            </div> 
                        </div>
                    </div>
                </div>

            ))
        }
        </>
    );
}

export default CardProduct;