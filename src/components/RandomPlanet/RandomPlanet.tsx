import * as React from 'react';

import './RandomPlanet.css';
import {PlanetDetails} from "../PlanetDetails/PlanetDetails";
import {SwapiService} from "../../services/SwapiService/SwapiService";
import {Spinner} from "../Spinner/Spinner";

interface IState {
    id: number | null;
}

class RandomPlanet extends React.PureComponent<{}, IState> {

    swapiService = new SwapiService();

    interval: any;

    state = {
        id: null,
    };

    render() {
        const {id} = this.state;
        return (
            <React.Fragment>
                {id &&
                <PlanetDetails
                    id={id}
                    showSpinner={true}
                    key={`${id}`}
                />}
                {!id &&
                <div className="randomplanet_wrap">
                    <Spinner/>
                </div>
                }
            </React.Fragment>
        );
    }

    componentDidMount() {
        this.updateComponent();
        this.interval = setInterval(this.updateComponent, 7000);
    }

    componentWillUnmount() {
        clearInterval(this.interval);
    }

    updateComponent = () => {
        const id = Math.floor(Math.random() * 15 + 2);
        this.setState({id: id});
    }

}

export {RandomPlanet};