import './App.css';
import './index.css';
import { useState } from 'react';
import Navbar from './Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './Home';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Devices from './Devices';
import Games from './Games';
import New from './New';
import Shop from './Shop';
import QA from './QA';
import PurchaseForm from './PurchaseForm';
//all the css and bootstrap can be done later, I want this shit to just work for now

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleButtonClick = () => {
    setIsLoggedIn(!isLoggedIn);
  };

  return (
    <Router>
      <div className="App">
        <Navbar isLoggedIn={isLoggedIn} handleButtonClick={handleButtonClick}></Navbar>
        <div className="content">
          <Routes>
            <Route path='/' element={<Home />}/>
            <Route path='/Devices' element={<Devices/>}/>
            <Route path='/Games' element={<Games isLoggedIn={isLoggedIn} />}/>
            <Route path='/New' element={<New />}/>
            <Route path='/Shop' element={<Shop />}/>
            <Route path='/QA' element={<QA isLoggedIn={isLoggedIn} />}/>
            <Route path="/purchase" element={<PurchaseForm />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
