
export class Employee {
    // private manager:Employee;
    public uuid: string;
    public firstName: string;
    public lastName: string;
    public gender: boolean;
    public phone: string;
    public address: string;
    public salary: number;
    public responsibilities: Array<String>;

    // public setManager(manager:Employee){
    //     this.manager = manager;
    // }
    // public getManager(){
    //     return this.manager;
    // }
    constructor(){
        this.uuid= '';
        this.firstName='';
        this.lastName='';
        this.gender=false;
        this.phone='';
        this.address='';
        this.salary=0;
        this.responsibilities=[];
    }
    
}
