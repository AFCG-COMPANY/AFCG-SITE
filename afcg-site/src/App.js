import React from "react";
import { Route, Link, Switch, BrowserRouter } from "react-router-dom";
import asyncComponent from "./components/AsyncComponent";

const AsyncContact = asyncComponent(() => import('./components/Contact'));
const AsyncHome = asyncComponent(() => import("./components/Home"));

export default function App() {
    return (
        <BrowserRouter>
            <div>
                <nav className="navbar navbar-default navbar-fixed-top">
                    <div className="container">
                        <div className="navbar-header">
                            <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#myNavbar">
                                <span className="icon-bar"></span>
                                <span className="icon-bar"></span>
                                <span className="icon-bar"></span>
                            </button>
                            <a className="navbar-brand" href="#myPage">AFCG</a>
                        </div>
                        <div className="collapse navbar-collapse" id="myNavbar">
                            <ul className="nav navbar-nav navbar-right">
                                <li><Link to="#about">ABOUT</Link></li>
                                <li><Link to="#portfolio">PORTFOLIO</Link></li>
                                <li><Link to="#customers">CUSTOMERS</Link></li>
                                <li><Link to="#contact">CONTACT</Link></li>
                            </ul>
                        </div>
                    </div>
                </nav>

                <Switch>
                    <Route
                        path="/"
                        exact
                        component={AsyncHome}
                    />

                    <Route
                        path="/note"
                        exact
                        component={AsyncContact}
                    />
                </Switch>
            </div>
        </BrowserRouter>
    )
}
