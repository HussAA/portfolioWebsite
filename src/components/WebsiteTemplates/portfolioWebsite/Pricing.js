import React from "react";
import { styled } from "styled-components";
import Checkmark from "../../../assets/images/checkmark.png";




const PackageTitle = styled.div`
  font-size: 12pt;
  color: #4d4d4d;
  font-family: system-ui;
  margin-bottom: 50px;

  @media screen and (max-width: 767px) {
    margin-bottom: 20px;
  }
`;
const SectionHeading = styled.div`
  font-size: 35pt;
  color: black;
  text-align: center;
`;
const SectionDescription = styled.div`
  font-size: 12pt;
  font-family: Arial, Helvetica, sans-serif;
  text-align: center;
  color: #5e5e5e;
  margin-bottom: 40px;
  margin-left: 23px;
  margin-right: 23px;
  padding-left: 50px;
  padding-right: 50px;
`;
const PricingColumn = styled.div`
  background: white;
  height: 550px;
  margin-top: 30px;
  border-radius: 1rem;

  @media (max-width: 991.9px) {
    margin-bottom: 30px;
  }
`;
const PricingColumnCenter = styled.div`
  background: #16192c;
  height: 610px;
  border-radius: 1rem;
`;
const PricingCard = styled.div`
  width: auto;
  padding: 13px;
`;
const PricingCardCenter = styled.div`
  width: auto;
  padding: 13px;
`;

const PricingTitles = styled.div`
  font-size: 18pt;
  color: #16192c;
`;
const PricingTitlesCenter = styled.div`
  font-size: 18pt;
  color: #5e6aba;
`;
const PricingPopular = styled.button`
  width: fit-content;
  padding: 5px 15px 5px 15px;
  border-radius: 25rem;
  color: white;
  border: 0 solid green;
  background: #5d9310;

  &:hover {
    cursor: default;
  }
`;
const PricingCost = styled.div`
  font-size: 28pt;
  color: #16192c;
  font-weight: bold;
  margin-top: 15px;
  margin-bottom: 15px;
`;
const PricingCostCenter = styled.div`
  font-size: 28pt;
  color: white;
  font-weight: bold;
  margin-top: 15px;
  margin-bottom: 15px;
`;
const PricingCostSpan = styled.span`
  font-size: 14pt;
  color: #828282;
  font-weight: 500;
`;
const PricingCoverage = styled.div`
  font-size: 15px;
  color: #4f4f4f;
  min-height: 72px;
`;
const PricingCoverageCenter = styled.div`
  font-size: 15px;
  color: #e8e8e8;
  min-height: 68px;
`;
const PricingHr = styled.hr`
  color: lightgray;
`;
const Check = styled.img`
  width: 18px;
  height: 18px;
  margin-right: 15px;
`;
const PricingFeatures = styled.div`
  font-size: 15px;
  color: black;
  margin-bottom: 15px;

  @media screen and (min-width: 500px), (max-width: 768px) {
  }
`;
const PricingFeaturesCenter = styled.div`
  font-size: 15px;
  color: white;
  margin-bottom: 15px;
`;

const PricingButton = styled.button`
  width: 80%;
  height: 46px;
  border-radius: 7px;
  border: 0;
  background: #16192c;
  color: white;
  font-size: 14pt;
  transition: 0.2s;
  &:hover {
    background: #373f6c;
  }
`;
const PricingButtonCenter = styled.button`
  width: 80%;
  height: 46px;
  border-radius: 7px;
  background: #5e6aba;
  color: white;
  border: 0;
  font-size: 14pt;
  margin-top: 45px;
  transition: 0.2s;
  &:hover {
    background: #3f4888;
  }
`;

const Pricing = () => {
  return (
    <>
      <PackageTitle id="Packages" className="text-center text-uppercase">
        packages
      </PackageTitle>
      <SectionHeading>WHAT I OFFER</SectionHeading>
      <SectionDescription>
        I am dedicated to providing exceptional photography services that
        capture the essence and beauty of every moment.
      </SectionDescription>
      <div className="container-xl pricing-md-max">
        <div className="row">
          <PricingColumn className="col-lg-4">
            <PricingCard>
              <div className="row">
                <PricingTitles className="col">Standard</PricingTitles>
              </div>
              <div className="row">
                <PricingCost className="col">
                  $89 <PricingCostSpan>/hr</PricingCostSpan>
                </PricingCost>
              </div>
              <div className="row">
                <PricingCoverage className="col">
                  Ideal for quick portrait sessions, families and small events.
                </PricingCoverage>
              </div>
              <hr />
              <div className="row">
                <PricingFeatures className="col">
                  <Check src={Checkmark} />
                  Basic editing of images
                </PricingFeatures>
              </div>
              <div className="row">
                <PricingFeatures className="col">
                  <Check src={Checkmark} />
                  High-resolution digital files
                </PricingFeatures>
              </div>
              <div className="row">
                <PricingFeatures className="col">
                  <Check src={Checkmark} />
                  Online gallery for sharing
                </PricingFeatures>
              </div>
              <div className="row">
                <PricingFeatures className="col">
                  <Check src={Checkmark} />
                  10 printed photos
                  <br />
                  <br />
                  <br />
                  <br />
                </PricingFeatures>
              </div>

              <div className="text-center">
                <PricingButton className="col">Get started</PricingButton>
              </div>
            </PricingCard>
          </PricingColumn>

          <PricingColumnCenter className="col-lg-4">
            <PricingCardCenter>
              <div className="text-end">
                <PricingPopular className="col">Popular</PricingPopular>
              </div>
              <div className="row">
                <PricingTitlesCenter className="col">
                  Premium
                </PricingTitlesCenter>
              </div>
              <div className="row">
                <PricingCostCenter className="col">
                  $129 <PricingCostSpan>/hr</PricingCostSpan>
                </PricingCostCenter>
              </div>
              <div className="row">
                <PricingCoverageCenter className="col">
                  Ideal for capturing residential, fashion shoots and special
                  occasions.
                </PricingCoverageCenter>
              </div>
              <PricingHr />
              <div className="row">
                <PricingFeaturesCenter className="col">
                  <Check src={Checkmark} />
                  Professional image editing
                </PricingFeaturesCenter>
              </div>
              <div className="row">
                <PricingFeaturesCenter className="col">
                  <Check src={Checkmark} />
                  High-resolution digital files
                </PricingFeaturesCenter>
              </div>
              <div className="row">
                <PricingFeaturesCenter className="col">
                  <Check src={Checkmark} />
                  Online gallery for sharing
                </PricingFeaturesCenter>
              </div>
              <div className="row">
                <PricingFeaturesCenter className="col">
                  <Check src={Checkmark} />
                  20 printed photos
                </PricingFeaturesCenter>
              </div>
              <div className="row">
                <PricingFeaturesCenter className="col">
                  <Check src={Checkmark} />1 canvas print (16x20 size)
                </PricingFeaturesCenter>
              </div>
              <div className="text-center">
                <PricingButtonCenter className="col">
                  Get started
                </PricingButtonCenter>
              </div>
            </PricingCardCenter>
          </PricingColumnCenter>

          <PricingColumn className="col-lg-4">
            <PricingCard>
              <div className="row">
                <PricingTitles className="col">Deluxe</PricingTitles>
              </div>
              <div className="row">
                <PricingCost className="col">
                  $199 <PricingCostSpan>/hr</PricingCostSpan>
                </PricingCost>
              </div>
              <div className="row">
                <PricingCoverage className="col">
                  Perfect for large events, weddings and sports events.
                </PricingCoverage>
              </div>
              <hr />
              <div className="row">
                <PricingFeatures className="col">
                  <Check src={Checkmark} />
                  Extensive image editing
                </PricingFeatures>
              </div>
              <div className="row">
                <PricingFeatures className="col">
                  <Check src={Checkmark} />
                  High-resolution digital files
                </PricingFeatures>
              </div>
              <div className="row">
                <PricingFeatures className="col">
                  <Check src={Checkmark} />
                  Online gallery for sharing
                </PricingFeatures>
              </div>
              <div className="row">
                <PricingFeatures className="col">
                  <Check src={Checkmark} />
                  30 printed photos
                </PricingFeatures>
              </div>
              <div className="row">
                <PricingFeatures className="col">
                  <Check src={Checkmark} />3 canvas prints (16x20 size)
                </PricingFeatures>
              </div>
              <div className="row">
                <PricingFeatures className="col">
                  <Check src={Checkmark} />1 hardcover photo album
                </PricingFeatures>
              </div>
              <div className="text-center">
                <PricingButton className="col">Get started</PricingButton>
              </div>
            </PricingCard>
          </PricingColumn>
        </div>
      </div>
    </>
  );
};

export default Pricing;
