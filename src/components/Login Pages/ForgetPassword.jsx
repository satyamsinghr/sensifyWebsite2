import React, { useState } from "react";
import forgotImg from "../../assets/forgot-img.png";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import Axios from "axios";
import config from "../../config";
import { isMobile } from "react-device-detect";
import * as Yup from "yup";
import { useFormik } from "formik";

const ForgetPassword = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [emailerror, setEmailerror] = useState("");
  const [load, setLoad] = useState(false);
  var obj = {};

  const initialValues = {
    email: "",
  };

  const validationSchema = Yup.object({
    email: Yup.string().email("Invalid email address").required("Email is required!"),
  });

  const handleSubmit = (event) => {
    // 👇️ navigate programmatically

    var checkin = false;

    if (formik.isValid) {
      obj = {
        EmailAddress: event.email,
        Url: "/forget-password",
      };
      obj["EmailAddress"] = event.email;

      var stat;
      var api = `${config.BASE_URL}/forget-password`;
      setLoad(true);
      Axios.post(api, obj)
        .then((res) => {
          console.log("Axios Response: ", res.data);
          stat = res.data;

          console.log("stat", stat["StatusCode"]);

          if (stat["StatusCode"] === 200) {
            checkin = true;
            navigate(`/Forgot_PasswordLink`, { state: { email: event.email } });
            Swal.fire({
              icon: "success",
              title: "Forgot Password!",
              text: `Password reset code has been sent to ${event.email}. Kindly Check your Email.`,
              showConfirmButton: false,
              timer: 3500,
            });
            var useridval = stat.Data.UserId;
            console.log("userid", useridval);
            setLoad(false);
            navigate("/Confirmation", {
              state: { userid: useridval, email: event.email },
            });
          } else {
            Swal.fire({
              icon: "warning",
              title: "Invalid!",
              // text: stat["Message"],
              text: "The email is not registered",
              showCancelButton: false,
              confirmButtonText: "Try Again!",
            });
            setLoad(false);
          }
        })
        .catch((e) => {
          //     Swal.fire({
          //       icon: 'warning',
          //       title: 'Error!',
          //       text: e.Message,
          //       showCancelButton: false,
          //       confirmButtonText: 'Try Again!',
          //   })
        })
        .finally(() => {
          setLoad(false);
        });
    }
  };

  const formik = useFormik({
    initialValues: initialValues,
    validationSchema: validationSchema,
    onSubmit: handleSubmit,
  });

  return (
    <>
      <section class="login_page sign_up_outer d-flex align-items-center">
        <div class="container">
          <div class="row">
            <div
              class="col-lg-6 col-md-12 col-sm-12 col-12 d-flex align-items-center">
              <div class="card_title w-100">
                <h2 class="mb-lg-4 mb-md-3 mb-3">Ah, the mysterious
                  case of<br />the forgotten password...</h2>
                <p class="text-start m-0">Oh no! Looks like your
                  password took a vacation without leaving a
                  forwarding<br />address. Don't panic! Enter your
                  email and we'll resurrect it from the
                  digital<br />Bermuda Triangle. </p>
                <div class="mt-4 pt-lg-2 form_feild">
                  <form action>
                    <div class="row">
                      <div
                        class="col-lg-7 col-md-10 col-sm-12 col-12">
                        <label for class="w-100">Enter your
                          email ID : </label>
                        <input
                          id="email"
                          type="email"
                          className={`form-control ${formik.touched.email && formik.errors.email
                              ? "is-invalid"
                              : ""
                            }`}
                          placeholder="Email id"
                          name="email"
                          onChange={(e) => {
                            formik.handleChange(e);
                          }}
                          onBlur={formik.handleBlur}
                          value={formik.values.email}
                          isValid={formik.isValid}
                          isTouched={formik.touched.email}
                          invalidFeedback={formik.errors.email}
                        />
                        <div className="invalid-feedback">
                          {formik.errors.email}
                        </div>
                      </div>
                      {/* <div style={{ color: 'red', display: 'flex', width: 'max-content', marginTop: '4px', marginLeft: '55px' }}>{emailerror}</div> */}
                      <div
                        class="col-lg-7 col-md-10 col-sm-12 col-12 mt-lg-4 mt-3">
                        {/* <button
                          className="btn btn-primary mb-0" onClick={formik.handleSubmit}>Send
                          Verification code1</button> */}
                        <button
                          className="btn btn-primary mb-0"
                          onClick={formik.handleSubmit}
                          disabled={load}  // Disable the button when loading
                        >
                          {load ? (
                            <div className="loading-spinner"></div>
                          ) : (
                            "Send Verification Code"
                          )}
                        </button>

                        {/* {isMobile ? (
                          <div>
                            {load ? (
                              <h1
                                className={load ? "loading-spinner" : "LoginBtn"}
                                disabled={load}
                                style={{
                                  color: "blue",
                                  margin: "10px 0 150px 80px",
                                }}
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
                                  margin: "10px 0 150px 140px",
                                }}
                              ></h1>
                            ) : (
                              ""
                            )}
                          </div>
                        )} */}
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
            <div
              class="col-lg-6 col-md-12 col-sm-12 col-12 mt-lg-0 mt-md-4 mt-4">
              <div class="forgot_img">
                <img src={forgotImg} alt />
              </div>
            </div>
          </div>
        </div>
      </section></>
  );
};

export default ForgetPassword;