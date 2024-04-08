import React from "react";
import styled from "styled-components";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
const Description = () => {
  return (
    <>
      <Wrapper>
        <section id="description-section">
          <div class="container-fluid p-0">
            <div class="row">
              <div class="col-lg-6 col-md-12 col-sm-12 description">
                <div>
                  <p>
                    An urgent <br />
                    and unmet <br />
                    need.
                  </p>
                  <h5>
                    Patients and individuals getting access to new therapies for
                    Alzheimer’s Disease are screened using expensive
                    neuroimaging, invasive procedures or cognitive screens that
                    are only sensitive to detect patients progressed to mild
                    cognitive impairment (MCI) or Alzheimer’s Disease (AD).
                  </h5>
                </div>

                {/* <div class="description-footer">
                  <span> < ArrowBackIcon/> Discover SensifyAware</span>
                </div> */}
              </div>
              <div class="col-lg-6 col-md-12 col-sm-12 sub-description">
                <p>
                  There is an urgent unmet need in being able to detect the
                  pre-clinical signs of Alzhiemer’s disease, a stage when
                  therapeutic agents have the highest likelihood in delaying or
                  preventing Alzhiemer’s Disease. This is what the SensifyAware
                  Digital Biomarker platform aims to achieve.
                </p>
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
  .description p {
    color: white;
    font-size: 64px;
    font-weight: 700;
    font-family: "WorkSans";
    margin: 0;
    line-height: 60px;
    padding-top: 64px;
  }
  .description h5 {
    color: white;
    font-size: 16px;
    font-weight: 500;
    font-family: "WorkSans";
    margin: 0;
    padding-top: 41px;
    line-height: 24px;
  }
  section#description-section {
    background-color: #153f67;
  }
  .description {
    display: flex;
    flex-wrap: wrap;
}
  .sub-description p {
    font-size: 27px;
    line-height: 40px;
    color: #fff;
    padding-left: 84px;
    font-weight: 300;
    padding-top: 60px;
  }
  .description-footer {
    display: flex;
    align-items: self-end;
    color: #fff;
    font-weight: 700;
    font-size: 20px;
    font-family: 'WorkSans';
    padding-bottom: 15px;
}
section#description-section {
    padding-bottom: 40px;
}
  @media screen and (min-width: 320px) and (max-width: 767px) {
    .description p {
        font-size: 30px;
        line-height: 44px;
    }
    .description br{
        display : none
    }
    .container-fluid {
        width: 75%;
      }
      .description-footer {
        font-size: 16px;
        padding-bottom: 0px;
        padding-top: 30px;
    }
    .sub-description p {
        font-size: 18px;
        line-height: 32px;
        padding-left: 0px;
    }
  }
`;

export default Description;
