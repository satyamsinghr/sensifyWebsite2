
import React from "react";
import styled from "styled-components";
import Product_Cart from "./Product_Cart";
import product2 from "../assets/product2.svg";
import product from "../assets/product.svg";
import sub from "../assets/sub.svg";
import mobile_Add_Counter_Icon from "../assets/mobile_Add_Counter_Icon.svg";
import mobile_Sub_Counter_Icon from "../assets/mobile_Sub_Counter_Icon.svg";
import add from "../assets/add.svg";
import outline from "../assets/outline.svg";
import { useGlobalContext } from "../context/context";
import { useNavigate } from "react-router";
import { isMobile } from "react-device-detect";
import { useLocation } from "react-router-dom";
import ContinueBackBTN from "./Reuseable Components/ContinueBackButton";

const CheckoutReview = ({ id, price, amount, main_header, img }, props) => {
  // const location = useLocation();
  console.log("amount22222", props);
  const navigate = useNavigate();
  const handleClick = () => {
    // 👇️ navigate programmatically
    navigate("/Shipping");
  };
  const getData = (linkval, objval) => {
    console.log("getData Linked: ", linkval);
    console.log("Check log: ", localStorage.getItem("local_id_store"));
    navigate("/Shipping", { state: { objval } });
  };
  const handleClicktest = (link, obj) => {
    props.onClick(link, obj);
  };
  const { increase, decrease, cartItems, remove } = useGlobalContext();
  return (
    <Wrapper>
      <section>
        <div class="product-section">
          <div class="col-lg-10">
            <div
              class="firstrow"
              style={{ display: "flex", justifyContent: "space-around" }}
            >
              <div className="">
                <p className="label">PRODUCT DETAILS</p>
                <p>
                  {console.log("main_header", img)}
                  <img
                    style={isMobile ? { width: 110 } : { width: 180 }}
                    src={img}
                    class="box"
                  />
                </p>

                <span
                  style={
                    isMobile
                      ? {
                          fontFamily: "WorkSans",
                          fontWeight: "500",
                          fontSize: "14px",
                          lineHeight: "19px",
                          color: "#4E4E4E",
                          fontFamily: "",
                        }
                      : {
                          fontFamily: "WorkSans",
                          fontWeight: "500",
                          fontSize: "16px",
                          lineHeight: "19px",
                          color: "#4E4E4E",
                        }
                  }
                >
                  {main_header}
                </span>
                <br></br>
                <span
                  style={
                    isMobile
                      ? {
                          fontFamily: "WorkSans",
                          fontWeight: "500",
                          fontSize: "12px",
                          lineHeight: "19px",
                          color: "#4E4E4E",
                        }
                      : {
                          fontFamily: "WorkSans",
                          fontWeight: "500",
                          fontSize: "16px",
                          lineHeight: "19px",
                          color: "#4E4E4E",
                        }
                  }
                >
                  Evaluation Kit
                </span>
              </div>

              <div class="">
                <p className="label">QUANTITY</p>

                <p class="cart-number-img">
                  
                  &emsp;&emsp;{isMobile ? amount : amount}&emsp;&emsp;
                  {/*cartItems.map((item) => ({amount}))*/}
                
                </p>
              </div>
              <div>
                <p className="label">PRICE</p>
                <p
                  class="table-text"
                  className="cart-number"
                  style={
                    isMobile
                      ? {
                          paddingTop: "78px",
                          fontWeight: "bold",
                          fontSize: "12px",
                          lineHeight: "19px",
                          textAlign: "center",
                          color: " #4e4e4e",
                          fontFamily: "WorkSans",
                        }
                      : {
                          paddingTop: "70px",
                          fontWeight: "500",
                          fontSize: "16px",
                          lineHeight: "19px",
                          textAlign: "center",
                          color: " #4e4e4e",
                          fontFamily: "WorkSans",
                        }
                  }
                >
                  ${price}
                </p>
              </div>
              {!isMobile && (
                <div>
                  <p class="cart-total label">TOTAL</p>
                  <p
                    class="table-text cart-total"
                    className="cart-number"
                    style={{
                      paddingTop: "70px",
                      fontWeight: "500",
                      fontSize: "16px",
                      lineHeight: "19px",
                      textAlign: "center",
                      color: " #4e4e4e",
                      fontFamily: "WorkSans",
                    }}
                  >
                    {/* ${price * amount} */}$
                    {Number(price * amount)?.toFixed(2)}
                  </p>

                  {/* <div class="pad">
                       <button class="btn-buy-now ripple1" onClick={() => remove(id)}>Remove Item</button>
                      </div>
                       */}
                </div>
              )}
            </div>
            {isMobile && <ContinueBackBTN getData={getData} />}
          </div>
        </div>
        {/* <br></br>
        <br></br>
        <br></br> */}
      </section>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  .container-fluid {
    width: 63%;
  }
  .pad {
    padding-top: 60px;
  }
  .continue-next {
    padding-top: 0px;
  }
  .continue-next button {
    background-color: #22669c;
    /* box-shadow: 0px 8px 16px rgba(30, 30, 30, 0.3); */

    border: none;
    padding: 19px 0px;
    color: white;
    width:300px;
    position:absolute
    left:60px;
    
  }
  .btn {
    display: flex !important;
    position: fixed;
    left: 20%;
    bottom: -43px;
    transform: translate(-50%, -50%);
    margin: 0 auto;
    z-index: 1;
    border: none;
  }
  .btn-hover {
    border-color: white;
  }
  .btn-buy-now {
    box-shadow: 0px 8px 16px rgba(75, 168, 253, 0.5);
    border-radius: 28px;
    font-weight: 600;
    font-size: 13px;
    line-height: 12px;
    background-color: #22669c;
    color: #fff;
    padding: 15px 20px;
    text-align: center;
    border: none;
  }
  .ripple {
    background-position: center;
    transition: background 0.8s;
  }
  .ripple:hover {
    background: #f8f8f8 radial-gradient(circle, transparent 1%, #f8f8f8 1%)
      center/15000%;
  }
  .ripple:active {
    background-color: #e8e8e8;
    background-size: 100%;
    transition: background 0s;
  }
  .ripple1 {
    background-position: center;
    transition: background 0.8s;
  }
  .ripple1:hover {
    background: #4b68b8 radial-gradient(circle, transparent 1%, #4b68b8 1%)
      center/15000%;
  }
  .ripple1:active {
    background-color: #e8e8e8;
    background-size: 100%;
    transition: background 0s;
  }
  .label {
  font-family: 'WorkSans';
  }
  .product-section{  
  margin-bottom: 30px;
}
  /* cart */
  @media screen and (min-width: 320px) and (max-width: 767px) {
    .cart .container-fluid {
      width: 85%;
    }

    .btn-alignment {
      padding-top: 40px;
      padding-bottom: 30px;
    }

    .yourcart {
      padding-top: 20px;
    }
    .arrowHide {
      display: none;
    }
    .firstrow td {
      font-size: 10px;
      font-weight: var(--font-weight-300);
      font-style: var(--font-sytle-normal);
      line-height: 12px;

      padding-top: 20px;
    }
    .firstrow .cart-number-img {
      padding-top: 33px;
      cursor: pointer;
    }
    .mb-dp {
      display: block;
      padding-left: 25px;
      padding-bottom: 20px;
      cursor: pointer;
    }
    .mb-dn {
      display: block;
      padding-left: 25px;
      padding-top: 20px;
      cursor: pointer;
    }
    .table-text .add {
      padding-top: 33px;
    }
    .cart-total {
      display: none;
    }
  }
  .yourcart {
    padding-top: 68px;
    font-size: var(--font-size-24px);
    font-weight: var(--font-weight-500);
    line-height: 28px;
  }
  .left {
    text-align: center;
  }
  .firstrow td {
    font-size: 12px;
    font-weight: var(--font-weight-300);
    font-style: var(--font-sytle-normal);
    line-height: 14px;
    color: rgba(0, 0, 0, 0.55);
    padding-top: 20px;
  }
  .firstrow p {
    font-size: 12px;
    font-weight: var(--font-weight-300);
    font-style: var(--font-sytle-normal);
    line-height: 14px;
    color: rgba(0, 0, 0, 0.55);
    // padding-right: 25px;

    // ${isMobile && `font-family: Work Sans ;  padding-top: 20px;`}
  }
  .firstrow .cart-number-img {
    padding-top: 70px;
    font-weight: 500;
    font-size: 16px;
    line-height: 19px;
    text-align: center;
    color: #4e4e4e;
    cursor: pointer;
    // ${isMobile && `font-weight: bold;  padding-top: 50px;`}
  }
  td.table-text.add {
    width: 25%;
    padding-top: 70px;
  }
  /* cart end */
`;

export default CheckoutReview;
