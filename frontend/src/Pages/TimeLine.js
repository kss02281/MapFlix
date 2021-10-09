import React, { useState, useEffect } from "react";
import { Button } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import { useLocation } from "react-router";

const TimeLine = ({ history, location }) => {
  const nation = location.props.nation;
  const nationCode = location.props.nationCode;
  return (
    <div>
      <h1>나는 타임라인이야!</h1>
      <h2>{nation}</h2>
      <h2>{nationCode}</h2>
      <Button
        onClick={() => {
          history.push("/");
        }}
      >
        Go To Main Page
      </Button>
    </div>
  );
};

export default TimeLine;
