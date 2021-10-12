import React, { useState, useEffect, useMemo, useRef } from "react";
import Title_logo from "./img/title.png";
import { Link, useHistory } from "react-router-dom";


const NavBar = () => {
    
        
    
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark" style={{width:"100%", backgroundColor:"black"}}>
      <a className="navbar-brand" href="/" style={{marginLeft:'3vw', width:"100px"}}><img src={Title_logo} alt=""  style={{width:"150px"}}/></a>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav" style={{position:'absolute', right:"4%"}}>
          <li className="nav-item">
            <a className="nav-link" href="/" style={{width:"100px"}}>Covid-19</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/genreanalysis" style={{width:"140px"}}>Genre-Analysis</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href={'/timeLine'+'/nationInfo?nation=South Korea'+'&nationCode=kr'} style={{width:"100px"}}>Timeline</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/dicerec" style={{width:"100px"}}>Dice-Rec</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/makers" >Makers</a>
          </li>
          
        </ul>
      </div>
    </nav>
  );
}

export default NavBar;