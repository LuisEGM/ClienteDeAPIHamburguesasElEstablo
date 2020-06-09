import React from "react";
import Loading from "./loading";


export default class Sp1 extends React.Component{

    state = {
        data1: [],
        data2: [],
        loading: true,
        error: null
    }

    async componentDidMount(){
        await this.consultarAPI1();
    }

    consultarAPI1 = async () => {

        try {
            
            const res = await fetch("http://localhost:8000/recursion_Data/restaurantes");
            const data1 = await res.json();
            console.log('consulta',data1);
            this.setState({
                data1,
                loading: false
            })    
            console.log('estado',this.state.data1);
            
        } catch (error) {
            this.setState({
                error: error,
                loading: false
            })
        }

    }

    consultarAPI2 = async (identificador) => {

        try {
            
            const res = await fetch(`http://localhost:8000/stored_Procedures/_1/${identificador}/${this.state.fechaMin}/${this.state.fechaMax}`);
            const data2 = await res.json();
            console.log('consulta2',data2);
            this.setState({
                data2,
                loading: false
            })    
            console.log('estado2',this.state.data2);
            
        } catch (error) {
            this.setState({
                error: error,
                loading: false
            })
        }

    }

    handleSubmit = async (e) => {
        e.preventDefault();
        let identificador = 0;
        
        console.log('Se encuentra en el estado',this.state.restaurante);

        this.state.data1.map((elem,i) => {
            //console.log(elem.nombreRestaurante);
            
            if(elem.nombreRestaurante == this.state.restaurante){
                identificador = elem.idRestaurante;
            }
        })
        
        console.log('idRestaurante: ',identificador);
        await this.consultarAPI2(identificador);
    }

    handleChange = (e) => {
        console.log(`${e.target.name}: ${e.target.value}`);
        let formPartial = {};
        formPartial[e.target.name] = e.target.value;
        this.setState({
            ...formPartial
        })
    }

    render(){
        if(this.state.loading)
            return <Loading />
        
        return(
            <div className="container container_custom">
                <h1 className="center marco">Ganancias de restarurantes</h1>
                <p className="center">Para poder obtener ganancias de algun restaurantes necesita, ingresar los datos que se piden a continuación:</p>
                <hr></hr>
                
                <form onSubmit={this.handleSubmit} style={{marginTop: 30+'px'}}>
                    <div class="form-row">
                        <div class="form-group col-md-4">
                            <select id="inputState" name="restaurante" onChange={this.handleChange} class="form-control" placeholder="Restaurante">
                                <option defaultValue="restaurante" value={this.state.restaurante}>Restaurante...</option>
                                {
                                    this.state.data1.map((elem,i) => (
                                        <option key={i}>{elem.nombreRestaurante}</option>
                                    ))    
                                }
                            </select>
                        </div>
                        <div class="col">
                            <input type="text" required class="form-control" value={this.state.fechaMin} onChange={this.handleChange} name="fechaMin" placeholder="fecha mínima AAAA-MM-DD "/>
                        </div>
                        <div class="col">
                            <input type="text" required class="form-control" value={this.state.fechaMax} onChange={this.handleChange} name="fechaMax" placeholder="fecha máxima AAAA-MM-DD "/>
                        </div>
                        <div class="col-auto">
                            <button type="submit" name="boton" class="btn btn-primary mb-2">Consultar</button>
                        </div>
                    </div>
                </form>                

                <hr></hr>
                
                <table className="table table-bordered">

                    <thead className="table-primary">
                        <tr>
                            <td className="text-center" >Fechas</td>
                            <td className="text-center" >Ingreso Bruto ($)</td>
                            <td className="text-center" >Dejado de recibir ($) </td>
                            <td className="text-center" >Ingreso Neto ($)</td>
                            <td className="text-center" >Ingreso Por Propinas ($)</td>
                            <td className="text-center" >Prop por trabajador ($)</td>
                        </tr>
                    </thead>

                    <tbody>
                        {
                            this.state.data2.map( (elem,i) => (
                                <tr key={i} className="text-center">
                                    <td className="text-center">{elem.Fechas}</td>
                                    <td className="text-center">{elem.IngresoBruto}</td>
                                    <td className="text-center">{elem.DineroDejadoDeRecibir}</td>
                                    <td className="text-center">{elem.IngresoNeto}</td>
                                    <td className="text-center">{elem.IngresoPorPropinas}</td>
                                    <td className="text-center">{elem.PdPropinaForCadaTrabajador}</td>
                                </tr>
                            ))
                        }
                    </tbody>
                    
                </table>

            </div>
        );
    }

}


//EXECUTE pa_IngresosDeUnRestauranteEnUnPeriodoDeTiempo @idRestaurante=1, @fechaMin='2018-01-10', @fechaMax='2018-01-15'
