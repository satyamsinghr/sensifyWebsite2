// import React from "react";
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Checkout from "./Checkout";
import { useNavigate, Link } from "react-router-dom";
import { useGlobalContext } from "../context/context";
import { isMobile } from "react-device-detect";
import productBanner from "../assets/products_banner.png";
import productImage from "../assets/product_img.png";
import productImg from "../assets/product-img.png";
import addToCart from "../assets/add_to_cart.png";
import precision_product from "../assets/precision_product.png";
import precision_product2 from "../assets/precision_product_2.png";
import product_img_red from "../assets/product_img_red.png";
import remote_logo from "../assets/remote_logo.png";
import leftVideo from "../assets/left_video.png";
import senseImg from "../assets/sense_img.png";
import product_video from "../assets/product_video.png";
import productImg2 from "../assets/product_img_2.png";
import logoBlack from "../assets/logo-black.png";
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import OwlCarousel from 'react-owl-carousel';
import Signin from './Login Pages/Signin'
import Modal from 'react-modal';
import cross from "../assets/CloseButton.png";
import { useLocation } from 'react-router-dom';

function Product_Cart(props) {
  const location = useLocation();
  const [accessToken, setAccessToken] = useState("");
  const [userId, setUserId] = useState("");
  const { total } = useGlobalContext();
  const PersistedTotal = localStorage.getItem("total");
  const PersistedSubTotal = localStorage.getItem("subtotal");
  const [nav, SetNav] = useState([]);
  const navigate = useNavigate();
  const [selectedItems, setSelectedItems] = useState([]);
  setTimeout(() => {
    const userID = localStorage.getItem("local_id_store");
    setUserId(userID);
  }, 0);
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const openModal = (event) => {
    event.preventDefault();
    setModalIsOpen(true);
  };

  const handleClick = () => {
    navigate("/Cart");
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

  useEffect(() => {
    const token = localStorage.getItem("Current_AccessToken");
    setAccessToken(token || "");
    console.log("Access Token:", accessToken);

    const storedItems = JSON.parse(localStorage.getItem('selectedItems')) || [];
    setSelectedItems(storedItems);
  }, []);
  ;

  const details = [
    {
      id: 1,
      mainHeading: "",
      subHeading: "Scentaware 16-scent Smell Test and Training kit",
      price: 30.00,
      shelf_life: "6 months",
      pecriptionHeading: "Ideal for individual use",
      pecription: "Smoke, Banana, Cloves, Eucalyptus, Lemon, Peppermint (Weak), Peppermint (Strong), Garlic, Cinnamon, Wood, Pineapple, Orange, Lavender, Coffee, Leather, Rose",
      image: productImage,
      unit: 1
    },
    {
      id: 2,
      mainHeading: "",
      subHeading: "Scentaware 8-scent Smell Test and Training kit",
      price: 20.00,
      shelf_life: "6 months",
      pecriptionHeading: "Ideal for individual use",
      pecription: "Banana, Lemon, Peppermint, Garlic, Cinnamon, Orange, Coffee, Rose.",
      image: product_img_red,
      unit: 1
    },
    {
      id: 3,
      mainHeading: "Precision olfactory testing redefined",
      subHeading: "Scentaware Pro 16-item Smell Test and Training kit",
      price: 150.00,
      shelf_life: "2 years",
      pecriptionHeading: "Ideal for organizations and research studies.",
      pecription: "An olfactory assessment kit that can be used on multiple individuals and used in conjunction with the Intellivista data management system for seamless data management and reporting.",
      image: precision_product,
      unit: 1
    },
    {
      id: 4,
      mainHeading: "Create your own olfactory test",
      subHeading: "Scentaware DIY kit",
      price: 75.00,
      shelf_life: "2 years",
      pecriptionHeading: "Ideal for research studies.",
      pecription: "Should your research necessitate olfactory stimulants or formats not available in existing tests, the ScentAware DIY kit could be the solution. This kit includes plastic parts and labels for assembling a custom 16-item olfactory test kit. Simply prepare your own scent stimulants, fill the provided tubes, and securely cap them.",
      image: precision_product2,
      unit: 1
    },

  ];

  const handleAddToCart = (index) => {
    const isAlreadySelected = selectedItems.some(item => item.id === index.id);
    if (!isAlreadySelected) {
      const updatedItems = [...selectedItems, index];
      setSelectedItems(updatedItems);
      console.log("updatedItems", updatedItems);
      localStorage.setItem('selectedItems', JSON.stringify(updatedItems));
    }
  };

  return (
    <>
      <section style={{ backgroundColor: "#031A40" }}>
        <section class="banner-section product_banner">
          <div class="container">
            <div class="row g-4">
              <div
                class="col-lg-6 col-md-12 col-sm-12 col-12">
                <div>
                  <img src={productBanner} width="100%"
                    alt />
                </div>
              </div>
              <div
                class="col-lg-5 offset-lg-1 col-md-12 col-sm-12 col-12 d-flex align-items-center">
                <div class="section_content">
                  <h2 class="mb-4">We help you<br />
                    understand
                    your
                    loss of smell.</h2>
                  <p>500+ individuals have used Scentaware, with
                    thousands poised to join as we expand to major
                    studies.</p>
                  <h6 class="mt-4 mb-0">The Scentaware Smell
                    Test Kits are available as 16-Scent Kit for
                    detailed assessment and the 8-Scent Kit for
                    quick checks. Easy to use and effective, these
                    kits are essential tools for anyone concerned
                    about maintaining and understanding their
                    olfactory health.</h6>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section class="cost_effect product_individuals">
          <div class="container">
            <div class="row">
              <div
                class="col-lg-6 col-md-12 col-sm-12 col-12">
                <div class="card_title">
                  <h2 class="mb-3 pb-lg-1">Scentaware for
                    individuals</h2>
                  <p class="text-start m-0 pe-lg-5">A platform that
                    informs about imminent olfactory health concerns
                    and motivates to take measures proactively.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section class="comprehensive product_section comprehensive_product_sec">
          <div class="container pe-0">

            <div
              class="row g-4 flex-lg-row flex-md-row-reverse flex-row-reverse">
              <div
                class="col-lg-6 col-md-12 col-sm-12 col-12 d-flex align-items-center">
                <div class="product_card">
                  <div class="row">
                    <div
                      class="col-lg-12 col-md-12 col-sm-12 col-12">
                      <h3 class="m-0">{details[0].subHeading}</h3>
                    </div>
                  </div>
                  <div
                    class="product_price d-flex align-items-center gap-3 my-4">
                    <h3 class="m-0">${details[0].price}</h3>
                    <div
                      class="product_spinner d-flex align-items-center gap-3">
                      <div class="previous">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24" height="24"
                          viewBox="0 0 24 24"
                          fill="none">
                          <path
                            d="M9.60002 7.20001L14.4 12L9.60002 16.8"
                            stroke="#031A40"
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-linejoin="round" />
                        </svg>
                      </div>
                      <span>{details[0].unit}</span>
                      <div class="next">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24" height="24"
                          viewBox="0 0 24 24"
                          fill="none">
                          <path
                            d="M9.60002 7.20001L14.4 12L9.60002 16.8"
                            stroke="#031A40"
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-linejoin="round" />
                        </svg>
                      </div>
                    </div>
                    <p class="m-0">unit</p>
                  </div>
                  <div class="product_dis">
                    <h6 class="m-0">Shelf life : {details[0].shelf_life}</h6>
                    <p class="my-2">{details[0].pecriptionHeading}</p>
                    <p class="m-0">{details[0].pecription}</p>
                  </div>
                  <div class="mt-4">
                    <button class="btn btn-primary w-auto me-lg-3" onClick={handleClick}>Buy
                      now</button>
                    <button class="btn btn-outline-primary img_button w-auto ps-3 pe-4"
                      onClick={() => handleAddToCart(details[0])}>
                      <img src={addToCart} alt /> Add to cart</button>
                  </div>
                </div>
              </div>
              <div
                class="col-lg-6 col-md-12 col-sm-12 col-12 ps-0">
                <div class="comprehensive_img">
                  <img src={details[0].image}
                    style={{ width: '100%' }}
                    alt />
                </div>
              </div>
            </div>
            <div class="row flex-lg-row pt-5 flex-md-row-reverse flex-row-reverse g-4">
              <div
                class="col-lg-6 col-md-12 col-sm-12 col-12 d-flex align-items-center">
                <div class="product_card">
                  <div class="row">
                    <div
                      class="col-lg-12 col-md-12 col-sm-12 col-12">
                      <h3 class="m-0">{details[1].subHeading}</h3>
                    </div>
                  </div>
                  <div
                    class="product_price d-flex align-items-center gap-3 my-4">
                    <h3 class="m-0">${details[1].price}</h3>
                    <div
                      class="product_spinner d-flex align-items-center gap-3">
                      <div class="previous">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24" height="24"
                          viewBox="0 0 24 24"
                          fill="none">
                          <path
                            d="M9.60002 7.20001L14.4 12L9.60002 16.8"
                            stroke="#031A40"
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-linejoin="round" />
                        </svg>
                      </div>
                      <span>{details[1].unit}</span>
                      <div class="next">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24" height="24"
                          viewBox="0 0 24 24"
                          fill="none">
                          <path
                            d="M9.60002 7.20001L14.4 12L9.60002 16.8"
                            stroke="#031A40"
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-linejoin="round" />
                        </svg>
                      </div>
                    </div>
                    <p class="m-0">unit</p>
                  </div>
                  <div class="product_dis">
                    <h6 class="m-0">Shelf life : {details[1].shelf_life}</h6>
                    <p class="my-2">{details[1].pecriptionHeading}</p>
                    <p class="m-0">{details[1].pecription}</p>
                  </div>
                  <div class="mt-4">
                    <button
                      class="btn btn-primary w-auto me-lg-3" onClick={handleClick}>Buy
                      now</button>
                    <button class="btn btn-outline-primary img_button w-auto ps-3 pe-4"
                      onClick={() => handleAddToCart(details[1])}><img
                        src={addToCart}
                        alt /> Add to
                      cart</button>
                  </div>
                </div>
              </div>
              <div
                class="col-lg-6 col-md-12 col-sm-12 col-12 ps-0">
                <div class="comprehensive_img">
                  <img src={details[1].image}
                    style={{ width: '100%' }}
                    alt />
                </div>
              </div>
            </div>
          </div>
          <section class="cost_effect product_research">
            <div class="container">
              <div class="row">
                <div
                  class="col-lg-6 col-md-12 col-sm-12 col-12">
                  <div class="card_title">
                    <h2 class="mb-3 pb-lg-1">Scentaware for
                      research</h2>
                    <p class="text-start m-0 pe-lg-5">The ScentAware
                      Pro
                      kits offer extended shelf life and can be
                      customized to suit the specific needs of a
                      clinical study.</p>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <div class="container pe-0">
            <div class="row g-4">
              <div
                class="col-lg-6 col-md-12 col-sm-12 col-12 ps-0">
                <div class="comprehensive_img">
                  <img src={details[2].image}
                    style={{ width: '100%' }}
                    alt />
                </div>
              </div>
              <div
                class="col-lg-6 col-md-12 col-sm-12 col-12 d-flex align-items-center">
                <div class="product_card">
                  <div class="row">
                    <div
                      class="col-lg-12 col-md-12 col-sm-12 col-12">
                      <div class="card_title">
                        <h2 class="mb-4">{details[2].mainHeading}</h2>
                      </div>
                      <h3 class="m-0">{details[2].subHeading}</h3>
                    </div>
                  </div>
                  <div
                    class="product_price d-flex align-items-center gap-3 my-4">
                    <h3 class="m-0">${details[2].price}</h3>
                    <div
                      class="product_spinner d-flex align-items-center gap-3">
                      <div class="previous">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24" height="24"
                          viewBox="0 0 24 24"
                          fill="none">
                          <path
                            d="M9.60002 7.20001L14.4 12L9.60002 16.8"
                            stroke="#031A40"
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-linejoin="round" />
                        </svg>
                      </div>
                      <span>{details[2].unit}</span>
                      <div class="next">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24" height="24"
                          viewBox="0 0 24 24"
                          fill="none">
                          <path
                            d="M9.60002 7.20001L14.4 12L9.60002 16.8"
                            stroke="#031A40"
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-linejoin="round" />
                        </svg>
                      </div>
                    </div>
                    <p class="m-0">unit</p>
                  </div>
                  <div class="product_dis">
                    <h6 class="m-0">Shelf life : {details[2].shelf_life}</h6>
                    <p class="my-2">{details[2].pecriptionHeading}</p>
                    <p class="m-0">{details[2].pecription} </p>
                  </div>
                  <div class="mt-4">
                    <button
                      class="btn btn-primary w-auto me-lg-3" onClick={handleClick}>Buy
                      now</button>
                    <button class="btn btn-outline-primary img_button w-auto ps-3 pe-4"
                      onClick={() => handleAddToCart(details[2])}>
                      <img
                        src={addToCart}
                        alt /> Add to
                      cart</button>
                  </div>
                </div>
              </div>
            </div>
            <div class="row g-4 pt-5">
              <div
                class="col-lg-6 col-md-12 col-sm-12 col-12 ps-0">
                <div class="comprehensive_img">
                  <img src={details[3].image}
                    style={{ width: '100%' }}
                    alt />
                </div>
              </div>
              <div
                class="col-lg-6 col-md-12 col-sm-12 col-12 d-flex align-items-center">
                <div class="product_card">
                  <div class="row">
                    <div
                      class="col-lg-12 col-md-12 col-sm-12 col-12">
                      <div class="card_title">
                        <h2 class="mb-4">{details[3].mainHeading}</h2>
                      </div>
                      <h3 class="m-0">{details[3].subHeading}</h3>
                    </div>
                  </div>
                  <div
                    class="product_price d-flex align-items-center gap-3 my-4">
                    <h3 class="m-0">${details[3].price}</h3>
                    <div
                      class="product_spinner d-flex align-items-center gap-3">
                      <div class="previous">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24" height="24"
                          viewBox="0 0 24 24"
                          fill="none">
                          <path
                            d="M9.60002 7.20001L14.4 12L9.60002 16.8"
                            stroke="#031A40"
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-linejoin="round" />
                        </svg>
                      </div>
                      <span>{details[3].unit}</span>
                      <div class="next">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24" height="24"
                          viewBox="0 0 24 24"
                          fill="none">
                          <path
                            d="M9.60002 7.20001L14.4 12L9.60002 16.8"
                            stroke="#031A40"
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-linejoin="round" />
                        </svg>
                      </div>
                    </div>
                    <p class="m-0">unit</p>
                  </div>
                  <div class="product_dis">
                    <h6 class="m-0">Shelf life : {details[3].shelf_life}</h6>
                    <p class="my-2">{details[3].pecriptionHeading}</p>
                    <p class="m-0">{details[3].pecription}</p>
                  </div>
                  <div class="mt-4">
                    <button
                      class="btn btn-primary w-auto me-lg-3" onClick={handleClick}>Buy
                      now</button>
                    <button class="btn btn-outline-primary img_button w-auto ps-3 pe-4"
                      onClick={() => handleAddToCart(details[3])}>
                      <img
                        src={addToCart}
                        alt />
                      Add to
                      cart</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section class="cost_effect my-2">
          <div class="container">
            <div class="row justify-content-lg-between">
              <div class="col-lg-5 pe-lg-0 col-md-6 col-sm-12 col-12">
                <div class="card_title">
                  <h2 class="mb-4 text-white">How does remote
                    olfactory assessment work using ScentAware?</h2>
                  <p class="mb-0 text-start text-white">IntelliVista
                    is a cloud based data management platform for
                    collecting ScentAware test data.</p>
                </div>
              </div>
              <div class="col-lg-5 col-md-6 col-sm-12 col-12 d-flex align-items-center justify-content-end">
                <div class="card_title d-flex flex-column align-items-end">
                  <div class="p-3 d-flex align-items-center gap-4 mb-4">
                    <h6 class="text-white">Learn more about<br />
                      IntelliVista</h6>
                    <svg xmlns="http://www.w3.org/2000/svg"
                      width="32" height="32" viewBox="0 0 32 32"
                      fill="none">
                      <rect x="31.5" y="31.5" width="30.8261"
                        height="31" rx="7.5"
                        transform="rotate(180 31.5 31.5)"
                        stroke="white" />
                      <path fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M21.4437 11.4314L21.4437 20.6439C21.4437 20.9175 21.6661 21.1399 21.9397 21.1399C22.2132 21.1399 22.4356 20.9175 22.4356 20.6439L22.4356 10.2349C22.4356 9.96139 22.2132 9.739 21.9397 9.739L11.5307 9.739C11.2571 9.739 11.0347 9.96139 11.0347 10.2349C11.0347 10.5085 11.2571 10.7309 11.5307 10.7309L20.7417 10.7309L10.0584 21.4142C9.86466 21.6079 9.86466 21.9217 10.0584 22.1155C10.2521 22.3092 10.5659 22.3092 10.7596 22.1155L21.4437 11.4314Z"
                        fill="#F1F2F6" />
                    </svg>
                  </div>
                  <img src={remote_logo} alt />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section class="sese_sec sense_sec">
          <div class="container pe-0">
            <div class="row g-4 m-0">
              <div
                class="col-lg-6 col-md-12 col-sm-12 col-12 d-flex align-items-center">
                <div class="card_title">
                  <h2>Test your sense of smell in 10
                    minutes!</h2>
                  <div class="dis mt-4 pt-lg-2">
                    <h6>Step 1</h6>
                    <h4 class="my-2">Scan any tube from the
                      box.</h4>
                    <p class="text-start m-0">Pick a tube
                      from the
                      foam tray. In the
                      SensifyAware app, choose ScentAware
                      test and
                      scan the QR code on the tube, when
                      directed.</p>
                  </div>
                  <div class="dis mt-3 pt-lg-1">
                    <h6>Step 2</h6>
                    <h4 class="my-2">Open the cap, smell the
                      tube.</h4>
                    <p class="text-start m-0">Open the cap
                      and
                      gently sniff by holding the inhaler
                      tube
                      near your nostrils. Try to identify
                      the
                      scent.</p>
                  </div>
                  <div class="dis mt-3 pt-lg-1">
                    <h6>Step 3</h6>
                    <h4 class="my-2">Identify the odor and
                      respond.</h4>
                    <p class="text-start m-0">Identify the
                      correct
                      answer among the options displayed
                      on your
                      mobile screen. Repeat for all the
                      tubes in
                      the box</p>
                  </div>
                  <div class="dis mt-3 pt-lg-1">
                    <h6>Step 4</h6>
                    <h4 class="my-2">Check your result</h4>
                    <p class="text-start m-0">After you’ve
                      tested
                      all the tubes, a result will be
                      displayed on
                      your device. </p>
                  </div>
                </div>
              </div>
              <div
                class="col-lg-6 col-md-12 col-sm-12 col-12 pe-0">
                <div>
                  <img src={senseImg} width="100%"
                    alt />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section class="product_video">
          <div class="container">
            <div class="row">
              <div
                class="col-12 d-flex align-items-center">
                <div class="video w-100">
                  <img src={product_video} alt
                    width="100%" />
                </div>
              </div>
            </div>
          </div>
        </section>

        <footer class="footer inner-footer">
          <div class="container">
            <div class="row">
              <div class="col-12">
                <div class="footer_logo">
                  <svg xmlns="http://www.w3.org/2000/svg"
                    width="78"
                    height="78" viewBox="0 0 78 78"
                    fill="none">
                    <path
                      d="M49.6984 31.2141L50.7291 31.8269L51.7459 32.4676L52.7487 33.1223L53.7237 33.8187L54.4898 34.4037L55.242 35.0026L55.6041 35.3091L55.9662 35.6294L56.3284 35.9498L56.6766 36.2841L56.9552 36.5487L57.2198 36.8273L57.4845 37.1058L57.7352 37.3983L57.9859 37.6908L58.2227 37.9833L58.4594 38.2898L58.6823 38.5962L58.8495 38.8469L59.0166 39.0976L59.1698 39.3623L59.323 39.6269L59.4623 39.8916L59.6016 40.1701L59.7269 40.4487L59.7827 40.588L59.8384 40.7273L59.922 40.9641L60.0055 41.2008L60.0752 41.4376L60.1448 41.6744L60.1727 41.7998L60.2005 41.9251L60.2284 42.0505L60.2562 42.1758L60.2841 42.3012V42.4266L60.312 42.5519V42.6773L60.3398 42.8026V42.928L60.3537 43.0533V43.1787V43.3041V43.4294V43.5548V43.6801L60.3398 43.8055V43.9308L60.312 44.0562V44.1816L60.2841 44.3069V44.4323L60.2423 44.5576L60.2145 44.683L60.1866 44.8083L60.1587 44.9337L60.1309 45.0591L60.0891 45.1844L60.0195 45.4351L59.9359 45.6719L59.8384 45.9087L59.7409 46.1455L59.6295 46.3823L59.518 46.6191L59.4205 46.8001L59.323 46.9812L59.2255 47.1483L59.128 47.3155L59.0166 47.4826L58.9052 47.6498L58.6823 47.9841C56.8298 46.2012 54.7545 44.6551 52.498 43.4155L27.6077 28.9576L28.1091 28.7069L28.6245 28.4562L29.1398 28.2194L29.6691 27.9966L30.3237 27.7319L30.9923 27.4812L31.647 27.2583L32.3016 27.0494L32.9284 26.8823L33.2348 26.8126L33.5552 26.743L33.8755 26.6733L34.1959 26.6176L34.5162 26.5619L34.8366 26.5201L35.143 26.4783L35.4495 26.4505L35.7559 26.4226H36.0623L36.3687 26.3948H36.6752H36.9816H37.288L37.7616 26.4226L38.2352 26.4644L38.7087 26.5201L39.1823 26.5898L39.6837 26.6873L40.1852 26.7987L40.6727 26.9241L41.1602 27.0633L41.6059 27.2026L42.0377 27.3558L42.4695 27.5091L42.9012 27.6762L43.4584 27.913L44.0155 28.1637L45.1019 28.6791L46.2859 29.2919L49.768 31.2558L49.6984 31.2141Z"
                      fill="#625687" />
                    <path
                      d="M50.38 50.6723L50.0039 50.8394L49.6279 50.9927L49.2518 51.1459L48.8618 51.2852L48.3047 51.4662L47.7336 51.6334L47.1625 51.7866L46.5914 51.9259L46.1179 52.0234L45.6443 52.1069L45.1707 52.1766L44.6972 52.2323L44.0704 52.3019L43.4436 52.3437L42.8168 52.3716H42.19H41.5354L40.8807 52.3437L40.2261 52.3019L39.5854 52.2462L38.8889 52.1627L38.1925 52.0652L37.51 51.9398L36.8275 51.8005L36.1311 51.6473L35.4486 51.4662L34.7661 51.2712L34.0836 51.0623L33.415 50.8394L32.7464 50.5887L32.0779 50.3241L31.4232 50.0455L30.7686 49.753L30.1139 49.4466L29.4732 49.1262L28.8325 48.778L28.0804 48.3462L27.3422 47.9005L25.8797 46.9673L24.7793 46.2152L24.2779 45.853L23.7764 45.4769L23.2889 45.1009L22.8154 44.7109L22.3279 44.293L21.8543 43.8612L21.3947 43.4155L20.9489 42.9559L20.5729 42.5519L20.2107 42.1341L20.0297 41.9252L19.8625 41.7023L19.6954 41.4794L19.5282 41.2566L19.3054 40.9362L19.0964 40.6159L18.9989 40.4487L18.9014 40.2816L18.8039 40.1144L18.7064 39.9473L18.6229 39.7941L18.5393 39.6409L18.4697 39.4877L18.4 39.3344L18.3304 39.1812L18.2607 39.028L18.205 38.8748L18.1493 38.7216L18.0936 38.5823L18.0518 38.443L18.01 38.3037L17.9682 38.1505L17.9264 37.9973L17.8847 37.8441L17.8568 37.6909L17.8289 37.5377L17.8011 37.3984V37.2591L17.7593 37.1198V36.9805L17.7314 36.8412V36.7019V36.5627V36.4234V36.2284C17.8289 34.6127 18.4 33.0805 19.375 31.7852C21.2275 33.568 23.3029 35.1141 25.5593 36.3537L50.3661 50.6723H50.38Z"
                      fill="#2975A8" />
                    <path
                      d="M36.0617 62.0101C32.691 63.4865 29.0556 64.2665 25.3645 64.2805C23.0803 64.183 20.8517 63.584 18.8181 62.5115L27.8717 57.2883L36.0478 62.0101H36.0617Z"
                      fill="#625687" />
                    <path
                      d="M50.2135 22.425L42.0375 17.7032C45.3246 16.2686 48.8485 15.5025 52.4282 15.4189C54.81 15.4607 57.1639 16.0736 59.2671 17.1879L50.2135 22.4111V22.425Z"
                      fill="#2975A8" />
                    <path
                      d="M60.0885 16.5332L59.6428 16.2965L59.1971 16.0736L58.7375 15.8507L58.2918 15.6557L57.8321 15.4607L57.3585 15.2797L56.885 15.1125L56.3975 14.9593L55.896 14.834L55.6453 14.7643L55.3946 14.7086L55.13 14.6668L54.8653 14.6111L54.6007 14.5693L54.336 14.5275L54.0714 14.4857L53.7928 14.4579L53.5143 14.43L53.2357 14.4161L52.9432 14.4022L52.6646 14.3882L52.3721 14.3743H52.0657L51.4668 14.3882L50.84 14.43L50.1992 14.4857L49.5307 14.5554L48.8482 14.6668L48.1378 14.7922L47.4135 14.9454L46.6614 15.1125L45.8814 15.3215L45.0875 15.5582L44.2657 15.809L43.4021 16.1015L42.5246 16.4079L41.6192 16.7561L39.711 17.5361L38.4296 18.1072L37.0925 18.72L34.265 20.1268L31.2007 21.7425L27.8857 23.609L26.8968 24.194L25.8382 24.8486L24.71 25.5729L24.1528 25.9629L23.5818 26.3668L23.0107 26.7847L22.4396 27.2165L21.8825 27.6761L21.3393 28.1497L20.796 28.6372L20.2807 29.1386L20.03 29.4032L19.7932 29.6679L19.5564 29.9325L19.3196 30.1972L19.041 30.5315L18.7903 30.8657L18.5257 31.214L18.2889 31.5761L18.066 31.9243L17.9685 32.1054L17.8571 32.2865L17.7596 32.4675L17.6621 32.6625L17.5646 32.8436L17.481 33.0386L17.3975 33.2197L17.3278 33.4147L17.2443 33.5958L17.1746 33.7908L17.105 33.9858L17.0493 34.1808L16.9935 34.3758L16.9378 34.5847L16.896 34.7797L16.8543 34.9747L16.8125 35.1836L16.7846 35.3786L16.7568 35.5875L16.7428 35.7965L16.715 35.9915V36.2004L16.7289 24.0268V23.8875V23.7483L16.7428 23.609L16.7568 23.4697V23.3304L16.7707 23.1911L16.8125 22.9125L16.8543 22.6479L16.91 22.3693L16.9657 22.1047L17.0353 21.84L17.1189 21.5754L17.2025 21.3108L17.3 21.0461L17.3975 20.7815L17.5089 20.5307L17.6203 20.2661L17.7457 20.0154L17.885 19.7647L18.0243 19.514L18.1635 19.2632L18.3168 19.0265L18.47 18.7757L18.6371 18.539L18.8043 18.3022L18.9714 18.0654L19.1525 17.8286L19.5285 17.369L19.9046 16.9093L20.3085 16.4775L20.7264 16.0457L21.1582 15.614L21.6039 15.21L22.0496 14.8061L22.5093 14.4161L22.9689 14.04L23.4425 13.6779L24.3618 12.9815L25.295 12.3407L26.2003 11.7418L27.0639 11.1986L27.8857 10.7111L28.3314 10.4604L28.791 10.2375L29.2368 10.0147L29.6964 9.80575L30.156 9.61075L30.6157 9.44361L31.0893 9.27646L31.5628 9.12325L32.0225 8.99789L32.496 8.87253L32.9835 8.76111L33.4571 8.67753L33.9446 8.59396L34.4321 8.52432L34.9196 8.46861L35.4071 8.42682L35.8946 8.38503L36.3821 8.35718H36.8835H37.385L37.8864 8.37111L38.3878 8.39896L38.8892 8.42682L39.3907 8.48253L39.906 8.53825L40.4075 8.59396L40.9228 8.67753L41.4242 8.76111L42.455 8.95611L43.4996 9.19289L44.5303 9.47146L45.575 9.77789L46.6196 10.1122L47.6782 10.4743L48.7228 10.8643L49.7814 11.2961L50.84 11.7279L51.8985 12.2015L54.0157 13.2043L56.1328 14.2629L58.25 15.3911L60.3532 16.575H60.3671V16.589H60.3532H60.3392H60.3253H60.3114H60.2975H60.2696H60.2417L60.2139 16.575H60.2L60.1721 16.5611H60.1582H60.1442H60.1303L60.1164 16.5472H60.1025H60.0885V16.5332Z"
                      fill="#52C6D8" />
                    <path
                      d="M18.0103 63.1241L18.456 63.3609L18.9018 63.5977L19.3475 63.8206L19.8071 64.0295L20.2668 64.2245L20.7403 64.4056L21.2139 64.5727L21.7014 64.7259L21.9521 64.7956L22.2028 64.8652L22.4535 64.9209L22.7043 64.9767L22.955 65.0324L23.2196 65.0881L23.4843 65.1299L23.7489 65.1717L24.0275 65.2134L24.306 65.2413L24.5846 65.2692L24.8632 65.297H25.1557L25.4482 65.3249H25.7407H26.0332H26.646L27.2728 65.2831L27.9135 65.2274L28.5821 65.1438L29.2646 65.0463L29.975 64.9209L30.6993 64.7677L31.4514 64.5866L32.2314 64.3777L33.0393 64.1409L33.861 63.8902L34.7107 63.5977L35.5882 63.2774L36.4935 62.9292L38.4018 62.1491L39.6832 61.592L41.0203 60.9791L43.8478 59.5863L46.9121 57.9567L50.2271 56.0902L51.216 55.5052L52.2885 54.8506L53.4028 54.1263L53.9739 53.7363L54.545 53.3324L55.116 52.9145L55.6871 52.4688L56.2443 52.0092L56.7875 51.5356L57.3168 51.0481L57.8321 50.5467L58.0828 50.2959L58.3196 50.0313L58.5564 49.7666L58.7932 49.502L59.0718 49.1677L59.3364 48.8334L59.5871 48.4852L59.8239 48.137L60.0468 47.7749L60.1582 47.5938L60.2557 47.4127L60.3532 47.2316L60.4507 47.0506L60.5482 46.8695L60.6318 46.6884L60.7153 46.4934L60.7989 46.2984L60.8685 46.1034L60.9382 45.9084L61.0078 45.7134L61.0635 45.5184L61.1193 45.3234L61.175 45.1284L61.2168 44.9334L61.2585 44.7384L61.3003 44.5295L61.3282 44.3206L61.356 44.1117L61.3839 43.9027V43.6938L61.4118 43.4849V55.6724L61.3978 55.8117V55.9509V56.0902V56.2295L61.3839 56.3688V56.5081L61.3421 56.7867L61.3003 57.0652L61.2446 57.3299L61.1889 57.5945L61.1193 57.8592L61.0357 58.1238L60.9521 58.3884L60.8546 58.6531L60.7571 58.9177L60.6457 59.1684L60.5343 59.4192L60.4089 59.6699L60.2835 59.9206L60.1443 60.1713L60.005 60.422L59.8518 60.6727L59.6985 60.9234L59.5314 61.1602L59.3643 61.397L59.1971 61.6338L59.016 61.8706L58.64 62.3302L58.25 62.7759L57.846 63.2216L57.4282 63.6534L56.9964 64.0713L56.5507 64.4752L56.105 64.8792L55.6453 65.2692L55.1857 65.6452L54.726 66.0074L53.7928 66.7038L52.8735 67.3445L51.9682 67.9434L51.1046 68.4866L50.2828 68.9742L49.8371 69.2249L49.3914 69.4616L48.9318 69.6845L48.4721 69.8934L48.0125 70.0884L47.5528 70.2695L47.0793 70.4367L46.6057 70.5899L46.1321 70.7291L45.6585 70.8545L45.185 70.9659L44.6975 71.0634L44.21 71.147L43.7225 71.2167L43.235 71.2724L42.7475 71.3142L42.26 71.342H41.7725L41.271 71.3699H40.7696L40.2682 71.3559L39.7668 71.3281L39.2653 71.2863L38.7639 71.2445L38.2625 71.1888L37.7471 71.1192L37.2318 71.0495L36.7164 70.9659L35.6857 70.7709L34.655 70.5341L33.6103 70.2556L32.5657 69.9492L31.521 69.6149L30.4764 69.2527L29.4178 68.8627L28.3593 68.4449L27.3007 67.9992L26.2421 67.5256L24.125 66.5227L22.0078 65.4502L19.8907 64.322L17.7875 63.152C17.7875 63.152 17.9546 63.0824 18.0382 63.1381"
                      fill="#D080B3" />
                  </svg>
                </div>
              </div>
            </div>
            <div class="row g-3 pt-lg-5 pt-4">
              <div class="col-lg-3 col-md-6 col-sm-12 col-12">
                <div class="footer_section">
                  <h3>Contact us</h3>
                  <ul class="mt-lg-4 mt-3">
                    <li>251 East 32nd Street 7C<br />
                      New York 10016<br />
                      NY, United States</li>
                    <li><b>support@sensifylife.com</b></li>
                  </ul>
                </div>
              </div>
              <div class="col-lg-3 col-md-6 col-sm-12 col-12">
                <div class="footer_section">
                  <h3>Privacy policy</h3>
                  <ul class="mt-lg-4 mt-3">
                    <li>By visiting our Website and/or using
                      the
                      Services in any manner, you
                      acknowledge that
                      you accept the practices and
                      policies
                      outlined in our Privacy Policy.</li>
                  </ul>
                </div>
              </div>
              <div
                class="col-lg-3 col-md-6 col-sm-12 col-12 offset-lg-1">
                <div class="footer_section">
                  <h3>Get in touch with us</h3>
                  <ul
                    class="mt-lg-4 mt-3 d-flex align-items-cente gap-lg-5 gap-3">
                    <li>
                      <a href="#"><svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24" height="24"
                        viewBox="0 0 24 24"
                        fill="none">
                        <path
                          d="M15.12 5.32003H17V2.14003C16.0897 2.04538 15.1751 1.99865 14.26 2.00003C11.54 2.00003 9.67999 3.66003 9.67999 6.70003V9.32003H6.60999V12.88H9.67999V22H13.36V12.88H16.42L16.88 9.32003H13.36V7.05003C13.36 6.00003 13.64 5.32003 15.12 5.32003Z"
                          fill="white" />
                      </svg></a>
                    </li>
                    <li>
                      <a href="#">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24" height="24"
                          viewBox="0 0 24 24"
                          fill="none">
                          <path
                            d="M20.4701 1.9999H3.53006C3.33964 1.99725 3.15056 2.03214 2.97362 2.10258C2.79669 2.17302 2.63536 2.27762 2.49886 2.41041C2.36235 2.5432 2.25334 2.70158 2.17805 2.87651C2.10276 3.05143 2.06267 3.23947 2.06006 3.4299V20.5699C2.06267 20.7603 2.10276 20.9484 2.17805 21.1233C2.25334 21.2982 2.36235 21.4566 2.49886 21.5894C2.63536 21.7222 2.79669 21.8268 2.97362 21.8972C3.15056 21.9676 3.33964 22.0025 3.53006 21.9999H20.4701C20.6605 22.0025 20.8496 21.9676 21.0265 21.8972C21.2034 21.8268 21.3648 21.7222 21.5013 21.5894C21.6378 21.4566 21.7468 21.2982 21.8221 21.1233C21.8974 20.9484 21.9375 20.7603 21.9401 20.5699V3.4299C21.9375 3.23947 21.8974 3.05143 21.8221 2.87651C21.7468 2.70158 21.6378 2.5432 21.5013 2.41041C21.3648 2.27762 21.2034 2.17302 21.0265 2.10258C20.8496 2.03214 20.6605 1.99725 20.4701 1.9999ZM8.09006 18.7399H5.09006V9.7399H8.09006V18.7399ZM6.59006 8.4799C6.17632 8.4799 5.77953 8.31554 5.48697 8.02298C5.19442 7.73043 5.03006 7.33363 5.03006 6.9199C5.03006 6.50616 5.19442 6.10937 5.48697 5.81681C5.77953 5.52425 6.17632 5.3599 6.59006 5.3599C6.80975 5.33498 7.03224 5.35675 7.24293 5.42378C7.45363 5.49081 7.6478 5.60159 7.81272 5.74886C7.97763 5.89613 8.10958 6.07657 8.19993 6.27838C8.29028 6.48018 8.33698 6.69879 8.33698 6.9199C8.33698 7.141 8.29028 7.35961 8.19993 7.56141C8.10958 7.76322 7.97763 7.94366 7.81272 8.09093C7.6478 8.23821 7.45363 8.34898 7.24293 8.41601C7.03224 8.48304 6.80975 8.50481 6.59006 8.4799ZM18.9101 18.7399H15.9101V13.9099C15.9101 12.6999 15.4801 11.9099 14.3901 11.9099C14.0527 11.9124 13.7242 12.0182 13.4489 12.2131C13.1735 12.408 12.9645 12.6826 12.8501 12.9999C12.7718 13.2349 12.7379 13.4825 12.7501 13.7299V18.7299H9.75006C9.75006 18.7299 9.75006 10.5499 9.75006 9.7299H12.7501V10.9999C13.0226 10.527 13.419 10.1374 13.8965 9.8731C14.374 9.60878 14.9146 9.47975 15.4601 9.4999C17.4601 9.4999 18.9101 10.7899 18.9101 13.5599V18.7399Z"
                            fill="white" />
                        </svg>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24" height="24"
                          viewBox="0 0 24 24"
                          fill="none">
                          <path
                            d="M17.34 5.46C17.1027 5.46 16.8707 5.53038 16.6733 5.66224C16.476 5.79409 16.3222 5.98151 16.2313 6.20078C16.1405 6.42005 16.1168 6.66133 16.1631 6.89411C16.2094 7.12689 16.3236 7.34071 16.4915 7.50853C16.6593 7.67635 16.8731 7.79064 17.1059 7.83694C17.3387 7.88324 17.5799 7.85948 17.7992 7.76866C18.0185 7.67783 18.2059 7.52402 18.3378 7.32668C18.4696 7.12935 18.54 6.89734 18.54 6.66C18.54 6.34174 18.4136 6.03652 18.1885 5.81147C17.9635 5.58643 17.6583 5.46 17.34 5.46ZM21.94 7.88C21.9206 7.0503 21.7652 6.2294 21.48 5.45C21.2257 4.78313 20.83 4.17928 20.32 3.68C19.8248 3.16743 19.2196 2.77418 18.55 2.53C17.7727 2.23616 16.9508 2.07721 16.12 2.06C15.06 2 14.72 2 12 2C9.28 2 8.94 2 7.88 2.06C7.04915 2.07721 6.22734 2.23616 5.45 2.53C4.78168 2.77665 4.17693 3.16956 3.68 3.68C3.16743 4.17518 2.77418 4.78044 2.53 5.45C2.23616 6.22734 2.07721 7.04915 2.06 7.88C2 8.94 2 9.28 2 12C2 14.72 2 15.06 2.06 16.12C2.07721 16.9508 2.23616 17.7727 2.53 18.55C2.77418 19.2196 3.16743 19.8248 3.68 20.32C4.17693 20.8304 4.78168 21.2234 5.45 21.47C6.22734 21.7638 7.04915 21.9228 7.88 21.94C8.94 22 9.28 22 12 22C14.72 22 15.06 22 16.12 21.94C16.9508 21.9228 17.7727 21.7638 18.55 21.47C19.2196 21.2258 19.8248 20.8326 20.32 20.32C20.8322 19.8226 21.2283 19.2182 21.48 18.55C21.7652 17.7706 21.9206 16.9497 21.94 16.12C21.94 15.06 22 14.72 22 12C22 9.28 22 8.94 21.94 7.88ZM20.14 16C20.1327 16.6348 20.0178 17.2637 19.8 17.86C19.6403 18.2952 19.3839 18.6884 19.05 19.01C18.7256 19.3405 18.3332 19.5964 17.9 19.76C17.3037 19.9778 16.6748 20.0927 16.04 20.1C15.04 20.15 14.67 20.16 12.04 20.16C9.41 20.16 9.04 20.16 8.04 20.1C7.38089 20.1123 6.72459 20.0109 6.1 19.8C5.68578 19.6281 5.31136 19.3728 5 19.05C4.66809 18.7287 4.41484 18.3352 4.26 17.9C4.01586 17.2952 3.88044 16.6519 3.86 16C3.86 15 3.8 14.63 3.8 12C3.8 9.37 3.8 9 3.86 8C3.86448 7.35106 3.98295 6.70795 4.21 6.1C4.38605 5.67791 4.65627 5.30166 5 5C5.30381 4.65617 5.67929 4.3831 6.1 4.2C6.70955 3.98004 7.352 3.86508 8 3.86C9 3.86 9.37 3.8 12 3.8C14.63 3.8 15 3.8 16 3.86C16.6348 3.86728 17.2637 3.98225 17.86 4.2C18.3144 4.36865 18.7223 4.64285 19.05 5C19.3777 5.30718 19.6338 5.68273 19.8 6.1C20.0223 6.70893 20.1373 7.35178 20.14 8C20.19 9 20.2 9.37 20.2 12C20.2 14.63 20.19 15 20.14 16ZM12 6.87C10.9858 6.87198 9.99496 7.17453 9.15265 7.73942C8.31035 8.30431 7.65438 9.1062 7.26763 10.0438C6.88089 10.9813 6.78072 12.0125 6.97979 13.0069C7.17886 14.0014 7.66824 14.9145 8.38608 15.631C9.10392 16.3474 10.018 16.835 11.0129 17.0321C12.0077 17.2293 13.0387 17.1271 13.9755 16.7385C14.9123 16.35 15.7129 15.6924 16.2761 14.849C16.8394 14.0056 17.14 13.0142 17.14 12C17.1413 11.3251 17.0092 10.6566 16.7512 10.033C16.4933 9.40931 16.1146 8.84281 15.6369 8.36605C15.1592 7.88929 14.5919 7.51168 13.9678 7.25493C13.3436 6.99818 12.6749 6.86736 12 6.87ZM12 15.33C11.3414 15.33 10.6976 15.1347 10.15 14.7688C9.60234 14.4029 9.17552 13.8828 8.92348 13.2743C8.67144 12.6659 8.6055 11.9963 8.73398 11.3503C8.86247 10.7044 9.17963 10.111 9.64533 9.64533C10.111 9.17963 10.7044 8.86247 11.3503 8.73398C11.9963 8.6055 12.6659 8.67144 13.2743 8.92348C13.8828 9.17552 14.4029 9.60234 14.7688 10.15C15.1347 10.6976 15.33 11.3414 15.33 12C15.33 12.4373 15.2439 12.8703 15.0765 13.2743C14.9092 13.6784 14.6639 14.0454 14.3547 14.3547C14.0454 14.6639 13.6784 14.9092 13.2743 15.0765C12.8703 15.2439 12.4373 15.33 12 15.33Z"
                            fill="white" />
                        </svg>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div class="row g-3 pt-lg-5 pb-lg-5 pt-4">
              <div class="col-12">
                <div class="copyright">
                  <p class="m-0">© 2024 Sensify Inc. All
                    rights
                    reserved.</p>
                </div>
              </div>
            </div>
          </div>
        </footer>

      </section>

    </>
  );
}


export default Product_Cart;

