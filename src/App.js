import React from "react";
import Main from './Main'
import Ferrari from './components/CarPages/Ferrari';
import BMW from './components/CarPages/BMW';
import Lamborghini from './components/CarPages/Lamborghini';
import McLaren from './components/CarPages/McLaren';
import Porsche from './components/CarPages/Porsche';

import Information from "./components/Information";
import { Route, Routes, BrowserRouter } from 'react-router-dom';

const App = () => {
    return (
        <div >
            <BrowserRouter>
                <Routes>
                    <Route path={process.env.PUBLIC_URL} element={<Main />}></Route>
                    <Route path="/Information" element={<Information />}> </Route>
                    <Route path="/Ferrari" element={<Ferrari />}></Route>
                    <Route path="/BMW" element={<BMW />}></Route>
                    <Route path="/Lamborghini" element={<Lamborghini />}></Route>
                    <Route path="/McLaren" element={<McLaren />}></Route>
                    <Route path="/Porsche" element={<Porsche />}></Route>
                </Routes>
            </BrowserRouter>

        </div >
    );
};

export default App;