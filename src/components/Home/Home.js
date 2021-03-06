import React from "react";
import "./Home.scss"
import {Link} from "react-router-dom";

export const Home = () => {


    return (
        <div className={"Home"}>
            <div className={"title"}>Planing journeys have never been easier!</div>
            <div className={"secDesc"}>You can start right now or check pre created journeys</div>
            <Link to="/NewJourney" className={"sec_btn"}>PLAN NEW JOURNEY</Link>
            <Link to="/AllJourneys" className={"sec_btn"}>All JOURNEYS</Link>
        </div>

    )
}