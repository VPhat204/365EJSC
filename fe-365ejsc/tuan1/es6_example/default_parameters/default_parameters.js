const greet = (name = "Guest") => `Hello, ${name}!`;
console.log(greet()); //  Hello, Guest!
console.log(greet("Alice")); //  Hello, Alice!