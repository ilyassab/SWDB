import * as React from "react";
import {Error} from "../Error/Error";

class ErrorBoundary extends React.Component {

    state = {
        error: false,
    };

    render() {

        if (this.state.error) {
            return <Error/>
        }

        return this.props.children;
    }

    componentDidCatch() {
        this.setState({error: true});
    }
}

export {ErrorBoundary};
