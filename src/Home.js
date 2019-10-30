import React from "react"
import Users from "./Users"
import {Link} from "react-router-dom"

function Home(props) {
    return (
    <div>
    {Users.map(User => (
        <Link key={"Users-link-" + User.id} to={"/Contact/" + User.id}>
          <div><img src= {User.picture.thumbnail}/>{User.name.first} {User.name.last}</div>
        </Link>
        
    ))}
    </div>
    )}

export default Home