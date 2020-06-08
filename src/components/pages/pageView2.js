import React from "react";
import Navbar from "../navbar";
import View2 from "../view2";

export default class Landing extends React.Component{

    constructor(props){
        super(props)
    }

    render(){
        return(
            <React.Fragment>
                <Navbar/>
                <View2/>
            </React.Fragment>
        );
    }

}