import React from 'react'
import { Router } from '@reach/router'
import { GlobalStyle } from './styles/GlobalStyle'
import { Logo } from './components/Logo'
import { Home  } from './pages/Home'
import { Synopsis} from './pages/Synopsis'
import { Tickets } from './pages/Tickets'

export const App = () => {
    return (
        <div>
            <GlobalStyle />
            <Logo />
            <Router>
                <Home path='/' />
                <Home path='/category/:name' />
                <Synopsis path='/synopsis/:id' />
                <Tickets path='/ticket/:id/:hora' />
            </Router>
        </div>
    )
}