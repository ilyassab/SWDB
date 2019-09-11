import * as React from 'react';
import {BrowserRouter as Router, Route, Switch, Redirect} from "react-router-dom";

import PeoplePage from "../Pages/PeoplePage/PeoplePage";
import PlanetsPage from "../Pages/PlanetsPage/PlanetsPage";
import SecretPage from "../Pages/SecretPage/SecretPage";
import LoginPage from "../Pages/LoginPage/LoginPage";
import {Header} from "../Header/Header";
import {RandomPlanet} from "../RandomPlanet/RandomPlanet";
import {ErrorBoundary} from "../ErrorBoundary/ErrorBoundary";
import './App.css';

class App extends React.Component {

    state = {
        isLoggedIn: false,
    };

    onLogin = () => {
        this.setState({isLoggedIn: true})
    };

    render() {

        const {isLoggedIn} = this.state;

        return (
            <ErrorBoundary>
                <Router>
                    <div>
                        <Header/>
                        <RandomPlanet/>
                        <Switch>
                            <Route
                                path='/'
                                render={() => <h1 className='app_title'>Welcome to StarDB</h1>}
                                exact
                            />
                            <Route path={'/people/:id?'} component={PeoplePage}/>
                            <Route path={'/planets/:id?'} component={PlanetsPage}/>
                            <Route path={'/secret'}
                                   render={
                                       () => (
                                           <SecretPage isLoggedIn={isLoggedIn}/>)
                                   }
                            />
                            <Route path={'/login'}
                                   render={() => (
                                       <LoginPage
                                           isLoggedIn={isLoggedIn}
                                           onLoginHandle={this.onLogin}
                                       />)}
                            />
                            <Redirect to='/'/>
                        </Switch>
                    </div>
                </Router>
            </ErrorBoundary>
        );
    }
}

export {App};