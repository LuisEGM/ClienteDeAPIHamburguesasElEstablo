import React from "react";
import Navbar from "../navbar";
import View1 from "../view1";

export default class Landing extends React.Component{

    constructor(props){
        super(props)
    }

    render(){
        return(
            <React.Fragment>
                <Navbar/>
                <View1/>
            </React.Fragment>
        );
    }

}