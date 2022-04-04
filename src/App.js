
import { createContext, useEffect, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import AboutUs from './Components/About Us/AboutUs';
import Blogs from './Components/Blogs/Blogs';
import CustomersReview from './Components/CustomersReview/CustomersReview';
import DashBoard from './Components/Dashboard/DashBoard';
import Header from './Components/Header/Header';
import Home from './Components/Home/Home';
import NotFound from './Components/NotFound/NotFound';
import Reviews from './Components/Reviews/Reviews';
import TopThreeReviews from './Components/TopThreeReviews/TopThreeReviews';

export const ClothContext = createContext();


function App() {
  const [clothes, setClothes] = useState([]);
  useEffect(() => {
    fetch('tshirts.json')
      .then(res => res.json())
      .then(data => setClothes(data))

  }, [])
  return (
    <ClothContext.Provider value={[clothes, setClothes]}>

      <div className='App'>
        <Header></Header>
        <Routes>
          <Route path="/" element={<Home></Home>}></Route>
          <Route path="/home" element={<Home></Home>}></Route>
          <Route path="/reviews" element={<Reviews></Reviews>}></Route>
          <Route path="/dashboard" element={<DashBoard></DashBoard>}></Route>
          <Route path="/customersreview" element={<CustomersReview></CustomersReview>}></Route>
          <Route path="/blogs" element={<Blogs></Blogs>}></Route>
          <Route path="/aboutus" element={<AboutUs></AboutUs>}></Route>
          <Route path="/home/:topreviews" element={<TopThreeReviews></TopThreeReviews>}></Route>
          <Route path="*" element={<NotFound></NotFound>}></Route>

        </Routes>

      </div>
    </ClothContext.Provider>
  );
}

export default App;
