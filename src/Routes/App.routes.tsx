import React from 'react';
import { BrowserRouter, Route} from 'react-router-dom';

import Home from '../pages/Home/home';
import Overview from '../pages/Analitics/index';
import Analitics from '../pages/overview/index';

import Layout from '../components/Layout';

function Routes(){
    return(
        <BrowserRouter>
         <Layout>
            <Route path="/" exact component={Home}/>
            <Route path="/overview" exact component={Overview}/>
            <Route path="/analitics" exact component={Analitics}/>
        </Layout>
        </BrowserRouter>
    )
}

export default Routes; 