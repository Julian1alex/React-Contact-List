import React from 'react';
import Users from "./Users";
import {Link} from "react-router-dom"


function Contact(props) {
const id = props.match.params.id
const Contact = Users.find(Contact => Contact.id === Number (id))

return (
    <div>
        <Link className="link" to="/">
        &larr;
        </Link>
    <div>
        <img src= {Contact.picture.large}/>
    </div>
    <div>
        <div><p>Name: {Contact.name.first} {Contact.name.last}</p></div>
        <div><p>Email: {Contact.email}</p></div>
        <div><p>Phone: {Contact.phone}</p></div>
        <div><p>Location: {Contact.location.city} {Contact.location.state}</p></div>
    </div>
    </div>
)
}

export default Contact