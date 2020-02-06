import React, { FunctionComponent } from 'react'

type tableProps = {
    tableName:string
    activeTab:string
}
const Table:FunctionComponent<tableProps> = ({activeTab, tableName, children})=> {
    let className = 'patients-table'
    if(activeTab === tableName){
        className+=' patients-table__active'
    }
    return (
        <table className={className} >
               {children}
        </table>
     
    )
}

export default Table;