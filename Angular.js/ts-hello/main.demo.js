var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
function newFunction() {
    var isNewed = [1, 'a'];
    console.log(isNewed);
    var random;
    //  random = undefined;
    //  random =2;
    random = 'hish';
    //  random =true;
    var random1 = random.toUpperCase();
    console.log(random1);
}
newFunction();
function variable() {
    var test;
    test = 20;
    test = true;
    test = 'a';
    console.log(test);
}
variable();
function add(num1, num2) {
    if (num2 === void 0) { num2 = 10; }
    if (num2) {
        return num1 + num2;
    }
    else {
        return num1;
    }
}
console.log(add(15, 12));
console.log(add(15));
// function fullname(person: { fname: string, lname: string }) 
function fullname(person) {
    console.log(person.fname + " " + person.lname);
}
var name1 = {
    fname: "Bruce",
    lname: "Wayne"
};
fullname(name1);
var Employee = /** @class */ (function () {
    function Employee(name) {
        this.employee_name = name;
    }
    Employee.prototype.greet = function () {
        console.log("Good Morning " + this.employee_name);
    };
    return Employee;
}());
var emp1 = new Employee('hisham');
emp1.greet();
var Manager = /** @class */ (function (_super) {
    __extends(Manager, _super);
    function Manager(manager_name) {
        return _super.call(this, manager_name) || this;
    }
    Manager.prototype.delegetWork = function () {
        console.log("manager delegating task");
    };
    return Manager;
}(Employee));
var m1 = new Manager('Bruce');
m1.delegetWork();
m1.greet();
console.log(m1.employee_name);
