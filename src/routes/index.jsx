import React from 'react'
import { BrowserRouter, Switch, Route, Redirect} from 'react-router-dom';
import Home from '../pages/Home'
import Cities from '../pages/Cities'
import Details from '../pages/Details'
import Confirmation from '../pages/Confirmation';

function Router() {
    return (
        <BrowserRouter>
            <Switch>
                <Redirect exact from="/" to="/home" />
                <Route path="/home" component={Home} />
                <Route path="/cities/" component={Cities} />
                <Route path="/details/:city_id" component={Details} />
                <Route path="/confirmation" component={Confirmation} />
            </Switch>
        </BrowserRouter>
    )
}
export default Router