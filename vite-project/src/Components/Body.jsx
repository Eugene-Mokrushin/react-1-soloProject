import React from "react";
import MailPhoto from "../images/Icon.svg";
import LinkedInPhoto from "../images/Vector.svg";

export default function Body() {
    return (
        <main className="body">
            <h1 className="name">Laura Smith</h1>
            <h2 className="job-position">Frontend Developer</h2>
            <h3 className="link-website">
                <a href="#">laurasmith.website</a>
            </h3>
            <div className="buttons">
                <div className="email">
                    <img src={MailPhoto} alt="email-photo" className="email--img" />
                    <p className="email--text">Email</p>
                </div>
                <div className="linkedIn">
                    <img src={LinkedInPhoto} alt="linkedIn-photo" className="linked--img" />
                    <p className="linkedIn--text">LinkedIn</p>
                </div>
            </div>
            <div className="main--text">
                <h4 className="about">About</h4>
                <p className="abot--text">I am a frontend developer with a particular interest in making things simple and automating daily tasks. I try to keep up with security and best practices, and am always looking for new things to learn.</p>
                <h4 className="interests">Interests</h4>
                <p className="interests--text">Food expert. Music scholar. Reader. Internet fanatic. Bacon buff. Entrepreneur. Travel geek. Pop culture ninja. Coffee fanatic.</p>
            </div>
        </main>
    )
}