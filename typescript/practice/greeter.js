var Student = /** @class */ (function () {
    function Student(firstName, middleInitial, lastName) {
        this.firstName = firstName;
        this.middleInitial = middleInitial;
        this.lastName = lastName;
        this.fullName = firstName + " " + middleInitial + " " + lastName;
    }
    return Student;
}());
function greeter(person) {
    return "Hello, " + person.firstName + " " + person.lastName;
}
//let user = "Jane User";
//let user = {firstName: "Ikbhal", lastName: "Shaik"};
var user = new Student("Jane", "M.", "User");
document.body.textContent = greeter(user);
