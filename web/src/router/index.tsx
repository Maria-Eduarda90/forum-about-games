import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Login } from '../pages/auth/Login';
import { Signup } from '../pages/auth/Signup';

import { Home } from '../pages/Home';
import { Games } from '../pages/Games';
import { Forum } from '../pages/Forum';
import { Rules } from '../pages/Rules';
import { PrivateRouter } from './config/privateRouter';

export function AppRouter(){
    return(
        <Router>
            <Routes>
                <Route path="/cadastrar" element={<Signup />} />
                <Route path="/login" element={<Login />} />

                <Route path="/" element={<PrivateRouter />}>
                    <Route path="/home" element={<Home />} />
                    <Route path="/Jogos" element={<Games />} />
                    <Route path="/Forum" element={<Forum />} />
                    <Route path="/Regras" element={<Rules />} />
                </Route>
            </Routes>
        </Router>
    );
}