import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";

import { Card } from "../Components/Card/card";

export const TestPage = ({ history }) => {
  const [message, setMessage] = useState([]);

  useEffect(() => {
    fetch("/api")
      .then((response) => {
        if (response.ok) {
          return response.json();
        }
      })
      .then((data) => console.log(data));
  }, []);

  return (
    <>
      <Card />
    </>
  );
};

export default TestPage;
