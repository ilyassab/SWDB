import * as React from 'react';

import './PersonDetails.css';
import {Spinner} from "../Spinner/Spinner";
import {ErrorButton} from "../ErrorButton/ErrorButton";
import {SwapiService} from "../../services/SwapiService/SwapiService";

interface IState {
    name: string | null;
    birthYear: string | null;
    eyeColor: string | null;
    gender: string | null;
    shouldRender: boolean;
}

interface IProps {
    id: number;
    showSpinner: boolean;
}

class PersonDetails extends React.Component<IProps, IState> {

    swapiService = new SwapiService();

    state = {
        shouldRender: false,
        name: null,
        birthYear: null,
        eyeColor: null,
        gender: null
    };

    render() {
        const {id, showSpinner} = this.props;
        const {shouldRender, name, birthYear, eyeColor, gender} = this.state;
        this.update();
        return (
            <React.Fragment>
                {
                    (shouldRender || showSpinner) &&
                    <div className='persondetails'>
                        {shouldRender && <React.Fragment>
                            <img className='persondetails_img'
                                 src={id ? `https://starwars-visualguide.com/assets/img/characters/${id}.jpg` : ''}
                                 alt='img'/>
                            <div className='persondetails_wrap'>
                                <div className='persondetails_title'>{name}</div>
                                <div className='persondetails_text'>Gender: {gender}</div>
                                <div className='persondetails_text'>Birth year: {birthYear}</div>
                                <div className='persondetails_text'>Eye color: {eyeColor}</div>
                            </div>
                            <ErrorButton/>
                        </React.Fragment>}
                        {showSpinner && !shouldRender && <Spinner/>}
                    </div>
                }
            </React.Fragment>
        );
    }

    update = () => {
        const {id} = this.props;
        !isNaN(id) && this.swapiService.getPerson(id)
            .then(({gender, birth_year, eye_color, name}) => {
                this.setState({
                    shouldRender: true,
                    name: name,
                    birthYear: birth_year,
                    eyeColor: eye_color,
                    gender: gender
                });
            })
    }

}

export {PersonDetails};