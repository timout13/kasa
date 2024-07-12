import React from 'react'
import ReactDOM from 'react-dom/client'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About/about.jsx'
import Announce from './pages/Announce'
import Header from './components/header'
import Footer from "./components/footer/index.jsx";
import Error404 from './pages/Error/404.jsx'
import './assets/css/index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
    //<React.StrictMode>
    <>
        <Router>
            <Header/>
            <Routes>
                <Route path="/" element={<Home/>}></Route>
                <Route path="/a-propos" element={<About/>}></Route>
                <Route path="/location/:idLocation" element={<Announce/>}></Route>
                <Route path="/*" element={<Error404/>}></Route>
            </Routes>
            <Footer/>
        </Router>
    </>
    //</React.StrictMode>,
)

