import React from 'react';
import './../../css/HomePage/Footer.css';
import links from "./../../db/footer-links";
import { Link } from "react-router-dom";

const Footer = () => {

    let col1Links = links.col1.map(link => 
        <div className="link" key={link.name}>
            <Link to={link.link}>{link.name} &nbsp; &nbsp; <i className={link.icon + " icons"} style={{fontSize: "20px"}}></i></Link>
        </div>
    );

    let col2Links = links.col2.map(link => 
        <div className="link" key={link}>
            <Link to="">{link}</Link>
        </div>
    );

    let col3Links = links.col3.map(link => 
        <div className="link" key={link.name}>
            <a href={link.link}>{link.name}&nbsp; &nbsp; <i className={link.icon + " icons"} style={{fontSize: "20px"}}></i></a>
        </div>
    );

    return (
        <div className="footer">
            <Link className="logo" to="/">
                <span className="my">my</span>
                <span className="Resume">Resume</span>
            </Link>
            <div className="linkings">
                <div className="col1">{col1Links}</div>
                <div className="col2">{col2Links}</div>
                <div className="col2">{col3Links}</div>
            </div>
            <p>Designed and Developed with <i className="fa fa-heart"></i> by <a href="#" style={{color: "var(--red)"}}>Steph Crown</a></p>
        </div>
    );
}

export default Footer;
