import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

import logo from "../assets/logo.svg";

const Hero = () => {
    const {
        user,
        isAuthenticated,
        loginWithRedirect,
        logout,
      } = useAuth0();
    return (
        <div className="hero">
            <div className="hero-content">
                <div className="hero-text">
                    <p className="glassify">Keeping campus safe as a Community</p>
                    <h2>SAFE CAMPUS CONNECT</h2>
                    <button onClick={loginWithRedirect}>Join Us!</button>
                </div>
            </div>
            <div className="hero-bg">SC²</div>
        </div>)
};

export default Hero;
