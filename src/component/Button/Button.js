import React from "react";
import "../Button/Button.css";
// import { useNavigate } from "react-router-dom";

export default function Button({btnText, onClick}) {
  // const navigate = useNavigate();
  // const goToBuySell = () => {
  //   navigate(`/buy-sell?id={id}`);
  // };
  return (
    <React.Fragment>
      <button className="card-link" onClick={onClick}>
        <svg viewBox="0 0 24 24" fill="currentColor">
          <path d="M3 12l18-9-9 18-2-7-7-2z" />
        </svg>
        {btnText}
      </button>
    </React.Fragment>
  );
}
