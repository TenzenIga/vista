import React, { useState, useEffect} from 'react'
import TabBtn from './TabBtn'
import Table from './Table'
import axios from 'axios';

import {IPatient} from '../interface/interface';
import TableRow from './TableRow';



export default function Tab() {
    const [activeTab, setTab] = useState('present')
    const [activeRow, setActiveRow] = useState(0);
    // array of patients in hospital
    const [presents,setPresent ] = useState([])
    //array of released patients 
    const [released, setReleased] = useState([])
    
    useEffect(() => {
        //fetch remaining patients 
        const fetchPresents = async () =>{
            const result = await axios(
                'https://my-json-server.typicode.com/TenzenIga/fake-json/present',
            );
            setPresent(result.data)
        };

        //fetch released patients 
        const fetchReleased = async () =>{
            const result = await axios(
                'https://my-json-server.typicode.com/TenzenIga/quit/quit',
            );
            setReleased(result.data)
        };
        fetchPresents()
        fetchReleased()
     },[] )
     
    return (
        <div className="tab">
        <div className="tab__controller">
          <TabBtn text="Присутствуют" setTab = {()=>setTab('present')} activeTab = {activeTab} tabName='present' numberOfPatients={presents.length} />
          <TabBtn text="Выбывшие" setTab = {()=>setTab('released')} activeTab = {activeTab} tabName='released' numberOfPatients={released.length} />
          </div>     
          <Table activeTab = {activeTab} tableName='present' >
                  <thead>
                 <tr >
                  <th>№ ИБ</th>
                  <th>ФИО</th>
                  <th>Палата</th>
                </tr>
                 </thead>
          <tbody>
                {presents.map((item:IPatient)=> <TableRow key={item.historyNumber} item={item}  activeRow={activeRow} setActiveRow={setActiveRow} /> )}   
            </tbody>
        </Table>
          <Table activeTab = {activeTab} tableName='released'>
          <thead>
                 <tr >
                  <th>№ ИБ</th>
                  <th>ФИО</th>
                  <th>Причина выбытия</th>
                </tr>
                 </thead>
          <tbody>
          {released.map((item:IPatient)=> <TableRow key={item.historyNumber} item={item}  activeRow={activeRow} setActiveRow={setActiveRow} /> )}
        </tbody>
        </Table> 
</div>
    )
}
