class Employee {
id: number;
name:string;
phone: any;
email: string;

constructor(id: number, name: string, phone: any , email: string) {
    this.id = id;
    this.name = name;
    this.phone = phone;
    this.email = email;

}
    tostring(): string {
        let output = 
        'Employee record ID ${this.id}/n' +
        'Name: ${this.name}/n' + 
         'Contact information/n' +
         'phone: $[this.phone}' +
         'Email: ${this.eamil}';
         return output 

    }


}
let firstEmployee = new Employee(
    1,
    "Sadie Adler",
    8675434
    "sadie.adler@gmail.com"

)
console.log(firstEmployee.tostring())

class Bird {
    name: string;
    canFly: boolean;
    hasFeathers: boolean = true;

    constructor(name: string, canFly: boolean) {
        this.name = name;
        this.canFly = canFly;
    }
}
let birds: Array<Bird> = [
    new Bird ("Toucan", true),
    new Bird("Penguin", false),
    new Bird("Pidgeon", true),
    new Bird("Emu", false)


]
birds.forEach(())