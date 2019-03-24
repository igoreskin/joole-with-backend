import React from 'react';
import MainContainer from './MainContainer';
import Header from './Header';

import { Route, Switch } from 'react-router-dom';

const Wrapper = (props) => {
    return (
        <div>
            <Route exact path='/' component={MainContainer} />
            <Switch>
                
            </Switch>


            <Route exact path='/header' component={Header} />
        </div>
    )
}

export default Wrapper;