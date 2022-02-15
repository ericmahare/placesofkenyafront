import React from "react";
import { useNavigate } from "react-router-dom";
const Header = () =>{
  const navigate = useNavigate();
  return(
    <header>
      <div className="inner-header">
          <div className="hero text-center">
            <h2 className="text-white display-2 fw-bold">places of kenya</h2>
            <h3 className="text-white fw-bold">Safaris, Events and Hotels</h3>
            <button className="btn  btn-success btn-lg mt-3" onClick={()=>navigate("/contact")}>Get a quote</button>
          </div>
      </div>
    </header>
  )
}
export default Header