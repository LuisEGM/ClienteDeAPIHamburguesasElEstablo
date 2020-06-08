import React from "react";
import Navbar from "../navbar";
import View5 from "../view5";

export default class Landing extends React.Component{

    constructor(props){
        super(props)
    }

    render(){
        return(
            <React.Fragment>
                <Navbar/>
                <View5/>
            </React.Fragment>
        );
    }

}