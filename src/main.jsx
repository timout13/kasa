import React from 'react'
import ReactDOM from 'react-dom/client'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Home from './pages/Home/index.jsx'
import About from './pages/About/about.jsx'
import Announce from './pages/Announce/announce.jsx'
import Error404 from './pages/Error/404.jsx'
import './assets/css/index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
    //<React.StrictMode>
    <>
        <Router>
            <Routes>
                <Route path="/" element={<Home/>}></Route>
                <Route path="/a-propos" element={<About/>}></Route>
                <Route path="/location/:idLocation" element={<Announce/>}></Route>
                <Route path="/*" element={<Error404/>}></Route>
            </Routes>
        </Router>
    </>
    //</React.StrictMode>,
)

