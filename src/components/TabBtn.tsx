import React, { FunctionComponent } from 'react'


type TabBtnProps = {
    text:string
    setTab:(event: React.MouseEvent<HTMLButtonElement>)=>void
    activeTab:string
    tabName:string
    numberOfPatients:number
}

 const TabBtn : FunctionComponent<TabBtnProps> = ({text, setTab, activeTab, tabName, numberOfPatients})=> {
    let className = 'tab-btn '
    if(activeTab === tabName){
        className+=' tab-btn__active'
    }
    return (
    <button className={className} onClick={setTab}>{text}({numberOfPatients})</button>
    )
}

export default TabBtn;