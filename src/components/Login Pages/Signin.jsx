import React, { useEffect } from 'react';
import { useNavigate, useLocation } from "react-router-dom";
import { useState, } from "react";
import Swal from "sweetalert2";
import Axios from "axios";
import { isMobile } from "react-device-detect";
import FacebookLogin from "react-facebook-login";
// import { GoogleLogin, GoogleLogout } from "react-google-login";
import { GoogleOAuthProvider,GoogleLogin } from '@react-oauth/google';
import { jwtDecode } from "jwt-decode";
import config from "../../config";
import axios from "axios";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import * as Yup from "yup";
import { useFormik } from "formik";
import Log from "../../assets/Visibility.png";
import { Link } from "react-router-dom";

const initialValues = {
  Email: "",
  Password: "",
};

function Signin({ closeModal }) {
  const [provider, setProvider] = useState("");
  const [profile, setProfile] = useState(null);
  const [Email, setEmail] = useState("");
  const [Password, setPassword] = useState("");
  const [userId, setUserId] = useState("");
  const [load, setLoad] = useState(false);
  const [showLogoutBtn, setShowLogoutBtn] = useState(false);
  const [socialResp, setSocialResp] = useState();
  const [showPassword, setShowPassword] = useState(false);
  const location = useLocation();
  const [modalIsOpen, setIsOpen] = useState(false);
  var obj = {};
  const navigate = useNavigate();
  var token = localStorage.getItem("Current_AccessToken");
  useEffect(() => {
    // if (token) {
    //   navigate('/');
    // } else {
    //   navigate('/');
    // }
  }, [token, navigate]);

  useEffect(() => {
    if (userId) {
      navigate('/');
    } else {
      navigate('/');
    }
  }, [userId, navigate]);

  const validationSchema = Yup.object({
    Email: Yup.string().email("Invalid email address").required("Email is required!"),
    Password: Yup.string()
      .required("Password is required!")
      .matches(
        /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[\W_]).{8,16}$/,
        {
          message: "Password must be 8-16 characters and contain at least one number, one uppercase letter, one lowercase letter, and one special character, and cannot contain spaces.",
          excludeEmptyString: true,
        }
      )
      .matches(
        /^\S*$/,
        "Password cannot contain spaces."
      ),
  });

  const customStyles = {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
    },
  };

  function handleSocialLoginRequest(response, btn) {
    console.log("responsebtn", response, btn);
    var tempBtn = btn;
    var api = `${config.BASE_URL}/signup`;
    // var api = `${config.BASE_URL}/signupuser`;
    const googleLoginObj = {
      EmailAddress: response?.email,
      SocialMedia: "Google",
      FirstName: response?.given_name,
      LastName: response?.family_name,
     SocialId: response?.sub,
      // Url: "/signup",
      Url: "/signupuser",
    };
    // const googleLoginObj = {
    //   EmailAddress: response?.profileObj?.email,
    //   SocialMedia: "Google",
    //   FirstName: response?.profileObj?.givenName,
    //   LastName: response?.profileObj?.familyName,
    //   SocialId: response?.googleId,
    //   Url: "/signup",
    // };

    // const faceBookLoginObj = {
    //   EmailAddress: response?.email,
    //   SocialMedia: "Facebook",
    //   FirstName: response.name?.split(" ").slice(0, -1).join(" "),
    //   LastName: response.name?.split(" ").slice(-1).join(" "),
    //   SocialId: response?.id,
    //   Url: "/signup",
    // };
    // console.log(tempBtn, api, "tempBtn");
    // axios
    //   .post(api, tempBtn == "Google" ? googleLoginObj : faceBookLoginObj)
    //   .then(
    //     (resp) =>
    //     console.log("resprespresprespresprespresp",resp),
    //       resp.data.IsSuccess &&
    //       SocialLoginSuccessfully(
    //         tempBtn == "Google" ? googleLoginObj : faceBookLoginObj,
    //         resp
    //       )
    //   );

    const faceBookLoginObj = {
      EmailAddress: response?.email,
      SocialMedia: "Facebook",
      FirstName: response.name?.split(" ").slice(0, -1).join(" "),
      LastName: response.name?.split(" ").slice(-1).join(" "),
      SocialId: response?.id,
      // Url: "/signup",
      Url: "/signupuser",
    };
    
    console.log(tempBtn, api, "tempBtn");
    axios
      .post(api, tempBtn === "Google" ? googleLoginObj : faceBookLoginObj)
      .then((resp) => {
        if (resp.data.IsSuccess) {
          SocialLoginSuccessfully(
            tempBtn === "Google" ? googleLoginObj : faceBookLoginObj,
            resp
          );
          setUserId(resp.data.Data.UserId)
          localStorage.setItem("social_login_ID", resp.data.Data.UserId);
          localStorage.setItem("Check_User_Login", resp.data.Data);
          localStorage.setItem("Current_Login_user", resp.data.Data.Email);
          navigate("/");
          closeModal();
        }
      })
      .catch((error) => {
        console.error("Error during login:", error);
      });
    
  }

  function SocialLoginSuccessfully(SocialObj, resp) {
    localStorage.setItem("social_login_ID", resp.data.Data.UserId);
    console.log(resp, "resp_SocialLoginSuccessfully");
    var socilaLogIn = localStorage.getItem("socilaLogIn");
    Swal.fire({
      icon: "success",
      title: "Success!",
      text: `Logged In by ${SocialObj.SocialMedia}`,
      showConfirmButton: false,
      timer: 3500,
    });
    navigate("/");
    // setModalIsOpen(false);   
    localStorage.setItem("socilaLogIn", true);
    localStorage.setItem("socialObj", JSON.stringify(SocialObj));
  }

  async function handleClickSignIn(event) {
    if (formik.isValid) {
      setLoad(true);
      const hashedPassword = btoa(event.Password);
      obj = {
        emailaddress: "Haroonahmad@highbitsol.com",
        Password: "Harr77@!",
        Url: "/loginuser",
      };
      obj["emailAddress"] = event.Email;
      obj["Password"] =hashedPassword;
      var stat;
      var api =
        "https://5qrg7as0r4.execute-api.us-east-1.amazonaws.com/isticks/signin";
      Axios.post(api, obj)
        .then((res) => {
          console.log("Axios Response: ", res.data);
          stat = res.data;

          console.log("stat", stat["StatusCode"]);
          if (stat["StatusCode"] === 0) {
            Swal.fire({
              icon: "success",
              title: "Success!",
              text: `Logged In...`,
              showConfirmButton: false,
              timer: 3500,
            });

            var obj_local = {
              userid: stat.Data.UserId,
              email: Email,
              password: Password,
            };

            localStorage.setItem(
              "userid-local_storage",
              JSON.stringify(obj_local)
            );
            localStorage.setItem("social_login_ID", stat.Data.UserId);
            console.log('social_login_ID', stat.Data.UserId)
            localStorage.setItem("Check_User_Login", res.data);
            localStorage.setItem("Current_Login_user", Email);
            localStorage.setItem("Current_AccessToken", res.data.Data.Tokens.AccessToken)
            let data = localStorage.getItem("Check_User_Login");
            console.log("data local", data);
            localStorage.setItem("Check_User_Login", "true");
            setLoad(false);
            navigate("/");
            closeModal()
          } else {
            Swal.fire({
              icon: "warning",
              title: "Invalid Credentials",
              text: "Invalid details entered, please enter again!",
              showCancelButton: false,
              confirmButtonText: "Try Again!",
            });
            setLoad(false);
          }
        })
        .catch((e) => {
          Swal.fire({
            icon: "warning",
            title: "Error!",
            text: e.Message,
            showCancelButton: false,
            confirmButtonText: "Try Again!",
          });
        })
        .finally(() => {
          setLoad(false);
        });
    }
  }

  const onSuccess = (response) => {
    try {
      const decoded = jwtDecode(response.credential);
      console.log('Decoded JWT:', decoded);
      setShowLogoutBtn(true);
      handleSocialLoginRequest(decoded, "Google");
    } catch (error) {
      console.error('Error decoding JWT:', error);
    }
    // if (response) {
    //   setSocialResp(response);
    //   setShowLogoutBtn(true);
    //   handleSocialLoginRequest(response, "Google");
    // }
  };

  const onFailure = (response) => {
    setShowLogoutBtn(false);
    console.log(response, "onFailure_responseGoogle");
  };

  function onRequest() {
    console.log(socialResp, "socialResp");
    handleSocialLoginRequest(socialResp, "Google");
  }
  const formik = useFormik({
    initialValues: initialValues,
    validationSchema: validationSchema,
    onSubmit: handleClickSignIn,
  });
  const containerStyle = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    // minHeight: '100vh', // This ensures the container takes at least the full height of the viewport
  };

  return (
    <>

      <section className="login_page d-flex align-items-center">
        <div className="container px-0">
          <div className="login_outer_inner">
            <div className="row justify-content-center">
              <div className="col-lg-8 col-md-7 col-sm-12 col-12">
                <div className="login_bg"></div>
              </div>
              <div className="col-lg-4 col-md-5 col-sm-12 col-12 px-lg-5 px-md-4 d-flex align-items-center">
                <div className="login_outer_m position-relative px-lg-4 px-md-0">
                  <div className="login_outer form_feild px-lg-2 py-lg-3 py-md-3 py-3">
                    <div className="card_title mb-4">
                      <h2 className="text-center m-0">Greetings!</h2>
                    </div>
                    <form action>
                      <div className="row">
                        <div className="col-12 mb-lg-4 mb-3 position-relative">
                          <label for className="w-100">
                            Email ID :
                          </label>
                          <input
                            id="Email"
                            type="email"
                            // className="form-control"
                            className={`form-control ${formik.touched.Email && formik.errors.Email
                              ? "is-invalid"
                              : ""
                              }`}
                            placeholder="Email id"
                            name="Email"
                            onChange={(e) => {
                              formik.handleChange(e);
                            }}
                            onBlur={formik.handleBlur}
                            value={formik.values.Email}
                            isValid={formik.isValid}
                            isTouched={formik.touched.Email}
                            invalidFeedback={formik.errors.Email}
                          />
                          <div className="invalid-feedback">
                            {formik.errors.Email}
                          </div>
                        </div>
                        <div className="col-12 mb-lg-4 mb-3 position-relative">
                          <label for className="w-100">
                            Password :
                          </label>
                          <div className={`position-relative ${formik.touched.Password &&
                            formik.errors.Password
                            ? "is-invalid"
                            : ""
                            }`}>
                            <input
                              // type="password"
                              id="Password"
                              className={`form-control ${formik.touched.Password &&
                                formik.errors.Password
                                ? "is-invalid"
                                : ""
                                }`}
                              placeholder="Password"
                              type={showPassword ? "text" : "password"}
                              name="Password"
                              onChange={(e) => {
                                formik.handleChange(e);
                              }}
                              onBlur={formik.handleBlur}
                              value={formik.values.Password}
                              isValid={formik.isValid}
                              isTouched={formik.touched.Password}
                              invalidFeedback={formik.errors.Password}
                            />
                            <div className="eye">
                              {showPassword ? (
                                <img
                                  src={Log}
                                  onClick={() => setShowPassword(!showPassword)}
                                />
                              ) : (
                                <VisibilityOffIcon
                                  onClick={() => setShowPassword(!showPassword)}
                                />
                              )}
                            </div>
                          </div>
                          <div className="invalid-feedback">
                            {formik.errors.Password}
                          </div>
                        </div>
                        <div className="col-12">
                          <button
                            className="btn btn-primary mb-3"
                            onClick={formik.handleSubmit}
                            type="submit"
                          >
                            Log in
                          </button>
                          {/* <button className="btn mb-3 btn-outline-primary d-flex align-items-center justify-content-center">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="25"
                              height="24"
                              viewBox="0 0 25 24"
                              fill="none"
                            >
                              <g clip-path="url(#clip0_3218_23)">
                                <path
                                  d="M24.4875 12.2245C24.4875 11.2413 24.4059 10.5237 24.2292 9.77963H12.7393V14.2176H19.4836C19.3477 15.3205 18.6134 16.9815 16.9817 18.0976L16.9588 18.2461L20.5917 20.9963L20.8434 21.0209C23.1549 18.9347 24.4875 15.8653 24.4875 12.2245Z"
                                  fill="#4285F4"
                                />
                                <path
                                  d="M12.7391 23.9176C16.0433 23.9176 18.8171 22.8545 20.8432 21.0209L16.9815 18.0976C15.9481 18.8018 14.5611 19.2934 12.7391 19.2934C9.50291 19.2934 6.75622 17.2074 5.77711 14.324L5.63359 14.3359L1.85604 17.1927L1.80664 17.3269C3.81906 21.2334 7.95273 23.9176 12.7391 23.9176Z"
                                  fill="#34A853"
                                />
                                <path
                                  d="M5.77726 14.324C5.51892 13.5799 5.3694 12.7826 5.3694 11.9588C5.3694 11.1349 5.51892 10.3377 5.76367 9.59359L5.75683 9.43512L1.93194 6.5324L1.8068 6.59057C0.977385 8.21166 0.501465 10.0321 0.501465 11.9588C0.501465 13.8855 0.977385 15.7058 1.8068 17.3269L5.77726 14.324Z"
                                  fill="#FBBC05"
                                />
                                <path
                                  d="M12.7391 4.62403C15.0371 4.62403 16.5871 5.59402 17.471 6.40461L20.9248 3.10928C18.8036 1.1826 16.0433 2.38419e-07 12.7391 2.38419e-07C7.95273 2.38419e-07 3.81906 2.68406 1.80664 6.59056L5.76351 9.59359C6.75622 6.7102 9.50291 4.62403 12.7391 4.62403Z"
                                  fill="#EB4335"
                                />
                              </g>
                              <defs>
                                <clippath id="clip0_3218_23">
                                  <rect
                                    width="24"
                                    height="24"
                                    fill="white"
                                    transform="translate(0.5)"
                                  />
                                </clippath>
                              </defs>
                            </svg> */}
                            {/* <GoogleLogin
                            clientId="1052477525019-n3d8n0id835d0e45vpdp1dgdnn5jpk0t.apps.googleusercontent.com"
                              // clientId="251997598489-2en61bset3ti5uakmnc5370fvma3v0sl.apps.googleusercontent.com"
                              // clientId="735355858727-8vm0spbe1tuampp2sm1cl6ig7apgtme7.apps.googleusercontent.com"
                              // clientId="1031536750847-t4vfifrdpg9pjcnftq53p808bd4pr3g9.apps.googleusercontent.com"
                              onSuccess={onSuccess}
                              onFailure={onFailure}
                              isSignedIn={true}
                              autoLoad={true}
                              cookiePolicy={"single_host_origin"}
                              render={(renderProps) => (
                                <span onClick={renderProps.onClick}>
                                  Continue with Google
                                </span>
                              )}
                              buttonText="Continue with Google"
                            /> */}
                             
                          {/* </button> */}
                          <div style={containerStyle}>
                          <GoogleOAuthProvider 
                          clientId="221459868817-gc23dde64vil1pic19acqso9cni18co6.apps.googleusercontent.com"  
                          >
                              <GoogleLogin
                                onSuccess={onSuccess}
                                // style={loginButtonStyle} 
                                onError={() => {
                                  console.log('Login Failed');
                                }}
                              />
                            </GoogleOAuthProvider>
                            </div>
                          {load ? (
                            <h1
                              className={load ? "loading-spinner" : "LoginBtn"}
                              disabled={load}
                              style={{
                                color: "blue",
                                margin: "10px 0 170px 130px",
                              }}
                            ></h1>
                          ) : (
                            ""
                          )}
                        </div>
                        <div className="pt-3">
                          <div className="dont_account text-center">
                            <a
                              className="w-100 d-block"
                              style={{ textDecoration: "none" }}
                              onClick={(e) => {
                                navigate("/Signup");
                              }}
                            >
                              Don’t have an account?
                            </a>
                            <button
                              className="btn btn-primary mt-2"
                              onClick={(e) => {
                                navigate("/Signup");
                              }}
                            >
                              Sign up now
                            </button>
                          </div>
                        </div>
                        <div className="mt-4 pt-lg-2">
                          <div
                            className="dont_account text-center">
                            <Link to={"/forgot_Password"} style={{ textDecoration: "none" }} onClick={() => closeModal()}>I forgot my
                              password!</Link>
                          </div>
                        </div>

                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
            {/* </Modal> */}
          </div>
        </div >
      </section >
    </>

  );
}
export default Signin;