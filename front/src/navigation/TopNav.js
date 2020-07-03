import React from 'react';
import { Link } from 'react-router-dom';


const TopNav = () => {
    return (
        <div>
            <Link to="/">home</Link>
            <Link to="/policy">policy</Link>
        </div>
    )
}

export default TopNav
