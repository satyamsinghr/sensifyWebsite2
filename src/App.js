/** @format */

import React, { useEffect } from "react";
import { BrowserRouter, Routes, Route, useLocation   } from "react-router-dom";
import CheckoutNav from "./components/CheckoutNav.jsx";
import HomePage from "./pages/HomePage.jsx";
import About from "./components/Sticks.jsx";
import Tutorials from "./components/Tutorials.jsx";
import Shop from "./components/Shop.jsx";
import MainCheckOut from "./pages/MainCheckOut.jsx";
import Cart from "./components/Cart.jsx";
import Product_Cart from "./components/Product_Cart.jsx";
import Shipping from "./components/Shipping.jsx";
import Payment from "./components/Payment.jsx";
import Order_Review from "./components/Order_Review.jsx";
import { useGlobalContext } from "./context/context";
import Thankyou from "./components/Thankyou.jsx";
import Signup from "./components/Login Pages/Signup.jsx";
import Signin from "./components/Login Pages/Signin.jsx";
import Confirmation from "./components/Login Pages/Confirmation.jsx";
import Dialogue from "./components/Dialogue.jsx";
import Dialogueup from "./components/Dialogueup.jsx";
import DialogueConfirm from "./components/DialogueConfirm.jsx";
import ForgetPassword from "./components/Login Pages/ForgetPassword.jsx";
import PasswordResetLink from "./components/Login Pages/PasswordResetLink.jsx";
import ResetPassword from "./components/Login Pages/ResetPassword.jsx";
import ResetSuccessfully from "./components/Login Pages/ResetSuccessfully.jsx";
import Navbar from "./components/Navbar.jsx";
import UserProfile from "./components/UserProfile.jsx";
import YourOrders from "./components/YourOrders.jsx";
import YetToDispatch from "./components/YetToDispatch.jsx";
import EditProfile from "./components/EditProfile.jsx";
import MobileScreen from "./pages/MobileAppScreen.jsx";
import ErrorPage from "./components/ErrorPage.jsx";
import Research from "./components/Research/Research.jsx";
import Collabration from "./components/Collaboration/Collabration.jsx";
import Mission from "./components/Mission/Mission.jsx";
import { gapi } from "gapi-script";
import "./components/App/App.css";
import Footer from "./components/Footer.jsx";
import Auth from "./components/Layout/Auth.js";
import Main from "./components/Layout/Main.js";
import IntelliVista from "./components/IntelliVista";
import PrivacyPolicy from "./components/PrivacyPolicy.jsx";
import Checkout from "./components/Checkout.jsx";
import Checkout_IntelliVista from "./components/Checkout_IntelliVista.jsx";
// import style from "./styles/style.css";
// import owlCarousel from "./owl.carousel.min.css";
// import owlTheme from "./owl.theme.default.min.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import OrderConfirmationIntelliVista from "./components/Order_Confirmation_IntelliVista.jsx";

function App() {
  var LoginEmail = localStorage.getItem("Current_Login_user");
  const location = useLocation();
  useEffect(() => {
    function start() {
      gapi.client.init({
        clientId:
          "251997598489-2en61bset3ti5uakmnc5370fvma3v0sl.apps.googleusercontent.com",
        scope: "",
      });
    }
    gapi.load("client:auth2", start);
  });

  return (
    <>
      {/* <Navbar /> */}
      {!location.pathname.includes("Signin") && !location.pathname.includes("Checkout") && !location.pathname.includes("thankyou") &&
        !location.pathname.includes("Signup") && !location.pathname.includes("Shipping") && !location.pathname.includes("Cart") && !location.pathname.includes("IntelliVista") && !location.pathname.includes("Payment") &&  !location.pathname.includes("Forgot_PasswordLink") && !location.pathname.includes("forget_Password") && !location.pathname.includes("reset_Password") && !location.pathname.includes("reset_Successfully") && <Navbar />}
      <Routes>
        <Route index exact path="/" element={<HomePage />} />
        <Route index exact path="/apps" element={<HomePage />} />
        <Route index exact path="/collaboration" element={<Collabration />} />
        <Route index exact path="/mission" element={<Mission />} />
        <Route index exact path="/privacypolicy" element={<PrivacyPolicy />} />

        <Route path="mobile-screen" element={<MobileScreen />} />
        <Route path="Signup" element={<Dialogueup />}></Route>
        {/* <Route path="Signin" element={<Dialogue />}></Route> */}
        <Route path="Confirmation" element={<DialogueConfirm />}></Route>
        <Route path="MainCheckOut" element={<MainCheckOut />}></Route>
        <Route path="Product" element={<Product_Cart />}></Route>
        <Route path="Order_Confirmation_IntelliVista" element={<OrderConfirmationIntelliVista />}/>
        <Route path="Cart" element={<Cart />}></Route>
        <Route path="Shipping" element={<Shipping />}></Route>
        <Route path="Payment" element={<Payment />}></Route>
        <Route path="thankyou" element={<Thankyou />}></Route>
        <Route path="Order_Review" element={<Order_Review />}></Route>
        <Route path="forgot_Password" element={<ForgetPassword />} />
        <Route path="Forgot_PasswordLink" element={<PasswordResetLink />} />
        <Route path="reset_Password" element={<ResetPassword />} />
        <Route path="Checkout" element={<Checkout />}></Route>
        <Route path="Checkout_IntelliVista" element={<Checkout_IntelliVista />}></Route>
        <Route path="reset_Successfully" element={<ResetSuccessfully />} />
        <Route path="userProfile" element={<UserProfile />} />
        <Route path="yourOrders" element={<YourOrders />} />
        <Route path="yet-Dispatch" element={<YetToDispatch />} />
        <Route path="edit-Profile" element={<EditProfile />} />
        <Route path="research" element={<Research />} />
        <Route path="/*" element={<ErrorPage />} />
        <Route path="IntelliVista" element={<IntelliVista />} />
      </Routes>

      {!location.pathname.includes("Signin") &&  !location.pathname.includes("thankyou") && !location.pathname.includes("Checkout") &&
        !location.pathname.includes("Signup")&& !location.pathname.includes("Shipping") && !location.pathname.includes("Cart") && !location.pathname.includes("IntelliVista") && !location.pathname.includes("Payment") &&  !location.pathname.includes("Product") && !location.pathname.includes("forgot_Password") && !location.pathname.includes("Forgot_PasswordLink") &&  !location.pathname.includes("reset_Successfully") && !location.pathname.includes("reset_Password")}
    </>
  );
}

export default App;
