import React from 'react'
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import Home from '../Componentes/Pages/Home/Home'
import Create from '../Componentes/Pages/Create/Create'
import Done from '../Componentes/Pages/Done/Done'


function Routes(){
    return (
        <BrowserRouter>
           <Switch>
               <Route exact path="/" component={Home}/>
               <Route exact path="/create" component={Create}/>
               <Route exact path="/done" component={Done}/>

           </Switch>
        </BrowserRouter>
    )
}

export default Routes;