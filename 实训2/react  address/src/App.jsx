import React, { Component } from "react"
import { BrowserRouter, Route, NavLink, Redirect, Switch } from "react-router-dom"

import Main from "./common/Main"
import Footer from "./common/Footer"
import Footers from "./common/Footer/Footers"
import routers from "./router"

class App extends Component {
    render() {
        return (
            <div id="App">
                <Main>
                    <Switch>
                        {
                            routers.views.map((view, ind) => {
                                return (
                                    <Route
                                        exact
                                        path={view.path}
                                        key={ind}
                                        component={view.component}
                                    
                                    >
                                    </Route>
                                )
                            })
                        }
                    </Switch>
                </Main>

                <Footer>
                    {
                        routers.navs.map((nav, ind) => {
                            return (
                                <NavLink
                                    to={nav.to}
                                    activeClassName={nav.active}
                                    key={ind}
                                    exact
                                >
                                    <Footers title={nav.title} icon={nav.icon} />
                                </NavLink>
                            )
                        })
                    }
                </Footer>
            </div>
        )
    }
}

export default App