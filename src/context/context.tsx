import React, { createContext, useState} from "react";
import {IPatientInfo} from '../interface/interface';


interface IContext{
    patient:IPatientInfo
    setPatient:Function
}

export const PatientContext = createContext<Partial<IContext>>({})

export function PatientProvider(props:JSX.ElementChildrenAttribute):JSX.Element{
    const [patient, setPatient] = useState({} as IPatientInfo)

    return <PatientContext.Provider value={{patient, setPatient}}>
        {props.children}
    </PatientContext.Provider>
}