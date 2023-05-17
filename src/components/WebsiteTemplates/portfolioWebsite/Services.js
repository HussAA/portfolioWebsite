import React from "react";
import { styled } from "styled-components";
import Marriage from "../../../assets/images/Marriage.gif";

const SectionTitles = styled.div`
  font-size: 13pt;
  color: #4d4d4d;
  font-family: system-ui;
  margin-top: 150px;
  margin-bottom: 10px;

  @media screen and (max-width: 767px) {
    margin-top: 130px;
    margin-bottom: 20px;
  }
`;
const MarriageLogo = styled.img`
  width: 90px;
  height: 90px;
  cursor: pointer;
`;
const CardTitle = styled.div`
  font-size: 17pt;
  color: black;
`;
const CardDescription = styled.div`
  font-size: 13pt;
  color: black;
`;
const ServiceCard = styled.div`
  box-shadow: 0px 10px 10px rgba(0, 0, 0, 0.22);
  height: 240px;
  width: auto;
  margin: 7px 0px 7px 0px;
  background: white;
`;

const OutsideColor = styled.div`
  background: #0F0A0A;
  height: 5px;
  margin-left: 0;
  margin-right: 0;
`;
const ServicesCards = ({ logo, title, description }) => {
  return (
    <>
      <div className="col-md-6 col-lg-4">
        <ServiceCard className="row text-center">
          <OutsideColor />
          <div className="row mb-1">
            <div className="col">
              <MarriageLogo src={logo} alt="service logo" />
            </div>
          </div>
          <div className="row mb-4">
            <div className="col">
              <CardTitle>{title}</CardTitle>
            </div>
          </div>
          <div className="row">
            <div className="col">
              <CardDescription>{description}</CardDescription>
            </div>
          </div>
        </ServiceCard>
      </div>
    </>
  );
};

const PortfolioServices = () => {
  return (
    <>
      <SectionTitles id="Services" className="text-center text-uppercase">
        Services
      </SectionTitles>
      <div className="container-sm">
        <div className="row">
          <ServicesCards
            logo={Marriage}
            title="Wedding Photography"
            description="Capture the precious moments of weddings."
          />
          <ServicesCards
            logo={Marriage}
            title="Wedding Photography"
            description="Capture the precious moments of weddings."
          />
          <ServicesCards
            logo={Marriage}
            title="Wedding Photography"
            description="Capture the precious moments of weddings."
          />
          <ServicesCards
            logo={Marriage}
            title="Wedding Photography"
            description="Capture the precious moments of weddings."
          />
          <ServicesCards
            logo={Marriage}
            title="Wedding Photography"
            description="Capture the precious moments of weddings."
          />
          <ServicesCards
            logo={Marriage}
            title="Wedding Photography"
            description="Capture the precious moments of weddings."
          />
        </div>
      </div>
    </>
  );
};

export default PortfolioServices;
