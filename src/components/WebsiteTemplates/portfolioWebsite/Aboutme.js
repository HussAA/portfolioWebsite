import React from "react";
import { styled } from "styled-components";
import Arrow from "../../../assets/images/right-arrow.png";

const SectionTitles = styled.div`
  font-size: 12pt;
  color: #4d4d4d;
  font-family: system-ui;
  margin-top: 150px;
  margin-bottom: 50px;

  @media screen and (max-width:767px) {
    margin-top: 130px;
    margin-bottom: 20px;
  }
`;

const AboutTitle = styled.div`
  font-size: 45pt;
  color: black;
  margin-left: 3%;
  @media screen and (max-width:767px){
        font-size: 27pt;
    }
`;
const Occupation = styled.div`
  font-size: 18pt;
  color: black;
  margin-left: 3%;
  
  @media screen and (max-width:767px){
        font-size: 16pt;
        font-weight: bold;
    }
`;
const AboutmeText = styled.div`
  font-size: 13pt;
  font-family: system-ui;
  color: black;
  margin-left: 3%;
`;
const AboutButton = styled.button`
  width: 140pt;
  height: 40pt;
  font-size: 15pt;
  margin-left: 3%;
  margin-top: 5%;
  color: white;
  border: 0;
  transition: 0.3s;
  background: linear-gradient(to right, #1d1d1d, #353535);
  &:hover {
    color: #B3B3B3;
  }
`;
const RightArrow = styled.img`
  margin-bottom: 4px;
  height: 16pt;
  transition: 0.3s;
  ${AboutButton}:hover & {
    display: inline-block;
    transform: translateX(7px);
    -webkit-transform: translateX(7px);
    -ms-transform: translateX(7px);
  }
`;

const PortfolioAboutMe = () => {
  return (
    <>
    <SectionTitles className="text-center text-uppercase">Welcome</SectionTitles>
      <div className="container ">
        <div className="row">
          <div className="col-md-6">
            <div className="aboutme-pic" />
          </div>
          <div className="col-md-6 ">
            <div className="row">
              <AboutTitle className="col">
                Hi, I am{" "}
                <span className="d-none d-md-inline">
                  <br />
                </span>
                John Doe
              </AboutTitle>
            </div>
            <div className="row">
              <Occupation className="col">Photographer</Occupation>
            </div>
            <div className="row">
              <AboutmeText className="col-8 mt-3">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Eget
                aliquet nibh praesent tristique magna.
              </AboutmeText>
            </div>
            <AboutButton>
              Contact Me <RightArrow src={Arrow} />
            </AboutButton>
          </div>
        </div>
      </div>
    </>
  );
};

export default PortfolioAboutMe;
