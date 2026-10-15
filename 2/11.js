function groupByAge(users) {
    return users.reduce((groups, user) => {
        const age = user.age;

        if (!groups[age]) {
            groups[age] = [];
        }

        groups[age].push(user);

        return groups;
    }, {});
}

const users = [
    { name: "Анна", age: 20 },
    { name: "Иван", age: 25 },
    { name: "Мария", age: 20 },
    { name: "Пётр", age: 25 },
    { name: "Олег", age: 30 }
];
console.log(groupByAge(users));
{
    20; [
        { name: "Анна", age: 20 },
        { name: "Мария", age: 20 }
    ],
    25; [
        { name: "Иван", age: 25 },
        { name: "Пётр", age: 25 }
    ],
    30; [
        { name: "Олег", age: 30 }
    ]
}