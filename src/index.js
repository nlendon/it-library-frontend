import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter, Route, Switch} from "react-router-dom";
import AdminSignIn from "./pages/auth";
import Home from "./pages/home/Home";
import NotFound from './pages/NotFound';
import Science from "./pages/home/Science";
import './styles/Main.scss';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <BrowserRouter>
        <Switch>
            <Route path="/" exact={true} component={Home}/>
            <Route path="/auth" component={AdminSignIn}/>
            <Route path="/science" component={Science}/>
            <Route path={"*"} component={NotFound}/>
        </Switch>
    </BrowserRouter>
);

reportWebVitals();
