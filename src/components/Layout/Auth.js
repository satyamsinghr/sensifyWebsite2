import React from "react";
import { Routes, Route } from "react-router-dom";
import Dialogue from "../../components/Dialogue";
import Dialogueup from "../../components/Dialogueup.jsx";
import ForgetPassword from "../../components/Login Pages/ForgetPassword.jsx";
import PasswordResetLink from "../../components/Login Pages/PasswordResetLink.jsx";
import ResetPassword from "../../components/Login Pages/ResetPassword.jsx";
import ResetSuccessfully from "../../components/Login Pages/ResetSuccessfully.jsx";
import Navbar from "../../components/Navbar.jsx";
function Auth() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="Signup" element={<Dialogueup />} />
        <Route path="Signin" element={<Dialogue />} />
        <Route path="forgot_Password" element={<ForgetPassword />} />
        <Route path="Forgot_PasswordLink" element={<PasswordResetLink />} />
        <Route path="reset_Password" element={<ResetPassword />} />
        <Route path="reset_Successfully" element={<ResetSuccessfully />} />
      </Routes>
    </>
  );
}

export default Auth;
