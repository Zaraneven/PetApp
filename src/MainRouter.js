import React from 'react';
import { Route, Routes } from "react-router";
import Home from "./Home"
import PetVet from "./PetVet"
import Vet from "./Vet";
import Register from './Register';
import Login from './Login';

function MainRouter( props ) {
    return (
        <div>
            <Routes>
                <Route exact path="/" element={<Home/>}/>
                <Route exact path="/pet-vet" element={<PetVet/>}/>
                <Route exact path="/pet-vet-form" element={<Vet/>}/>
                <Route exact path="/register" element={<Register/>}/>
                <Route exact path="/login" element={<Login/>}/>
            </Routes>
        </div>
    );
}

export default MainRouter;
