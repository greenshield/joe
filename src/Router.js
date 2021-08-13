import React from 'react'
import { Route, Switch, Redirect, useRouteMatch } from 'react-router-dom'
import Profile from './components/Profile'
import About from './components/About'
import Bar from './components/Bar'
import Home from './components/Home'

function Router(props) {

    const [currentUser,setCurrentUser] = React.useState(null)

    return <React.Fragment>

        <Switch>
            <Route path="/profile/:userID?" exact render={
                (props) => {                    
                    return <React.Fragment>
                        <Bar {...props} currentUser={currentUser} />
                        <Profile {...props} setCurrentUser={setCurrentUser} />
                    </React.Fragment>
                }
            } />
            <Route path="/about" exact component={About} />
            <Route path="/" exact component={Home} />
            
        </Switch>

    </React.Fragment>

}

export default Router