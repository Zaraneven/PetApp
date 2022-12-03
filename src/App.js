import React from 'react';
import AppFooter from './AppFooter';
import AppHeader from './AppHeader';
import MainRouter from "./MainRouter";
function App( props ) {
    return (
        <div className="app">
            <AppHeader />
            <MainRouter />
            <AppFooter />
        </div>
    );
}

export default App;
