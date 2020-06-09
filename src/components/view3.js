import React from "react";
import "./styles/views.css";
import CardProduct from "./cardProduct";
import Loading from "./loading";

export default class View3 extends React.Component{

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
            
            const res = await fetch("http://localhost:8000/views/_3");
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
                <h1 className="center marcoP">Producto Estrella</h1>
                <p className="center">Este prodcuto ha sido el que mas dinero en ganancias le ha generado a el restaurante.</p>
                <hr></hr>
                
                <CardProduct
                    img = "https://image.flaticon.com/icons/svg/735/735850.svg"
                    data = {this.state.data}
                />

            </div>
        );
    }

}