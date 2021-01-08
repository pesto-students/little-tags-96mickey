import { StyledLink } from "components/styled-link";
import React from "react";
import "./thank-you.css";

export const ThankYou = () => {
  return (
    <div className="text-center">
      <div className="meat-boy-wrapper">
        <div id="meat_boy">
          <div id="shadow"></div>
          <div id="left-hand"></div>
          <div id="right-hand"></div>
          <div id="left-leg"></div>
          <div id="right-leg"></div>
          <div id="body">
            <div id="deformation1"></div>
            <div id="deformation2"></div>
            <div id="deformation3"></div>
            <div id="deformation4"></div>
            <div id="deformation5"></div>
            <div id="deformation6"></div>
            <div id="deformation7"></div>
            <div id="deformation8"></div>
            <div id="left-eye"></div>
            <div id="right-eye"></div>
            <div id="dimple"></div>
            <div id="smiley"></div>
          </div>
        </div>
      </div>
      <h1 className="display-2">Thank You!</h1>
      <p className="lead">
        We hope your experience was awesome and we can’t wait to{" "}
        <strong>see you again soon</strong>.
      </p>
      <hr />
      <p className="lead">
        <StyledLink className="btn btn-lg" to="/">
          <button className="btn btn-primary btn-lg" type="ghost">Continue to homepage</button>
        </StyledLink>
      </p>
    </div>
  );
};
