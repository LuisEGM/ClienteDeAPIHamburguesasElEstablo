import React from "react";
import "./styles/views.css";
import Loading from "./loading";

export default class View2 extends React.Component{

    state = {
        data: [],
        loading: true,
        error: null
    }

    async componentDidMount(){
        await this.consultarAPI();
    }

    consultarAPI = async () => {

        try {
            
            const res = await fetch("http://localhost:8000/views/_2");
            const data = await res.json();
            console.log('consulta',data);
            this.setState({
                data,
                loading: false
            })    
            console.log('estado',this.state.data);
            
        } catch (error) {
            this.setState({
                error: error,
                loading: false
            })
        }

    }

    render(){
        if(this.state.loading)
            return <Loading />
        
        return(
            <div className="container container_custom">
                <h1 className="center">Datos de los restaurantes</h1>
                <p className="center">Estos son los datos de los restaurantes que posee la empresa "Hambuerguesas El Establo"</p>
                <hr></hr>
                
                <table className="table table-bordered">

                    <thead className="table-success">
                        <tr>
                            <td className="text-center" >Restaurante</td>
                            <td className="text-center" >Dirección</td>
                            <td className="text-center" >Ciudad</td>
                            <td className="text-center" >Departamento</td>
                            <td className="text-center" >Funciona desde</td>
                            <td className="text-center" >N° Empleados</td>
                        </tr>
                    </thead>

                    <tbody>
                        {
                            this.state.data.map( (elem,i) => (
                                <tr key={i} className="text-center">
                                    <td className="text-center">{elem.nombreRestaurante}</td>
                                    <td className="text-center">{elem.direccion}</td>
                                    <td className="text-center">{elem.Ciudad}</td>
                                    <td className="text-center">{elem.Departamento}</td>
                                    <td className="text-center">{elem.fechaInicioActividades}</td>
                                    <td className="text-center">{elem.NumeroEmpleados}</td>
                                </tr>
                            ))
                        }
                    </tbody>
                    
                </table>

            </div>
        );
    }

}