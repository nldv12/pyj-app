import React, {useEffect, useState} from "react";
import "./MainData.scss"
import {InputNumber, InputText, TotalPrice} from "../MainCOMPONENTS/MainCOMPONENTS";
import {FormLabel} from "../MainCOMPONENTS/MainCOMPONENTS";
import {Link, useHistory} from "react-router-dom";
import firebase, {db} from "../../firebase";



export const MainData = () => {
    const history = useHistory();

    const [destination, setDestination] = useState("");
    const [from, setFrom] = useState("");
    const [extra_price, setExtra_price] = useState("0");
    // const [check, setCheck] = useState(false);
    const [prevState, setPrevState] = useState("0");

    useEffect(() => {
        const fetchData = async () => {
            const allData = await db.collection(`Journeys`).doc(localStorage.getItem("journey_id")).get().then((snapshot) => {
                return snapshot.data()
            })
            setPrevState(allData)
        }
        fetchData()
    }, []);

    let totalTripPrice = parseFloat(extra_price) + parseFloat(prevState.housingSumPrice) + parseFloat(prevState.sumPrice)


    const handleClick = (e) => {
        firebase
            .firestore()
            .collection(`Journeys`)
            .doc(localStorage.getItem("journey_id"))
            .set({
                ...prevState,
                totalTripPrice: totalTripPrice.toFixed(),
                destination: destination,
                from: from,
                extra: extra_price,
            }).then((doc) => {
            history.push("/AllJourneys")
        })
    }
    return (
        <div className={"MainData"}>
            <TotalPrice value={totalTripPrice} />
            <div className={"form"}>
                <div className={"formElement"}>
                    <FormLabel name={"Destination"}/>
                    <InputText handleText={setDestination} placeholder={"Name of the city"}/>
                </div>
                <div className={"formElement"}>
                    <FormLabel name={"Traveling from"}/>
                    <InputText handleText={setFrom} placeholder={"Name of the city"}/>
                </div>
                <div className={"formElement"}>
                    <FormLabel name={"Any extra fees"}/>
                    <InputNumber handleText={setExtra_price} placeholder={"Type here sum of all extra fees"}/>
                </div>
                {/*<div className={"formElement checkbox"}>*/}
                {/*    <InputCheckbox name={"I would like to add activities"}/>*/}
                {/*</div>*/}
                {/*<Link to={check ? "/Activities" : "/AllJourneys"}>*/}
                {/*<Link to="/AllJourneys">*/}
                    <button onClick={handleClick} className={"btn"}>Next</button>
                {/*</Link>*/}
            </div>


        </div>

    )
}