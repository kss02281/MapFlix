import React, { Component } from "react";
import { useHistory } from "react-router-dom";
import NavBar from "../Components/NavBar";
import "../css/test.css";

const Dice = ({ history }) => {
  return (
    <div>
      <NavBar />
      <h1>DICE REC 페이지입니다!</h1>
    </div>
  );
};

export default Dice;
