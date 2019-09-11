import * as React from 'react';

import './Spinner.css';

class Spinner extends React.Component<{}, {}> {
    render() {
        return (
            <div className="spinner lds-css ng-scope">
                <div className="lds-double-ring">
                    <div/>
                    <div/>
                </div>
            </div>
        );
    }
}

export {Spinner};