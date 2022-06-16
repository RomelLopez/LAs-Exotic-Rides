import React from "react";
import Main from './Main'
import Ferrari from './components/CarPages/Ferrari';
import BMW from './components/CarPages/BMW';
import Lamborghini from './components/CarPages/Lamborghini';
import McLaren from './components/CarPages/McLaren';
import Porsche from './components/CarPages/Porsche';
import RollsRoyce from './components/CarPages/RollsRoyce';
import { Route, BrowserRouter } from 'react-router-dom';

const App = () => {
    return (
        <div >
            <BrowserRouter>
                <Routes>
                    <Route path={process.env.PUBLIC_URL} exact component={Main}></Route>
                    <Route path="/Ferrari" exact component={Ferrari}></Route>
                    <Route path="/BMW" exact component={BMW}></Route>
                    <Route path="/Lamborghini" exact component={Lamborghini}></Route>
                    <Route path="/McLaren" exact component={McLaren}></Route>
                    <Route path="/Porsche" exact component={Porsche}></Route>
                </Routes>
            </BrowserRouter>

        </div>
    );
};

export default App;