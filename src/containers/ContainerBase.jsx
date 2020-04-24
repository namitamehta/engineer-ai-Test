import React from "react";
import NavbarComponent from "../components/NavbarComponent";
import WeatherData from "./WeatherData";

function ContainerBase(props) {
  return (
    <>
      <NavbarComponent />
      <WeatherData />
    </>
  );
}

export default ContainerBase;
