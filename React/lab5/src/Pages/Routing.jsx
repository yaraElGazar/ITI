import React from 'react';
import { Outlet } from 'react-router';
import { Link } from 'react-router-dom';

const Routing = () => {
    return (
        <div>
            <Link to='/routing/first'>
              First
            </Link>
            <Link to='/routing/second' style={{margin: '20px'}}>
              Second
            </Link>
            <Outlet/>
        </div>
    );
};

export default Routing;