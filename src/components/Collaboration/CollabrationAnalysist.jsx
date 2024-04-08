import React from "react";
import styled from "styled-components";
import Analysist from "../../assets/Analysist.png";
const CollabrationAnalysist = () => {
  return (
    <>
      <Wrapper>
      <section id="CollabrationAnalysist"><div class="container-fluid p-0">
          <div class="row">
            <div class="col-lg-6 col-md-6 col-sm-6 Analysist-description">
              <p>
                Over 13 million people in America experience anosmia, a partial or complete loss of smell.
              </p>
              <div class="Analysist-sub-description" style={{ marginTop: "30px" }}>
                <p>Loss of smell is an early biomarker of various neurodegenerative diseases. Integrating sensory acuity with cognitive functions may help in
                  developing tools for early detection of Alzheimer's disease in cognitively-healthy, at-risk individuals. SensifyAware integrates sensory
                  acuity and cognitive functions through various self-assessment tools.
                </p>
              </div>
            </div>
            <div class="col-lg-6 col-md-6 col-sm-6 image-section">
              <img src={Analysist} style={{ width: "90%" }} />
              <div class="analysist-footer">
                <p>
                  Reference: Nature Reviews Neurology 2019 (15), 11–24
                </p>
              </div>
            </div>
          </div>

        </div>
        </section>
      </Wrapper>
    </>
  );
};

const Wrapper = styled.section`
  .container-fluid {
    width: 63%;
  }
  .Analysist-description p {
    color: white;
    font-size: 36px;
    font-weight: 300;
    font-family: "WorkSans";
    line-height: 48px;
    margin: 0;
  }

  .Analysist-sub-description p {
    color: white;
    font-size: 16px;
    font-weight: 500;
    font-family: "WorkSans";
    line-height: 24px;
    margin: 0;
  }
  .Analysist-sub-description {
    display: flex;
    align-items: center;
  }

  section#CollabrationAnalysist {
    background-color: #26649d;
    padding: 50px 0px;
  }

  .image-section {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 80px;
  }
  .analysist-footer {
    padding: 20px 0px 0px 0px;
    display: flex;
    justify-content: flex-end;
  }
  .analysist-footer p {
    font-family: "WorkSans";
    font-style: normal;
    font-weight: 400;
    font-size: 12px;
    line-height: 15px;
    margin: 0px;
    color: #fff;
  }
  @media screen and (min-width: 320px) and (max-width: 767px) {
    .image-section img {
      width: 300px !important ;
    }
    .Analysist-description p {
      font-size: 18px !important;
      margin-bottom: 30px !important;
      line-height: inherit !important ;
      text-align: center;
    }
    .container-fluid {
      width: 76%;
    }
    .Analysist-sub-description p {
      text-align: center;
    }
    .analysist-footer {
      justify-content: center;
    }
  }
  .Analysist-description p {
    color: white;
    font-size: 25px;
    font-family: WorkSans;
    line-height: 33px;
    margin: 0px;
    font-weight: 600;
}	
 .Analysist-sub-description p {
    color: white;
    font-size: 14px;
    font-weight: 300;
    font-family: WorkSans;
    line-height: 24px;
    margin: 0px;
}	
`;

export default CollabrationAnalysist;
