import { BrowserRouter as Router,Routes, Route, Navigate } from 'react-router-dom';

import './App.css';
import LoginForm from './components/LoginForm';
import { Welcome } from './components/Welcome';
import PrivateRoute from './components/Privateroute';
import { useNavigate } from 'react-router-dom';
function App() {
  
  
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route element={<LoginForm/>} path="/login"></Route>
          {/* <Route element={<Welcome/>} path="/welcome"></Route> */}

          <Route element={<PrivateRoute/>}>
            <Route element={<Welcome/>} path="/welcome"></Route>
          </Route> 
          {/* <Route elemenet={istoken?<Welcome/>:Navigate("/login")}  path="/welcome"></Route> */}
          
        </Routes>
      </Router>
    </div>
  );
}

export default App;
