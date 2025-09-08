import React from "react";
import "../Button/Button.css";

export default function Button({btnText}) {
  return (
    <React.Fragment>
      <a className="card-link" href="#">
        <svg viewBox="0 0 24 24" fill="currentColor">
          <path d="M3 12l18-9-9 18-2-7-7-2z" />
        </svg>
        {btnText}
      </a>
    </React.Fragment>
  );
}
