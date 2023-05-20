import React from "react";
import { styled } from "styled-components";
import Marriage from "../../../assets/images/Marriage.gif";
import RealEstate from "../../../assets/images/realestate.gif";
import Products from "../../../assets/images/products.gif";
import Fashion from "../../../assets/images/fashion.gif";
import Event from "../../../assets/images/catwalk.gif";
import Portrait from "../../../assets/images/portrait.gif";
import WildLife from "../../../assets/images/lion.gif";
import Sports from "../../../assets/images/sport.gif";

const SectionTitles = styled.div`
  font-size: 12pt;
  color: gray;
  font-family: system-ui;
  margin-bottom: 50px;

  @media screen and (max-width: 767px) {
    margin-bottom: 20px;
  }
`;
const SectionHeading = styled.div`
  font-size: 35pt;
  color: white;
  text-align: center;
  @media screen and (max-width:600px) {
    font-size: 25pt;
  }
`;
const SectionDescription = styled.div`
  font-size: 12pt;
  font-family: Arial, Helvetica, sans-serif;
  text-align: center;
  color: #B3B3B3;
  margin-bottom: 40px;
  margin-left: 23px;
  margin-right: 23px;
`;

const MarriageLogo = styled.img`
  width: 90px;
  height: 90px;
  cursor: pointer;
  margin-top: 10px;
`;
const CardTitle = styled.div`
  font-size: 16pt;
  color: black;
  font-weight: bold;
  padding-left: 4px;
  padding-right: 4px;
`;
const CardDescription = styled.div`
  font-size: 16px;
  padding-left: 4px;
  padding-right: 4px;
`;
const ServiceCard = styled.div`
  box-shadow: 0px 10px 10px rgba(0, 0, 0, 0.22);
  height: auto;
  min-height: 330px;
  width: auto;
  min-width: 170px;
  margin: auto;
  background: white;
  margin-bottom: 15px;

  @media screen and (max-width:500px){
    min-width: 150px;
    max-width: 230px;
    min-height: 355px;
  }
`;

const OutsideColor = styled.div`
  background: #26BAB4;
  height: 5px;
`;
const ServicesCards = ({ logo, title, description }) => {
  return (
    <>
      <div className="col-6 col-lg-3">
        <ServiceCard className="text-center">
          <OutsideColor />
          <div className="row mb-4">
            <div className="col">
              <MarriageLogo src={logo} alt="service logo" />
            </div>
          </div>
          <div className="row mb-3">
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
      <SectionHeading>WHAT I DO</SectionHeading>
      <SectionDescription>
        I am dedicated to providing exceptional photography services that
        capture the essence and beauty of every moment.
      </SectionDescription>
      <div className="container serivce-container-p">
        <div className="row">
          <ServicesCards
            logo={Marriage}
            title="Wedding Photography"
            description="Capture the precious moments of weddings."
          />
          <ServicesCards
            logo={Fashion}
            title="Fashion Photography"
            description="Offer fashion shoots for models, designers, or clothing brands."
          />
          <ServicesCards
            logo={Event}
            title="Event Photography"
            description="Cover various events such as conferences, parties, and corporate gatherings."
          />
          <ServicesCards
            logo={Portrait}
            title="Portrait Photography"
            description="Provide professional portrait sessions for individuals or families."
          />
          <ServicesCards
            logo={RealEstate}
            title="Real Estate Photography"
            description="Capture properties for real estate agents or homeowners looking to sell or rent."
          />
          <ServicesCards
            logo={Sports}
            title="Sports Photography"
            description="Cover sporting events, capturing action shots and athlete performances."
          />
          <ServicesCards
            logo={WildLife}
            title="Wildlife Photography"
            description="Capture the beauty and behavior of animals in their natural habitats."
          />
          <ServicesCards
            logo={Products}
            title="Products Photography"
            description="Highlight products with high-quality images for e-commerce or advertising purposes."
          />
        </div>
      </div>
    </>
  );
};

export default PortfolioServices;
