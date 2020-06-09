import React from "react";
import Navbar from "../navbar";
import Sp1 from "../sp1";

export default class Landing extends React.Component{

    constructor(props){
        super(props)
    }

    render(){
        return(
            <React.Fragment>
                <Navbar/>
                <Sp1/>
            </React.Fragment>
        );
    }

}