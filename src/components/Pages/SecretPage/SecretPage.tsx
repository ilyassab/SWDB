import * as React from "react";
import { Redirect } from 'react-router-dom';

import './SecretPage.css';

interface IProps {
    isLoggedIn: boolean;
}

class SecretPage extends React.Component<IProps, {}> {
    render() {

        const { isLoggedIn } = this.props;

        return(
            <div className='secretpage'>
                {!isLoggedIn && <Redirect to='/login/'/>}
                {isLoggedIn && <div>Secret Materials!</div>}
            </div>
        );
    }
}

export default SecretPage;