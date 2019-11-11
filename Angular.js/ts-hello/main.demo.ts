function newFunction() {
    let isNewed: [number, string] = [1, 'a'];
    console.log(isNewed);
    let random: any;
    //  random = undefined;
    //  random =2;
    random = 'hish';
    //  random =true;
    let random1 = random.toUpperCase();
    console.log(random1);
}
newFunction();


function variable() {
    let test: number | boolean | string;
    test = 20;
    test = true;
    test = 'a';
    console.log(test);
}
variable();


function add(num1: number, num2: number = 10) {
    if (num2) {
        return num1 + num2;
    } else {
        return num1;
    }
}
console.log(add(15, 12));
console.log(add(15));


interface Person {
    fname: string,
    lname: string
}


// function fullname(person: { fname: string, lname: string }) 
function fullname(person: Person) {
    console.log(`${person.fname} ${person.lname}`);
}
let name1 = {
    fname: "Bruce",
    lname: "Wayne"
};
fullname(name1);


class Employee {
    employee_name: string;
    constructor(name: string) {
        this.employee_name = name;
    }
    greet() {
        console.log(`Good Morning ${this.employee_name}`);
    }
}

let emp1 = new Employee('hisham');
emp1.greet();


class Manager extends Employee{
    constructor(manager_name : string){
        super(manager_name);
    }
    delegetWork(){
        console.log("manager delegating task");
    }
}
let m1 = new Manager('Bruce');
m1.delegetWork();
m1.greet();
console.log(m1.employee_name);
