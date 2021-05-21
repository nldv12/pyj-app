import React, {useEffect, useState} from "react";
import "./MainData.scss"
import {InputNumber, InputText} from "../MainCOMPONENTS/MainCOMPONENTS";
import {FormLabel} from "../MainCOMPONENTS/MainCOMPONENTS";
import {Link} from "react-router-dom";
import firebase, {db} from "../../firebase";


export const MainData = () => {
    const [destination, setDestination] = useState("");
    const [from, setFrom] = useState("");
    const [extra_price, setExtra_price] = useState("0");

    const [check, setCheck] = useState(false);

    const [prevState, setPrevState] = useState("0");

    useEffect(() => {
        const fetchData = async () => {
            const allData = await db.collection('jr1').get()
            const data = allData.docs.map(doc => doc.data())
            setPrevState(...data)
        }
        fetchData()
    }, []);


    const handleClick = (e) => {
        firebase
            .firestore()
            .collection(`jr1`)
            .doc("1")
            .set({
                ...prevState,
                destination: destination,
                from: from,
                extra: extra_price,
            })
            .then(() => {
                // setTicket_price("")
            })

    }


    const InputCheckbox = ({name}) => {
        const [checked, setChecked] = useState(false);

        const handleCheck = () => {
            setCheck((!checked))
            setChecked(!checked)
        }

        return (
            <div className={"myCheck"}>
                <input onChange={handleCheck} className={"InputCheckbox"} type="checkbox" name={name}/>
                <label htmlFor={name}>{name}</label>

                <div>

                </div>
            </div>

        )
    }

    return (
        <div className={"MainData"}>
            <div className={"title"}>Answer following questions</div>

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
                <div className={"formElement checkbox"}>
                    <InputCheckbox name={"I would like to add attractions"}/>
                </div>


                {/*<Link to={checked"/Attractions"} className={"buttons"}>*/}
                <Link to={check ? "/Attractions" : "/MyJourneys"}>
                    <button onClick={handleClick} className={"btn"}>Next</button>
                </Link>
            </div>


        </div>

    )
}