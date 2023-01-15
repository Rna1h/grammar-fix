import React from "react";
import "../styles/header.css";

export default function Header() {
    return (
        <div className="header">
            <div className="title">LetFix</div>
            <ul>
                <li>
                    Contact Us
                </li>
                <li>
                    Help
                </li>
            </ul>
        </div>
    );
}