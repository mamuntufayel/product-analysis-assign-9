
import { Route, Routes } from 'react-router-dom';
import './App.css';
import DashBoard from './Components/Dashboard/DashBoard';
import Header from './Components/Header/Header';
import Home from './Components/Home/Home';
import Reviews from './Components/Reviews/Reviews';

function App() {
  return (
    <div className='App'>
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/home" element={<Home></Home>}></Route>
        <Route path="/reviews" element={<Reviews></Reviews>}></Route>
        <Route path="/dashboard" element={<DashBoard></DashBoard>}></Route>
      </Routes>

    </div>
  );
}

export default App;
