import * as React from 'react';

import './Essence.css';
import {ErrorBoundary} from "../ErrorBoundary/ErrorBoundary";

interface IState {
    showText: boolean;
    showSpinner: boolean;
}

interface IProps {
    LeftComponent: any;
    RightComponent: any;
    id: number;
    list: string;
    onItemSelected: (arg0: number) => void;
}

class Essence extends React.Component<IProps, IState> {

    state = {
        showText: false,
        showSpinner: false,
    };

    render() {

        const {showText, showSpinner} = this.state;

        const {LeftComponent, RightComponent, id, list} = this.props;

        return (
            <div className='essence_wrap'>
                <LeftComponent
                    onClickHandle={this.onClickHandler}
                    list={list}
                    onResponseRecieved={this.onResponseRecieved}
                />
                <ErrorBoundary>
                    <RightComponent
                        id={id}
                        showSpinner={showSpinner}
                        key={id}
                    />
                </ErrorBoundary>
                {showText && <div className='essence_text'>
                    Choose an essence!
                </div>}
            </div>
        );
    }

    onResponseRecieved = () => {
        isNaN(this.props.id) && this.setState({showText: true});
    };

    onClickHandler = (id: number) => {
        this.props.onItemSelected(id);
        this.setState({
            showText: false,
            showSpinner: true,
        });
    };
}

export {Essence};