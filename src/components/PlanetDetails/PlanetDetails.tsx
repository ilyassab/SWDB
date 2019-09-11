import * as React from "react";

import './PlanetDetails.css'
import {Spinner} from "../Spinner/Spinner";
import {ErrorButton} from "../ErrorButton/ErrorButton";
import {SwapiService} from "../../services/SwapiService/SwapiService";

interface IState {
    population: number | null;
    rotationPeriod: number | null;
    diameter: number | null;
    name: string | null;
    shouldRender: boolean;
}

interface IProps {
    id: number | null;
    showSpinner: boolean;
}

class PlanetDetails extends React.PureComponent<IProps, IState> {

    swapiService = new SwapiService();

    state = {
        population: null,
        rotationPeriod: null,
        diameter: null,
        name: null,
        shouldRender: false,
    };

    render() {
        const {id, showSpinner} = this.props;
        const {shouldRender, population, rotationPeriod, diameter, name} = this.state;
        return (
            <React.Fragment>
                {(shouldRender || showSpinner) && id &&
                <div className='planetdetails_full'>
                    {shouldRender &&
                    <React.Fragment>
                        <img className='planetdetails_img'
                             src={id + 1 ? `https://starwars-visualguide.com/assets/img/planets/${id + 1}.jpg` : ''}
                             alt='img'/>
                        <div className='planetdetails_wrap'>
                            <div className='planetdetails_title'>{name}</div>
                            <div className='planetdetails_text'>Rotation period: {rotationPeriod}</div>
                            <div className='planetdetails_text'>Diameter: {diameter}</div>
                            <div className='planetdetails_text'>Population: {population}</div>
                            <ErrorButton/>
                        </div>
                    </React.Fragment>}
                    {showSpinner && !shouldRender && <Spinner/>}
                </div>}
            </React.Fragment>
        );
    }

    componentDidMount() {
        this.update();
    }

    update = () => {
        const {id} = this.props;
        id !== null && !isNaN(id) && this.swapiService.getPlanet(id + 1)
            .then(({population, rotation_period, diameter, name}) => {
                this.setState({
                    shouldRender: true,
                    population: population,
                    rotationPeriod: rotation_period,
                    diameter: diameter,
                    name: name,
                });
            })
    };
}

export {PlanetDetails};