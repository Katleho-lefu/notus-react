import dash from 'pages/Dash';
import home from 'pages/Home';
import landing from 'pages/Landing';
import React from 'react';


import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";


const App = () => {
    return (
        <div>
            <BrowserRouter>
                <Switch>

                    <Route path="/" component={landing} />

                    <Route path="/landing" component={landing} />

                    <Route path="/home" component={home} />

                    <Route path="/dash" component={dash} />

                </Switch>
            </BrowserRouter>
        </div>
    )
}

export default App


