import React, { Component } from "react";
import { useHistory } from "react-router-dom";
import NavBar from "../Components/NavBar";
import "../css/test.css";

const Covid19 = ({ history }) => {
  return (
    <div>
      <NavBar />
      <h1>IMPACT OF COVID-19 페이지입니다!</h1>
    </div>
  );
};

export default Covid19;
