/** @format */

import React, { useState, useEffect } from "react";
import Navbar from "../components/Navbar.jsx";
import CheckoutNav from "../components/CheckoutNav.jsx";
import Product_Cart from "../components/Product_Cart.jsx";
import Checkout from "../components/Checkout.jsx";
import Footer from "../components/Footer.jsx";
import { useGlobalContext } from "../context/context";
import styled from "styled-components";
import SubCheckout from "../components/SubCheckout.jsx";
import Noitem from "../components/Noitem.jsx";
import { useNavigate } from "react-router-dom";
import { isMobile } from "react-device-detect";
function MainCheckOut() {
  //   const CartArray = JSON.parse(localStorage.getItem("newcart"));
  //   const Count = JSON.parse(localStorage.getItem("count"));

  // console.log(CartArray,'CartArray',Count,'Count');

  //   const {cart,amount } = useGlobalContext();
  //   const navigate=useNavigate();
  //   let isok=false;

  //   let linkval='/Shipping';
  //   let objval={haider:'Shipping'};

  //   const getData=(linkval,objval)=>{
  //       console.log("getData Linked: ",linkval);
  //       navigate('/Shipping',{state:{objval}});
  //   }
  //   const test=Count;

  const { cart, amount } = useGlobalContext();
  //  const cart = JSON.parse(localStorage.getItem("cart"));
  const TotalAmount = localStorage.getItem("TotalAmount1");
  const tempCart = localStorage.getItem("tempCart");
  const PersistedCart = JSON.parse(tempCart);
  // const cart = JSON.parse(cartdata);
  console.log("cart", cart);
  const navigate = useNavigate();
  let isok = false;

  let linkval = "/Shipping";
  let objval = { haider: "Shipping" };

  const getData = (linkval, objval) => {
    navigate("/Shipping", { state: { objval } });
  };

  const test = TotalAmount;
  if (test > 0) {
    isok = true;
  } else {
    isok = false;
  }

  if (isok) {
    return (
      // alert("You have items in your cart"),
      <Wrapper>
        {/* <Navbar /> */}
        <CheckoutNav />
        <div className="container-fluid">
          <div
            className={`${isMobile ? "row  mobile_testing" : "row  testing"}`}>
            <section className="col-lg-8 col-md-12 col-sm-12 col-xs-12">
              <div class="col">
                <div class="row yourcart">
                  <SubCheckout link={linkval} obj={objval} />
                  {/* {CartArray&&CartArray.filter((item)=>((item.id===2 || item.id===1) && item.amount>0 ) ).map((item)=>{return <Checkout key={item.id} {...item} />})} */}
            
                  {PersistedCart &&
                    PersistedCart.filter(
                      (item) =>
                        (item.id === 2 || item.id === 1) && item.amount > 0
                    ).map((item) => {
                      return <Checkout key={item.id} {...item} />;
                    })}
                </div>
              </div>
            </section>

            <div class="col col-lg-4 col-md-12 col-sm-12 col-xs-12 pad ">
              <Product_Cart onClick={getData} visibility={"visible"} />
            </div>
          </div>
        </div>
      </Wrapper>
    );
  } else if (!isok) {
    return (
      <Wrapper>
        <Navbar />

        <div
          className={`${
            isMobile ? "row container mobile_testing" : "container testing"
          }`}
        >
          <section className="col-md-8">
            <Noitem />
          </section>
        </div>

        {/* <Footer /> */}
      </Wrapper>
    );
  }
}

const Wrapper = styled.section`
  .container-fluid {
    width: 63%;
  }
  .testing {
    // margin-left: 120px;
    // margin-right: 120px;
    align-items: row;
    // padding-left: 130px;
    // padding-right: 160px;
  }

  .yourcart {
    padding-top: 20px;
  }

  body {
    font-family: var(--bs-body-font-family);
    font-size: var(--bs-body-font-size);
    font-weight: var(--bs-body-font-weight);
    line-height: var(--bs-body-line-height);
    color: var(--bs-body-color);
    text-align: var(--bs-body-text-align);
    -webkit-text-size-adjust: 100%;
    -webkit-tap-highlight-color: transparent;
  }
  .dashboard {
    display: inline-block;
  }

  ${!isMobile &&
  ` * {
    box-sizing: border-box;
    font-family: "Work Sans", sans-serif;
  }`}
`;
export default MainCheckOut;
