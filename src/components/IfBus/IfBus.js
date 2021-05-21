import React, {useState} from "react";

// import {firebase} from "./../../firebase"
import "./IfBus.scss"
import {InputNumber, TotalPrice} from "../MainCOMPONENTS/MainCOMPONENTS";
import {FormLabel} from "../MainCOMPONENTS/MainCOMPONENTS";
import {Link} from "react-router-dom";
import firebase from "../../firebase";


export const IfBus = () => {
    const [ticket_price, setTicket_price] = useState("");
    const [housing_price, setHousing_price] = useState("");
    const [food_price, setFood_price] = useState("");
    const [extra_price, setExtra_price] = useState("");

    let busSumPrice = parseFloat(ticket_price) + parseFloat(housing_price) + parseFloat(food_price) + parseFloat(extra_price)

    const handleClick = (e) => {
        firebase
            .firestore()
            .collection(`jr2`)
            .add({
                ticket: ticket_price,
                housing: housing_price,
                food: food_price,
                extra: extra_price,
                SumPrice: busSumPrice,
                typeOFtransport: "bus"
            })
            .then(() => {
                // setTicket_price("")
            })

        // console.log(`ticket price:  ${ticket_price}`)
        // console.log(`housing price:  ${housing_price}`)
        // console.log(`food price:  ${food_price}`)
        // console.log(`extra price:  ${extra_price}`)
    }

    return (
        <div className={"IfBus"}>
            <TotalPrice/>
            <div className={"form"}>
                <p>BUS</p>
                <div className={"formElement"}>
                    <FormLabel name={"Price for ticket"}/>
                    <InputNumber handleText={setTicket_price} placeholder={"Price for single return ticket"}/>
                </div>
                <div className={"formElement"}>
                    <FormLabel name={"Price for housing"}/>
                    <InputNumber handleText={setHousing_price} placeholder={"Price for 1 person per 1 night"}/>
                </div>
                <div className={"formElement"}>
                    <FormLabel name={"Price for food"}/>
                    <InputNumber handleText={setFood_price} placeholder={"Price for 1 person for 1 day"}/>
                </div>
                <div className={"formElement"}>
                    <FormLabel name={"Any extra fees"}/>
                    <InputNumber handleText={setExtra_price} placeholder={"Type here sum of all extra fees"}/>
                </div>
                <Link to="/MainData">
                    <button onClick={handleClick} className={"btn"}>Next</button>
                </Link>
                <p>BUS</p>
            </div>

        </div>
    )
}