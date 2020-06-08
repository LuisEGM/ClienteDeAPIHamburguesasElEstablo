import React from "react";
import { Link } from "react-router-dom";

export default class Nav extends React.Component{

    constructor(props){
        super(props);
    }

    render(){
        return(
            
            <nav className="navbar navbar-light" style={{backgroundColor: 'rgb(228, 228, 228)'}}>
                
                {/* titulo del nav */}
                
                <a className="navbar-brand" style={{fontSize: 1.7+'em'}} href="#">
                <img src="https://image.flaticon.com/icons/svg/3027/3027189.svg" width="50" height="40" className="d-inline-block align-top" alt="" loading="lazy"/>
                    Cliente REST DBhamburguesasElEstablo 
                </a>

                {/* Botones de navegación */}

                <ul className="nav nav-tabs">

                    <li className="nav-item dropdown">
                    <a className="nav-link dropdown-toggle" style={{color: 'black'}} data-toggle="dropdown" href="#" role="button" aria-haspopup="true" aria-expanded="false">Views</a>
                    <div className="dropdown-menu">
                        <Link className="dropdown-item" to="/views/_1">View #1</Link>
                        {/* <div className="dropdown-divider"></div> */}
                        <Link className="dropdown-item" to="/views/_2">View #2</Link>
                        {/* <div className="dropdown-divider"></div> */}
                        <Link className="dropdown-item" to="/views/_3">View #3</Link>
                        {/* <div className="dropdown-divider"></div> */}
                        <Link className="dropdown-item" to="/views/_4">View #4</Link>
                        {/* <div className="dropdown-divider"></div> */}
                        <Link className="dropdown-item" to="/views/_5">View #5</Link>
                        {/* <div className="dropdown-divider"></div> */}
                        <Link className="dropdown-item" to="/views/_6">View #6</Link>
                    </div>
                    </li>

                    <li className="nav-item dropdown">
                        <a className="nav-link dropdown-toggle" style={{color: 'black'}} data-toggle="dropdown" href="#" role="button" aria-haspopup="true" aria-expanded="false">Stored Procedures</a>
                        <div className="dropdown-menu">
                        <a className="dropdown-item" href="#">SP #1</a>
                        <div className="dropdown-divider"></div>
                        <a className="dropdown-item" href="#">SP #2</a>
                        <div className="dropdown-divider"></div>
                        <a className="dropdown-item" href="#">SP #3</a>
                        </div>
                    </li>

                    <li className="nav-item">
                    <a className="nav-link" style={{color: 'black'}} href="#">Info</a>
                    </li>
            
                </ul>

            </nav>
        );
    }

}