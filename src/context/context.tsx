import React, { createContext, useState} from "react";
import {IPatientInfo} from '../interface/interface';


interface IContext{
    patient:IPatientInfo
    setPatient:Function
}
const context:IContext = {
    patient:{name:'', age:'',diagnosis:''},
    setPatient:()=>{}
}
export const PatientContext = createContext<IContext>(context)

export function PatientProvider(props:JSX.ElementChildrenAttribute):JSX.Element{
    const [patient, setPatient] = useState()

    return <PatientContext.Provider value={{patient, setPatient}}>
        {props.children}
    </PatientContext.Provider>
}