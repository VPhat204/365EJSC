type Name = { name: string };
type Age = { age: number };

type Person = Name & Age;

const person: Person = { name: "Alice", age: 22 };
