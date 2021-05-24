import React, {useEffect, useState} from "react";
import "./Activities.scss"
import {InputNumber, InputSelect, TotalPrice} from "../MainCOMPONENTS/MainCOMPONENTS";
import {FormLabel} from "../MainCOMPONENTS/MainCOMPONENTS";
import {Link} from "react-router-dom";
import firebase, {db} from "../../firebase";

export const Activities = () => {
    const [prevState, setPrevState] = useState("0");
    const [typeOfActivity, setTypeOfActivity] = useState("Bungee Jumping");
    const [numberOfPeopleA, setNumberOfPeopleA] = useState("1");
    const [priceForOnePersonA, setPriceForOnePersonA] = useState("0");
    const [numberOfRepetitions, setNumberOfRepetitions] = useState("1");

    useEffect(() => {
        const fetchData = async () => {
            const allData = await db.collection(`Journeys`).get()
            const data = allData.docs.map(doc => doc.data())
            setPrevState(...data)
        }
        fetchData()
    }, []);


    let singleActivitySumPrice = parseFloat(priceForOnePersonA) * parseFloat(numberOfPeopleA) * parseFloat(numberOfRepetitions)
    let totalTripPrice = singleActivitySumPrice + parseFloat(prevState.extra) + parseFloat(prevState.housingSumPrice) + parseFloat(prevState.sumPrice)

    const handleClick = (e) => {
        firebase
            .firestore()
            .collection(`Activities`)
            .add({
                ...prevState,
                totalTripPrice: totalTripPrice,
                singleActivitySumPrice: singleActivitySumPrice,
                typeOfActivity: typeOfActivity,
                numberOfPeopleA: numberOfPeopleA,
                priceForOnePersonA: priceForOnePersonA,
                numberOfRepetitions: numberOfRepetitions
            })
            .then((doc) => {
                localStorage.setItem("activity_id", doc.id)
            })
    }

    return (

        <div className={"Activities"}>

            <TotalPrice value={totalTripPrice} />

            <div className={"form"}>
                {/*<p>ACTIVITIES</p>*/}
                <div className={"formElement"}>
                    <FormLabel name={"Type of activity"}/>
                    <InputSelect handleText={setTypeOfActivity} value1={"Bungee Jumping"}  value2={"Excursion"}  value3={"Museum"}  value4={"Waterpark"}  value5={"Other"}/>
                </div>
                <div className={"formElement"}>
                    <FormLabel name={"Number of people"}/>
                    <InputNumber handleText={setNumberOfPeopleA} placeholder={"How many people are attending"}/>
                </div>
                <div className={"formElement"}>
                    <FormLabel name={"Price for 1 person"}/>
                    <InputNumber handleText={setPriceForOnePersonA} placeholder={"For example: 250"}/>
                </div>
                <div className={"formElement"}>
                    {/*<FormLabel name={"If more than one time:"}/>*/}
                    <FormLabel name={"If more than one time:"}/>
                    <InputNumber handleText={setNumberOfRepetitions} placeholder={"Number of repetitions"}/>
                </div>
                <div className={"buttons"}>
                    <Link to="/MyJourneys"  onClick={handleClick} className={"btn"}>Submit</Link>
                    <Link to="/MyJourneys" onSubmit={handleClick} className={"btn"}>Add one more activity!</Link>
                </div>
                {/*<p>ACTIVITIES</p>*/}
            </div>
        </div>
    )
}