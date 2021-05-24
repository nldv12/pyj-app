import React, {useEffect, useState} from "react";
import "./SelectedJourney.scss"
// import {InputNumber, InputCheckbox, InputSelect5} from "../MainCOMPONENTS/MainCOMPONENTS";
// import {FormLabel} from "../MainCOMPONENTS/MainCOMPONENTS";
// import {TotalPrice} from "../MainCOMPONENTS/MainCOMPONENTS";
// import {Link, useParams} from "react-router-dom";
import {Link} from "react-router-dom";
import {db} from "../../firebase";
// import firebase from "../../firebase";

export const SelectedJourney = () => {
    // const {id} = useParams();
    const [price, setPrice] = useState([]);

    const [from, setfrom] = useState("");
    const [destination, setdestination] = useState("");
    const [numberOfPeople, setnumberOfPeople] = useState([]);
    const [typeOFtransport, settypeOFtransport] = useState([]);
    const [numberOfNights, setnumberOfNights] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const allData = await db.collection(`Journeys`).get()
            const data = allData.docs.map(doc => doc.data())
            //variables
            const from = data.map(total => total.from);
            setfrom(from)
            const destination = data.map(total => total.destination);
            setdestination(destination)
            const numberOfPeople = data.map(total => total.numberOfPeople);
            setnumberOfPeople(numberOfPeople)
            const typeOFtransport = data.map(total => total.typeOFtransport);
            settypeOFtransport(typeOFtransport)
            const numberOfNights = data.map(total => total.numberOfNights);
            setnumberOfNights(numberOfNights)

            const extra = data.map(total => total.extra);
            const housingSumPrice = data.map(total => total.housingSumPrice);
            const sumPrice = data.map(total => total.sumPrice);

            const totalTripPrice = parseFloat(extra) + parseFloat(housingSumPrice) + parseFloat(sumPrice)
            setPrice(totalTripPrice)
        }
        fetchData()

    }, []);
    const type = typeOFtransport[0];

    return (


        <div className={"SelectedJourney"}>
            <div className={"selected_container"}>
                <div className={"single_element first"}>
                    <div className={"picto_money"}> </div>
                    <div className={"text price"}>{price}</div>
                </div>
                <div className={"single_element second"}>
                    <div className={type === "Car" ? "picto picto_car" : type === "Bus" ? "picto picto_bus" : "picto picto_plane"}> </div>
                    <div className={"picto_distance"}> </div>
                </div>
                <div className={"single_element third"}>
                    <div className={"from"}>{from}</div>
                    <div> </div>
                    <div className={"destination"}>{destination}</div>
                </div>
                <div className={"last_line"}>
                    <div className={"single_element"}>
                        <div className={" picto_person"}> </div>
                        <div className={"text person"}>{numberOfPeople}</div>
                    </div>
                    <div className={"single_element"}>
                        <div className={" picto_day"}> </div>
                        <div className={"text days"}>{numberOfNights} nights</div>
                    </div>
                </div>
            </div>
            <Link to="/SingleActivities/:id" className={"btn btn_blue"}>Check Activities</Link>
            {/*<Link to="/singleHousing/:id" className={"btn btn_blue"}>Check Accommodation</Link>*/}
        </div>


    )
}