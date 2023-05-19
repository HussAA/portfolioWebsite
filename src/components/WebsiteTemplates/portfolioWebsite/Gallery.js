import React from "react";
import styled from "styled-components";
import ReactImageGallery from "react-image-gallery";
import Fashtion1 from "../../../assets/images/fashion-1.jpg";
import Fashtion2 from "../../../assets/images/fashion-2.jpg";
import Fashtion3 from "../../../assets/images/fashion-3.jpg";
import Sports1 from "../../../assets/images/sports-1.jpg";
import Sports2 from "../../../assets/images/sports-2.jpg";
import Realestate1 from "../../../assets/images/realestate-1.jpg";
import Realestate2 from "../../../assets/images/realestate-2.jpg";
import Wedding1 from "../../../assets/images/wedding-1.jpg";
import Wedding2 from "../../../assets/images/wedding-2.jpg";
import Wildlife1 from "../../../assets/images/wildlife-1.jpg";
import Wildlife2 from "../../../assets/images/wildlife-2.jpg";
import Wildlife3 from "../../../assets/images/wildlife-3.jpg";
import Event1 from "../../../assets/images/event-1.jpg";
import Event2 from "../../../assets/images/event-2.jpg";
import Portrait1 from "../../../assets/images/portrait-1.jpg";

const images = (() => {
  return [
    Fashtion1,
    Fashtion2,
    Fashtion3,
    Sports1,
    Sports2,
    Portrait1,
    Event1,
    Event2,
    Wildlife1,
    Wildlife2,
    Wildlife3,
    Wedding1,
    Wedding2,
    Realestate1,
    Realestate2,
  ].map((i) => {
    return {
      original: i,
      thumbnail: i,
      thumbnailHeight: 120,
      originalHeight: 500,
    };
  });
})();

const GalleryTitle = styled.div`
  font-size: 35pt;
  text-align: center;
  margin-bottom: 100px;
`;

const PortfolioGallery = () => {
  return (
    <>
      <div className="container">
        <div className="row">
          <GalleryTitle>GALLERY</GalleryTitle>
          <ReactImageGallery
            disableThumbnailScroll
            showIndex
            autoPlay
            items={images}
          />
        </div>
      </div>
    </>
  );
};

export default PortfolioGallery;
