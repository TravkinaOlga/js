'use strict'

let student = {
    group: "211-325",
    last_name: "Травкина",
    first_name: "Ольга",
};

let array = [];
for (let key in student) {
    array.push(key);
}

console.log(`Список свойств: ${array.join(', ')}`);
console.log(`Студент ${student.last_name} ${student.first_name} учится в ${student.group} группе`);