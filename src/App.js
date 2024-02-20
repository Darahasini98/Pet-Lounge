import './App.css';
import Home from './screens/Home';

import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Login from './screens/Login';
import Register from './screens/Register';


function App() {
  return (
    <Router>
    <div>
      <Routes>
      <Route exact path='/' element={<Home/>}/>
      <Route exact path='/login' element={<Login/>}/>
      <Route exact path='/createUser' element={<Register/>}/>

      </Routes>
    </div>
    </Router>
  );
}

export default App;
