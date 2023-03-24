let student = {
    group: "211-325",
    last_name: "Травкина",
    first_name: "Ольга",
};

console.log('Список свойств:');
for (let key in student) {
    console.log(key);
}

console.log(`Студент ${student.last_name} ${student.first_name} учится в ${student.group} группе`);