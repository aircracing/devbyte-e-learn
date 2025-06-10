# JavaScript Basics

## 1. Introduction to JavaScript

### Overview

#### What is JavaScript?
- JavaScript (JS) is a high-level, interpreted programming language.
- It is commonly used for web development to create interactive and dynamic web pages.
- JS runs on the client-side (in the browser) but can also run on the server-side (using Node.js).
- JavaScript code is executed in the browser or server without the need for compilation.

## 2. Data Types in JavaScript

### Primitive & Reference Types

#### Primitive Types
- String: A sequence of characters, e.g., 'Hello, World!'.
- Number: Numeric values (integers and floats), e.g., 42, 3.14.
- Boolean: Represents 'true' or 'false'.
- Undefined: A variable declared but not assigned a value.
- Null: Represents the intentional absence of any object value.
- Symbol: A unique and immutable value, often used as property keys.
- BigInt: Represents large integers beyond the Number range.

#### Reference Types
- Object: Collections of key-value pairs, e.g., {name: 'Alice', age: 30}.
- Array: Ordered collection of values, e.g., [1, 2, 3, 4].
- Function: Callable block of code.

## 3. Variables and Constants

### Declaring Variables

#### Declaration Methods
- var: Declares a variable, function-scoped or globally-scoped.
- let: Declares a block-scoped variable.
- const: Declares a block-scoped constant.

#### Example
- let name = 'Alice';
- const age = 25;
- var isActive = true;

#### Hoisting
- var declarations are hoisted to the top of their scope, but initialization stays in place.
- let and const are hoisted but not initialized.

## 4. Operators

### Arithmetic, Comparison & Logical

#### Arithmetic Operators
- + (Addition), - (Subtraction), * (Multiplication), / (Division), % (Modulo).

#### Comparison Operators
- == (Equal), === (Strict Equal), != (Not Equal), !== (Strict Not Equal), > (Greater Than), < (Less Than).

#### Logical Operators
- && (Logical AND), || (Logical OR), ! (Logical NOT).

#### Assignment Operators
- = (Assign), +=, -=, *=, /=, etc.

## 5. Functions

### Declaring and Using Functions

#### Function Declaration
- `function greet(name) { return \`Hello, ${name}\`; }`

#### Function Expression
- `const greet = function(name) { return \`Hello, ${name}\`; };`

#### Arrow Function
- `const greet = (name) => \`Hello, ${name}\`;`

#### Parameters & Return
- Functions can accept parameters and return a value.

#### Anonymous Functions
- Functions without a name, typically used as arguments or callbacks.

## 6. Control Flow

### Conditionals & Loops

#### Conditional Statements
- if: Executes a block of code if the condition is true.
- else: Executes an alternative block if the condition is false.
- else if: Checks multiple conditions.
- Example:  
  `if (x > 10) { console.log('Greater than 10'); } else { console.log('Less than or equal to 10'); }`

#### Switch Statement
- Used for multiple condition checks based on a single variable.  
  Example:
  ```js
  switch (day) {
    case 1: console.log('Monday'); break;
    case 2: console.log('Tuesday'); break;
    default: console.log('Invalid day');
  }
Loops
for: Repeats code a specific number of times.

while: Repeats code while a condition is true.

do...while: Executes code once before checking the condition.

## 7. Arrays
### Creating and Manipulating Arrays
### Creating Arrays
Literal notation: let arr = [1, 2, 3, 4];

Constructor notation: let arr = new Array(1, 2, 3);

### Common Methods
.push(): Adds element to the end of the array.

.pop(): Removes the last element.

.shift(): Removes the first element.

.unshift(): Adds element to the beginning.

.map(): Creates a new array by applying a function to each element.

.filter(): Creates a new array with elements that pass the test.

.reduce(): Accumulates values based on a function.

### Array Iteration
forEach(), map(), filter(), and other methods.

# JavaScript Syntax Guide

## 1. JavaScript Syntax

### Overview

#### What is JavaScript Syntax?
- JavaScript syntax refers to the set of rules that define a correctly structured JavaScript program.
- It includes rules for creating variables, functions, loops, and more.
- The syntax determines how the code is written, making it interpretable by the JavaScript engine.

## 2. Statements and Expressions

### Understanding the Basics

#### Statements
- A statement in JavaScript is an instruction that performs an action, such as declaring a variable or creating a loop.
- Statements end with a semicolon (`;`). For example: `let x = 5;`.
- Common types of statements include assignments, conditionals, and loops.

#### Expressions
- An expression is a combination of values, variables, operators, and functions that evaluates to a value.
- For example, `x + y` is an expression that results in the sum of `x` and `y`.
- Expressions can be used anywhere JavaScript expects a value, such as in assignments and return statements.

## 3. Variables and Constants

### Declaring Variables

#### var, let, const
- In JavaScript, variables are declared using the keywords `var`, `let`, or `const`.
- `var` is function-scoped, whereas `let` and `const` are block-scoped.
- `let` is used for variables that can be reassigned, while `const` is used for variables that cannot be reassigned after declaration.

#### Variable Assignment
- Variables are assigned values using the assignment operator (`=`).
- Example: `let age = 30;` assigns the value 30 to the variable `age`.

## 4. Functions

### Defining and Calling Functions

#### Function Declaration
- Functions are defined using the `function` keyword, followed by the function name, parameters, and a block of code.
- Example: `function greet(name) { return 'Hello ' + name; }`.

#### Function Expression
- A function expression defines a function and assigns it to a variable.
- Example: `const greet = function(name) { return 'Hello ' + name; };`.

#### Arrow Functions
- Arrow functions are a shorthand syntax for writing functions.
- Example: `const greet = (name) => 'Hello ' + name;`.

## 5. Comments

### Adding Comments to Code

#### Single-line Comments
- Single-line comments start with `//`.
- Example: `// This is a single-line comment`.

#### Multi-line Comments
- Multi-line comments start with `/*` and end with `*/`.
- Example: `/* This is a multi-line comment */`.

## 6. Data Types

### Primitive Data Types

#### String
- A string is a sequence of characters enclosed in single (') or double (") quotes.
- Example: `let name = 'Alice'`.

#### Number
- A number represents both integer and floating-point values.
- Example: `let age = 30;` or `let price = 3.99;`.

#### Boolean
- A boolean represents a value of either `true` or `false`.
- Example: `let isActive = true;`.

#### Undefined
- A variable declared but not assigned a value is `undefined`.
- Example: `let x;` sets `x` to `undefined`.

#### Null
- The `null` type represents the intentional absence of any object value.
- Example: `let person = null;`.

#### Symbol
- Symbols are unique and immutable values that can be used as property keys.
- Example: `let sym = Symbol('description');`.

#### BigInt
- BigInt is a primitive type that can represent integers larger than `Number.MAX_SAFE_INTEGER`.
- Example: `let bigNumber = 9007199254740991n;`.

## 7. Control Flow

### Conditional Statements

#### if Statement
- The `if` statement executes a block of code if a specified condition is true.
- Example: `if (x > 10) { console.log('Greater than 10'); }`.

#### else Statement
- The `else` statement executes an alternative block of code if the `if` condition is false.
- Example: `else { console.log('Less than or equal to 10'); }`.

#### else if Statement
- The `else if` statement allows you to check multiple conditions.
- Example: `else if (x == 10) { console.log('Equal to 10'); }`.

## 8. Loops

### Looping Structures

#### for Loop
- The `for` loop repeats a block of code a specified number of times.
- Example: `for (let i = 0; i < 5; i++) { console.log(i); }`.

#### while Loop
- The `while` loop executes a block of code as long as a specified condition is true.
- Example: `while (x < 10) { console.log(x); x++; }`.

#### do...while Loop
- The `do...while` loop executes the block of code once before checking the condition.
- Example: `do { console.log(x); x++; } while (x < 10);`.

## 9. Blocks of Code

### Using Braces `{}`

#### Code Blocks
- A block of code is a group of statements enclosed in curly braces `{}`.
- Code blocks are used in functions, conditionals, and loops to group multiple statements together.

## 10. Semicolons

### Importance of Semicolons

#### Semicolon Usage
- Semicolons are used to separate statements in JavaScript.
- Example: `let x = 5; let y = 10;`.

#### Automatic Semicolon Insertion (ASI)
- JavaScript has Automatic Semicolon Insertion (ASI), which means it can insert semicolons where they are omitted.
- However, it is considered good practice to explicitly add semicolons.

# JavaScript Comments

## 1. JavaScript Comments

### Overview

#### What are JavaScript Comments?
- JavaScript comments are used to explain the code, making it easier to understand.
- Comments are ignored by the JavaScript engine, and they don’t affect the execution of the code.
- They are primarily used to annotate and document code, making it more readable for developers.

## 2. Single-line Comments

### Using `//`

#### Syntax
- Single-line comments start with `//`.
- Everything after `//` on that line is considered a comment.
- Example: `// This is a single-line comment`.

#### Usage
- Single-line comments are typically used for short explanations or comments within a line of code.
- Example: `let x = 10; // This is the value of x`.

## 3. Multi-line Comments

### Using `/* */`

#### Syntax
- Multi-line comments start with `/*` and end with `*/`.
- Everything between `/*` and `*/` is considered a comment, even if it spans multiple lines.
- Example: `/* This is a multi-line comment */`.

#### Usage
- Multi-line comments are typically used when you need to comment out larger blocks of code or provide detailed explanations.
- Example:
  ```js
  /* This block of code is commented out
     and will not be executed */


#### 4. Nested Comments
Restrictions on Nesting Comments
JavaScript doesn’t support nested multi-line comments
You cannot nest multi-line comments within each other.
Example:
```
/* /* This is a nested comment */ */
```
#### Workaround for Nested Comments
If you need to nest comments, you can use single-line comments inside a multi-line comment block.
Example:
```
/* This is a multi-line comment
   // This is a single-line comment inside it
*/
```
# JavaScript Variables

## Overview

### What are Variables?
- A variable is a container for storing data values in JavaScript.
- Variables allow us to store data that can be used and modified throughout the code.
- In JavaScript, variables can hold different types of data like numbers, strings, objects, etc.

### Why Use Variables?
- Variables provide a way to store values that can change during the execution of the program.
- They make code more flexible, reusable, and easier to read by giving meaningful names to values.

# 2. Declaring Variables

## Using `var`, `let`, and `const`

### `var`
- `var` is the oldest way to declare a variable in JavaScript.
- `var` is function-scoped, which means it is visible throughout the function in which it is declared.
- However, `var` has some issues with scoping, leading to potential bugs, so it is generally not recommended in modern JavaScript.

### `let`
- `let` is a block-scoped variable declaration introduced in ECMAScript 6 (ES6).
- A `let` variable is only accessible within the block (e.g., inside a loop or conditional) where it is defined.
- It allows you to reassign the variable's value.

### `const`
- `const` is also block-scoped like `let`, but it is used to declare variables whose values cannot be reassigned.
- `const` must be assigned a value at the time of declaration, and that value cannot be changed later.
- It is used for constants or values that should not change.

# 3. Variable Scope

## Understanding Scope

### Global Scope
- A variable declared outside any function or block has global scope.
- Global variables can be accessed from anywhere in the code.
- Example: `var globalVar = 'I am global';`

### Local Scope
- A variable declared inside a function or block has local scope.
- Local variables are only accessible within the function or block they are declared in.
- Example: `let localVar = 'I am local';`

### Block Scope
- Variables declared using `let` and `const` are block-scoped, meaning they are only accessible within the block of code they are declared in.
- Example: `if (true) { let blockVar = 'I am block-scoped'; }`

# 4. Variable Hoisting

## How JavaScript Hoists Variables

### Hoisting with `var`
- In JavaScript, variable declarations using `var` are hoisted to the top of their scope.
- However, only the declaration is hoisted, not the assignment. This can lead to unexpected results.
- Example: `console.log(x); var x = 10; // undefined` because `x` is hoisted but its value is assigned later.

### Hoisting with `let` and `const`
- `let` and `const` are also hoisted, but they are not initialized until the code execution reaches the line where they are defined.
- Accessing a `let` or `const` variable before its declaration results in a `ReferenceError`.
- Example: `console.log(x); let x = 10; // ReferenceError`.

# 5. Assigning Values to Variables

## How to Assign Values

### Assignment Operator (`=`)
- The assignment operator `=` is used to assign a value to a variable.
- Example: `let x = 5;` assigns the value `5` to the variable `x`.

### Multiple Assignments
- You can assign the same value to multiple variables in one line.
- Example: `let a = b = c = 10;` assigns the value `10` to `a`, `b`, and `c`.

# 6. Data Types for Variables

## Primitive and Complex Data Types

### Primitive Data Types
- Primitive data types include numbers, strings, booleans, `null`, `undefined`, and `Symbol`.
- These data types are immutable and hold single values.
- Example: `let name = 'Alice';`

### Complex Data Types
- Complex data types, like objects and arrays, are stored by reference.
- These types can hold multiple values and are mutable.
- Example: `let person = { name: 'Alice', age: 25 };`

# 7. Variable Re-assignment

## Changing Variable Values

### Re-assigning with `let`
- Variables declared with `let` can have their values reassigned.
- Example: `let x = 5; x = 10;` changes the value of `x` to `10`.

### Re-assigning with `const`
- Variables declared with `const` cannot have their values reassigned.
- Attempting to reassign a `const` variable will result in a `TypeError`.
- Example: `const pi = 3.14; pi = 3.14159; // TypeError`.

# 8. Destructuring Assignment

## Extracting Values from Arrays and Objects

### Array Destructuring
- Array destructuring allows you to extract values from an array and assign them to variables.
- Example: `let [a, b] = [1, 2];` assigns `1` to `a` and `2` to `b`.

### Object Destructuring
- Object destructuring allows you to extract values from an object and assign them to variables with the same name.
- Example: `let { name, age } = { name: 'Alice', age: 25 };` assigns `'Alice'` to `name` and `25` to `age`.
