// import React, {useEffect, useState} from "react";
import React from "react";
import "./MainCOMPONENTS.scss"
// import {db} from "../../firebase";
// import firebase from "../../firebase";

// inputs
export const InputText = ({placeholder, handleText}) => {
    const handleChange = (e) => {
        handleText(e.target.value)
    }

    return (
        <>
            <input onChange={handleChange} className={"inputText"} type="text" placeholder={placeholder} name={placeholder}/>
        </>

    )
}
export const InputNumber = ({placeholder, handleText}) => {

    const handleChange = (e) => {
        handleText(e.target.value)
    }

    return (
        <>
            <input onChange={handleChange} className={"inputText"} type="number" placeholder={placeholder} name={placeholder}/>
        </>

    )
}
export const InputSelect = ({value1, value2, value3, value4, value5, handleText}) => {

    const handleChange = (e) => {
        handleText(e.target.value)
    }

    return (
        <>
            <select onChange={handleChange} className={"InputSelect"} name="name">
                <option value={value1}>{value1}</option>
                <option value={value2}>{value2}</option>
                <option value={value3}>{value3}</option>
                <option value={value4}>{value4}</option>
                <option value={value5}>{value5}</option>

            </select>
        </>

    )
}
// end inputs
export const FormLabel = ({name}) => {

    return (
        <>
            <div className={"label"}>{name}</div>
        </>

    )
}

export const TotalPrice = ({value}) => {

    return (
        <>
            <button key={"1"} className={"totalPrice"}>Total Price: {value.toFixed()}</button>
        </>

    )
}


// export const InputSelect4 = ({value1, value2, value3, value4}) => {
//
//     return (
//         <>
//             <select className={"InputSelect"} name="name">
//                 <option value={value1}>{value1}</option>
//                 <option value={value2}>{value2}</option>
//                 <option value={value3}>{value3}</option>
//                 <option value={value4}>{value4}</option>
//             </select>
//         </>
//
//     )
// }
// export const InputSelect3 = ({value1, value2, value3}) => {
//
//     return (
//         <>
//             <select className={"InputSelect"} name="name">
//                 <option value={value1}>{value1}</option>
//                 <option value={value2}>{value2}</option>
//                 <option value={value3}>{value3}</option>
//             </select>
//         </>
//
//     )
// }
// export const InputSelect2 = ({value1, value2}) => {
//
//     return (
//         <>
//             <select className={"InputSelect"} name="name">
//                 <option value={value1}>{value1}</option>
//                 <option value={value2}>{value2}</option>
//             </select>
//         </>
//
//     )
// }
// const InputCheckbox = ({name}) => {
//
//     return (
//         <div className={"myCheck"}>
//             <input className={"InputCheckbox"} type="checkbox" name={name}/>
//             <label htmlFor={name}>{name}</label>
//
//             <div>
//
//             </div>
//         </div>
//
//     )
// }
