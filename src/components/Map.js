/* eslint-disable prettier/prettier */
/* eslint-disable quotes */
import React from "react";
import styled from "styled-components";
import MapImg from "../assets/images/map.png";
import PText from "./PText";

const MapStyles = styled.div`
  background: url(${MapImg}) no-repeat;
  background-position: center;
  background-size: cover;
  min-height: 400px;
  .container {
    position: relative;
    min-height: 400px;
  }
  .map__card {
    position: absolute;
    right: 10%;
    bottom: 10%;
    padding: 2rem;
    background: var(--deep-dark);
    width: 100%;
    max-width: 300px;
    border-radius: 12px;
  }
  .map__card__heading {
    font-size: 3rem;
    margin-bottom: 1rem;
  }
  .map__card__link {
    display: inline-block;
    font-size: 1.6rem;
    margin-top: 3rem;
    text-decoration: underline;
  }
  @media only screen and (max-width: 768px) {
    background-position: 80% center;
  }
  @media only screen and (max-width: 400px) {
    .map__card {
      max-width: none;
      right: auto;
    }
  }
`;

export default function Map() {
  return (
    <MapStyles>
      <div className="container">
        <div className="map__card">
          <h3 className="map__card__heading">Here is me</h3>
          <PText>Rani talab, REWA(M.P.), India</PText>
          <a
            className="map__card__link"
            href="https://www.google.com/maps/place/Rani+Talab+Kalika+Mandir/@24.525686,81.2969467,16z/data=!4m22!1m16!4m15!1m6!1m2!1s0x39845a4d9bf5552d:0x27f4b583fbbfdf20!2sRani+Talab+Kalika+Mandir!2m2!1d81.2967189!2d24.5243197!1m6!1m2!1s0x39845a4d9bf5552d:0x27f4b583fbbfdf20!2sRani+Talab+Kalika+Mandir,+Pandan+Tola,+Rewa,+Madhya+Pradesh+486001!2m2!1d81.2967189!2d24.5243197!3e3!3m4!1s0x39845a4d9bf5552d:0x27f4b583fbbfdf20!8m2!3d24.5243197!4d81.2967189"
            target="_blank"
            rel="noreferrer"
          >
            Open in google map
          </a>
        </div>
      </div>
      {/* <img src={MapImg} alt="Map" /> */}
    </MapStyles>
  );
}
