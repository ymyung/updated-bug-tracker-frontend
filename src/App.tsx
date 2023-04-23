import * as React from 'react';
import { 
    BrowserRouter as Router,
    Routes,
    Route
} from "react-router-dom";

import Navbar from "./components/Navbar";
import Dashboard from "./pages/Dashboard"
import Login from "./pages/Login"
import Profile from './pages/Profile'
import Signup from "./pages/Signup";
import Error from "./pages/Error";
import './App.css';

function App() {

    return (
        <Router>
            <Navbar />
            <div className="body">
                <Routes>
                    <Route path="/" element={<Dashboard />} />
                    <Route path="/profile" element={<Profile />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/signup" element={<Signup />} /> 
                    <Route path="*" element={<Error />} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;
