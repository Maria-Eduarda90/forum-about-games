import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Login } from '../pages/Login';
import { Signup } from '../pages/Signup';

export function AppRouter(){
    return(
        <Router>
            <Routes>
                <Route path="/" element={<Login />} />
                <Route path="/cadastrar" element={<Signup />} />
            </Routes>
        </Router>
    );
}