import React from "react";
import Navbar from "../navbar";
import View6 from "../view6";

export default class Landing extends React.Component{

    constructor(props){
        super(props)
    }

    render(){
        return(
            <React.Fragment>
                <Navbar/>
                <View6/>
            </React.Fragment>
        );
    }

}