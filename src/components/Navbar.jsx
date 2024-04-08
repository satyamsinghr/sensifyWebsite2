/** @format */

import React from "react";
import logoHeader from "../assets/Logo.png";
import { Outlet, Link } from "react-router-dom";
import { useGlobalContext } from "../context/context";
import { useNavigate, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import Signin from './Login Pages/Signin'
import Modal from 'react-modal';
import cross from "../assets/CloseButton.png";

const Nav = (props) => {
  var socilaLogIn = localStorage.getItem("socilaLogIn");
 
  const [accessToken, setAccessToken] = useState("");
  const [userId, setUserId] = useState("userIdData");
  const [userIdLogin, setUserIdLogin] = useState("userIdData");
  const [color, setColor] = useState("");
  const [mobileNavbarToggle, setMobileNavbarToggle] = useState(true);

  const [modalIsOpen, setModalIsOpen] = useState(false);

  const openModal = (event) => {
    event.preventDefault();
    setModalIsOpen(true);
  };

  const customStyles = {
    overlay: {
      backgroundColor: 'rgba(255, 255, 255, 0.75)', 
      zIndex: modalIsOpen ? 1000 : -1,
    },
    content: {
      top: '0%',
      left: '0%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '0%',
      width: '100%',
      transform: 'translate(0%, 0%)',
    },
  };

  const closeModal = () => {
    setModalIsOpen(false);
    const token = localStorage.getItem("Current_AccessToken");
    setAccessToken(token || "");
    const userIdData = localStorage.getItem("social_login_ID");
    setUserIdLogin(userIdData || "");
  };

  setTimeout(() => {
    const userID = localStorage.getItem("local_id_store");
    setUserId(userID);
  }, 0);

  const navigate = useNavigate();
  const location = useLocation();
  const isCurrentPath = (path) => location.pathname === path;
  const handleClick = () => {
    window.location.reload();
    navigate("/");
  };

  const handleClickcart = () => {
    navigate("/MainCheckout");
  };

  const handleClickout = () => {
    window.localStorage.clear();
    // window.localStorage.remove("local_id_store");
    window.location.reload();
    navigate("/");
  };

  const handleclicksign = () => {
    var stri = localStorage.getItem("local_id_store");
    setMobileNavbarToggle(true);
    stri = parseInt(stri);
    if (stri > 0 || socilaLogIn === "true") {
      navigate("/userProfile");

    } else {
      navigate("/Signin");
    }
  };

  const handleclickmission = () => {
    navigate("/mission");
  };
  const handleclickcollab = () => {
    navigate("/collaboration");
  };
  const { amount } = useGlobalContext();

  const handleRedirectToHome = (value) => {
    if (value !== "") {
      setMobileNavbarToggle(true);
      navigate("/");
      if (location.pathname === "/Payment") {
        window.location.reload();
      }
    }
    // setMobileNavbarToggle(!mobileNavbarToggle)
    else navigate("/");
 
  };
  const TotalAmount = localStorage.getItem("TotalAmount1");

  const listenScrollEvent = (e) => {
    if (window.scrollY > 50) {
      if (location.pathname === "/") {
        setColor("#153F67");
      }
    }
  };

  useEffect(() => {
    if (location.pathname !== "/") {
      setColor("#153F67");
    }
    else {
      setColor("");
    }
    window.addEventListener("scroll", listenScrollEvent);
    const token = localStorage.getItem("Current_AccessToken");
    setAccessToken(token || "");
    const userIdData = localStorage.getItem("social_login_ID");
    setUserIdLogin(userIdData || "");
  }, [location.pathname]);

  const handleLogout = () => {
    localStorage.removeItem("Current_AccessToken");
    localStorage.removeItem("social_login_ID");
    localStorage.removeItem("userid-local_storage");
    localStorage.removeItem("Check_User_Login");
    localStorage.removeItem("Current_Login_user");
    localStorage.removeItem("socialObj");
    localStorage.removeItem("socilaLogIn");
    localStorage.removeItem("loglevel");
    setAccessToken("");
    setUserIdLogin("")
  };
  return (
    <>
      <div className="container-fluid p-0">
        <header>
          <div class="container">
            <div class="row">
              <div class="col-12">
                <div class="navbar navbar-expand-lg p-0">
                  <div class="container-fluid">
                    <Link class="navbar-brand" Link to={"/"}>
                      <img src={logoHeader} width="140px"
                        alt />
                    </Link>  
                    {/* <button class="navbar-toggler" type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#navbarSupportedContent"
                      aria-controls="navbarSupportedContent"
                      aria-expanded="false"
                      aria-label="Toggle navigation">
                      <span class="navbar-toggler-icon"></span>
                    </button> */}
                    <div class="collapse navbar-collapse"
                    >
                      <ul
                        class="navbar-nav ms-auto mb-0 mb-lg-0 gap-3">
                         <li className="nav-item">
                            <Link
                                className={`nav-link ${isCurrentPath('/Product') ? 'active' : ''}`}
                              style={{ color: isCurrentPath('/Product') ? '#031A40' : '' }}
                            //  to="/Product" 
                            Link to={"/Product"}
                            >
                              Products
                            </Link>
                          </li>
                        <li class="nav-item">
                        <Link
                             className={`nav-link ${isCurrentPath('/IntelliVista') ? 'active' : ''}`}
                             style={{ color: isCurrentPath('/Product') ? '#FFFFFF' : '' }}
                            //  to="/IntelliVista"
                           >
                           IntelliVista
                             </Link>
                        </li>
                   
                        <li class="nav-item">
                               <Link
                             className={`nav-link ${isCurrentPath('/Services') ? 'active' : ''}`}
                             style={{ color: isCurrentPath('/Product') ? '#FFFFFF' : '' }}
                            //  to="/IntelliVista"
                           >
                          Services</Link>
                        </li>
                          <li class="nav-item">
                          <Link
                             className={`nav-link ${isCurrentPath('/Cart') ? 'active' : ''}`}
                             style={{ color: isCurrentPath('/Product') ? '#FFFFFF' : '' }}
                             Link to={"/Cart"}
                           >Cart</Link>
                        </li>
                        {(!accessToken && !userIdLogin) ? (
                          <li class="nav-item">
                            <a class="nav-link" onClick={openModal} style={{ color: isCurrentPath('/Product') ? '#FFFFFF' : '',cursor: 'pointer' }}>
                              Log in
                            </a>
                          </li>
                        ) : (
                          <li class="nav-item">
                            <a
                              className="nav-link" style={{ color: isCurrentPath('/Product') ? '#FFFFFF' : '',cursor: 'pointer' }}
                              onClick={handleLogout}
                            >
                              Logout
                            </a>
                          </li>
                        )}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </header>
      </div>
      <Modal
        isOpen={modalIsOpen}
        // onAfterOpen={afterOpenModal}
        style={customStyles}
        onRequestClose={closeModal}
        contentLabel="Example Modal"
        className='login_modal'
      >
        <button
          className="btn btn-link modal_close position-absolute top-0 end-0 m-2"
          onClick={closeModal}
          style={{ zIndex: 1001 }}
        >
          <img src={cross} alt="Close" width="48" height="48" />
        </button>
        <Signin closeModal={closeModal} />
      </Modal>
    </>
  );
};

export default Nav;