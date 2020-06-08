import React from "react";
import Navbar from "../navbar";
import View3 from "../view3";

export default class Landing extends React.Component{

    constructor(props){
        super(props)
    }

    render(){
        return(
            <React.Fragment>
                <Navbar/>
                <View3/>
            </React.Fragment>
        );
    }

}