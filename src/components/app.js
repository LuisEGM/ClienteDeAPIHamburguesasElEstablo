import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Landing from "./landing";

// Importando paginas de cada vista
import PageView1 from "./pages/pageView1";
import PageView2 from "./pages/pageView2";
import PageView3 from "./pages/pageView3";
import PageView4 from "./pages/pageView4";
import PageView5 from "./pages/pageView5";
import PageView6 from "./pages/pageView6";
import PageSP1 from "./pages/pageSP1";

export default function App(){
    return(
        <BrowserRouter>
            <Route exact path="/" component={Landing} />
            <Route exact path="/views/_1" component={PageView1} />
            <Route exact path="/views/_2" component={PageView2} />
            <Route exact path="/views/_3" component={PageView3} />
            <Route exact path="/views/_4" component={PageView4} />
            <Route exact path="/views/_5" component={PageView5} />
            <Route exact path="/views/_6" component={PageView6} />
            <Route exact path="/stored_procedures/_1" component={PageSP1} />
        </BrowserRouter>
    );
}