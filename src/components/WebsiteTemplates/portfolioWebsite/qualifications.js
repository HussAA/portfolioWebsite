import React, { useState } from "react";
import { styled } from "styled-components";
import classNames from "classnames";

const Education = () => {
  return (
    <>
      <div class="col-md-12">
        <div class="main-timeline">
          <div class="timeline">
            <div class="timeline-content">
              <div class="timeline-year">
                <span>2004</span>
              </div>
              <h3 class="title">High School Diploma</h3>
              <p class="description">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad
                adipisci culpa dolore explicabo fuga pariatur gjkfdgj quis
                reprehenderit tenetur vel!
              </p>
            </div>
          </div>
          <div class="timeline">
            <div class="timeline-content">
              <div class="timeline-year">
                <span>2008</span>
              </div>
              <h3 class="title">Photography Studies</h3>
              <p class="description">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad
                adipisci culpa dolore explicabo fuga pariatur gjkfdgj quis
                reprehenderit tenetur vel!
              </p>
            </div>
          </div>
          <div class="timeline">
            <div class="timeline-content">
              <div class="timeline-year">
                <span>2012</span>
              </div>
              <h3 class="title">Adobe Photoshop Certificate</h3>
              <p class="description">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad
                adipisci culpa dolore explicabo fuga pariatur gjkfdgj quis
                reprehenderit tenetur vel!
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

const Experience = () => {
  return (
    <>
      <div class="col-md-12">
        <div class="main-timeline">
          <div class="timeline">
            <div href="" class="timeline-content">
              <div class="timeline-year">
                <span>2014</span>
              </div>
              <h3 class="title">Sales Associate/Photographer</h3>
              <p class="description">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad
                adipisci culpa dolore explicabo fuga pariatur gjkfdgj quis
                reprehenderit tenetur vel!
              </p>
            </div>
          </div>
          <div class="timeline">
            <div href="" class="timeline-content">
              <div class="timeline-year">
                <span>2019</span>
              </div>
              <h3 class="title">Media and Creative Technology Manager</h3>
              <p class="description">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad
                adipisci culpa dolore explicabo fuga pariatur gjkfdgj quis
                reprehenderit tenetur vel!
              </p>
            </div>
          </div>
          <div class="timeline">
            <div href="" class="timeline-content">
              <div class="timeline-year">
                <span>2022</span>
              </div>
              <h3 class="title">Photography Teacher</h3>
              <p class="description">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad
                adipisci culpa dolore explicabo fuga pariatur gjkfdgj quis
                reprehenderit tenetur vel!
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

const EduButton = styled.div`
  display: inline-block;
  margin-inline: 25px;
  margin-bottom: 50px;
  font-size: 17pt;
  font-family: Arial, Helvetica, sans-serif;

  &:hover {
    color: rgb(4, 146, 134);
    cursor: pointer;
  }
`;
const ExpButton = styled.div`
  display: inline-block;
  margin-inline: 25px;
  margin-bottom: 50px;
  font-size: 17pt;
  font-family: Arial, Helvetica, sans-serif;

  &:hover {
    color: rgb(4, 146, 134);
    cursor: pointer;
  }
`;

const QualificationsHeading = styled.div`
  font-size: 35pt;
  text-align: center;
  margin-bottom: 100px;
  text-transform: uppercase;
  padding-left: 20px;
  padding-right: 20px;

  @media screen and (max-width: 600px) {
    font-size: 25pt;
  }
`;
const QualificationsTitle = styled.div`
  font-size: 12pt;
  color: #4d4d4d;
  font-family: system-ui;
  margin-bottom: 50px;
  text-transform: uppercase;
  text-align: center;
  @media screen and (max-width: 767px) {
    margin-bottom: 20px;
  }
`;
const Qualifications = () => {
  const [isEdu, setIsEdu] = useState(true);
  const [isExp, setIsExp] = useState(false);
  return (
    <>
      <QualificationsTitle id="Qualifications">packages</QualificationsTitle>
      <QualificationsHeading>
        what i've learned & experienced
      </QualificationsHeading>
      <div className="container text-center">
        <EduButton
          className={classNames({
            "edu-fill": isEdu,
          })}
          onClick={() => {
            setIsEdu(true);
            setIsExp(false);
          }}
        >
          Education
        </EduButton>

        <ExpButton
          className={classNames({
            "exp-fill": isExp,
          })}
          onClick={() => {
            setIsExp(true);
            setIsEdu(false);
          }}
        >
          Experience
        </ExpButton>
      </div>

      <div className="container">
        <div className="row text-center">
          {(isEdu && <Education />) || (isExp && <Experience />)}
        </div>
      </div>
    </>
  );
};

export default Qualifications;
