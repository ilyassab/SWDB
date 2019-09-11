import * as React from "react";
import { Redirect } from 'react-router-dom';


import './LoginPage.css';

interface IProps {
    isLoggedIn: boolean;
    onLoginHandle: () => void;
}

class LoginPage extends React.Component<IProps, {}> {

    render() {

        if (this.props.isLoggedIn) {
           return <Redirect to='/' />
        }

        return(
          <div className="login_wrap">
              <span>
                  Click to <button onClick={this.props.onLoginHandle}>Login</button>
              </span>
          </div>
        );
    }
}

export default LoginPage;