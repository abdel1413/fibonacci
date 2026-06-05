function oldestPeople(people) {
    const maxAge = Math.max(...people.map(person => person.age));

    return people
        .filter(person => person.age === maxAge)
        .map(person => person.name);
}

// Example usage:
const people = [
    { name: "Alice", age: 30 },
    { name: "Bob", age: 40 },
    { name: "Charlie", age: 40 },
    { name: "David", age: 25 }
];

console.log(oldestPeople(people)); // Output: ["Bob", "Charlie"]