import React, {useEffect, useState} from "react";
import "./SelectedJourney.scss"
// import {InputNumber, InputCheckbox, InputSelect5} from "../MainCOMPONENTS/MainCOMPONENTS";
// import {FormLabel} from "../MainCOMPONENTS/MainCOMPONENTS";
// import {TotalPrice} from "../MainCOMPONENTS/MainCOMPONENTS";
// import {Link, useParams} from "react-router-dom";
import {Link} from "react-router-dom";
import {db} from "../../firebase";
// import firebase from "../../firebase";
import name_of_collection from "../../App"


export const SelectedJourney = () => {
    // const {id} = useParams();
    const [price, setPrice] = useState([]);
    const [numberOfPeople, setnumberOfPeople] = useState([]);
    const [numberOfNights, setnumberOfNights] = useState([]);
    const [from, setfrom] = useState([]);
    const [destination, setdestination] = useState([]);
    const [typeOFtransport, settypeOFtransport] = useState("");

    useEffect(() => {
        const fetchData = async () => {
            const allData = await db.collection(name_of_collection).get()
            const data = allData.docs.map(doc => doc.data())
            //variables
            const numberOfNights = data.map(total => total.numberOfNights);
            const from = data.map(total => total.from);
            const destination = data.map(total => total.destination);
            const numberOfPeople = data.map(total => total.numberOfPeople);
            const typeOFtransport = data.map(total => total.typeOFtransport);
            const extra = data.map(total => total.extra);
            const housingSumPrice = data.map(total => total.housingSumPrice);
            const tripTotalPrice = parseFloat(extra) + parseFloat(housingSumPrice);
            setPrice(tripTotalPrice)
            setnumberOfPeople(numberOfPeople)
            setfrom(from)
            setdestination(destination)
            setnumberOfNights(numberOfNights)
            settypeOFtransport(typeOFtransport)
        }
        fetchData()

    }, []);
    const type = typeOFtransport[0];

    return (


        <div className={"SelectedJourney"}>
            <div className={"selected_container"}>
                <div className={"single_element"}>
                    <div className={"picto_money"}> </div>
                    <div className={"text price"}>{price}zł</div>
                </div>
                <div className={"single_element"}>
                    <div className={"text city"}>{from}</div>
                    <div className={"two_icons"}>
                        <div className={type ==="Car" ? "picto picto_car" : type ==="Bus" ? "picto picto_bus" : "picto picto_plane"}> </div>
                        <div className={"picto_distance"}> </div>
                    </div>
                    <div className={"text city"}>{destination}</div>
                </div>
                <div className={"last_line"}>
                    <div className={"single_element"}>
                        <div className={" picto_person"}></div>
                        <div className={"text person"}>{numberOfPeople}</div>
                    </div>
                    <div className={"single_element"}>
                        <div className={" picto_day"}></div>
                        <div className={"text days"}>{numberOfNights} nights</div>
                    </div>
                </div>
            </div>
            <Link to="/singleAttractions" className={"btn btn_small"}>Check Attractions</Link>


        </div>


    )
}