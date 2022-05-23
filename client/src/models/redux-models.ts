export interface EmployeeModel{
    "_id":string
    "name": string,
    "gender": string,
    "salary": number,
    "dateOfBirth":Date,
}

export interface EmployeeModelData{
    "name": string,
    "gender": string,
    "salary": number,
    "dateOfBirth":Date,
}
export interface EmployeeArrayModel{
    all_employees:EmployeeModel[],
    employee:EmployeeModel,
    status:string,
}