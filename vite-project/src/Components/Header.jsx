import React from "react";
import MainPhoto from "../images/main_img.png";

export default function Header() {
    return (
        <header className="header">
            <img src={MainPhoto} alt="main photo" />
        </header>
    )
}