import React, { useState, useEffect } from "react";
import styled from "styled-components";
import outline from ".././assets/outline.svg";
import visitStore from ".././assets/storeLink.png";
import OrderPic from ".././assets/yourOrderPic.jpg";
import ProductOne from ".././assets/ProductOne.png";
import ProductTwo from ".././assets/ProductTwo.png";
import axios from "axios";
import config from ".././config";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import Footer from "../components/Footer.jsx";
import { isMobile } from "react-device-detect";

const YourOrders = () => {
  const navigate = useNavigate();

  const [orderData, setOrderData] = useState([]);
  const [orders, setOrders] = useState([]);
  const [load, setLoad] = useState(false);
  var socilaLogIn = localStorage.getItem("social_login_ID");
  var userId = localStorage.getItem("local_id_store");

  // const [load,setLoad]=useState(false);
  var obj = {};
  useEffect(() => {
    getOrders();
  }, []);

  const getOrders = async (event) => {
    setLoad(true);
    obj = {
      Url: "/get-last-order",
      UserId: socilaLogIn ? parseInt(socilaLogIn) : parseInt(userId),
    };

    const res = await axios.post(
      "https://5qrg7as0r4.execute-api.us-east-1.amazonaws.com/isticks/get-last-order",
      obj
    );
    
    let orderData = res.data.OrderDetailModelList;
    
    let orderDetail = {};
    orderDetail.iteams = orderData;
    orderDetail.GrandTotal = 0;
    orderData.forEach(element => {
      orderDetail.GrandTotal += element.GrandTotal; 
    });
    
    setOrderData(orderData);
    setOrders(
      orderDetail.iteams != null && orderDetail.GrandTotal === 0
    );
    console.log(orderData);
    if (
      orderDetail.iteams != null && orderDetail.GrandTotal === 0
      
    ) {
      Swal.fire({
        icon: "warning",
        title: "No Order Found",
        text: "You didn't place any order yet",
        showConfirmButton: true,
        timer: 3500,
      });
      setLoad(false);
    }
    
    setLoad(false);
  };
  
  const Clickback = () => {
    //closemodel(false);
    navigate("/userProfile");
  };

  const ClickBackHome = () => {
    //closemodel(false);
    navigate("/");
  };

  const GetIteamImage = (productName) => {

          if(productName == 'Scentaware 8-scent Evaluation and Therapy kit')
          {
            return ProductOne
          }else if(productName == 'Scentaware 16-scent Evaluation and Therapy kit') {
            return ProductTwo
          }
          return '';

  }

  return (
    <>
      {/* <Wrapper>
        {load ? (
          <h1
            className={load ? "loading-spinner" : "LoginBtn"}
            disabled={load}
            style={{
              color: "blue",
              position: "relative",
              top: "150px",
              left: "800px",
              bottom: "50px",
            }}
          ></h1>
        ) : (
          <>
            {orders ? (
              <div className="container-fluid">
                <div className="row">
                  <div className="col col-sm-2.5"></div>

                  <div className="col col-sm-7">
                    <div className="row outer-row">
                      <div className="col col-sm-1">
                        <img
                          src={outline}
                          class="arrowHide"
                          alt=""
                          style={{
                            position: "relative",
                            padding: "3px",
                            cursor: "pointer",
                          }}
                          onClick={Clickback}
                        />
                      </div>
                      <div className="col col-sm-7">Your Orders</div>
                      <div className="col col-sm-4">
                        <img
                          src={visitStore}
                          class="arrowHide"
                          alt=""
                          style={{
                            position: "relative",
                            cursor: "pointer",
                            left: "240px",
                          }}
                          onClick={ClickBackHome}
                        />
                      </div>
                    </div>
                    <br /> <br /> <br />
                    <br /> <br /> <br />
                    <div style={{ position: "relative", left: "360px" }}>
                      <h2>No Orders</h2>
                    </div>
                    <br /> <br /> <br />
                    <br /> <br /> <br />
                  </div>

                  <div className="col col-sm-2.5"></div>
                </div>
              </div>
            ) : (
              <div>
                {isMobile ? (
                 
                  <div className="container pt-5">
                    <div className="row pt-5">
                      <div className="col p-4 mt-5 ms-2">
                        <h3>Your orders</h3>
                      </div>
                    </div>
                    {orderData.map((iteamInfo, index) => ( 
                    <div className="row pt-5">
                    <div className="row p-3">
                      <div className="col col-sm-4 ms-2">
                        <img
                          src={GetIteamImage(iteamInfo.ProductName)}
                          alt="Cart_icon"
                          style={{ height: "120px" }}
                        />
                      </div>
                      <div className="col col-sm-8 left-column">
                        <p className="order-placed">Order placed on</p>
                        <h6 className="order-placed">
                          {iteamInfo.CreatedDate}
                        </h6>
                        <div>
                          <p className="product-name pt-3">
                            {iteamInfo.ProductName &&
                              iteamInfo.ProductName.split(",").map((step) => (
                                <p>
                                  {step}
                                  {",\n"}
                                </p>
                              ))}
                          </p>
                        </div>
                        <h6 className="mobile-total pt-2">
                        Total Quantity : ${iteamInfo.TotalQuantity}
                        </h6>
                        <h6 className="mobile-total pt-2">
                          Total : ${iteamInfo.GrandTotal}
                        </h6>
                      </div>
                    </div>

                    <div className="row p-3">
                      <div className="col col-sm-4 p-2 ms-2">
                        <p className="mobile-orderNumber">Order number :</p>
                        <p className="mobile-orderNumber">Deliver to :</p>
                      </div>
                      <div className="col col-sm-8 left-column p-2">
                        <p className="mobile-orderNumber">
                          {iteamInfo.OrderNumber}
                        </p>
                        <p className="mobile-orderNumber">
                          {iteamInfo.UserName}
                        </p>
                        <p className="mobile-orderNumber">
                          {iteamInfo.AddressLine}, {iteamInfo.State},{" "}
                          {iteamInfo.ZipCode}
                        </p>
                      </div>
                    </div>

                    <div className="row">
                      <div className="col ps-4 ms-2">
                        <p className="estimated-date ">
                          Estimated delivery by {iteamInfo.EstDeliveryBy}
                        </p>
                      </div>
                    </div>

                    <div className="row justify-content-center">
                      <div className="col pt-4 ps-5 ms-5">
                        <button
                          onClick={(e) => {
                            navigate("/yet-Dispatch", {
                              state: {
                                status: iteamInfo.OrderStatus,
                                deliveryDate: iteamInfo.EstDeliveryBy,
                                TrackingNumber: iteamInfo.Trackingnumber,
                              },
                            });
                          }}
                          className="btn-TrackerOrder"
                        >
                          Tracker Order
                        </button>
                      </div>
                    </div>
                    </div>
                     ))}  
                  </div>
                 

                ) : (
                  <div className="container-fluid">
                    <div className="row">
                      <div className="col col-sm-2.5"></div>

                      <div className="col col-sm-7">
                        <div className="row outer-row">
                          <div className="col col-sm-1">
                            <img
                              src={outline}
                              class="arrowHide"
                              alt=""
                              style={{
                                position: "relative",
                                padding: "3px",
                                cursor: "pointer",
                              }}
                              onClick={Clickback}
                            />
                          </div>
                          <div className="col col-sm-7">Your Orders</div>
                          <div className="col col-sm-4">
                            <img
                              src={visitStore}
                              class="arrowHide"
                              alt=""
                              style={{
                                position: "relative",
                                cursor: "pointer",
                                left: "240px",
                              }}
                              onClick={ClickBackHome}
                            />
                          </div>
                        </div>
                        {orderData.map((iteamInfo, index) => ( 
                        <div className="container-box mt-2">
                          <div className="row">
                            <div className="col col-md-4">
                              <img
                                src={GetIteamImage(iteamInfo.ProductName)}
                                alt="Cart_icon"
                                className="img-here"
                              />
                            </div>
                            <div className="col col-md-8">
                              <div className="row">
                                <div className="col col-sm-6">
                                  <h6 className="order-date">
                                    {iteamInfo.CreatedDate}
                                  </h6>
                                  <p className="therapy-kit">
                                    {iteamInfo.ProductName &&
                                      iteamInfo.ProductName.split(",").map(
                                        (step) => (
                                          <p>
                                            {step}
                                            {",\n"}
                                          </p>
                                        )
                                      )}
                                  </p>
                                  
                                  <p className="order-number">Order number :</p>
                                  <p className="deliver-to">Deliver to :</p>
                                  <p className="estimate-delivery">
                                    Estimated delivery by{" "}
                                    {iteamInfo.EstDeliveryBy}
                                  </p>
                                  <br/>
                                  <p className="totalquantityTitle"> Total Quantity:</p>
                                </div>

                                <div className="col col-sm-6">
                                  <h6 className="total">
                                    Total : ${iteamInfo.GrandTotal}
                                  </h6>

                                  <p className="orderNumber-Api">
                                    {iteamInfo.OrderNumber}
                                  </p>
                                  <p className="deliver-to-name">
                                    {iteamInfo.UserName}
                                  </p>
                                  <p className="deliver-to-name-address">
                                    {iteamInfo.AddressLine}, {iteamInfo.State},{" "}
                                    {iteamInfo.ZipCode}
                                  </p>
                                  <p className="totalquantity">{iteamInfo.TotalQuantity}</p>
                                  <button
                                    onClick={(e) => {
                                      navigate("/yet-Dispatch", {
                                        state: {
                                          status: iteamInfo.OrderStatus,
                                          deliveryDate: iteamInfo.EstDeliveryBy,
                                          TrackingNumber:
                                            iteamInfo.Trackingnumber,
                                        },
                                      });
                                    }}
                                    className="btn-TrackerOrder"
                                  >
                                    Tracker Order
                                  </button>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                          ))}  
                      </div>

                      <div className="col col-sm-2.5"></div>
                    </div>
                  </div>
                )}
              </div>
            )}
          </>
        )}

        <br />
        <br />
        <br />
        <br />
      </Wrapper> */}
      {/*     {!load ? <div><Footer /></div> : ""} */}
    </>
  );
};

export default YourOrders;

const Wrapper = styled.section`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  .outer-row {
    padding-top: 200px;
  }

  body {
    height: 100vh;
    width: 100%;
  }

  .container-box {
    box-sizing: border-box;

    position: relative;
    width: 100%;
    height: 330px;
    top: 30px;

    background: #ffffff;
    border: 1px solid #4e4e4e;
    border-radius: 16px;
  }

  .img-here {
    position: absolute;
    width: 180px;
    height: auto;
    left: 40px;
    top: 40px;
    background-color: red;
    box-shadow: 10px 10px 8px #1a5597;
    border-radius: 5px;
  }

  .order-date {
    position: absolute;
    width: 306px;
    height: 19px;

    top: 46px;

    font-family: "WorkSans";
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 19px;
    /* identical to box height */

    color: #4e4e4e;
  }

  .therapy-kit {
    position: absolute;
    width: 470px;
    height: 19px;
    top: 82px;

    font-family: "WorkSans";
    font-style: normal;
    font-weight: 300;
    font-size: 16px;
    line-height: 19px;
    /* identical to box height */

    color: #4e4e4e;
  }

  .order-number {
    position: absolute;
    width: 143px;
    height: 19px;
    top: 135px;

    font-family: "WorkSans";
    font-style: normal;
    font-weight: 300;
    font-size: 16px;
    line-height: 19px;
    /* identical to box height */

    color: #4e4e4e;
  }

  .deliver-to {
    position: absolute;
    width: 143px;
    height: 19px;
    top: 162px;

    font-family: "WorkSans";
    font-style: normal;
    font-weight: 300;
    font-size: 16px;
    line-height: 19px;
    /* identical to box height */

    color: #4e4e4e;
  }

  .estimate-delivery {
    position: absolute;
    width: 306px;
    height: 19px;
    top: 265px;

    font-family: "WorkSans";
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 19px;
    /* identical to box height */

    color: #4e4e4e;
  }

  .total {
    position: absolute;
    width: 224px;
    height: 19px;
    left: 610px;
    top: 45px;

    font-family: "WorkSans";
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 19px;
    /* identical to box height */

    text-align: right;

    color: #4e4e4e;
  }

  .orderNumber-Api {
    position: absolute;
    width: 143px;
    height: 19px;
    left: 480px;
    top: 136px;

    font-family: "WorkSans";
    font-style: normal;
    font-weight: 300;
    font-size: 16px;
    line-height: 19px;
    /* identical to box height */

    color: #4e4e4e;
  }

  .deliver-to-name {
    position: absolute;
    width: 143px;
    height: 19px;
    left: 480px;
    top: 164px;

    font-family: "WorkSans";
    font-style: normal;
    font-weight: 300;
    font-size: 16px;
    line-height: 19px;
    /* identical to box height */

    color: #4e4e4e;
  }

  .totalquantity{
    position: absolute;
    width: 143px;
    height: 19px;
    left: 480px;
    top: 230px;

    font-family: "WorkSans";
    font-style: normal;
    font-weight: 300;
    font-size: 16px;
    line-height: 19px;
    /* identical to box height */

    color: #4e4e4e;
  }
  .totalquantityTitle{
    position: absolute;
    width: 388px;
    height: 19px;
    left: 326px;
    top: 230px;

    font-family: "WorkSans";
    font-style: normal;
    font-weight: 300;
    font-size: 16px;
    line-height: 19px;
    /* identical to box height */

    color: #4e4e4e;
  }

  .deliver-to-name-address {
    position: absolute;
    width: 388px;
    height: 19px;
    left: 480px;
    top: 186px;

    font-family: "WorkSans";
    font-style: normal;
    font-weight: 300;
    font-size: 16px;
    line-height: 19px;
    /* identical to box height */

    color: #4e4e4e;
  }

  .btn-TrackerOrder {
    width: 138px;
    position: absolute;
    top: 256px;
    left: 750px;
    height: 38px;
    background-color: #22669c;
    border: 1px solid #22669c;
    border-radius: 6px;
    color: #ffffff;
  }

  @media Screen and (min-width: 320px) and (max-width: 480px) {
    .order-placed {
      font-family: "WorkSans";
      font-style: normal;
      font-weight: 500;
      font-size: 14px;
      line-height: 16px;

      color: #4e4e4e;
    }

    .product-name {
      font-family: "WorkSans";
      font-style: normal;
      font-weight: 300;
      font-size: 14px;
      line-height: 16px;

      color: #4e4e4e;
    }
    .mobile-total {
      font-family: "WorkSans";
      font-style: normal;
      font-weight: 500;
      font-size: 14px;
      line-height: 16px;

      color: #4e4e4e;
    }
    .mobile-orderNumber {
      font-family: "WorkSans";
      font-style: normal;
      font-weight: 300;
      font-size: 14px;
      line-height: 16px;

      color: #4e4e4e;
    }

    .estimated-date {
      font-family: "WorkSans";
      font-style: normal;
      font-weight: 500;
      font-size: 14px;
      line-height: 16px;
      color: #4e4e4e;
    }

    .left-column {
      position: relative;
      left: -30px;
    }
    .btn-TrackerOrder {
      width: 150px;
      position: relative;
      top: 2px;
      left: 5px;
      height: 38px;
      background-color: #22669c;
      border: 1px solid #22669c;
      border-radius: 6px;
      color: #ffffff;
    }
  }
`;
