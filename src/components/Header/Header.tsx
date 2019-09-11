import * as React from 'react';
import { Link } from "react-router-dom";

import './Header.css';

class Header extends React.Component {

    render() {
        return(
            <div className='header_wrap'>
                <Link to='/'><div className='header_title'>StarDB</div></Link>
                <div className='header_menu'>
                    <Link to='/people/'><span className='header_text'>Peoples</span></Link>
                    <Link to='/planets/'> <span className='header_text'>Planets</span></Link>
                    <Link to='/secret/'> <span className='header_text'>Secret</span></Link>
                    <Link to='/login/'> <span className='header_text'>Login</span></Link>
                </div>
            </div>
        );
    }
}

export { Header };