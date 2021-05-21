import React  from "react";
import "./Attractions.scss"
import {InputNumber, InputSelect} from "../MainCOMPONENTS/MainCOMPONENTS";
import {FormLabel} from "../MainCOMPONENTS/MainCOMPONENTS";
import {TotalPrice} from "../MainCOMPONENTS/MainCOMPONENTS";
import {Link} from "react-router-dom";

export const Attractions = () => {


    return (
        <div className={"Attractions"}>
            <TotalPrice/>
            <div className={"form"}>
                <p>ATTRACTIONS</p>
                <div className={"formElement"}>
                    <FormLabel name={"Type of activity"}/>
                    <InputSelect value1={"Excursion"}  value2={"Bungee Jumping"}  value3={"Waterpark"}  value4={"Museum"}  value5={"Other"}/>
                </div>
                <div className={"formElement"}>
                    <FormLabel name={"Number of people"}/>
                    <InputNumber placeholder={"How many people are attending"}/>
                </div>
                <div className={"formElement"}>
                    <FormLabel name={"Price for 1 person"}/>
                    <InputNumber placeholder={"Price for 1 person for 1 attend"}/>
                </div>
                <div className={"formElement"}>
                    <FormLabel name={"Number of attends"}/>
                    <InputNumber placeholder={"The number of repetitions"}/>
                </div>
                <div className={"buttons"}>
                    <Link to="/MyJourneys" className={"btn"}>I am done</Link>
                    <Link to="/Attractions" className={"btn"}>Lets add one more activity!</Link>
                </div>
                <p>ATTRACTIONS</p>
            </div>
        </div>
    )
}