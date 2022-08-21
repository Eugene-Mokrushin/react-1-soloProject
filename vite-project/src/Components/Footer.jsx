import React from "react";
import Twitter from "../images/Twitter Icon.svg";
import FaceBook from "../images/Facebook Icon.svg";
import Instagramm from "../images/Instagram Icon.svg";
import GitHub from "../images/GitHub Icon.svg";


export default function Footer() {
    return (
        <footer className="footer">
            <a href="#"><img src={Twitter} alt="twiiter-link" /></a>
            <a href="#"><img src={FaceBook} alt="facebook-link" /></a>
            <a href="#"><img src={Instagramm} alt="instagramm-link" /></a>
            <a href="#"><img src={GitHub} alt="github-link" /></a>
        </footer>
    )
}