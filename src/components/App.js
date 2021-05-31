import React from 'react';
import { Switch, Route } from 'react-router-dom';

import MainPage from '../pages/MainPage';
import OurCoffeePage from '../pages/OurCoffeePage';
import ItemPage from '../pages/ItemPage';
import PleasurePage from '../pages/PleasurePage';

const App = () => {

    return (
        <Switch>
            <Route exact path='/'>
                <MainPage />
            </Route>
            <Route exact path='/our-coffee/'>
                <OurCoffeePage />
            </Route>
            <Route path='/our-coffee/:id'>
                <ItemPage />
            </Route>
            <Route path='/pleasure'>
                <PleasurePage />
            </Route>
        </Switch>
    )
}

export default App;