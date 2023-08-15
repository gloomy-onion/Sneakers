import React from 'react'
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import routesElements from './components/Header/routes';
import MainPage from './components/MainPage/MainPage';


const renderPath = () =>
    routesElements.map(({ path, exact, element }, index) => (
        <Route key={index} exact={exact} path={path} element={element} />
    ));

function App() {
    return(
        <BrowserRouter>
            <MainPage/>
                <Routes>
                    {renderPath()}
                </Routes>
        </BrowserRouter>
    )
}

export default App
