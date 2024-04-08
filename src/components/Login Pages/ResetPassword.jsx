import React, { useState } from "react";
import styled from "styled-components";
import resetPassword from "../../assets/reset-password.png";
import { useNavigate, useLocation } from "react-router-dom";
import Swal from "sweetalert2";
import Axios from "axios";
import config from "../../config";
import * as Yup from "yup";
import { useFormik } from "formik";

const ResetPassword = () => {
  const initialValues = {
    newPassword: "",
  };
  const navigate = useNavigate();
  const location = useLocation();
  const confirmationCode = location.state.code;
  const email = location.state.email;

  const [newPassword, setNewPassword] = useState("");
  const [newpasswordConfirm, setNewPasswordConfirm] = useState("");
  const [load, setLoad] = useState(false);
  const [passworderror, setPassworderror] = useState("");
  const [confirmpassworderror, setConfirmPassworderror] = useState("");
  var obj = {};

  function validate() {
    let passworderror = "";
    if (newPassword === "" || newPassword.length < 7) {
      passworderror = "Please Enter atleast 8 characters ";
    }

    if (passworderror !== "") {
      setPassworderror(passworderror);
      return false;
    }

    if (passworderror) {
      console.log("Password error", passworderror);
      setPassworderror(passworderror);
      return false;
    }

    return true;
  }

  const validationSchema = Yup.object({
    newPassword: Yup.string()
    .required("Password is required!")
    .matches(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[\W_]).{8,16}$/, {
      message:
        "Password must be 8-16 characters and contain at least one number, one uppercase letter, one lowercase letter, and one special character, and cannot contain spaces.",
      excludeEmptyString: true
    })
      .matches(/^\S*$/, "Password cannot contain spaces."),
    
  });

  const handleSubmit = (event) => {
    // 👇️ navigate programmatically
    // console.log("---confirmationCode--->", confirmationCode);
    var checkin = false;

    if (formik.isValid) {
      obj = {
        Url: "/change-password",
        EmailAddress: email,
        ConfirmationCode: confirmationCode.toString(),
        NewPassword: event.newPassword,
      };
      obj["EmailAddress"] = email;
      obj["ConfirmationCode"] = confirmationCode.toString();
      obj["NewPassword"] = event.newPassword;

      var stat;
      var api = `${config.BASE_URL}/change-password`;
      setLoad(true);
      Axios.post(api, obj)
        .then((res) => {
          setLoad(false);
          console.log("Axios Response: ", res.data);
          stat = res.data;

          console.log("stat", stat["StatusCode"]);

          if (stat["StatusCode"] === 200) {
            checkin = true;
            navigate(`/reset_Successfully`);
            Swal.fire({
              icon: "success",
              title: "Success!",
              text: "Password Changed Successfully",
              showConfirmButton: false,
              timer: 3500,
            });
            var useridval = stat.Data.UserId;
            console.log("userid", useridval);
            setLoad(false);
            // navigate("/Confirmation", {
            //   state: { userid: useridval, email: email },
            // });
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
        })
        .catch((e) => {
          //   Swal.fire({
          //     icon: 'warning',
          //     title: 'Error!',
          //     text: e.Message,
          //     showCancelButton: false,
          //     confirmButtonText: 'Try Again!',
          // })
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
                <h2 class="mb-lg-4 mb-md-3 mb-3">Reset your
                  password.</h2>
                <p class="text-start m-0">Enter a brand-spanking-new
                  password. Make it so strong that even<br />
                  superheroes would envy its strength.<br />
                  Remember, a strong password is :</p>
                <ul>
                  <li>8-16 characters long.</li>
                  <li>Contains a mix of upper and lower case letters.</li>
                  <li>Contains numeric and special characters.</li>
                  <li>Not your birthdate.</li>
                </ul>
                <div class="mt-4 pt-lg-2 form_feild">
                  <form action>
                    <div class="row">
                      <div
                        class="col-lg-7 col-md-10 col-sm-12 col-12">
                        <label for class="w-100">
                          Enter Password : </label>
                         <input 
                        id="newPassword"
                        type="Password"
                        className={`form-control ${
                              formik.touched.newPassword && formik.errors.newPassword
                                ? "is-invalid"
                                : ""
                            }`}
                          placeholder="Password"
                          name="newPassword"
                          onChange={(e) => {
                              formik.handleChange(e);
                            }}
                            onBlur={formik.handleBlur}
                            value={formik.values.newPassword}
                            isValid={formik.isValid}
                            isTouched={formik.touched.newPassword}
                            invalidFeedback={formik.errors.newPassword}
                        />
                         <div className="invalid-feedback">
                            {formik.errors.newPassword}
                          </div>
                        <div style={{ color: "red" }}>{passworderror}</div>
                      </div>
                      <div
                        class="col-lg-7 col-md-10 col-sm-12 col-12 mt-lg-4 mt-3">
                        <button
                          class="btn btn-primary mb-0" onClick={formik.handleSubmit} type="submit" value="Submit">Reset password</button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
            <div
              class="col-lg-6 col-md-12 col-sm-12 col-12 mt-lg-0 mt-md-4 mt-4">
              <div class="forgot_img">
                <img src={resetPassword} alt />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};


export default ResetPassword;
