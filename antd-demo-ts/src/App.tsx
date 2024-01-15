import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Overview from './pages/overview';
import Servers from './pages/servers';
import ExchangeSessions from './pages/exchangeSessions';
import Mapping from './pages/mapping';
import Home from './pages/login';
import Register from './pages/register';
function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/register" element={<Register />}/>
          <Route path="/overview" element={<Overview />} />
          <Route path="/servers" element={<Servers />} />
          <Route path="/exchangesessions/:id?" element={<ExchangeSessions />}/>
          <Route path="/mapping" element={<Mapping />} />
        </Routes>
      </div>
    </Router>
  );
}
export default App;
