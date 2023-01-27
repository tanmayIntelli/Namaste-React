import React from "react";
import { useNavigate } from "react-router-dom";

const Notfound = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className="error-img">
        <div className="error-content">
          <div id="err-msg-404">You've landed in the middle of nowhere</div>
          <div className="err-btn-404">
            <button onClick={() => navigate("/")}>
              Let's get you back home
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Notfound;
