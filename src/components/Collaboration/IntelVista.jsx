import React from "react";
import styled from "styled-components";
import phone from "../../assets/phone.png";
import scentaware from "../../assets/scentaware.png";
import Traceaware from "../../assets/Traceaware.png";
import audioaware from "../../assets/audioaware.png";
import word from "../../assets/word.png";
import glance from "../../assets/glance.png";
import grammar from "../../assets/grammar.png";
import led_icon from "../../assets/led_icon.png";

const CollabIntelVista = () => {
  setTimeout(() => {
    if(window.location.hash=="#contactUst"){
      var element = document.getElementById("contactUst");
      element.scrollIntoView({behavior:"smooth", block: "start", inline:"nearest"});
    }
  }, 500);
 
  return (
    <>
      <Wrapper>
        <section class="sc-jOiSOi cIyBAH cib_nt">
          <section id="contactUst">
            <div class="container-fluid p-0">
              <div class="row">
                <div class="mob_nt_icon"><img src={phone} alt="phone" /></div>
              </div>
              <div class="row sp_nt">
                <div class="col-lg-4 col-md-4 p_nt">
                  <div class="top_ro_nt">
                    <div class="icon_nt"><img src={scentaware} alt="phone" /></div>
                    <h4>ScentAware</h4>
                  </div>
                  <p>- Executive functions.</p>
                  <p>- Olfaction</p>
                  <ul>
                    <li>Odor identification.</li>
                    <li>Odor intensity.</li>
                    <li>Odor threshold.</li>
                  </ul>
                </div>
                <div class="col-lg-4 col-md-4 p_nt">
                  <div class="top_ro_nt">
                    <div class="icon_nt"><img src={Traceaware} /></div>
                    <h4>TraceAware</h4>
                  </div>

                  <p>- Fine Motor Skills.</p>
                  <p>- Processing Speed.</p>
                  <p>- Short-Term Visual Memory</p>



                </div>
                <div class="col-lg-4 col-md-4 p_nt">
                  <div class="top_ro_nt">
                    <div class="icon_nt"><img src={audioaware} /></div>
                    <h4>AudioAware</h4>
                  </div>
                  <p>- Verbal Memory.</p>
                </div>
              </div>
              <div class="row sp_nt">
                <div class="col-lg-4 col-md-4 p_nt">
                  <div class="top_ro_nt">
                    <div class="icon_nt"><img src={glance} /></div>
                    <h4>GlanceAware</h4>
                  </div>
                  <p>- Paired Associative Memory</p>
                </div>
                <div class="col-lg-4 col-md-4 p_nt">
                  <div class="top_ro_nt">
                    <div class="icon_nt"><img src={word} /></div>
                    <h4>WordsAware</h4>
                  </div>
                  <p>- Word retrieval.</p>
                  <p>- Vocabulary</p>
                </div>
                <div class="col-lg-4 col-md-4 p_nt">
                  <div class="top_ro_nt">
                    <div class="icon_nt"><img src={grammar} /></div>
                    <h4>GrammarAware</h4>
                  </div>
                  <p>- Sentence production</p>
                </div>
              </div>

              <div class="row sp_nt">
                <div class="col-lg-12 col-md-12">
                  <p class="cart-main-header fon_nt">
                    With IntellVista, researchers can collect and<br></br>analyze this data in real-time for clinical trials<br />and academic research.</p>
                  <p>IntelliVista gathers in-depth data from the tests performed via the<br />SensifyAware App and provides detailed visual infographics of how the<br />participants perform.</p>
                </div>
                <div class="row">
                  <div class="col-lg-12 col-md-12">
                    <div class="moni_nt"><img style={{ width: "60%" }} src={led_icon} /></div>
                  </div>
                </div>
                <div class="row">
                  <div class="col-lg-12 col-md-12 btn_nt">
                    <a href="#contactUs">Get a quote</a>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </section>
      </Wrapper>
    </>
  );
};

const Wrapper = styled.section`
.mob_nt_icon{margin: -200px 0 0 -140px;}
.mob_nt_icon img{width: 60%;}
.cib_nt .top_ro_nt{width: 100%;display: block;}
.cib_nt .icon_nt{display: inline-block;width: 45px;}
.cib_nt .top_ro_nt h4{display: inline-block;}
.cib_nt .cart-main-header{font-weight: 300;font-size: 24px;line-height: 28px;padding-bottom: 24px;}
.cib_nt section#contactUst {padding: 50px 0px;}
 .cib_nt .fon_nt {font-weight: 300; font-size: 32px;line-height: 38px;}
.cib_nt .p_nt p {margin: 0 0 0 48px;}
.cib_nt .p_nt ul {margin: 0 0 0 35px;}
.moni_nt{text-align: center;}
.moni_nt img{width:80%;}
.sp_nt{margin: 30px 0px;}
.btn_nt{text-align: center;}
.btn_nt a{border-radius: 84px;background: #0E84F2;color: #fff;text-decoration: none;padding: 10px 27px;}
            `;

export default CollabIntelVista;
