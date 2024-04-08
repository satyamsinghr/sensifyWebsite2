import React, { useEffect } from 'react';
import { useNavigate , Link} from "react-router-dom";
import Visibility from "../../assets/Visibility.png";
import { useState } from "react";
import Swal from "sweetalert2";
import Axios from "axios";
import "../spinner.css";
import config from "../../config";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import logoBlack from "../../assets/logo-black.png";
import * as Yup from "yup";
import { useFormik } from "formik";
import { isMobile } from "react-device-detect";
import Signin from '../Login Pages/Signin'
import Modal from 'react-modal';
import cross from "../../assets/CloseButton.png";

const initialValues = {
  firstName: "",
  lastName: "",
  gender:'',
  age: "",
  Email: "",
  Password: "",
};

function Signup() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [gender, setGender] = useState("");
  const [age, setAge] = useState("");
  const [Email, setEmail] = useState("");
  const [Password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [load, setLoad] = useState(false);
  var obj = {};
  const navigate = useNavigate();

  const [modalIsOpen, setModalIsOpen] = useState(false);

  const openModal = (event) => {
    event.preventDefault();
    setModalIsOpen(true);
  };

  const customStyles = {
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
  };

  var token = localStorage.getItem("Current_AccessToken");


  useEffect(() => {
    if (token) {
      navigate('/');
    } else {
      navigate('/Signup');
    }
  }, [token, navigate]);

  const validationSchema = Yup.object({
    firstName: Yup.string()
      .matches(/^[A-Za-z\s]+$/, "Please enter valid first name")
      .required("First Name is required!"),
    lastName: Yup.string()
      .matches(/^[A-Za-z\s]+$/, "Please enter valid Last Name")
      .required("Last Name is required!"),
    // age: Yup.string().required("Age is required!"),
    age: Yup.number().required("Please enter a valid Age").min(1, "Age is greater than 0").max(99, "Age must be less than 100"),
    gender: Yup.string()
      .required("Gender is required!")
      .notOneOf(["What's your gender?"], "Please select a valid gender."),
    Email: Yup.string()
      .email("Invalid email address")
      .required("Email is required!"),
    Password: Yup.string()
      .required("Password is required!")
      .matches(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[\W_]).{8,16}$/, {
        message:
          "Password must be 8-16 characters and contain at least one number, one uppercase letter, one lowercase letter, and one special character, and cannot contain spaces.",
        excludeEmptyString: true,
      })
      .matches(/^\S*$/, "Password cannot contain spaces."),
  });

  const handleClick = (event) => {
    // 👇️ navigate programmatically
    var checkin = false;
    if (formik.isValid) {
      const hashedPassword = btoa(event.Password);
      obj = {
        EmailAddress: "myemail121@gmail.com",
        Password: "PAin77@!",
        FirstName: "Ali",
        LastName: "Hamza",
        PhoneNumber: "+923214186535",
        // Url: "/signup",
        Url: "/signupuser",
        Gender: "male",
        IsStuffyNose: false,
        IsThereLossOfMemory: false,
        Medication: "",
        Age: 24,
      };
      obj["EmailAddress"] = event.Email;
      obj["Password"] =hashedPassword;
      obj["FirstName"] = event.firstName;
      obj["LastName"] = event.lastName;
      obj["Age"] = event.age;
      obj["Gender"] = event.gender;

      var stat;
      var api = `${config.BASE_URL}/signup`;
      setLoad(true);
      Axios.post(api, obj).then((res) => {
        console.log("Axios Response: ", res.data);
        stat = res.data;
        if (stat["StatusCode"] === 200) {
          checkin = true;
          Swal.fire({
            icon: "success",
            title: "Sign Up Success!",
            text: `${firstName} has been Signed Up. Kindly Confirm your Email Address.`,
            showConfirmButton: false,
            timer: 3500,
          });
          var useridval = stat.Data.UserId;
          console.log("userid", useridval);
          setLoad(false);
          navigate("/Confirmation", {
            state: { userid: useridval, email: event.Email },
          });
        } else {
          Swal.fire({
            icon: "warning",
            title: "Invalid!",
            text: stat["Message"],
            showCancelButton: false,
            confirmButtonText: "Try Again!",
          });
          setLoad(false);
        }
      });
    }
  };

  const formik = useFormik({
    initialValues: initialValues,
    validationSchema: validationSchema,
    onSubmit: handleClick,
  });

  return (
    <>
      <header class="inner_header">
        <div class="container">
          <div class="row">
            <div class="col-12">
              <nav class="navbar navbar-expand-lg p-0">
                <Link class="navbar-brand" Link to={"/"}>
                  <img src={logoBlack} width="140px" alt />
                </Link>
              </nav>
            </div>
          </div>
        </div>
      </header>
      <section class="login_page inner-banner-section sign_up_outer d-flex align-items-center">
        <div class="container">
          <div class="row justify-content-center">
            {/* <div
              class="col-lg-3 col-md-4 col-sm-12 col-12 offset-lg-1 d-flex align-items-center">
              <div class="sign_up card_title ">
                <h2 class="mb-lg-4 mb-md-3 mb-3">Sign up!</h2>
                <p class="text-start m-0">Already have an
                  account?<br />
                  Let’s sign you in.</p>
                <div class="dont_account mt-lg-4 mt-md-3 mt-3">
                  <button class="btn btn-primary" onClick={(e) => { navigate("/Signin") }}>Go to Login
                    page</button>
                </div>
              </div>
            </div> */}
            <div class="col-lg-4 col-md-6 col-sm-12 col-12">
              <div class="login_outer_m position-relative">
                <div class="login_outer form_feild sign_up_form">
                  <div class="sign_up card_title ">
                    <h2 class="mb-lg-4 mb-md-3 mb-3 text-center pb-lg-2">
                      Sign up!
                    </h2>
                  </div>
                  <form action>
                    <div class="row g-3">
                      <div class="col-lg-6 col-md-6 col-sm-12 col-12">
                        <label for class="w-100">
                          First name :
                        </label>
                        <input
                          id="firstName"
                          type="text"
                          className={`form-control ${
                            formik.touched.firstName && formik.errors.firstName
                              ? "is-invalid"
                              : ""
                          }`}
                          placeholder="First name"
                          name="firstName"
                          onChange={(e) => {
                            formik.handleChange(e);
                          }}
                          onBlur={formik.handleBlur}
                          value={formik.values.firstName}
                          isValid={formik.isValid}
                          isTouched={formik.touched.firstName}
                          invalidFeedback={formik.errors.firstName}
                        />
                        <div className="invalid-feedback">
                          {formik.errors.firstName}
                        </div>
                      </div>
                      <div class="col-lg-6 col-md-6 col-sm-12 col-12">
                        <label for class="w-100">
                          Last name :
                        </label>
                        <input
                          id="lastName"
                          type="text"
                          className={`form-control ${
                            formik.touched.lastName && formik.errors.lastName
                              ? "is-invalid"
                              : ""
                          }`}
                          placeholder="Last name"
                          onChange={(e) => {
                            formik.handleChange(e);
                          }}
                          onBlur={formik.handleBlur}
                          value={formik.values.lastName}
                          isValid={formik.isValid}
                          isTouched={formik.touched.lastName}
                          invalidFeedback={formik.errors.lastName}
                        />
                        <div className="invalid-feedback">
                          {formik.errors.lastName}
                        </div>
                      </div>
                      <div class="col-12">
                        <label for class="w-100">
                          Age :
                        </label>
                        <input
                          id="age"
                          type="number"
                          className={`form-control ${
                            formik.touched.age && formik.errors.age
                              ? "is-invalid"
                              : ""
                          }`}
                          placeholder="Age"
                          name="age"
                          onChange={(e) => {
                            formik.handleChange(e);
                          }}
                          onBlur={formik.handleBlur}
                          value={formik.values.age}
                          isValid={formik.isValid}
                          isTouched={formik.touched.age}
                          invalidFeedback={formik.errors.age}
                        />
                        <div className="invalid-feedback">
                          {formik.errors.age}
                        </div>
                      </div>

                      <div class="col-12">
                        <div class="select_box position-relative">
                          <select
                            id="gender"
                            name="gender"
                            className={`form-control ${
                              formik.touched.gender && formik.errors.gender
                                ? "is-invalid"
                                : ""
                            }`}
                            placeholder="Select"
                            onChange={(e) => {
                              formik.handleChange(e);
                            }}
                            onBlur={formik.handleBlur}
                            value={formik.values.gender}
                            isValid={formik.isValid}
                            isTouched={formik.touched.gender}
                            invalidFeedback={formik.errors.gender}
                          >
                            {/* <option value="">What's your
                              gender?</option> */}
                            <option value="" label="What's your gender?" />
                            <option value="Male">Male</option>
                            <option value="Female">Female</option>
                          </select>
                          <div className="invalid-feedback">
                            {formik.errors.gender}
                          </div>
                          <div class="select_arrow">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="24"
                              height="24"
                              viewBox="0 0 24 24"
                              fill="none"
                            >
                              <path
                                d="M16.7998 9.59999L11.9998 14.4L7.19981 9.59999"
                                stroke="black"
                                stroke-width="2"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                              />
                            </svg>
                          </div>
                        </div>
                      </div>

                      <div class="col-12">
                        <label for class="w-100">
                          Email ID :
                        </label>
                        <input
                          id="Email"
                          type="mail"
                          className={`form-control ${
                            formik.touched.Email && formik.errors.Email
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
                      <div class="col-12 position-relative">
                        <label for class="w-100">
                          Password :
                        </label>
                        <div class={`position-relative ${
                              formik.touched.Password && formik.errors.Password
                                ? "is-invalid"
                                : ""
                            }`}>
                          <input
                            id="Password"
                            className={`form-control ${
                              formik.touched.Password && formik.errors.Password
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
                          <div class="eye">
                            {showPassword ? (
                              <img
                                src={Visibility}
                                onClick={() => setShowPassword(!showPassword)}
                                className="password-icon"
                              />
                            ) : (
                              <VisibilityOffIcon
                                onClick={() => setShowPassword(!showPassword)}
                                className="password-icon"
                              />
                            )}
                          </div>
                        </div>
                          <div className="invalid-feedback">
                            {formik.errors.Password}
                          </div>
                      </div>
                      <div class="col-12 mt-lg-2 mt-2">
                        <div class="pwd_note">
                          <p class="mb-1 w-100">A strong password contains :</p>
                          <div class="row">
                            <div class="col-lg-7 col-md-7 col-12">
                              <ul>
                                <li>8-16 characters</li>
                              </ul>
                            </div>
                            <div class="col-lg-5 col-md-5 col-12">
                              <ul>
                                <li>Number</li>
                              </ul>
                            </div>
                            <div class="col-lg-7 col-md-7 col-12">
                              <ul>
                                <li>Upper & lower case letters</li>
                              </ul>
                            </div>
                            <div class="col-lg-5 col-md-5 col-12">
                              <ul>
                                <li>Special character</li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div class="col-12 mt-4 pt-lg-3">
                        <button
                          class="btn btn-primary mb-0"
                          onClick={formik.handleSubmit}
                          type="submit"
                        >
                          Sign me up!
                        </button>
                        {isMobile ? (
                          <div>
                            {load ? (
                              <h1
                                className={load ? "loading-spinner loader_signh" : "LoginBtn"}
                                disabled={load}
                                style={{ color: "blue", margin: "10px 0 150px 90px" }}
                              ></h1>
                            ) : (
                              ""
                            )}
                          </div>
                        ) : (
                          <div>
                            {load ? (
                              <h1
                                className={load ? "loading-spinner" : "LoginBtn"}
                                disabled={load}
                                style={{
                                  color: "blue",
                                  margin: "10px 0 150px 160px",
                                }}
                              ></h1>
                            ) : (
                              ""
                            )}
                          </div>
                        )}
                      </div>
                      <div class="col-12 mt-4 pt-lg-2">
                        <div class="card_title">
                          <p class="m-0">
                            Already have an account?{" "}
                            <a
                              style={{
                                textDecoration: "none",
                                color: "#03529C",
                              }}
                              onClick={openModal}
                            >
                              Go to Login.
                            </a>
                          </p>
                        </div>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
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
        >
          <img src={cross} alt="Close" width="48" height="48" />
        </button>
        <Signin closeModal={closeModal} />
      </Modal>
    </>
  );
}


export default Signup;
