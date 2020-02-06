import React, { useContext } from 'react'
import {IPatient} from '../interface/interface';
import { PatientContext } from '../context/context';
import {calculateAge} from '../util/countAge';

interface props{
    item:IPatient
    setActiveRow:Function
    activeRow:number
}

export default function TableRow(props:props) {
    const {historyNumber, firstName, lastName, birthDate,  diagnosis, bedNumber, cause} = props.item;
    const {activeRow, setActiveRow} = props;    
    const {setPatient} = useContext(PatientContext)

    
    const handleClick = ()=>{
        //onclick we set clobal user info state via context API
        setPatient({
            name:firstName + lastName,
            age:calculateAge(birthDate),
            diagnosis:diagnosis
            })
        // and add active css class 
            setActiveRow(historyNumber)
    }
    let className = '';
    if(activeRow === historyNumber){
        className ='active'
    }
    return (
            <tr  className={className} key={historyNumber} onClick={()=>handleClick()}>
                <td>{historyNumber}</td>
                <td>{`${firstName} ${lastName}`}</td>
                {cause ?
                    <td>{cause}</td>
                    : 
                    <td>{bedNumber}</td>}
            </tr>
        
    )
}
