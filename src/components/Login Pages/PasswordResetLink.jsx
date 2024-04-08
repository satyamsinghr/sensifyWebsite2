import React, { useState } from "react";
import styled from "styled-components";
import varificationCode from "../../assets/verification_code.png";
import { useNavigate, useLocation } from "react-router-dom";
import * as Yup from "yup";
import { useFormik } from "formik";

const PasswordResetLink = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const initialValues = {
    code: "",
  };
  const validationSchema = Yup.object({
    code: Yup.string().required("Code is required!"),
  });

  console.log("email is", location.state.email);
  const email = location.state.email;

  const [code, setCode] = useState("");
  const formik = useFormik({
    initialValues: initialValues,
    validationSchema: validationSchema,
    onSubmit: (values) => {
      navigate("/reset_Password", {
        state: { code: values.code, email: email }
      });
    },
  });
  return (
    <>
      <section class="login_page sign_up_outer d-flex align-items-center">
        <div class="container">
          <div class="row">
            <div
              class="col-lg-6 col-md-12 col-sm-12 col-12 d-flex align-items-center">
              <div class="card_title w-100">
                <h2 class="mb-lg-4 mb-md-3 mb-3">Verification
                  code<br />
                  sent!</h2>
                <p class="text-start m-0">We've fired a verification
                  code to your email faster than you can say<br />
                  'supercalifragilisticexpialidocious.' Check your
                  inbox (and maybe your<br />spam folder, just in
                  case). Once you've got the code, pop it in here<br />
                  and let's get you a brand new password.</p>
                <div class="mt-4 pt-lg-2 form_feild">
                  <form action>
                    <div class="row">
                      <div
                        class="col-lg-7 col-md-10 col-sm-12 col-12">
                        <label for class="w-100">Enter verification code : </label>
                        <input
                          id="code"
                          type="number"
                          className={`form-control ${formik.touched.code && formik.errors.code
                              ? "is-invalid"
                              : ""
                            }`}
                          placeholder="Varification code"
                          name="code"
                          onChange={(e) => {
                            // formik.handleChange(e);
                            if (e.target.value.length <= 6) {
                              formik.handleChange(e);
                            }
                          }}
                          onBlur={formik.handleBlur}
                          value={formik.values.code}
                          isValid={formik.isValid}
                          isTouched={formik.touched.code}
                          invalidFeedback={formik.errors.code}
                        />
                        <div className="invalid-feedback">
                          {formik.errors.code}
                        </div>
                      </div>
                      <div
                        class="col-lg-7 col-md-10 col-sm-12 col-12 mt-lg-4 mt-3">
                        <button
                          className="btn btn-primary mb-0"
                          onClick={formik.handleSubmit}
                        >
                          Submit
                        </button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
            <div
              class="col-lg-6 col-md-12 col-sm-12 col-12 mt-lg-0 mt-md-4 mt-4">
              <div class="forgot_img">
                <img src={varificationCode} alt />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default PasswordResetLink;
