
//interface for fetched data
export interface IPatient{
    historyNumber:number
    firstName:string
    lastName:string
    bedNumber:number
    diagnosis:string
    birthDate:string
    cause:string
}

//interface for patient info
export interface IPatientInfo{
    name:string
    age:number|''
    diagnosis:string
}