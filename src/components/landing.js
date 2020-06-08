import React from "react";
import Navbar from "./navbar";
import Welcome from "./welcome";

export default class Landing extends React.Component{

    constructor(props){
        super(props)
    }

    render(){
        return(
            <React.Fragment>
                <Navbar/>
                <Welcome/>
            </React.Fragment>
        );
    }

}