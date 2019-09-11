/// <reference path='../../typings.d.ts'/>

import * as React from "react";

import './Error.css';
import * as icon from '../../images/redstar.png';

class Error extends React.Component {
    render() {
        return (
            <div className='error_wrong'>
                <img src={icon} alt='error_image'/>
                <div>Something goes wrong!!!</div>
                <div>Error</div>
            </div>
        );
    }
}

export { Error }
