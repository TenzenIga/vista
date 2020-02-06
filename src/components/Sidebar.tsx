import React, { useContext } from 'react'
import SidebarHeader from './SidebarHeader'
import { PatientContext } from '../context/context'

export default function Sidebar() {
  const {patient} = useContext(PatientContext);
    return (
                <aside className='sidebar'>
                   <SidebarHeader /> 
        <div className='sidebar__panel patient-info'>
            <div className='patient-info__item'> 
            <span >ФИО</span>
            <div className='patient-info__value'> {patient.name}</div> 
            </div>
            <div className='patient-info__item' >
            <span >Возраст</span>
            <div className='patient-info__value'>{patient.age} </div>
            </div>
          <div className="patient-info__item">
          <span >Диагноз</span>
            <div className='patient-info__value'>
            {patient.diagnosis}
            </div>
          </div>
          </div>
          </aside>
    )
}
