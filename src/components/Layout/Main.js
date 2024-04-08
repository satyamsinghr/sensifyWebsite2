import React, { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import HomePage from "../../pages/HomePage";
import MainCheckOut from "../../pages/MainCheckOut.jsx";
import Product_Cart from "../../components/Product_Cart";
import Shipping from "../../components/Shipping.jsx";
import Payment from "../../components/Payment.jsx";
import Order_Review from "../../components/Order_Review.jsx";
import Thankyou from "../../components/Thankyou.jsx";
import DialogueConfirm from "../../components/DialogueConfirm.jsx";
import Navbar from "../../components/Navbar.jsx";
import UserProfile from "../../components/UserProfile.jsx";
import YourOrders from "../../components/YourOrders.jsx";
import YetToDispatch from "../../components/YetToDispatch.jsx";
import EditProfile from "../../components/EditProfile.jsx";
import MobileScreen from "../../pages/MobileAppScreen.jsx";
import ErrorPage from "../../components/ErrorPage.jsx";
import Research from "../../components/Research/Research.jsx";
import Collaboration from "../../components/Collaboration/Collabration.jsx";
import Mission from "../../components/Mission/Mission.jsx";
import Footer from "../../components/Footer.jsx";
function Main() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route index exact path="/" element={<HomePage />} />
        <Route path="/collaboration" element={<Collaboration />} />
        <Route path="/mission" element={<Mission />} />
        <Route path="mobile-screen" element={<MobileScreen />} />
        <Route path="Confirmation" element={<DialogueConfirm />}></Route>
        <Route path="MainCheckOut" element={<MainCheckOut />}></Route>
        <Route path="Product" element={<Product_Cart />}></Route>
        <Route path="Shipping" element={<Shipping />}></Route>
        <Route path="Payment" element={<Payment />}></Route>
        <Route path="Thankyou" element={<Thankyou />}></Route>
        <Route path="Order_Review" element={<Order_Review />} />
        <Route path="userProfile" element={<UserProfile />} />
        <Route path="yourOrders" element={<YourOrders />} />
        <Route path="yet-Dispatch" element={<YetToDispatch />} />
        <Route path="edit-Profile" element={<EditProfile />} />
        <Route path="research" element={<Research />} />
        <Route path="/*" element={<ErrorPage />} />
      </Routes>
      <Footer />
    </>
  );
}

export default Main;
