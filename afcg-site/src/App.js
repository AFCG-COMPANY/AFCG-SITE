import React from "react";
import { Route, Link, Switch, BrowserRouter } from "react-router-dom";
import asyncComponent from "./components/AsyncComponent";

const AsyncHome = asyncComponent(() => import('./components/Home'));
const AsyncNotes = asyncComponent(() => import("./components/Notes"));

export default function App() {
    return (
        <BrowserRouter>
            <div>
                <header>
                    <nav>
                        <ul>
                            <li><Link to='/'>Home</Link></li>
                            <li><Link to='/note'>Note</Link></li>
                        </ul>
                    </nav>
                </header>
                <Switch>
                    <Route
                        path="/"
                        exact
                        component={AsyncHome}
                    />

                    <Route
                        path="/note"
                        exact
                        component={AsyncNotes}
                    />
                </Switch>
            </div>
        </BrowserRouter>
    )
}
