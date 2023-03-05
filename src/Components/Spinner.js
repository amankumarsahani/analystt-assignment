import React from "react";

function Spinner() {
  return (
    <div className="">
      <BorderSpinner />
      <GlowSpinner />
      <BorderSpinner />
      <GlowSpinner />
      <BorderSpinner />
    </div>
  );
}

function GlowSpinner() {
  return (
    <div
      className="spinner-grow"
      style={{ width: "3rem", height: "3rem" }}
      role="status"
    >
      <span className="visually-hidden">Loading...</span>
    </div>
  );
}

const BorderSpinner = () => {
  return (
    <div
      className="spinner-border "
      style={{ width: "3rem", height: "3rem" }}
      role="status"
    >
      <span className="visually-hidden">Loading...</span>
    </div>
  );
};


export { Spinner, GlowSpinner, BorderSpinner };
