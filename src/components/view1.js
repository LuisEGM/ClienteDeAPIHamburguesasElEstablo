import React from "react";
import "./styles/views.css";
import Card from "./card";
import Loading from "./loading";

export default class View1 extends React.Component{

    /*constructor(props){
        super(props);
        this.consultarAPI = this.consultarAPI.bind(this);
        this.state = {
            data: []
        }
    }*/

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
            
            const res = await fetch("http://localhost:8000/views/_1");
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
                <h1 className="center marco">Cliente Estrella</h1>
                <p className="center">Este cliente ha sido el que mas dinero ha gastado en productos de los restarurante</p>
                <hr></hr>
                {console.log('antes del envio a la card',this.state.data)
                }
                <Card
                    img = "https://image.flaticon.com/icons/png/512/2990/2990662.png"
                    data = {this.state.data}
                />

            </div>
        );
    }

}