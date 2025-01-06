import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./Component/Navbar"
import EventList from "./Pages/EventList";
import Home from "./Pages/Home";
import AboutusPage from "./Pages/AboutusPage";
import Parentforjobpage from "./Pages/Parentforjobpage";
import Footer from "./Component/Footer";
import Scrolltop from "./Component/Scrolltop"
import LoginForm from "./Pages/LoginForm";
import ContactusPage from "./Pages/ContactusPage";
import ApplicationPage from "./Pages/ApplicationPage";
import FaqPage from "./Pages/FaqPage";
import ProfilePage from "./Pages/ProfilePage";



export default function App() {
return (
    <>
    
      <BrowserRouter>
        <Navbar />
        {/* <ControlledCarousel /> */}
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/aboutus" element={<AboutusPage/>}/>
          <Route path="/eventlist" element={<EventList />}/>
          <Route path="/jobpage" element={<Parentforjobpage />}/>
          <Route path="/contactus" element={<ContactusPage/>}/>
          <Route path="/application" element={<ApplicationPage/>}/>
          <Route path="/loginform" element={<LoginForm/>}/>
          <Route path="/faq" element={<FaqPage/>}/>
          <Route path="/profile" element={<ProfilePage/>}/>
        </Routes>
        <Scrolltop/>
        <Footer />
       
        
        
      </BrowserRouter>
      
    </>
  );
}
