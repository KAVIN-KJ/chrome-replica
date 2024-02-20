import React from "react";
import './Styles/Contact.css'
import Card from "./Card";
export default function Contact (){
    return(
        <div>
        <div className="Contact">
            <Card name="Kavin Raja K J" desc="Ph : +91 9994755190" />
            <Card name="Sakresh S" desc="Ph : +91 6369763958" />
            <Card name="Sakthivel " desc="Ph : +91 6379567820" />
        </div>
        </div>
    )
}
