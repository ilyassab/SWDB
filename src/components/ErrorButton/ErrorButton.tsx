import * as React from 'react';

import './ErrorButton.css';

interface IState {
    makeError: boolean;
}

class ErrorButton extends React.Component<{},IState> {

    state = {
        makeError: false,
    };

    render() {

        if (this.state.makeError) {
            //@ts-ignore
            this.foo.bar = true;
        }

        return (
            <button className='errorbutton' onClick={() => this.setState({makeError: true})}>
                Error Button
            </button>
        );
    }
}

export { ErrorButton };