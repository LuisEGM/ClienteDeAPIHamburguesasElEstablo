import React from "react";
import Navbar from "../navbar";
import View4 from "../view4";

export default class Landing extends React.Component{

    constructor(props){
        super(props)
    }

    render(){
        return(
            <React.Fragment>
                <Navbar/>
                <View4/>
            </React.Fragment>
        );
    }

}