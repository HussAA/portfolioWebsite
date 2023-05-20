import * as React from "react";
import Logo2 from "../../assets/images/Logo2.png";
import { styled } from "styled-components";


const TemplateSwitch = styled.a`
  text-align: center;
  text-decoration: none;
  font-size: 18px;
  color: #cfcfcf;
  display: block;
  text-shadow: 3px 3px 8px 10px #331f00;
  transition: 0.2s;
  &:hover,
  :focus {
    color: #6487d3;
    transform: scale(1, 1);
    cursor: pointer;
  }
`; 
const TemplateLinkA = styled.a`
  text-align: center;
  text-decoration: none;
  font-size: 16px;
  color: #cfcfcf;
  display: block;
  text-shadow: 3px 3px 8px 10px #331f00;
  transition: 0.2s;
  &:hover,
  :focus {
    color: #6487d3;
    transform: scale(1, 1);
    cursor: pointer;
  }
`;
const TemplateLinkB = styled.a`
  text-align: center;
  text-decoration: none;
  font-size: 16px;
  color: #cfcfcf;
  display: block;
  text-shadow: 3px 3px 8px 10px #331f00;
  transition: 0.2s;
  &:hover,
  :focus {
    color: #6487d3;
    transform: scale(1, 1);
    cursor: pointer;
  }
`;

const TemplatesSide = () => {
  return (
    <>
      <TemplateLinkA href="/portfolio-Template">Portfolio</TemplateLinkA>
      <hr className="line w-75 m-auto my-3" />
      <TemplateLinkB href="/CV-Template">CV/Resume</TemplateLinkB>
    </>
  );
};


const Sidebar = () => {
  const [isHidden, setIsHidden] = React.useState(true);

  const handleClick = () => {
    setIsHidden(false);
  };

  return (
    <>
      <div id="hideside" className="container sidebar">
        <div>
          <a href="/">
            <img alt="Sidebar Logo" className="Sidelogo" src={Logo2} />
          </a>
        </div>
        <div>
          <a href="#About" className="item link sidebar-height-m">
            <i className="bi bi-person-fill">
              <br />
              <span>About</span>
            </i>
          </a>
          <hr className="line w-100" />
          <a href="#Projects" className="item link sidebar-height-m">
            <i className="bi bi-lightbulb-fill">
              <br />
              <span>Projects</span>
            </i>
          </a>
          <hr className="line w-100" />
          <a href="#Experience" className="item link sidebar-height-m">
            <i className="bi bi-stack">
              <br />
              <span>Experience</span>
            </i>
          </a>
          <hr className="line w-100" />
          <a href="#Education" className="item link sidebar-height-m">
            <i className="bi bi-building-fill">
              <br />
              <span>Education</span>
            </i>
          </a>
          <hr className="line w-100" />
          <a href="#Contact" className="item link sidebar-height-m">
            <i className="bi bi-envelope-plus">
              <br />
              <span>Contact</span>
            </i>
          </a>
          <hr className="line w-100" />

          <TemplateSwitch onClick={handleClick} className=" sidebar-height-m">
            {isHidden ? (
              <i className="bi bi-columns">
                <br />
                <span>Website Templates</span>
              </i>
            ) : (
              <TemplatesSide />
            )}
          </TemplateSwitch>
          <hr className="line w-100" />
        </div>
      </div>
    </>
  );
};


export default Sidebar;
