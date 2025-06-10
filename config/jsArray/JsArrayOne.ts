export const basicInfoArray = [
  {
    heading: "1. Introduction to JavaScript",

    bulletpoints: [
      {
        bulletHeading: "What is JavaScript?",
        points: [
          "JavaScript (JS) is a high-level, interpreted programming language.",
          "It is commonly used for web development to create interactive and dynamic web pages.",
          "JS runs on the client-side (in the browser) but can also run on the server-side (using Node.js).",
          "JavaScript code is executed in the browser or server without the need for compilation.",
        ],
      },
    ],
  },
  {
    heading: "2. Data Types in JavaScript",
    subHeading: "Primitive & Reference Types",
    bulletpoints: [
      {
        bulletHeading: "Primitive Types",
        points: [
          "String: A sequence of characters, e.g., 'Hello, World!'.",
          "Number: Numeric values (integers and floats), e.g., 42, 3.14.",
          "Boolean: Represents 'true' or 'false'.",
          "Undefined: A variable declared but not assigned a value.",
          "Null: Represents the intentional absence of any object value.",
          "Symbol: A unique and immutable value, often used as property keys.",
          "BigInt: Represents large integers beyond the Number range.",
        ],
      },
      {
        bulletHeading: "Reference Types",
        points: [
          "Object: Collections of key-value pairs, e.g., {name: 'Alice', age: 30}.",
          "Array: Ordered collection of values, e.g., [1, 2, 3, 4].",
          "Function: Callable block of code.",
        ],
      },
    ],
  },
  {
    heading: "3. Variables and Constants",
    subHeading: "Declaring Variables",
    bulletpoints: [
      {
        bulletHeading: "Declaration Methods",
        points: [
          "var: Declares a variable, function-scoped or globally-scoped.",
          "let: Declares a block-scoped variable.",
          "const: Declares a block-scoped constant.",
        ],
      },
      {
        bulletHeading: "Example",
        points: [
          "let name = 'Alice';",
          "const age = 25;",
          "var isActive = true;",
        ],
      },
      {
        bulletHeading: "Hoisting",
        points: [
          "var declarations are hoisted to the top of their scope, but initialization stays in place.",
          "let and const are hoisted but not initialized.",
        ],
      },
    ],
  },
  {
    heading: "4. Operators",
    subHeading: "Arithmetic, Comparison & Logical",
    bulletpoints: [
      {
        bulletHeading: "Arithmetic Operators",
        points: [
          "+ (Addition), - (Subtraction), * (Multiplication), / (Division), % (Modulo).",
        ],
      },
      {
        bulletHeading: "Comparison Operators",
        points: [
          "== (Equal), === (Strict Equal), != (Not Equal), !== (Strict Not Equal), > (Greater Than), < (Less Than).",
        ],
      },
      {
        bulletHeading: "Logical Operators",
        points: ["&& (Logical AND), || (Logical OR), ! (Logical NOT)."],
      },
      {
        bulletHeading: "Assignment Operators",
        points: ["= (Assign), +=, -=, *=, /=, etc."],
      },
    ],
  },
  {
    heading: "5. Functions",
    subHeading: "Declaring and Using Functions",
    bulletpoints: [
      {
        bulletHeading: "Function Declaration",
        points: ["function greet(name) { return `Hello, ${name}`; }"],
      },
      {
        bulletHeading: "Function Expression",
        points: ["const greet = function(name) { return `Hello, ${name}`; };"],
      },
      {
        bulletHeading: "Arrow Function",
        points: ["const greet = (name) => `Hello, ${name}`;"],
      },
      {
        bulletHeading: "Parameters & Return",
        points: ["Functions can accept parameters and return a value."],
      },
      {
        bulletHeading: "Anonymous Functions",
        points: [
          "Functions without a name, typically used as arguments or callbacks.",
        ],
      },
    ],
  },
  {
    heading: "6. Control Flow",
    subHeading: "Conditionals & Loops",
    bulletpoints: [
      {
        bulletHeading: "Conditional Statements",
        points: [
          "if: Executes a block of code if the condition is true.",
          "else: Executes an alternative block if the condition is false.",
          "else if: Checks multiple conditions.",
          "Example: if (x > 10) { console.log('Greater than 10'); } else { console.log('Less than or equal to 10'); }",
        ],
      },
      {
        bulletHeading: "Switch Statement",
        points: [
          "Used for multiple condition checks based on a single variable.",
          "Example:",
          "  switch (day) {",
          "    case 1: console.log('Monday'); break;",
          "    case 2: console.log('Tuesday'); break;",
          "    default: console.log('Invalid day');",
          "  }",
        ],
      },
      {
        bulletHeading: "Loops",
        points: [
          "for: Repeats code a specific number of times.",
          "while: Repeats code while a condition is true.",
          "do...while: Executes code once before checking the condition.",
        ],
      },
    ],
  },
  {
    heading: "7. Arrays",
    subHeading: "Creating and Manipulating Arrays",
    bulletpoints: [
      {
        bulletHeading: "Creating Arrays",
        points: [
          "Literal notation: let arr = [1, 2, 3, 4];",
          "Constructor notation: let arr = new Array(1, 2, 3);",
        ],
      },
      {
        bulletHeading: "Common Methods",
        points: [
          ".push(): Adds element to the end of the array.",
          ".pop(): Removes the last element.",
          ".shift(): Removes the first element.",
          ".unshift(): Adds element to the beginning.",
          ".map(): Creates a new array by applying a function to each element.",
          ".filter(): Creates a new array with elements that pass the test.",
          ".reduce(): Accumulates values based on a function.",
        ],
      },
      {
        bulletHeading: "Array Iteration",
        points: ["forEach(), map(), filter(), and other methods."],
      },
    ],
  },
];

export const jsSyntaxArray = [
  {
    heading: "1. JavaScript Syntax",

    bulletpoints: [
      {
        bulletHeading: "What is JavaScript Syntax?",
        points: [
          "JavaScript syntax refers to the set of rules that define a correctly structured JavaScript program.",
          "It includes rules for creating variables, functions, loops, and more.",
          "The syntax determines how the code is written, making it interpretable by the JavaScript engine.",
        ],
      },
    ],
  },
  {
    heading: "2. Statements and Expressions",
    subHeading: "Understanding the Basics",
    bulletpoints: [
      {
        bulletHeading: "Statements",
        points: [
          "A statement in JavaScript is an instruction that performs an action, such as declaring a variable or creating a loop.",
          "Statements end with a semicolon (`;`). For example: `let x = 5;`.",
          "Common types of statements include assignments, conditionals, and loops.",
        ],
      },
      {
        bulletHeading: "Expressions",
        points: [
          "An expression is a combination of values, variables, operators, and functions that evaluates to a value.",
          "For example, `x + y` is an expression that results in the sum of `x` and `y`.",
          "Expressions can be used anywhere JavaScript expects a value, such as in assignments and return statements.",
        ],
      },
    ],
  },
  {
    heading: "3. Variables and Constants",
    subHeading: "Declaring Variables",
    bulletpoints: [
      {
        bulletHeading: "var, let, const",
        points: [
          "In JavaScript, variables are declared using the keywords `var`, `let`, or `const`.",
          "`var` is function-scoped, whereas `let` and `const` are block-scoped.",
          "`let` is used for variables that can be reassigned, while `const` is used for variables that cannot be reassigned after declaration.",
        ],
      },
      {
        bulletHeading: "Variable Assignment",
        points: [
          "Variables are assigned values using the assignment operator (`=`).",
          "Example: `let age = 30;` assigns the value 30 to the variable `age`.",
        ],
      },
    ],
  },
  {
    heading: "4. Functions",
    subHeading: "Defining and Calling Functions",
    bulletpoints: [
      {
        bulletHeading: "Function Declaration",
        points: [
          "Functions are defined using the `function` keyword, followed by the function name, parameters, and a block of code.",
          "Example: `function greet(name) { return 'Hello ' + name; }`.",
        ],
      },
      {
        bulletHeading: "Function Expression",
        points: [
          "A function expression defines a function and assigns it to a variable.",
          "Example: `const greet = function(name) { return 'Hello ' + name; };`.",
        ],
      },
      {
        bulletHeading: "Arrow Functions",
        points: [
          "Arrow functions are a shorthand syntax for writing functions.",
          "Example: `const greet = (name) => 'Hello ' + name;`.",
        ],
      },
    ],
  },
  {
    heading: "5. Comments",
    subHeading: "Adding Comments to Code",
    bulletpoints: [
      {
        bulletHeading: "Single-line Comments",
        points: [
          "Single-line comments start with `//`.",
          "Example: `// This is a single-line comment`.",
        ],
      },
      {
        bulletHeading: "Multi-line Comments",
        points: [
          "Multi-line comments start with `/*` and end with `*/`.",
          "Example: `/* This is a multi-line comment */`.",
        ],
      },
    ],
  },

  {
    heading: "6. Data Types",
    subHeading: "Primitive Data Types",
    bulletpoints: [
      {
        bulletHeading: "String",
        points: [
          `A string is a sequence of characters enclosed in single (') or double (") quotes.`,
          "Example: let name = 'Alice'",
        ],
      },
      {
        bulletHeading: "Number",
        points: [
          "A number represents both integer and floating-point values.",
          "Example: `let age = 30;` or `let price = 3.99;`.",
        ],
      },
      {
        bulletHeading: "Boolean",
        points: [
          "A boolean represents a value of either `true` or `false`.",
          "Example: `let isActive = true;`.",
        ],
      },
      {
        bulletHeading: "Undefined",
        points: [
          "A variable declared but not assigned a value is `undefined`.",
          "Example: `let x;` sets `x` to `undefined`.",
        ],
      },
      {
        bulletHeading: "Null",
        points: [
          "The `null` type represents the intentional absence of any object value.",
          "Example: `let person = null;`.",
        ],
      },
      {
        bulletHeading: "Symbol",
        points: [
          "Symbols are unique and immutable values that can be used as property keys.",
          "Example: `let sym = Symbol('description');`.",
        ],
      },
      {
        bulletHeading: "BigInt",
        points: [
          "BigInt is a primitive type that can represent integers larger than `Number.MAX_SAFE_INTEGER`.",
          "Example: `let bigNumber = 9007199254740991n;`.",
        ],
      },
    ],
  },
  {
    heading: "7. Control Flow",
    subHeading: "Conditional Statements",
    bulletpoints: [
      {
        bulletHeading: "if Statement",
        points: [
          "The `if` statement executes a block of code if a specified condition is true.",
          "Example: `if (x > 10) { console.log('Greater than 10'); }`.",
        ],
      },
      {
        bulletHeading: "else Statement",
        points: [
          "The `else` statement executes an alternative block of code if the `if` condition is false.",
          "Example: `else { console.log('Less than or equal to 10'); }`.",
        ],
      },
      {
        bulletHeading: "else if Statement",
        points: [
          "The `else if` statement allows you to check multiple conditions.",
          "Example: `else if (x == 10) { console.log('Equal to 10'); }`.",
        ],
      },
    ],
  },
  {
    heading: "8. Loops",
    subHeading: "Looping Structures",
    bulletpoints: [
      {
        bulletHeading: "for Loop",
        points: [
          "The `for` loop repeats a block of code a specified number of times.",
          "Example: `for (let i = 0; i < 5; i++) { console.log(i); }`.",
        ],
      },
      {
        bulletHeading: "while Loop",
        points: [
          "The `while` loop executes a block of code as long as a specified condition is true.",
          "Example: `while (x < 10) { console.log(x); x++; }`.",
        ],
      },
      {
        bulletHeading: "do...while Loop",
        points: [
          "The `do...while` loop executes the block of code once before checking the condition.",
          "Example: `do { console.log(x); x++; } while (x < 10);`.",
        ],
      },
    ],
  },
  {
    heading: "9. Blocks of Code",
    subHeading: "Using Braces `{}`",
    bulletpoints: [
      {
        bulletHeading: "Code Blocks",
        points: [
          "A block of code is a group of statements enclosed in curly braces `{}`.",
          "Code blocks are used in functions, conditionals, and loops to group multiple statements together.",
        ],
      },
    ],
  },
  {
    heading: "10. Semicolons",
    subHeading: "Importance of Semicolons",
    bulletpoints: [
      {
        bulletHeading: "Semicolon Usage",
        points: [
          "Semicolons are used to separate statements in JavaScript.",
          "Example: `let x = 5; let y = 10;`.",
        ],
      },
      {
        bulletHeading: "Automatic Semicolon Insertion (ASI)",
        points: [
          "JavaScript has Automatic Semicolon Insertion (ASI), which means it can insert semicolons where they are omitted.",
          "However, it is considered good practice to explicitly add semicolons.",
        ],
      },
    ],
  },
];

export const jsCommentsArray = [
  {
    heading: "1. JavaScript Comments",

    bulletpoints: [
      {
        bulletHeading: "What are JavaScript Comments?",
        points: [
          "JavaScript comments are used to explain the code, making it easier to understand.",
          "Comments are ignored by the JavaScript engine, and they don’t affect the execution of the code.",
          "They are primarily used to annotate and document code, making it more readable for developers.",
        ],
      },
    ],
  },
  {
    heading: "2. Single-line Comments",
    subHeading: "Using `//`",
    bulletpoints: [
      {
        bulletHeading: "Syntax",
        points: [
          "Single-line comments start with `//`.",
          "Everything after `//` on that line is considered a comment.",
          "Example: `// This is a single-line comment`.",
        ],
      },
      {
        bulletHeading: "Usage",
        points: [
          "Single-line comments are typically used for short explanations or comments within a line of code.",
          "Example: `let x = 10; // This is the value of x`.",
        ],
      },
    ],
  },
  {
    heading: "3. Multi-line Comments",
    subHeading: "Using `/* */`",
    bulletpoints: [
      {
        bulletHeading: "Syntax",
        points: [
          "Multi-line comments start with `/*` and end with `*/`.",
          "Everything between `/*` and `*/` is considered a comment, even if it spans multiple lines.",
          "Example: `/* This is a multi-line comment */`.",
        ],
      },
      {
        bulletHeading: "Usage",
        points: [
          "Multi-line comments are typically used when you need to comment out larger blocks of code or provide detailed explanations.",
          "Example: `/* This block of code is commented out\n     and will not be executed */`.",
        ],
      },
    ],
  },
  {
    heading: "4. Nested Comments",
    subHeading: "Restrictions on Nesting Comments",
    bulletpoints: [
      {
        bulletHeading: "JavaScript doesn’t support nested multi-line comments",
        points: [
          "You cannot nest multi-line comments within each other. For example, the following will cause an error:",
          "Example: `/* /* This is a nested comment */ */` results in an error.",
        ],
      },
      {
        bulletHeading: "Workaround for Nested Comments",
        points: [
          "If you need to nest comments, you can use single-line comments inside a multi-line comment block.",
          "Example: `/* This is a multi-line comment\n     // This is a single-line comment inside it\n   */`.",
        ],
      },
    ],
  },
  {
    heading: "5. Block Comments for Documentation",
    subHeading: "JSDoc Style Comments",
    bulletpoints: [
      {
        bulletHeading: "What is JSDoc?",
        points: [
          "JSDoc is a popular tool for generating documentation for JavaScript code.",
          "It uses multi-line comments that include special tags to describe functions, parameters, return values, etc.",
          "Example: `/** This is a JSDoc comment */`.",
        ],
      },
      {
        bulletHeading: "Common JSDoc Tags",
        points: [
          "`@param`: Describes a function parameter.",
          "`@returns`: Describes what a function returns.",
          "`@example`: Provides an example of how to use the code.",
          "Example: `/** @param {number} x - The number to square. @returns {number} The squared value. */`.",
        ],
      },
    ],
  },
  {
    heading: "6. Best Practices for Using Comments",
    subHeading: "Effective Commenting",
    bulletpoints: [
      {
        bulletHeading: "When to Use Comments",
        points: [
          "Use comments to explain 'why' something is done, rather than 'what' is done, as the code itself should be self-explanatory.",
          "Use comments to clarify complex logic or tricky parts of your code.",
          "Avoid over-commenting obvious code, as it can clutter your codebase.",
        ],
      },
      {
        bulletHeading: "Commenting Out Code During Development",
        points: [
          "While writing code, it's common to temporarily comment out parts of it for testing or debugging.",
          "However, make sure to remove unnecessary comments before committing your code.",
        ],
      },
    ],
  },
  {
    heading: "7. Disabling Code",
    subHeading: "Commenting Out Code",
    bulletpoints: [
      {
        bulletHeading: "Temporarily Disable Code",
        points: [
          "You can use comments to temporarily disable parts of the code that you don't want to execute.",
          "Example: `// let x = 10; // This line is disabled`.",
        ],
      },
      {
        bulletHeading: "Useful in Debugging",
        points: [
          "Commenting out code is a useful tool when debugging or testing parts of the application.",
          "For example, disabling a function call to isolate errors.",
        ],
      },
    ],
  },
];

export const jsVariableArray = [
  {
    heading: "1. JavaScript Variables",

    bulletpoints: [
      {
        bulletHeading: "What are Variables?",
        points: [
          "A variable is a container for storing data values in JavaScript.",
          "Variables allow us to store data that can be used and modified throughout the code.",
          "In JavaScript, variables can hold different types of data like numbers, strings, objects, etc.",
        ],
      },
      {
        bulletHeading: "Why Use Variables?",
        points: [
          "Variables provide a way to store values that can change during the execution of the program.",
          "They make code more flexible, reusable, and easier to read by giving meaningful names to values.",
        ],
      },
    ],
  },
  {
    heading: "2. Declaring Variables",
    subHeading: "Using `var`, `let`, and `const`",
    bulletpoints: [
      {
        bulletHeading: "`var`",
        points: [
          "`var` is the oldest way to declare a variable in JavaScript.",
          "`var` is function-scoped, which means it is visible throughout the function in which it is declared.",
          "However, `var` has some issues with scoping, leading to potential bugs, so it is generally not recommended in modern JavaScript.",
        ],
      },
      {
        bulletHeading: "`let`",
        points: [
          "`let` is a block-scoped variable declaration introduced in ECMAScript 6 (ES6).",
          "A `let` variable is only accessible within the block (e.g., inside a loop or conditional) where it is defined.",
          "It allows you to reassign the variable's value.",
        ],
      },
      {
        bulletHeading: "`const`",
        points: [
          "`const` is also block-scoped like `let`, but it is used to declare variables whose values cannot be reassigned.",
          "`const` must be assigned a value at the time of declaration, and that value cannot be changed later.",
          "It is used for constants or values that should not change.",
        ],
      },
    ],
  },
  {
    heading: "3. Variable Scope",
    subHeading: "Understanding Scope",
    bulletpoints: [
      {
        bulletHeading: "Global Scope",
        points: [
          "A variable declared outside any function or block has global scope.",
          "Global variables can be accessed from anywhere in the code.",
          "Example: `var globalVar = 'I am global';`",
        ],
      },
      {
        bulletHeading: "Local Scope",
        points: [
          "A variable declared inside a function or block has local scope.",
          "Local variables are only accessible within the function or block they are declared in.",
          "Example: `let localVar = 'I am local';`",
        ],
      },
      {
        bulletHeading: "Block Scope",
        points: [
          "Variables declared using `let` and `const` are block-scoped, meaning they are only accessible within the block of code they are declared in.",
          "Example: `if (true) { let blockVar = 'I am block-scoped'; }`",
        ],
      },
    ],
  },
  {
    heading: "4. Variable Hoisting",
    subHeading: "How JavaScript Hoists Variables",
    bulletpoints: [
      {
        bulletHeading: "Hoisting with `var`",
        points: [
          "In JavaScript, variable declarations using `var` are hoisted to the top of their scope.",
          "However, only the declaration is hoisted, not the assignment. This can lead to unexpected results.",
          "Example: `console.log(x); var x = 10; // undefined` because `x` is hoisted but its value is assigned later.",
        ],
      },
      {
        bulletHeading: "Hoisting with `let` and `const`",
        points: [
          "`let` and `const` are also hoisted, but they are not initialized until the code execution reaches the line where they are defined.",
          "Accessing a `let` or `const` variable before its declaration results in a `ReferenceError`.",
          "Example: `console.log(x); let x = 10; // ReferenceError`.",
        ],
      },
    ],
  },
  {
    heading: "5. Assigning Values to Variables",
    subHeading: "How to Assign Values",
    bulletpoints: [
      {
        bulletHeading: "Assignment Operator (`=`)",
        points: [
          "The assignment operator `=` is used to assign a value to a variable.",
          "Example: `let x = 5;` assigns the value `5` to the variable `x`.",
        ],
      },
      {
        bulletHeading: "Multiple Assignments",
        points: [
          "You can assign the same value to multiple variables in one line.",
          "Example: `let a = b = c = 10;` assigns the value `10` to `a`, `b`, and `c`.",
        ],
      },
    ],
  },
  {
    heading: "6. Data Types for Variables",
    subHeading: "Primitive and Complex Data Types",
    bulletpoints: [
      {
        bulletHeading: "Primitive Data Types",
        points: [
          "Primitive data types include numbers, strings, booleans, `null`, `undefined`, and `Symbol`.",
          "These data types are immutable and hold single values.",
          "Example: `let name = 'Alice';`",
        ],
      },
      {
        bulletHeading: "Complex Data Types",
        points: [
          "Complex data types, like objects and arrays, are stored by reference.",
          "These types can hold multiple values and are mutable.",
          "Example: `let person = { name: 'Alice', age: 25 };`",
        ],
      },
    ],
  },
  {
    heading: "7. Variable Re-assignment",
    subHeading: "Changing Variable Values",
    bulletpoints: [
      {
        bulletHeading: "Re-assigning with `let`",
        points: [
          "Variables declared with `let` can have their values reassigned.",
          "Example: `let x = 5; x = 10;` changes the value of `x` to `10`.",
        ],
      },
      {
        bulletHeading: "Re-assigning with `const`",
        points: [
          "Variables declared with `const` cannot have their values reassigned.",
          "Attempting to reassign a `const` variable will result in a `TypeError`.",
          "Example: `const pi = 3.14; pi = 3.14159; // TypeError`.",
        ],
      },
    ],
  },
  {
    heading: "8. Destructuring Assignment",
    subHeading: "Extracting Values from Arrays and Objects",
    bulletpoints: [
      {
        bulletHeading: "Array Destructuring",
        points: [
          "Array destructuring allows you to extract values from an array and assign them to variables.",
          "Example: `let [a, b] = [1, 2];` assigns `1` to `a` and `2` to `b`.",
        ],
      },
      {
        bulletHeading: "Object Destructuring",
        points: [
          "Object destructuring allows you to extract values from an object and assign them to variables with the same name.",
          "Example: `let { name, age } = { name: 'Alice', age: 25 };` assigns `'Alice'` to `name` and `25` to `age`.",
        ],
      },
    ],
  },
];

export const jsLetArray = [
  {
    heading: "1. JavaScript `let`",

    bulletpoints: [
      {
        bulletHeading: "What is `let`?",
        points: [
          "`let` is a modern JavaScript keyword used to declare block-scoped variables.",
          "`let` was introduced in ECMAScript 6 (ES6) to improve upon `var`, offering better scoping rules.",
          "`let` allows you to declare variables that are limited to the scope of a block, statement, or expression.",
        ],
      },
      {
        bulletHeading: "Why Use `let`?",
        points: [
          "`let` provides better control over variable scope than `var`, especially within loops and conditionals.",
          "`let` eliminates the issue of hoisting with unintentional global variable creation (which can occur with `var`).",
        ],
      },
    ],
  },
  {
    heading: "2. Scope of `let`",
    subHeading: "Block-level Scope",
    bulletpoints: [
      {
        bulletHeading: "Block-level Scope",
        points: [
          "Variables declared with `let` are block-scoped, meaning they are only accessible within the block in which they are defined.",
          "Block scope refers to the space between curly braces `{}` (e.g., inside loops, conditionals, functions).",
          "Example: `if (true) { let x = 10; } console.log(x); // Error: x is not defined`.",
        ],
      },
      {
        bulletHeading: "Comparison with `var`",
        points: [
          "`var` is function-scoped, meaning it is accessible throughout the entire function, even outside the block where it's declared.",
          "`let`, on the other hand, is restricted to the block it is defined in, preventing potential bugs.",
          "Example using `var`: `if (true) { var y = 20; } console.log(y); // 20`.",
        ],
      },
    ],
  },
  {
    heading: "3. Temporal Dead Zone (TDZ)",
    subHeading: "Understanding the TDZ",
    bulletpoints: [
      {
        bulletHeading: "What is Temporal Dead Zone?",
        points: [
          "The Temporal Dead Zone (TDZ) is the time between entering the scope of a `let` variable and the moment it is assigned a value.",
          "During the TDZ, any reference to the variable before it’s assigned will result in a `ReferenceError`.",
          "Example: `console.log(x); let x = 5; // ReferenceError: Cannot access 'x' before initialization`.",
        ],
      },
      {
        bulletHeading: "Why TDZ Occurs?",
        points: [
          "The TDZ exists to avoid accessing a variable before it is initialized, helping to prevent subtle bugs.",
          "Accessing variables before they are initialized is an error in `let` and `const`, unlike `var`, which allows such behavior.",
        ],
      },
    ],
  },
  {
    heading: "4. Re-declaring Variables with `let`",
    subHeading: "Limitations on Redeclaration",
    bulletpoints: [
      {
        bulletHeading: "Cannot Redeclare `let` Variables",
        points: [
          "In the same scope, you cannot declare the same variable using `let` more than once.",
          "Attempting to redeclare a variable with `let` will result in a `SyntaxError`.",
          "Example: `let x = 10; let x = 20; // SyntaxError: Identifier 'x' has already been declared`.",
        ],
      },
      {
        bulletHeading: "Redeclaring in Different Scopes",
        points: [
          "You can redeclare `let` variables in different blocks or functions without any issue.",
          "Example: `let x = 10; if (true) { let x = 20; } console.log(x); // 10`.",
        ],
      },
    ],
  },
  {
    heading: "5. `let` and Loops",
    subHeading: "Working with Loops",
    bulletpoints: [
      {
        bulletHeading: "`let` in `for` Loops",
        points: [
          "`let` is especially useful in loops where each iteration should have its own scope.",
          "For example, using `let` in a `for` loop ensures that each loop iteration gets its own unique variable.",
          "Example: `for (let i = 0; i < 5; i++) { console.log(i); } // Logs 0, 1, 2, 3, 4`.",
        ],
      },
      {
        bulletHeading: "Common Mistake with `var` in Loops",
        points: [
          "If you use `var` in a loop, the variable declared is shared across all iterations of the loop.",
          "This can lead to unexpected behavior, especially in asynchronous code.",
          "Example: `for (var i = 0; i < 5; i++) { setTimeout(() => console.log(i), 1000); } // Logs 5 five times`.",
        ],
      },
    ],
  },
  {
    heading: "6. `let` and Functions",
    subHeading: "Scope within Functions",
    bulletpoints: [
      {
        bulletHeading: "`let` Inside Functions",
        points: [
          "Variables declared with `let` inside a function are scoped to that function.",
          "You cannot access them from outside the function unless they are returned or passed out of scope.",
          "Example: `function foo() { let x = 5; } console.log(x); // Error: x is not defined`.",
        ],
      },
      {
        bulletHeading: "`let` and Closures",
        points: [
          "Because of its block scope, `let` works well with closures.",
          "When using `let` inside a function that returns a value, the closure captures the value at the time of the function call.",
          "Example: `function createCounter() { let count = 0; return function() { return count++; }; } let counter = createCounter(); console.log(counter()); // 0`.",
        ],
      },
    ],
  },
  {
    heading: "7. `let` with Objects and Arrays",
    subHeading: "Working with Non-Primitive Data Types",
    bulletpoints: [
      {
        bulletHeading: "`let` with Arrays",
        points: [
          "You can use `let` to declare arrays, just like any other variable.",
          "Arrays declared with `let` can have their elements modified (e.g., adding/removing items), but you cannot reassign the array itself if it was declared with `const`.",
          "Example: `let arr = [1, 2, 3]; arr.push(4); console.log(arr); // [1, 2, 3, 4]`.",
        ],
      },
      {
        bulletHeading: "`let` with Objects",
        points: [
          "Objects declared with `let` can have their properties modified, but the object itself cannot be reassigned if it was declared with `const`.",
          "Example: `let person = { name: 'Alice', age: 25 }; person.age = 26; console.log(person); // { name: 'Alice', age: 26 }`.",
        ],
      },
    ],
  },
  {
    heading: "8. Best Practices for Using `let`",
    subHeading: "Writing Clean Code with `let`",
    bulletpoints: [
      {
        bulletHeading: "Limit Scope to the Block",
        points: [
          "Always declare variables using `let` inside the smallest scope possible to avoid unexpected behavior.",
          "For example, avoid declaring a variable globally unless absolutely necessary.",
        ],
      },
      {
        bulletHeading: "Prefer `let` over `var`",
        points: [
          "`let` should be preferred over `var` for variable declarations because of its block-level scoping and better control over the variable lifecycle.",
          "`var` can lead to bugs due to its function-level scoping and issues with hoisting.",
        ],
      },
    ],
  },
];
export const jsConstArray = [
  {
    heading: "1. JavaScript `const`",

    bulletpoints: [
      {
        bulletHeading: "What is `const`?",
        points: [
          "`const` is a keyword in JavaScript used to declare variables whose values cannot be reassigned after they are initialized.",
          "`const` was introduced in ECMAScript 6 (ES6) to provide a way to declare constants.",
          "`const` ensures that the variable’s binding remains constant, but it doesn't make the value it holds immutable (i.e., objects and arrays can still be modified).",
        ],
      },
      {
        bulletHeading: "Why Use `const`?",
        points: [
          "`const` helps to ensure that values that should remain constant throughout the execution of a program are protected from accidental reassignment.",
          "It also provides clear intent, making code easier to maintain by indicating that a value is meant to stay unchanged.",
        ],
      },
    ],
  },
  {
    heading: "2. Declaring Variables with `const`",
    subHeading: "Basic Syntax",
    bulletpoints: [
      {
        bulletHeading: "Declaration Syntax",
        points: [
          "A variable declared with `const` must be initialized at the time of declaration.",
          "Example: `const pi = 3.14159;`.",
          "Attempting to declare a `const` variable without an initializer results in a `SyntaxError`.",
          "Example: `const x; // SyntaxError: Missing initializer in const declaration`.",
        ],
      },
      {
        bulletHeading: "Reassigning with `const`",
        points: [
          "Once a value is assigned to a `const` variable, it cannot be reassigned.",
          "Example: `const x = 10; x = 20; // TypeError: Assignment to constant variable`.",
        ],
      },
    ],
  },
  {
    heading: "3. `const` and Object Mutability",
    subHeading: "Objects and Arrays",
    bulletpoints: [
      {
        bulletHeading: "Object Mutation",
        points: [
          "While the variable binding is constant, the value of an object or array assigned to a `const` variable can still be mutated (modified).",
          "This means you can modify the properties of objects or modify the contents of arrays assigned to `const` variables.",
          "Example: `const obj = { name: 'Alice' }; obj.name = 'Bob'; // Valid`.",
        ],
      },
      {
        bulletHeading: "Arrays with `const`",
        points: [
          "Arrays assigned to a `const` variable can have their elements added, removed, or modified.",
          "However, you cannot reassign the array itself to a new array.",
          "Example: `const arr = [1, 2, 3]; arr.push(4); // Valid` but `arr = [4, 5, 6]; // TypeError`.",
        ],
      },
    ],
  },
  {
    heading: "4. Scope of `const`",
    subHeading: "Block-level Scope",
    bulletpoints: [
      {
        bulletHeading: "Block-level Scope",
        points: [
          "Like `let`, `const` is block-scoped, meaning it is only accessible within the block of code in which it is declared.",
          "This is different from `var`, which is function-scoped and can lead to issues with variable leaks in larger codebases.",
          "Example: `if (true) { const x = 10; } console.log(x); // Error: x is not defined`.",
        ],
      },
      {
        bulletHeading: "Comparison with `var`",
        points: [
          "`const` is block-scoped, unlike `var`, which is function-scoped.",
          "This makes `const` more predictable and reduces errors related to variable shadowing and hoisting.",
          "Example: `var y = 10; if (true) { var y = 20; } console.log(y); // 20` (using `var` causes shadowing).",
        ],
      },
    ],
  },
  {
    heading: "5. Temporal Dead Zone (TDZ) with `const`",
    subHeading: "Understanding the TDZ",
    bulletpoints: [
      {
        bulletHeading: "TDZ with `const`",
        points: [
          "Variables declared with `const` are also hoisted but remain in the Temporal Dead Zone (TDZ) until the point in the code where they are declared.",
          "Attempting to access a `const` variable before it is declared results in a `ReferenceError`.",
          "Example: `console.log(x); const x = 5; // ReferenceError: Cannot access 'x' before initialization`.",
        ],
      },
      {
        bulletHeading: "TDZ vs `let`",
        points: [
          "Both `let` and `const` are hoisted to the top of their block scope but are not initialized until the point of their declaration.",
          "The difference is that while `let` allows reassignments, `const` does not.",
        ],
      },
    ],
  },
  {
    heading: "6. Best Practices for Using `const`",
    subHeading: "Writing Clean Code with `const`",
    bulletpoints: [
      {
        bulletHeading: "Use `const` by Default",
        points: [
          "Use `const` by default to ensure that the value of a variable is not accidentally changed.",
          "Only use `let` when you explicitly need to reassign the variable.",
        ],
      },
      {
        bulletHeading: "For Constants and Immutable Values",
        points: [
          "Use `const` to declare variables that should remain constant throughout the program, such as configuration values, mathematical constants, and fixed data.",
          "Example: `const apiUrl = 'https://api.example.com';`.",
        ],
      },
      {
        bulletHeading: "Avoid Redeclaring with `const`",
        points: [
          "Redeclaring a `const` variable in the same block scope will result in a `SyntaxError`.",
          "This prevents accidental re-declaration and reassignment within a block of code.",
          "Example: `const x = 10; const x = 20; // SyntaxError: Identifier 'x' has already been declared`.",
        ],
      },
    ],
  },
  {
    heading: "7. `const` and Destructuring",
    subHeading: "Destructuring with `const`",
    bulletpoints: [
      {
        bulletHeading: "Object Destructuring",
        points: [
          "You can use `const` with destructuring to extract values from objects.",
          "Example: `const { name, age } = { name: 'Alice', age: 25 };`.",
        ],
      },
      {
        bulletHeading: "Array Destructuring",
        points: [
          "Similarly, `const` can be used with array destructuring to extract elements from arrays.",
          "Example: `const [first, second] = [1, 2, 3];`.",
        ],
      },
    ],
  },
];
export const jsArithmaticArray = [
  {
    heading: "1. JavaScript Arithmetic",

    bulletpoints: [
      {
        bulletHeading: "What is Arithmetic in JavaScript?",
        points: [
          "Arithmetic operations in JavaScript refer to mathematical calculations such as addition, subtraction, multiplication, division, and more.",
          "JavaScript provides a set of arithmetic operators to perform calculations on numeric values.",
        ],
      },
      {
        bulletHeading: "Basic Arithmetic Operators",
        points: [
          "JavaScript supports several operators for performing arithmetic operations, such as addition, subtraction, multiplication, division, and modulus.",
          "These operators are commonly used for mathematical calculations.",
        ],
      },
    ],
  },
  {
    heading: "2. Arithmetic Operators",
    subHeading: "Common Arithmetic Operators",
    bulletpoints: [
      {
        bulletHeading: "Addition (+)",
        points: [
          "The `+` operator is used to add two numbers or concatenate strings.",
          "Example: `let sum = 5 + 3; // sum = 8`.",
          "If one of the operands is a string, JavaScript will concatenate the operands instead of adding them as numbers.",
          "Example: `let result = 'Hello' + ' ' + 'World'; // result = 'Hello World'`.",
        ],
      },
      {
        bulletHeading: "Subtraction (-)",
        points: [
          "The `-` operator is used to subtract one number from another.",
          "Example: `let difference = 10 - 3; // difference = 7`.",
        ],
      },
      {
        bulletHeading: "Multiplication (*)",
        points: [
          "The `*` operator is used to multiply two numbers.",
          "Example: `let product = 4 * 3; // product = 12`.",
        ],
      },
      {
        bulletHeading: "Division (/)",
        points: [
          "The `/` operator is used to divide one number by another.",
          "Example: `let quotient = 20 / 4; // quotient = 5`.",
          "If division by zero occurs, JavaScript will return `Infinity` or `-Infinity`, depending on the signs of the numbers.",
          "Example: `let result = 10 / 0; // result = Infinity`.",
        ],
      },
      {
        bulletHeading: "Modulus (%)",
        points: [
          "The `%` operator returns the remainder of a division operation.",
          "Example: `let remainder = 10 % 3; // remainder = 1`.",
          "Useful for checking if a number is even or odd, or performing cyclical operations.",
        ],
      },
      {
        bulletHeading: "Exponentiation (**)",
        points: [
          "The `**` operator is used to raise a number to the power of another number.",
          "Example: `let power = 2 ** 3; // power = 8`.",
          "This operator was introduced in ES6.",
        ],
      },
    ],
  },
  {
    heading: "3. Unary Arithmetic Operators",
    subHeading: "Unary Operators for Number Manipulation",
    bulletpoints: [
      {
        bulletHeading: "Unary Plus (+)",
        points: [
          "The unary `+` operator is used to convert a value to a number.",
          "Example: `let num = + '123'; // num = 123`.",
          "If the value cannot be converted to a valid number, it returns `NaN`.",
        ],
      },
      {
        bulletHeading: "Unary Negation (-)",
        points: [
          "The unary `-` operator is used to convert a value to a number and negate it.",
          "Example: `let negative = -5; // negative = -5`.",
          "If the value is a string or other non-numeric type, it converts it to a number and negates it.",
        ],
      },
    ],
  },
  {
    heading: "4. Precedence of Arithmetic Operators",
    subHeading: "Operator Precedence and Order of Operations",
    bulletpoints: [
      {
        bulletHeading: "Order of Operations (PEMDAS)",
        points: [
          "JavaScript follows the PEMDAS rule for operator precedence when performing arithmetic operations: Parentheses, Exponents, Multiplication, Division, Addition, and Subtraction.",
          "Example: `let result = 2 + 3 * 4; // result = 14` (Multiplication is performed before Addition).",
        ],
      },
      {
        bulletHeading: "Parentheses for Control",
        points: [
          "You can change the order of operations using parentheses `()`.",
          "Example: `let result = (2 + 3) * 4; // result = 20`.",
        ],
      },
      {
        bulletHeading: "Left to Right Associativity",
        points: [
          "Arithmetic operators like addition and subtraction are evaluated from left to right if they have the same precedence.",
          "Example: `let result = 10 - 3 - 2; // result = 5` (Evaluated as `(10 - 3) - 2`).",
        ],
      },
    ],
  },
  {
    heading: "5. Increment and Decrement Operators",
    subHeading: "Shortcuts for Increasing and Decreasing Values",
    bulletpoints: [
      {
        bulletHeading: "Increment (++)",
        points: [
          "The `++` operator is used to increment a number by 1.",
          "Example: `let count = 5; count++; // count = 6`.",
          "It can be used in two forms: post-increment (`count++`) and pre-increment (`++count`).",
          "In post-increment, the value is incremented after it is used, while in pre-increment, it is incremented before it is used.",
        ],
      },
      {
        bulletHeading: "Decrement (--)",
        points: [
          "The `--` operator is used to decrement a number by 1.",
          "Example: `let count = 5; count--; // count = 4`.",
          "Similar to increment, it has post-decrement (`count--`) and pre-decrement (`--count`).",
        ],
      },
    ],
  },
  {
    heading: "6. Handling Special Arithmetic Values",
    subHeading: "Special Cases in Arithmetic Operations",
    bulletpoints: [
      {
        bulletHeading: "NaN (Not-a-Number)",
        points: [
          "When an invalid arithmetic operation occurs (such as dividing a string by a number), JavaScript returns `NaN`.",
          "Example: `let result = 'apple' / 5; // result = NaN`.",
          "You can check if a value is `NaN` using the `isNaN()` function.",
          "Example: `isNaN(NaN); // true`.",
        ],
      },
      {
        bulletHeading: "Infinity and -Infinity",
        points: [
          "When you divide a non-zero number by zero, JavaScript returns `Infinity` (positive or negative depending on the sign).",
          "Example: `let result = 10 / 0; // result = Infinity`.",
          "Similarly, dividing a negative number by zero results in `-Infinity`.",
          "Example: `let result = -10 / 0; // result = -Infinity`.",
        ],
      },
    ],
  },
  {
    heading: "7. Best Practices for Arithmetic Operations",
    subHeading: "Writing Efficient Arithmetic Code",
    bulletpoints: [
      {
        bulletHeading: "Avoid Using Floating Point for Exact Calculations",
        points: [
          "Floating-point arithmetic can cause precision issues, especially with decimal values.",
          "Use `Number.toFixed()` or `Number.toPrecision()` for better control over the number of decimal places.",
          "Example: `let result = (0.1 + 0.2).toFixed(2); // result = '0.30'`.",
        ],
      },
      {
        bulletHeading: "Use Parentheses for Clarity",
        points: [
          "Always use parentheses when you want to control the order of operations, even if not strictly necessary.",
          "This helps to avoid mistakes and makes your code more readable.",
        ],
      },
    ],
  },
];

export const jsAssignmentArray = [
  {
    heading: "1. JavaScript Assignment Operators",

    bulletpoints: [
      {
        bulletHeading: "What are Assignment Operators?",
        points: [
          "Assignment operators in JavaScript are used to assign values to variables.",
          "They are shorthand methods that allow you to perform operations and assign the result to a variable in one step.",
        ],
      },
      {
        bulletHeading: "Types of Assignment Operators",
        points: [
          "JavaScript provides several assignment operators, ranging from simple to compound operators.",
        ],
      },
    ],
  },
  {
    heading: "2. Basic Assignment Operator",
    subHeading: "Simple Assignment (=)",
    bulletpoints: [
      {
        bulletHeading: "The `=` Operator",
        points: [
          "The `=` operator is the basic assignment operator, used to assign a value to a variable.",
          "Example: `let x = 10; // x is assigned the value 10`.",
          "The value on the right-hand side is assigned to the variable on the left-hand side.",
        ],
      },
    ],
  },
  {
    heading: "3. Compound Assignment Operators",
    subHeading: "Shorthand Operators for Common Operations",
    bulletpoints: [
      {
        bulletHeading: "Addition Assignment (`+=`)",
        points: [
          "The `+=` operator adds the right-hand operand to the left-hand operand and assigns the result to the left-hand operand.",
          "Example: `let x = 5; x += 3; // x = 8`.",
        ],
      },
      {
        bulletHeading: "Subtraction Assignment (`-=`)",
        points: [
          "The `-=` operator subtracts the right-hand operand from the left-hand operand and assigns the result to the left-hand operand.",
          "Example: `let x = 10; x -= 4; // x = 6`.",
        ],
      },
      {
        bulletHeading: "Multiplication Assignment (`*=`)",
        points: [
          "The `*=` operator multiplies the left-hand operand by the right-hand operand and assigns the result to the left-hand operand.",
          "Example: `let x = 3; x *= 4; // x = 12`.",
        ],
      },
      {
        bulletHeading: "Division Assignment (`/=`)",
        points: [
          "The `/=` operator divides the left-hand operand by the right-hand operand and assigns the result to the left-hand operand.",
          "Example: `let x = 20; x /= 4; // x = 5`.",
        ],
      },
      {
        bulletHeading: "Modulus Assignment (`%=`)",
        points: [
          "The `%=` operator calculates the remainder when the left-hand operand is divided by the right-hand operand and assigns the result to the left-hand operand.",
          "Example: `let x = 10; x %= 3; // x = 1`.",
        ],
      },
      {
        bulletHeading: "Exponentiation Assignment (`**=`)",
        points: [
          "The `**=` operator raises the left-hand operand to the power of the right-hand operand and assigns the result to the left-hand operand.",
          "Example: `let x = 2; x **= 3; // x = 8`.",
        ],
      },
    ],
  },
  {
    heading: "4. Chaining Assignment Operators",
    subHeading: "Multiple Assignments in One Line",
    bulletpoints: [
      {
        bulletHeading: "Chaining Multiple Assignments",
        points: [
          "You can chain assignment operators to assign the same value to multiple variables in a single line.",
          "Example: `let a, b, c; a = b = c = 5; // a = b = c = 5`.",
        ],
      },
    ],
  },
  {
    heading: "5. Destructuring Assignment",
    subHeading: "Assignment to Multiple Variables from Objects/Arrays",
    bulletpoints: [
      {
        bulletHeading: "Array Destructuring",
        points: [
          "Array destructuring allows you to assign values from an array to variables in a concise way.",
          "Example: `let [a, b] = [1, 2]; // a = 1, b = 2`.",
        ],
      },
      {
        bulletHeading: "Object Destructuring",
        points: [
          "Object destructuring allows you to assign properties from an object to variables with matching names.",
          "Example: `let { name, age } = { name: 'Alice', age: 30 }; // name = 'Alice', age = 30`.",
        ],
      },
    ],
  },
  {
    heading: "6. Comparison with Other Operators",
    subHeading: "Difference Between Assignment and Comparison",
    bulletpoints: [
      {
        bulletHeading: "Assignment vs Comparison",
        points: [
          "The assignment operator `=` is different from the comparison operator `==` (or `===` for strict equality).",
          "While the assignment operator assigns a value to a variable, the comparison operator checks if two values are equal.",
          "Example: `let x = 5; // assignment`, `x == 5; // comparison`.",
        ],
      },
    ],
  },
  {
    heading: "7. Best Practices for Assignment",
    subHeading: "Writing Clean and Maintainable Code",
    bulletpoints: [
      {
        bulletHeading: "Use `const` or `let` for Assignments",
        points: [
          "Always declare variables using `const` or `let` to ensure that they are properly scoped.",
          "Use `const` for values that do not need reassignment and `let` for those that might change.",
        ],
      },
      {
        bulletHeading: "Avoid Reassigning Constants",
        points: [
          "Once a `const` variable is assigned, it should not be reassigned, as it will result in a `TypeError`.",
          "Example: `const x = 10; x = 20; // Error: Assignment to constant variable`.",
        ],
      },
      {
        bulletHeading: "Avoid Overuse of Chained Assignments",
        points: [
          "Although chaining assignments is convenient, it can reduce code readability.",
          "It's better to assign variables on separate lines for clarity in larger projects.",
        ],
      },
    ],
  },
];

export const jsDataTypesArray = [
  {
    heading: "1. JavaScript Data Types",

    bulletpoints: [
      {
        bulletHeading: "What are Data Types in JavaScript?",
        points: [
          "Data types in JavaScript define the kind of value a variable can hold.",
          "JavaScript is a dynamically typed language, meaning variables do not require a declared type.",
          "Variables can hold values of any data type at different times during the execution of the program.",
        ],
      },
      {
        bulletHeading: "Categories of Data Types",
        points: [
          "JavaScript data types are broadly categorized into two types: Primitive and Non-Primitive (or Reference) types.",
        ],
      },
    ],
  },
  {
    heading: "2. Primitive Data Types",
    subHeading: "Basic Data Types",
    bulletpoints: [
      {
        bulletHeading: "Number",
        points: [
          "The `Number` type represents both integer and floating-point numbers.",
          "Examples: `let a = 42;`, `let b = 3.14;`.",
          "JavaScript does not differentiate between integers and floating-point numbers internally.",
          "Special numbers: `NaN` (Not a Number) and `Infinity`.",
        ],
      },
      {
        bulletHeading: "String",
        points: [
          `The String type represents sequences of characters (text).`,
          "Strings can be enclosed in single quotes , double quotes, or backticks",
          "Example: let name = 'John'; or let greeting = Hello",
          "Strings are immutable in JavaScript, meaning once created, their values cannot be changed.",
        ],
      },
      {
        bulletHeading: "Boolean",
        points: [
          "The `Boolean` type has two possible values: `true` or `false`.",
          "Used for conditional checks, comparisons, and logic in programs.",
          "Example: `let isActive = true;`.",
        ],
      },
      {
        bulletHeading: "Undefined",
        points: [
          "A variable that has been declared but not assigned a value is automatically assigned the value `undefined`.",
          "Example: `let x; console.log(x); // undefined`.",
          "`undefined` is a special value used by JavaScript to indicate that a variable has no value.",
        ],
      },
      {
        bulletHeading: "Null",
        points: [
          "The `null` type is used to represent the intentional absence of any value.",
          "It is an assignment value that indicates that a variable has been explicitly set to have no value.",
          "Example: `let user = null;`.",
        ],
      },
      {
        bulletHeading: "Symbol (ES6)",
        points: [
          "The `Symbol` type represents a unique and immutable value, often used as an identifier for object properties.",
          "Symbols are useful for creating unique object property keys, avoiding property name collisions.",
          "Example: `let sym = Symbol('description');`.",
        ],
      },
      {
        bulletHeading: "BigInt (ES11)",
        points: [
          "The `BigInt` type is used to represent numbers larger than the maximum value of the `Number` type (2^53 - 1).",
          "Example: `let bigNumber = 9007199254740991n;` (The `n` suffix indicates a `BigInt`).",
        ],
      },
    ],
  },
  {
    heading: "3. Non-Primitive Data Types (Reference Types)",
    subHeading: "Complex Data Types",
    bulletpoints: [
      {
        bulletHeading: "Object",
        points: [
          "Objects are collections of key-value pairs where the key is a string (or symbol) and the value can be any data type.",
          "Objects are mutable, meaning their properties can be modified after creation.",
          "Example: `let person = { name: 'John', age: 30 };`.",
        ],
      },
      {
        bulletHeading: "Array",
        points: [
          "Arrays are a special type of object used to store multiple values in a single variable.",
          "Arrays are ordered, and each element has an index (starting from 0).",
          "Example: `let fruits = ['Apple', 'Banana', 'Cherry'];`.",
        ],
      },
      {
        bulletHeading: "Function",
        points: [
          "In JavaScript, functions are also considered objects and can be assigned to variables.",
          "They can be invoked to perform specific tasks.",
          "Example: `function greet() { console.log('Hello'); }`.",
        ],
      },
    ],
  },
  {
    heading: "4. Type Conversion",
    subHeading: "Implicit and Explicit Type Conversion",
    bulletpoints: [
      {
        bulletHeading: "Implicit Type Conversion",
        points: [
          "JavaScript automatically converts between data types when necessary.",
          "For example, when a string is added to a number, JavaScript will convert the number to a string.",
          "Example: `let result = '5' + 2; // result = '52'`.",
        ],
      },
      {
        bulletHeading: "Explicit Type Conversion",
        points: [
          "Explicit conversion (type casting) allows developers to manually convert data types.",
          "You can use functions like `String()`, `Number()`, `Boolean()`, etc., to convert values.",
          "Example: `let num = Number('42'); // num = 42`.",
        ],
      },
    ],
  },
  {
    heading: "5. Type Checking",
    subHeading: "Checking the Type of a Variable",
    bulletpoints: [
      {
        bulletHeading: "Using `typeof` Operator",
        points: [
          "The `typeof` operator is used to determine the type of a variable or value.",
          "It returns a string representing the type of the operand.",
          "Example: `typeof 42; // 'number'`.",
        ],
      },
      {
        bulletHeading: "Using `instanceof` Operator",
        points: [
          "The `instanceof` operator is used to check if an object is an instance of a particular class or constructor.",
          "Example: `[] instanceof Array; // true`.",
        ],
      },
    ],
  },
  {
    heading: "6. Best Practices for Using Data Types",
    subHeading: "Writing Clean and Efficient Code",
    bulletpoints: [
      {
        bulletHeading: "Use `const` for Immutable Values",
        points: [
          "For primitive values that do not change, use `const` to declare variables to ensure that their values remain constant.",
          "Example: `const pi = 3.14;`.",
        ],
      },
      {
        bulletHeading: "Use `let` for Mutable Variables",
        points: [
          "For values that are subject to change, use `let` to declare variables.",
          "Example: `let score = 100; score = 90;`.",
        ],
      },
      {
        bulletHeading: "Avoid Implicit Type Conversion",
        points: [
          "Be careful with operations that might lead to implicit type conversion, as they can introduce bugs or unexpected behavior.",
          "For example, avoid adding a number to a string unless it's intentional.",
        ],
      },
    ],
  },
];

export const jsFunctionArray = [
  {
    heading: "1. JavaScript Functions",

    bulletpoints: [
      {
        bulletHeading: "What is a Function?",
        points: [
          "A function is a block of code that can be defined once and executed multiple times.",
          "Functions allow you to group code into reusable and organized segments.",
          "Functions can take inputs (called parameters) and return outputs (called return values).",
        ],
      },
      {
        bulletHeading: "Why Use Functions?",
        points: [
          "Functions help avoid code repetition by allowing you to reuse code across different parts of your program.",
          "They make your code more readable and maintainable.",
        ],
      },
    ],
  },
  {
    heading: "2. Function Declaration",
    subHeading: "Defining Functions",
    bulletpoints: [
      {
        bulletHeading: "Syntax",
        points: [
          "A function declaration is defined using the `function` keyword, followed by the function name, parameters (optional), and the function body.",
          "Syntax: `function functionName(parameter1, parameter2) { // function body }`.",
          "Example: `function greet(name) { console.log('Hello, ' + name); }`.",
        ],
      },
      {
        bulletHeading: "Function Example",
        points: [
          "Example of a function declaration that takes a parameter and logs a greeting message.",
          "```javascript\nfunction greet(name) {\n  console.log('Hello, ' + name);\n}\n```",
          "Calling the function: `greet('Alice'); // Output: Hello, Alice`.",
        ],
      },
    ],
  },
  {
    heading: "3. Function Expressions",
    subHeading: "Anonymous Functions",
    bulletpoints: [
      {
        bulletHeading: "What is a Function Expression?",
        points: [
          "A function expression is a function that is defined and assigned to a variable.",
          "Function expressions can be anonymous (without a name), and they are executed only when invoked.",
          "Syntax: `const functionName = function(parameter1, parameter2) { // function body };`.",
        ],
      },
      {
        bulletHeading: "Example of Function Expression",
        points: [
          "Example of a function expression assigned to a variable.",
          "```javascript\nconst greet = function(name) {\n  console.log('Hello, ' + name);\n};\n```",
          "Calling the function: `greet('Bob'); // Output: Hello, Bob`.",
        ],
      },
    ],
  },
  {
    heading: "4. Arrow Functions",
    subHeading: "Simplified Syntax",
    bulletpoints: [
      {
        bulletHeading: "What is an Arrow Function?",
        points: [
          "Arrow functions are a shorthand syntax for writing function expressions.",
          "They do not have their own `this` value and are commonly used for short, one-liner functions.",
          "Syntax: `const functionName = (parameter1, parameter2) => { // function body };`.",
        ],
      },
      {
        bulletHeading: "Example of Arrow Function",
        points: [
          "Example of an arrow function that takes a parameter and logs a greeting.",
          "```javascript\nconst greet = (name) => {\n  console.log('Hello, ' + name);\n};\n```",
          "Calling the function: `greet('Charlie'); // Output: Hello, Charlie`.",
        ],
      },
      {
        bulletHeading: "Arrow Function with Implicit Return",
        points: [
          "If the function body consists of only one expression, you can omit the curly braces and the `return` keyword.",
          "Example: `const add = (a, b) => a + b;`.",
        ],
      },
    ],
  },
  {
    heading: "5. Parameters and Arguments",
    subHeading: "Working with Function Inputs",
    bulletpoints: [
      {
        bulletHeading: "What are Parameters?",
        points: [
          "Parameters are variables that are defined in the function declaration, representing the inputs that the function will accept.",
          "Example: `function add(a, b) { return a + b; }` where `a` and `b` are parameters.",
        ],
      },
      {
        bulletHeading: "What are Arguments?",
        points: [
          "Arguments are the actual values passed to the function when it is called.",
          "Example: `add(3, 4)` where `3` and `4` are the arguments passed to the `add` function.",
        ],
      },
      {
        bulletHeading: "Default Parameters",
        points: [
          "JavaScript allows you to set default values for parameters.",
          "If no argument is passed for a parameter, its default value will be used.",
          "Example: `function greet(name = 'Guest') { console.log('Hello, ' + name); }`.",
        ],
      },
    ],
  },
  {
    heading: "6. Return Statement",
    subHeading: "Outputting from Functions",
    bulletpoints: [
      {
        bulletHeading: "What is the Return Statement?",
        points: [
          "The `return` statement is used to send a value back from the function to the place where it was called.",
          "After the `return` statement, the function execution is stopped and no further code in the function is executed.",
          "Example: `function add(a, b) { return a + b; }`.",
        ],
      },
      {
        bulletHeading: "Return Multiple Values",
        points: [
          "JavaScript functions can return multiple values by returning an object or an array.",
          "Example: `function getUserInfo() { return { name: 'Alice', age: 30 }; }`.",
        ],
      },
    ],
  },
  {
    heading: "7. Function Scope",
    subHeading: "Variable Accessibility",
    bulletpoints: [
      {
        bulletHeading: "What is Function Scope?",
        points: [
          "Scope refers to the accessibility or visibility of variables and functions in different parts of the code.",
          "Variables declared inside a function are only accessible within that function (local scope).",
          "Example: `function greet() { let name = 'John'; console.log(name); }`.",
        ],
      },
      {
        bulletHeading: "Global vs Local Variables",
        points: [
          "Variables declared outside of functions are considered global and are accessible throughout the program.",
          "Variables declared inside a function are local to that function and cannot be accessed outside it.",
        ],
      },
    ],
  },
  {
    heading: "8. IIFE (Immediately Invoked Function Expressions)",
    subHeading: "Self-Executing Functions",
    bulletpoints: [
      {
        bulletHeading: "What is an IIFE?",
        points: [
          "An IIFE (Immediately Invoked Function Expression) is a function that is defined and executed immediately after its creation.",
          "IIFEs are commonly used to create a local scope and avoid polluting the global scope.",
          "Syntax: `(function() { // code here })();`.",
        ],
      },
      {
        bulletHeading: "Example of IIFE",
        points: [
          "Example of an IIFE that logs a message to the console.",
          "```javascript\n(function() {\n  console.log('Hello from IIFE');\n})();\n```",
        ],
      },
    ],
  },
  {
    heading: "9. Recursion",
    subHeading: "A Function Calling Itself",
    bulletpoints: [
      {
        bulletHeading: "What is Recursion?",
        points: [
          "Recursion occurs when a function calls itself in order to solve a problem.",
          "Recursion is often used for problems that can be broken down into smaller, similar subproblems.",
          "Example: calculating the factorial of a number.",
        ],
      },
      {
        bulletHeading: "Example of Recursion",
        points: [
          "Example of a recursive function that calculates the factorial of a number.",
          "```javascript\nfunction factorial(n) {\n  if (n === 0) return 1;\n  return n * factorial(n - 1);\n}\n```",
          "Calling the function: `factorial(5); // Output: 120`.",
        ],
      },
    ],
  },
  {
    heading: "10. Best Practices for Functions",
    subHeading: "Writing Clean and Maintainable Functions",
    bulletpoints: [
      {
        bulletHeading: "Keep Functions Small and Focused",
        points: [
          "A function should do one thing and do it well. Keep functions focused on a single task.",
          "If a function grows too large, consider breaking it into smaller helper functions.",
        ],
      },
      {
        bulletHeading: "Use Descriptive Names",
        points: [
          "Name your functions descriptively to convey their purpose. Use action verbs for function names.",
          "Example: `getUserData`, `calculateTotal`, `sortArray`.",
        ],
      },
      {
        bulletHeading: "Avoid Side Effects",
        points: [
          "A function should not alter external variables or states unless necessary. This makes the function more predictable and testable.",
        ],
      },
    ],
  },
];
export const jsObjectsArray = [
  {
    heading: "1. JavaScript Objects",

    bulletpoints: [
      {
        bulletHeading: "What is an Object?",
        points: [
          "An object is a collection of key-value pairs (also called properties or methods) in JavaScript.",
          "Objects allow you to group related data and functionality together, enabling more organized and manageable code.",
          "Each key in an object is a string (or symbol), and each value can be any data type, including other objects.",
        ],
      },
      {
        bulletHeading: "Why Use Objects?",
        points: [
          "Objects are used to model real-world entities and represent complex data structures.",
          "They help organize data and behavior, making the code more readable, maintainable, and scalable.",
        ],
      },
    ],
  },
  {
    heading: "2. Creating an Object",
    subHeading: "Object Literals and Constructors",
    bulletpoints: [
      {
        bulletHeading: "Object Literal Syntax",
        points: [
          "An object can be created using object literal syntax, which consists of curly braces `{}` containing key-value pairs.",
          "Example: `const person = { name: 'John', age: 30 };`.",
          "The keys (properties) are the variable names, and the values are the associated data.",
        ],
      },
      {
        bulletHeading: "Using the `new Object()` Constructor",
        points: [
          "Objects can also be created using the `new Object()` syntax.",
          "Example: `const car = new Object(); car.make = 'Toyota'; car.model = 'Corolla';`.",
        ],
      },
    ],
  },
  {
    heading: "3. Accessing Object Properties",
    subHeading: "Dot Notation and Bracket Notation",
    bulletpoints: [
      {
        bulletHeading: "Dot Notation",
        points: [
          "Dot notation is the most common way to access the properties of an object.",
          "Syntax: `object.property`.",
          "Example: `console.log(person.name); // Output: John`.",
        ],
      },
      {
        bulletHeading: "Bracket Notation",
        points: [
          "Bracket notation allows you to access object properties using a string (or variable) as the key.",
          "It is useful when the property name is dynamic or contains special characters.",
          "Syntax: `object['property']`.",
          "Example: `console.log(person['age']); // Output: 30`.",
        ],
      },
      {
        bulletHeading: "Accessing Nested Objects",
        points: [
          "To access nested objects, you can use dot or bracket notation repeatedly.",
          "Example: `const person = { address: { city: 'New York', zip: '10001' } }; console.log(person.address.city); // Output: New York`.",
        ],
      },
    ],
  },
  {
    heading: "4. Adding and Modifying Object Properties",
    subHeading: "Dynamic Property Assignment",
    bulletpoints: [
      {
        bulletHeading: "Adding Properties",
        points: [
          "You can add new properties to an object using dot or bracket notation.",
          "Example (dot notation): `person.gender = 'Male';`.",
          "Example (bracket notation): `person['email'] = 'john@example.com';`.",
        ],
      },
      {
        bulletHeading: "Modifying Existing Properties",
        points: [
          "To modify an existing property, simply reassign a new value to it using dot or bracket notation.",
          "Example: `person.age = 35;`.",
        ],
      },
    ],
  },
  {
    heading: "5. Deleting Object Properties",
    subHeading: "Removing Properties",
    bulletpoints: [
      {
        bulletHeading: "Using the `delete` Operator",
        points: [
          "To remove a property from an object, you can use the `delete` operator.",
          "Example: `delete person.email;`.",
          "After deletion, the property no longer exists in the object.",
        ],
      },
    ],
  },
  {
    heading: "6. Object Methods",
    subHeading: "Functions Inside Objects",
    bulletpoints: [
      {
        bulletHeading: "Defining Methods in Objects",
        points: [
          "An object can contain functions as its properties. These functions are called methods.",
          "Methods are defined in the same way as regular functions but are assigned as object properties.",
          "Example: `const person = { name: 'John', greet: function() { console.log('Hello!'); } };`.",
          "Calling the method: `person.greet(); // Output: Hello!`.",
        ],
      },
      {
        bulletHeading: "Method Shorthand (ES6)",
        points: [
          "In ES6, you can define methods in objects using shorthand syntax.",
          "Syntax: `methodName() { // method body }`.",
          "Example: `const person = { name: 'John', greet() { console.log('Hello!'); } };`.",
        ],
      },
    ],
  },
  {
    heading: "7. `this` Keyword",
    subHeading: "Referring to the Current Object",
    bulletpoints: [
      {
        bulletHeading: "What is `this`?",
        points: [
          "The `this` keyword refers to the current object within its method.",
          "It allows the method to access other properties and methods of the same object.",
          "Example: `const person = { name: 'John', greet() { console.log('Hello, ' + this.name); } };`.",
        ],
      },
      {
        bulletHeading: "Example of `this` Usage",
        points: [
          "In the example, `this.name` refers to the `name` property of the `person` object.",
          "Calling `person.greet(); // Output: Hello, John`.",
        ],
      },
    ],
  },
  {
    heading: "8. Object Destructuring",
    subHeading: "Extracting Properties into Variables",
    bulletpoints: [
      {
        bulletHeading: "What is Object Destructuring?",
        points: [
          "Object destructuring is a syntax that allows you to unpack values from objects into individual variables.",
          "Syntax: `const { key1, key2 } = object;`.",
          "Example: `const person = { name: 'John', age: 30 }; const { name, age } = person;`.",
        ],
      },
      {
        bulletHeading: "Destructuring with Renaming",
        points: [
          "You can rename the variables during destructuring by using the `:` syntax.",
          "Example: `const { name: personName, age: personAge } = person;`.",
        ],
      },
      {
        bulletHeading: "Destructuring with Default Values",
        points: [
          "You can assign default values to variables in case the object doesn't contain the specified property.",
          "Example: `const { name, gender = 'Unknown' } = person;`.",
        ],
      },
    ],
  },
  {
    heading: "9. Object Iteration",
    subHeading: "Looping Through Objects",
    bulletpoints: [
      {
        bulletHeading: "Using `for...in` Loop",
        points: [
          "The `for...in` loop can be used to iterate over the enumerable properties of an object.",
          "Syntax: `for (const key in object) { // code }`.",
          "Example: `for (const key in person) { console.log(key + ': ' + person[key]); }`.",
        ],
      },
      {
        bulletHeading:
          "Using `Object.keys()`, `Object.values()`, and `Object.entries()`",
        points: [
          "You can use these methods to get an array of the keys, values, or key-value pairs from an object.",
          "Example: `Object.keys(person)` returns an array of property names.",
          "`Object.entries(person)` returns an array of key-value pairs as arrays.",
        ],
      },
    ],
  },
  {
    heading: "10. Best Practices for Working with Objects",
    subHeading: "Organizing and Managing Data",
    bulletpoints: [
      {
        bulletHeading: "Use Descriptive Property Names",
        points: [
          "Choose meaningful names for object properties that describe the data they represent.",
          "Example: Instead of `person.x`, use `person.age`.",
        ],
      },
      {
        bulletHeading: "Avoid Object Mutation",
        points: [
          "Whenever possible, avoid modifying objects directly. Instead, create new objects to preserve immutability.",
          "This makes your code more predictable and easier to debug.",
        ],
      },
      {
        bulletHeading: "Use Object Methods for Encapsulation",
        points: [
          "Encapsulate data and behavior within objects. Use methods to operate on the object's data rather than modifying the data directly from outside the object.",
        ],
      },
    ],
  },
];

export const jsPrimitiveArray = [
  {
    heading: "1. Primitive Data Types",

    bulletpoints: [
      {
        bulletHeading: "What are Primitive Data Types?",
        points: [
          "Primitive data types are the most basic types of data in JavaScript.",
          "They are immutable (cannot be changed directly) and are stored by value.",
          "There are 7 primitive data types in JavaScript: `string`, `number`, `boolean`, `undefined`, `null`, `symbol`, and `bigint`.",
        ],
      },
      {
        bulletHeading: "Why Primitive Data Types Matter?",
        points: [
          "Primitive data types are the building blocks of all JavaScript applications.",
          "Understanding these types is crucial for working with variables, performing operations, and debugging code.",
        ],
      },
    ],
  },
  {
    heading: "2. String",
    subHeading: "Textual Data",
    bulletpoints: [
      {
        bulletHeading: "What is a String?",
        points: [
          "A string is a sequence of characters used to represent text.",
          "Strings are enclosed in single quotes , double quotes, or backticks  for template literals.",
        ],
      },
      {
        bulletHeading: "String Examples",
        points: [
          "Example (single quotes): `let name = 'Alice';`.",
          'Example (double quotes): `let message = "Hello, world!";`.',
          "Example (template literal): `let greeting = `Hello, ${name}!`;`.",
        ],
      },
      {
        bulletHeading: "String Methods",
        points: [
          "Strings have many useful methods, such as `length`, `toUpperCase()`, `toLowerCase()`, `trim()`, and more.",
          "Example: `let str = 'hello'; console.log(str.toUpperCase()); // Output: 'HELLO'`.",
        ],
      },
    ],
  },
  {
    heading: "3. Number",
    subHeading: "Numeric Values",
    bulletpoints: [
      {
        bulletHeading: "What is a Number?",
        points: [
          "A number represents numeric values, including integers and floating-point numbers.",
          "JavaScript has only one type for numbers, whether they are integers or decimals.",
        ],
      },
      {
        bulletHeading: "Number Examples",
        points: [
          "Example (integer): `let age = 30;`.",
          "Example (floating-point): `let pi = 3.14;`.",
          "Example (scientific notation): `let speed = 1.6e2; // 160`.",
        ],
      },
      {
        bulletHeading: "Number Methods",
        points: [
          "Numbers also have methods such as `toFixed()`, `toString()`, `parseInt()`, and `parseFloat()`.",
          "Example: `let num = 10.123; console.log(num.toFixed(2)); // Output: 10.12`.",
        ],
      },
    ],
  },
  {
    heading: "4. Boolean",
    subHeading: "True or False",
    bulletpoints: [
      {
        bulletHeading: "What is a Boolean?",
        points: [
          "A boolean represents one of two possible values: `true` or `false`.",
          "Booleans are often used in conditional statements to control the flow of programs.",
        ],
      },
      {
        bulletHeading: "Boolean Examples",
        points: [
          "Example (true): `let isActive = true;`.",
          "Example (false): `let isLoggedIn = false;`.",
        ],
      },
      {
        bulletHeading: "Boolean Use Cases",
        points: [
          "Booleans are commonly used in conditional logic: `if (isActive) { console.log('Active!'); }`.",
        ],
      },
    ],
  },
  {
    heading: "5. Undefined",
    subHeading: "Uninitialized Variables",
    bulletpoints: [
      {
        bulletHeading: "What is Undefined?",
        points: [
          "`undefined` is the default value assigned to a variable that has been declared but not initialized with a value.",
          "It is also the return value of functions that do not explicitly return a value.",
        ],
      },
      {
        bulletHeading: "Undefined Examples",
        points: [
          "Example: `let x; console.log(x); // Output: undefined`.",
          "Example (function): `function greet() {} console.log(greet()); // Output: undefined`.",
        ],
      },
      {
        bulletHeading: "Checking for Undefined",
        points: [
          "You can check if a variable is `undefined` by comparing it: `if (x === undefined)`.",
        ],
      },
    ],
  },
  {
    heading: "6. Null",
    subHeading: "Empty or Non-Existent Value",
    bulletpoints: [
      {
        bulletHeading: "What is Null?",
        points: [
          "`null` represents the intentional absence of any object value.",
          "It is often used to indicate that a variable should contain an object but is currently empty or unknown.",
        ],
      },
      {
        bulletHeading: "Null Examples",
        points: [
          "Example: `let person = null;`.",
          "Example: `let car = null; console.log(car); // Output: null`.",
        ],
      },
      {
        bulletHeading: "Null vs Undefined",
        points: [
          "`undefined` means a variable is declared but not yet assigned a value, while `null` explicitly means the variable has no value (usually set by the programmer).",
        ],
      },
    ],
  },
  {
    heading: "7. Symbol",
    subHeading: "Unique Identifiers",
    bulletpoints: [
      {
        bulletHeading: "What is a Symbol?",
        points: [
          "A `Symbol` is a primitive data type introduced in ECMAScript 6 (ES6).",
          "Symbols are unique and immutable identifiers used to create property keys that are guaranteed to be unique, even if they have the same description.",
        ],
      },
      {
        bulletHeading: "Symbol Example",
        points: [
          "Example: `const id = Symbol('id'); console.log(id); // Output: Symbol(id)`.",
          "You can use symbols as property keys: `let obj = { [id]: '123' };`.",
        ],
      },
      {
        bulletHeading: "Symbols in Objects",
        points: [
          "Symbols can be used as object property keys, and they are not enumerable by default.",
          "They help avoid key collisions when different parts of the code might use the same property names.",
        ],
      },
    ],
  },
  {
    heading: "8. BigInt",
    subHeading: "Large Integer Values",
    bulletpoints: [
      {
        bulletHeading: "What is BigInt?",
        points: [
          "`BigInt` is a primitive data type that allows you to work with integers larger than the `Number` type can handle.",
          "It can represent arbitrarily large integers, beyond the range of `Number.MAX_SAFE_INTEGER`.",
        ],
      },
      {
        bulletHeading: "BigInt Example",
        points: [
          "Example: `const bigNumber = 1234567890123456789012345678901234567890n;`.",
          "Note the `n` suffix to indicate a BigInt value.",
        ],
      },
      {
        bulletHeading: "BigInt Use Cases",
        points: [
          "BigInt is useful for applications that require dealing with very large integers, such as cryptography or scientific calculations.",
        ],
      },
    ],
  },
  {
    heading: "9. Type Checking",
    subHeading: "Identifying Data Types",
    bulletpoints: [
      {
        bulletHeading: "Using `typeof` Operator",
        points: [
          "`typeof` is used to check the type of a primitive value.",
          "Example: `typeof 42; // Output: 'number'`, `typeof 'hello'; // Output: 'string'`.",
        ],
      },
      {
        bulletHeading: "Using `instanceof` Operator",
        points: [
          "For more complex types (like objects), you can use `instanceof` to check if an object is an instance of a particular class.",
          "Example: `myDate instanceof Date;`.",
        ],
      },
    ],
  },
];

export const jsComarisonLogicalArray = [
  {
    heading: "1. Comparison and Logical Operations",

    bulletpoints: [
      {
        bulletHeading: "What are Comparison and Logical Operators?",
        points: [
          "Comparison operators are used to compare two values and return a boolean result (`true` or `false`).",
          "Logical operators are used to combine multiple boolean expressions and return a boolean result.",
          "These operators are commonly used in conditional statements like `if`, `else`, and loops.",
        ],
      },
      {
        bulletHeading: "Types of Comparison and Logical Operators",
        points: [
          "There are several types of comparison and logical operators in JavaScript, including equality, inequality, and logical operators.",
          "They are essential for making decisions and controlling program flow.",
        ],
      },
    ],
  },
  {
    heading: "2. Comparison Operators",
    subHeading: "Operators for Comparing Values",
    bulletpoints: [
      {
        bulletHeading: "Equality (==)",
        points: [
          "The `==` operator checks whether two values are equal, but it performs type coercion, meaning it converts the operands to a common type before comparing.",
          "Example: `5 == '5'` returns `true` because JavaScript converts the string `'5'` to a number before comparing.",
        ],
      },
      {
        bulletHeading: "Strict Equality (===)",
        points: [
          "The `===` operator checks whether two values are equal and of the same type (no type coercion).",
          "Example: `5 === '5'` returns `false` because one is a number and the other is a string.",
        ],
      },
      {
        bulletHeading: "Inequality (!=)",
        points: [
          "The `!=` operator checks whether two values are not equal, performing type coercion.",
          "Example: `5 != '5'` returns `false` because the values are considered equal after type coercion.",
        ],
      },
      {
        bulletHeading: "Strict Inequality (!==)",
        points: [
          "The `!==` operator checks whether two values are not equal and/or not of the same type.",
          "Example: `5 !== '5'` returns `true` because one is a number and the other is a string.",
        ],
      },
      {
        bulletHeading: "Greater Than (>) and Less Than (<)",
        points: [
          "The `>` operator checks if the left operand is greater than the right operand.",
          "The `<` operator checks if the left operand is less than the right operand.",
          "Example: `5 > 3` returns `true`, and `3 < 2` returns `false`.",
        ],
      },
      {
        bulletHeading:
          "Greater Than or Equal To (>=) and Less Than or Equal To (<=)",
        points: [
          "The `>=` operator checks if the left operand is greater than or equal to the right operand.",
          "The `<=` operator checks if the left operand is less than or equal to the right operand.",
          "Example: `5 >= 5` returns `true`, and `3 <= 4` returns `true`.",
        ],
      },
    ],
  },
  {
    heading: "3. Logical Operators",
    subHeading: "Operators for Combining Boolean Expressions",
    bulletpoints: [
      {
        bulletHeading: "Logical AND (&&)",
        points: [
          "The `&&` operator checks if both expressions are `true`. If both are true, it returns `true`; otherwise, it returns `false`.",
          "Example: `true && false` returns `false`, and `true && true` returns `true`.",
        ],
      },
      {
        bulletHeading: "Logical OR (||)",
        points: [
          "The `||` operator checks if at least one of the expressions is `true`. If at least one is true, it returns `true`; otherwise, it returns `false`.",
          "Example: `false || true` returns `true`, and `false || false` returns `false`.",
        ],
      },
      {
        bulletHeading: "Logical NOT (!)",
        points: [
          "The `!` operator inverts the truthiness of a boolean expression. If the expression is `true`, it returns `false`, and vice versa.",
          "Example: `!true` returns `false`, and `!false` returns `true`.",
        ],
      },
    ],
  },
  {
    heading: "4. Truthy and Falsy Values",
    subHeading: "Values That Evaluate to True or False",
    bulletpoints: [
      {
        bulletHeading: "Truthy Values",
        points: [
          "A value is considered truthy if it evaluates to `true` in a boolean context (e.g., in `if` statements).",
          "Most values are truthy, including non-zero numbers, non-empty strings, and objects.",
          "Examples of truthy values: `1`, `'hello'`, `{}`, `[]`, and `true`.",
        ],
      },
      {
        bulletHeading: "Falsy Values",
        points: [
          "A value is considered falsy if it evaluates to `false` in a boolean context.",
          "The falsy values in JavaScript are: `false`, `0`, `-0`, `NaN`, `''` (empty string), `null`, `undefined`, and `document.all` (in some browsers).",
          "Example: `if (0) { console.log('False!'); }` will not print anything, because `0` is falsy.",
        ],
      },
    ],
  },
  {
    heading: "5. Short-circuit Evaluation",
    subHeading: "Efficient Evaluation in Logical Expressions",
    bulletpoints: [
      {
        bulletHeading: "Short-circuiting with AND (&&)",
        points: [
          "With the `&&` (AND) operator, if the first condition is falsy, the second condition is not evaluated, because the result is already determined to be `false`.",
          "Example: `false && true` will return `false` without checking the second condition.",
        ],
      },
      {
        bulletHeading: "Short-circuiting with OR (||)",
        points: [
          "With the `||` (OR) operator, if the first condition is truthy, the second condition is not evaluated, because the result is already determined to be `true`.",
          "Example: `true || false` will return `true` without checking the second condition.",
        ],
      },
    ],
  },
  {
    heading: "6. Combining Comparison and Logical Operators",
    subHeading: "Complex Expressions",
    bulletpoints: [
      {
        bulletHeading: "Combining Comparison and Logical Operators",
        points: [
          "You can combine comparison and logical operators to create more complex expressions.",
          "Example: `(age >= 18 && age <= 65)` checks if `age` is between 18 and 65, inclusive.",
          "Example: `(x > 5 || y === 10)` checks if either condition is true.",
        ],
      },
      {
        bulletHeading: "Order of Evaluation",
        points: [
          "JavaScript evaluates logical operators from left to right, but `&&` has higher precedence than `||`.",
          "You can use parentheses to group conditions and change the order of evaluation.",
          "Example: `true && (false || true)` will first evaluate `false || true`, then apply `&&` to the result.",
        ],
      },
    ],
  },
  {
    heading: "7. Common Mistakes to Avoid",
    subHeading: "Tips for Correct Usage",
    bulletpoints: [
      {
        bulletHeading: "Confusing `==` with `===`",
        points: [
          "Always use `===` (strict equality) to avoid unexpected type coercion.",
          "Using `==` can result in unexpected behavior, as JavaScript may automatically convert types to match, which could lead to bugs.",
        ],
      },
      {
        bulletHeading: "Incorrect Use of Logical Operators",
        points: [
          "Be careful when combining logical operators. Misuse can lead to incorrect evaluations and unintended results.",
          "Example: `(x > 5 && y < 10) || z` might not behave as expected if parentheses are not used properly.",
        ],
      },
    ],
  },
];

export const jsUseStrictArray = [
  {
    heading: "1. `use strict`",

    bulletpoints: [
      {
        bulletHeading: "What is `use strict`?",
        points: [
          "`use strict` is a directive in JavaScript that helps to write safer and more reliable code by enforcing stricter parsing and error handling.",
          "It eliminates some JavaScript language features that are considered problematic or error-prone.",
          "It can be applied to entire scripts or individual functions.",
        ],
      },
      {
        bulletHeading: "Why Use `use strict`?",
        points: [
          "It helps catch common coding mistakes, such as assigning values to undeclared variables.",
          "It prevents the use of unsafe features, like `with`, which can lead to ambiguous code behavior.",
          "It makes JavaScript behave more predictably and reduces potential bugs.",
        ],
      },
    ],
  },
  {
    heading: "2. Enabling `use strict`",
    subHeading: "How to Enable Strict Mode",
    bulletpoints: [
      {
        bulletHeading: "Enabling for Entire Script",
        points: [
          "To apply strict mode to the entire JavaScript file, place `'use strict';` at the very top of the script, before any other code.",
          "Example:",
          "```javascript",
          "'use strict';",
          "x = 10; // Throws an error because 'x' is not declared",
          "```",
        ],
      },
      {
        bulletHeading: "Enabling for Individual Functions",
        points: [
          "Strict mode can also be enabled within a specific function, making only that function adhere to strict mode rules.",
          "Example:",
          "```javascript",
          "function myFunction() {",
          "  'use strict';",
          "  y = 20; // Throws an error because 'y' is not declared",
          "}",
          "```",
        ],
      },
    ],
  },
  {
    heading: "3. Key Features of `use strict`",
    subHeading: "Behavior Changes in Strict Mode",
    bulletpoints: [
      {
        bulletHeading: "Disallows Undeclared Variables",
        points: [
          "In strict mode, assigning a value to an undeclared variable will throw an error.",
          "Example: `x = 5;` will throw a `ReferenceError` unless `x` is previously declared with `var`, `let`, or `const`.",
        ],
      },
      {
        bulletHeading: "Prevents Assignments to Read-Only Properties",
        points: [
          "Strict mode disallows assignments to read-only properties, non-writable properties, or getter-only properties.",
          "Example: `Object.defineProperty(obj, 'prop', { value: 42, writable: false }); obj.prop = 10;` will throw a `TypeError` in strict mode.",
        ],
      },
      {
        bulletHeading: "Disallows Duplicate Property Names",
        points: [
          "In strict mode, having duplicate property names in an object will throw a syntax error.",
          "Example: `let obj = { a: 1, a: 2 };` will throw a `SyntaxError` in strict mode.",
        ],
      },
      {
        bulletHeading: "Eliminates `with` Statements",
        points: [
          "`with` is not allowed in strict mode because it makes code ambiguous and hard to optimize.",
          "Example: `with (obj) { x = 5; }` will throw a `SyntaxError` in strict mode.",
        ],
      },
      {
        bulletHeading: "Makes `this` Undefined in Functions",
        points: [
          "In strict mode, if `this` is not explicitly bound to an object (e.g., in a method or function), it will be `undefined` instead of the global object (`window` in browsers).",
          "Example: In a function call, `this` will be `undefined` instead of referring to the global object if not bound.",
          "```javascript",
          "function test() {",
          "  'use strict';",
          "  console.log(this); // undefined",
          "}",
          "test();",
          "```",
        ],
      },
      {
        bulletHeading: "Prevents `delete` on Un-deletable Properties",
        points: [
          "Strict mode throws an error when trying to delete a non-deletable property.",
          "Example: `delete Object.prototype;` will throw a `TypeError` in strict mode.",
        ],
      },
      {
        bulletHeading: "Makes Eval Safer",
        points: [
          "In strict mode, `eval()` does not introduce new variables into the surrounding scope.",
          "Example: `eval('var x = 10');` will not create a new variable `x` in the surrounding scope in strict mode.",
        ],
      },
    ],
  },
  {
    heading: "4. Benefits of Using `use strict`",
    subHeading: "Why Developers Should Use It",
    bulletpoints: [
      {
        bulletHeading: "Improved Debugging",
        points: [
          "Strict mode helps catch common JavaScript mistakes that are harder to debug without it.",
          "By preventing silent errors, strict mode makes code behavior more predictable and easier to trace.",
        ],
      },
      {
        bulletHeading: "Better Performance",
        points: [
          "Some JavaScript engines can optimize strict mode code more effectively due to the absence of ambiguous behavior (e.g., no `with` statements or implicit global variables).",
          "This can lead to better performance in some cases.",
        ],
      },
      {
        bulletHeading: "Cleaner Code",
        points: [
          "Strict mode helps enforce cleaner coding practices by disallowing dangerous or error-prone language features.",
          "By catching potential bugs early, it encourages developers to write more reliable and maintainable code.",
        ],
      },
    ],
  },
  {
    heading: "5. Common Mistakes and Pitfalls",
    subHeading: "What to Avoid When Using `use strict`",
    bulletpoints: [
      {
        bulletHeading: "Accidentally Omitting `use strict` in Functions",
        points: [
          "If you forget to place `'use strict';` at the top of a function, the function will not run in strict mode and will not benefit from its error-catching capabilities.",
          "Always ensure the `'use strict';` directive is at the beginning of the function body.",
        ],
      },
      {
        bulletHeading: "Forgetting to Declare Variables",
        points: [
          "In strict mode, attempting to use a variable without declaring it will result in a `ReferenceError`.",
          "Always declare variables with `var`, `let`, or `const`.",
        ],
      },
      {
        bulletHeading: "Using `with` Statements",
        points: [
          "The `with` statement is not allowed in strict mode. Avoid using `with` as it can lead to unpredictable and hard-to-debug behavior.",
          "If you need to work with an object's properties, use direct property access (e.g., `obj.prop`) instead of the `with` statement.",
        ],
      },
    ],
  },
];
export const jsArrowFunctionArray = [
  {
    heading: "Arrow Functions",

    bulletpoints: [
      {
        bulletHeading: "What is an Arrow Function?",
        points: [
          "Arrow functions provide a shorthand way to write function expressions in JavaScript.",
          "They are syntactically more compact than traditional function expressions.",
          "Arrow functions are often used for callbacks, array operations, and other situations where you need a simple function.",
        ],
      },
    ],
  },
  {
    heading: "Syntax of Arrow Functions",
    subHeading: "Arrow Function Syntax",
    bulletpoints: [
      {
        bulletHeading: "Basic Syntax",
        points: [
          "An arrow function is defined using the `=>` syntax.",
          "If the function body consists of only a single expression, it can be written without curly braces `{}` and will implicitly return the result of that expression.",
        ],
      },
      {
        bulletHeading: "Arrow Function with No Parameters",
        points: [
          "If the function has no parameters, you can omit the parentheses `()` entirely.",
        ],
      },
      {
        bulletHeading: "Arrow Function with One Parameter",
        points: [
          "For a single parameter, you can omit the parentheses as well, but it is still syntactically correct to use them.",
        ],
      },
    ],
    example: `
      // No parameters
      const greet = () => console.log("Hello!");

      // One parameter
      const square = x => x * x;

      // Multiple parameters
      const add = (a, b) => a + b;
    `,
  },
  {
    heading: "Implicit Return",
    subHeading: "Return Value in Arrow Functions",
    bulletpoints: [
      {
        bulletHeading: "Implicit Return for Single Expression",
        points: [
          "If the function body contains only a single expression, the result of that expression is automatically returned, and you don't need to use the `return` keyword.",
        ],
      },
    ],
    example: `
      const multiply = (x, y) => x * y; // Implicit return of x * y
      const square = n => n * n; // Implicit return of n * n
    `,
  },
  {
    heading: "Arrow Functions and `this`",
    subHeading: "Behavior of `this` in Arrow Functions",
    bulletpoints: [
      {
        bulletHeading: "Lexical Scoping of `this`",
        points: [
          "In traditional function expressions, `this` refers to the object that calls the function (dynamic scoping).",
          "In arrow functions, `this` is lexically scoped, meaning it refers to the `this` value from the surrounding context where the arrow function is defined (not where it's called).",
          "Arrow functions do not have their own `this` context and do not bind `this` dynamically.",
        ],
      },
    ],
    example: `
      function Traditional() {
        this.value = 1;
        setTimeout(function() {
          this.value++; // 'this' refers to the global object or undefined in strict mode
          console.log(this.value); // NaN or throws error in strict mode
        }, 1000);
      }

      function ArrowFunction() {
        this.value = 1;
        setTimeout(() => {
          this.value++; // 'this' refers to the ArrowFunction instance
          console.log(this.value); // 2
        }, 1000);
      }

      new Traditional();  // NaN or throws error
      new ArrowFunction(); // 2
    `,
  },
  {
    heading: "Arrow Functions vs Traditional Functions",
    subHeading: "Key Differences Between Arrow Functions and Regular Functions",
    bulletpoints: [
      {
        bulletHeading: "`this` Binding",
        points: [
          "Arrow functions do not have their own `this` context. They inherit `this` from the surrounding lexical context.",
          "Traditional functions create their own `this` context depending on how the function is called.",
        ],
      },
      {
        bulletHeading: "Arguments Object",
        points: [
          "Arrow functions do not have their own `arguments` object. They inherit it from their surrounding scope.",
          "Traditional functions have their own `arguments` object that contains all arguments passed to the function.",
        ],
      },
      {
        bulletHeading: "Use as Constructor",
        points: [
          "Arrow functions cannot be used as constructors and will throw an error if used with `new`.",
          "Traditional functions can be used as constructors to create new instances with the `new` keyword.",
        ],
      },
    ],
    example: `
      // Traditional function with 'this'
      function Person(name) {
        this.name = name;
      }

      const person = new Person("Alice"); // Works fine
      
      // Arrow function cannot be used as a constructor
      const PersonArrow = (name) => { this.name = name; };
      const personArrow = new PersonArrow("Alice"); // TypeError: PersonArrow is not a constructor
    `,
  },
  {
    heading: "Arrow Functions and `super`",
    subHeading: "Arrow Functions with `super` Keyword",
    bulletpoints: [
      {
        bulletHeading: "Behavior of `super` in Arrow Functions",
        points: [
          "Arrow functions do not have their own `super` binding.",
          "In methods within classes, using an arrow function will refer to `super` from the surrounding lexical context, not the instance's prototype chain.",
        ],
      },
    ],
    example: `
      class Animal {
        speak() {
          console.log("Animal speaks");
        }
      }

      class Dog extends Animal {
        speak() {
          const arrowSpeak = () => super.speak(); // Lexical binding of super
          arrowSpeak();  // Animal speaks
        }
      }

      const dog = new Dog();
      dog.speak(); // Animal speaks
    `,
  },
  {
    heading: "Arrow Functions in Callbacks and Array Methods",
    subHeading: "Using Arrow Functions in Callbacks and Array Methods",
    bulletpoints: [
      {
        bulletHeading: "Callback Functions",
        points: [
          "Arrow functions are frequently used for callbacks due to their concise syntax and lexical scoping of `this`.",
        ],
      },
      {
        bulletHeading: "Array Methods",
        points: [
          "Arrow functions are often used in array methods like `.map()`, `.filter()`, and `.reduce()` to provide clean and concise code.",
        ],
      },
    ],
    example: `
      const numbers = [1, 2, 3, 4, 5];
      
      // Using Arrow Function in Array.map()
      const squared = numbers.map(num => num * num); // [1, 4, 9, 16, 25]
      
      // Using Arrow Function in Array.filter()
      const evenNumbers = numbers.filter(num => num % 2 === 0); // [2, 4]
      
      // Using Arrow Function in Array.reduce()
      const sum = numbers.reduce((acc, num) => acc + num, 0); // 15
    `,
  },
  {
    heading: "Best Practices for Arrow Functions",
    subHeading: "Tips for Using Arrow Functions Effectively",
    bulletpoints: [
      {
        bulletHeading: "Use Arrow Functions for Short, Concise Functions",
        points: [
          "Arrow functions are ideal for small, concise functions that don’t require their own `this` context.",
          "Use them for callbacks and array operations to make the code more readable and compact.",
        ],
      },
      {
        bulletHeading: "Avoid Arrow Functions for Methods in Object Literals",
        points: [
          "Avoid using arrow functions for methods within object literals or classes, as they do not have their own `this` context.",
          "This can lead to unexpected results when accessing properties of the object.",
        ],
      },
    ],
  },
];

export const jsDebugingArray = [
  {
    heading: "1. Debugging in JavaScript",

    bulletpoints: [
      {
        bulletHeading: "What is Debugging?",
        points: [
          "Debugging is the process of identifying and fixing errors or issues in code.",
          "In JavaScript, debugging typically involves fixing syntax errors, logic errors, runtime errors, or issues related to incorrect data handling.",
        ],
      },
      {
        bulletHeading: "Why Debugging is Important?",
        points: [
          "Debugging helps ensure that the program functions as expected.",
          "It improves code quality and makes the development process more efficient.",
          "Effective debugging can reduce the time spent troubleshooting and improve application performance.",
        ],
      },
      {
        bulletHeading: "Common Types of Errors",
        points: [
          "1. **Syntax Errors**: Issues in the code's structure, such as missing parentheses or incorrect use of operators.",
          "2. **Runtime Errors**: Errors that occur when the code is executed, such as trying to call a method on `undefined`.",
          "3. **Logic Errors**: Errors that occur when the code runs without crashing but produces incorrect results.",
          "4. **Type Errors**: These occur when a variable is used in a manner that is incompatible with its type.",
        ],
      },
    ],
  },
  {
    heading: "2. Tools for Debugging",
    subHeading: "How to Debug JavaScript Code",
    bulletpoints: [
      {
        bulletHeading: "Console.log()",
        points: [
          "The simplest and most widely used debugging tool in JavaScript is the `console.log()` method.",
          "It prints out the values of variables, objects, or expressions to the browser's console for inspection.",
          "Example:",
          "```javascript",
          "let x = 5;",
          "console.log(x);  // Output: 5",
          "```",
        ],
      },
      {
        bulletHeading: "Browser Developer Tools",
        points: [
          "All modern browsers (like Chrome, Firefox, and Edge) have built-in developer tools (DevTools) that include powerful debugging features.",
          "You can access DevTools by pressing `F12` or right-clicking and selecting 'Inspect'.",
          "DevTools allow you to inspect the DOM, monitor network activity, view performance metrics, and use a JavaScript debugger.",
        ],
      },
      {
        bulletHeading: "Using Breakpoints",
        points: [
          "In DevTools, you can set breakpoints to pause the code execution at a specific line of code.",
          "This allows you to inspect variables, step through the code, and identify issues line-by-line.",
          "To set a breakpoint, simply click on the line number in the DevTools 'Sources' tab.",
        ],
      },
      {
        bulletHeading: "Debugger Statement",
        points: [
          "JavaScript also has a `debugger` statement that you can insert into your code to automatically pause execution.",
          "When the code execution reaches the `debugger` statement, it will pause if DevTools are open.",
          "Example:",
          "```javascript",
          "function test() {",
          "  let x = 10;",
          "  debugger;  // Execution will pause here if DevTools are open",
          "  console.log(x);",
          "}",
          "test();",
          "```",
        ],
      },
    ],
  },
  {
    heading: "3. Debugging Techniques",
    subHeading: "Strategies to Debug JavaScript Code",
    bulletpoints: [
      {
        bulletHeading: "1. Isolate the Problem",
        points: [
          "Start by narrowing down the issue. Identify the specific part of the code where the problem occurs.",
          "Comment out large sections of the code and uncomment pieces incrementally to locate the root cause of the issue.",
        ],
      },
      {
        bulletHeading: "2. Inspect Variables and Functions",
        points: [
          "Use `console.log()` to inspect the values of variables or the return values of functions.",
          "Make sure that all inputs and outputs are correct.",
          "You can also log the types of variables using `typeof` to ensure you're dealing with the correct data types.",
        ],
      },
      {
        bulletHeading: "3. Step Through Your Code",
        points: [
          "Use breakpoints and step-through debugging in the browser's developer tools to examine your code line by line.",
          "This helps you understand the flow of execution and identify where things are going wrong.",
        ],
      },
      {
        bulletHeading: "4. Check for Common Errors",
        points: [
          "Some common mistakes in JavaScript include forgetting to declare variables, using undeclared variables, or confusing `==` and `===`.",
          "Double-check variable scopes, especially within loops and functions.",
        ],
      },
      {
        bulletHeading: "5. Debugging Async Code",
        points: [
          "Debugging asynchronous code (e.g., promises, `setTimeout`, or `async/await`) can be trickier because of the non-blocking nature of JavaScript.",
          "You can use `console.log()` to track asynchronous flow or breakpoints to inspect async function calls.",
          "Use tools like `async/await` to make asynchronous code easier to debug by reducing callback hell.",
        ],
      },
    ],
  },
  {
    heading: "4. Common Debugging Issues",
    subHeading: "Typical Problems in JavaScript Debugging",
    bulletpoints: [
      {
        bulletHeading: "1. Asynchronous Bugs",
        points: [
          "Asynchronous bugs are common in JavaScript due to the non-blocking nature of operations like `setTimeout` and promises.",
          "Callbacks and promises often execute out of order, leading to unexpected results if not handled correctly.",
        ],
      },
      {
        bulletHeading: "2. Undefined or Null Errors",
        points: [
          "Trying to access properties or call methods on `undefined` or `null` will throw errors.",
          "Example: `const person = null; console.log(person.name); // TypeError`",
        ],
      },
      {
        bulletHeading: "3. Scope Issues",
        points: [
          "Issues related to variable scope can cause bugs. Make sure variables are defined in the correct scope and are accessible where needed.",
          "Use `let` or `const` instead of `var` to avoid accidental variable hoisting.",
        ],
      },
      {
        bulletHeading: "4. Infinite Loops",
        points: [
          "Infinite loops can occur when the loop condition never becomes false. Always ensure loop conditions are correct.",
          "Example of an infinite loop: `while (true) { console.log('Looping'); }`",
        ],
      },
    ],
  },
  {
    heading: "5. Best Practices for Debugging",
    subHeading: "Efficient Techniques to Improve Debugging",
    bulletpoints: [
      {
        bulletHeading: "1. Use Descriptive Variable Names",
        points: [
          "Descriptive names help to understand the code faster and reduce the chances of errors.",
          "Avoid vague variable names like `a`, `b`, `temp` unless the variable is truly temporary or simple.",
        ],
      },
      {
        bulletHeading: "2. Keep Your Code Modular",
        points: [
          "Modular code (i.e., dividing code into small functions or components) makes debugging easier.",
          "It helps isolate issues more efficiently and reduces the chances of introducing bugs when fixing problems.",
        ],
      },
      {
        bulletHeading: "3. Write Tests",
        points: [
          "Write unit tests to verify the functionality of each part of your code.",
          "Test frameworks like Jest and Mocha can help automate testing and catch issues early in the development process.",
        ],
      },
      {
        bulletHeading: "4. Comment Your Code",
        points: [
          "Comment your code to explain your thought process and what each part of the code does.",
          "Clear comments can help identify issues when revisiting code or working in teams.",
        ],
      },
      {
        bulletHeading: "5. Keep the Console Clean",
        points: [
          "Too many `console.log()` statements can clutter the output and make debugging more difficult.",
          "Remove unnecessary log statements once you’ve identified and fixed the issue.",
        ],
      },
    ],
  },
];

export const jsScopeArray = [
  {
    heading: "1. JavaScript Scope",

    bulletpoints: [
      {
        bulletHeading: "What is Scope?",
        points: [
          "Scope refers to the visibility or accessibility of variables and functions in certain parts of your code.",
          "In JavaScript, scope determines where variables and functions can be accessed and modified.",
        ],
      },
      {
        bulletHeading: "Types of Scope in JavaScript",
        points: [
          "There are mainly two types of scope in JavaScript:",
          "1. **Global Scope**: Variables declared outside of any function are in the global scope, meaning they can be accessed from anywhere in the code.",
          "2. **Local Scope**: Variables declared within a function are in the local scope, meaning they can only be accessed within that function.",
        ],
      },
      {
        bulletHeading: "Function Scope vs Block Scope",
        points: [
          "JavaScript has **function scope** (variables declared within a function are only accessible inside that function).",
          "However, with ES6, **block scope** was introduced for variables declared with `let` and `const`. These variables are only accessible within the block (e.g., loops or if-statements) where they are declared.",
        ],
      },
    ],
  },
  {
    heading: "2. Global Scope",
    subHeading: "Understanding Global Scope",
    bulletpoints: [
      {
        bulletHeading: "What is Global Scope?",
        points: [
          "A variable declared outside of any function or block is in the global scope, and it can be accessed from anywhere in your code.",
          "Global variables are attached to the global object (`window` in browsers, `global` in Node.js).",
        ],
      },
      {
        bulletHeading: "Example of Global Scope",
        points: [
          "```javascript",
          "let globalVar = 'I am a global variable';",
          "function test() {",
          "  console.log(globalVar);  // Output: 'I am a global variable'",
          "}",
          "test();",
          "```",
          "In this example, `globalVar` is accessible inside the `test()` function because it is in the global scope.",
        ],
      },
      {
        bulletHeading: "Issues with Global Scope",
        points: [
          "Using too many global variables can lead to name collisions, where different parts of the code accidentally overwrite each other.",
          "Global variables can also introduce bugs that are hard to debug because they are accessible from anywhere in the code.",
        ],
      },
    ],
  },
  {
    heading: "3. Local Scope",
    subHeading: "Understanding Local Scope",
    bulletpoints: [
      {
        bulletHeading: "What is Local Scope?",
        points: [
          "A variable declared inside a function is in the local scope of that function, meaning it is only accessible within that function.",
          "Local variables are not accessible outside of the function in which they are defined.",
        ],
      },
      {
        bulletHeading: "Example of Local Scope",
        points: [
          "```javascript",
          "function test() {",
          "  let localVar = 'I am a local variable';",
          "  console.log(localVar);  // Output: 'I am a local variable'",
          "}",
          "test();",
          "console.log(localVar);  // Error: localVar is not defined",
          "```",
          "In this example, `localVar` is accessible inside the `test()` function but not outside of it, leading to a reference error if accessed globally.",
        ],
      },
      {
        bulletHeading: "Local Scope and Functions",
        points: [
          "Each function creates its own local scope. Variables declared inside one function cannot be accessed in another function.",
          "Example:",
          "```javascript",
          "function functionOne() {",
          "  let varOne = 'Hello';",
          "}",
          "function functionTwo() {",
          "  console.log(varOne);  // Error: varOne is not defined",
          "}",
          "```",
        ],
      },
    ],
  },
  {
    heading: "4. Block Scope",
    subHeading: "Understanding Block Scope with let and const",
    bulletpoints: [
      {
        bulletHeading: "What is Block Scope?",
        points: [
          "Block scope is a type of local scope that exists within code blocks, such as loops, conditionals, or any block of code inside `{}`.",
          "In JavaScript, variables declared with `let` and `const` are block-scoped, meaning they are only accessible within the block in which they are declared.",
        ],
      },
      {
        bulletHeading: "Example of Block Scope",
        points: [
          "```javascript",
          "if (true) {",
          "  let blockVar = 'I am block-scoped';",
          "  console.log(blockVar);  // Output: 'I am block-scoped'",
          "}",
          "console.log(blockVar);  // Error: blockVar is not defined",
          "```",
          "Here, `blockVar` is declared inside the `if` statement, and it is not accessible outside the block.",
        ],
      },
      {
        bulletHeading: "Block Scope and Loops",
        points: [
          "In a loop, variables declared with `let` are scoped to the loop block, making them inaccessible after the loop finishes.",
          "Example:",
          "```javascript",
          "for (let i = 0; i < 3; i++) {",
          "  console.log(i);  // Output: 0, 1, 2",
          "}",
          "console.log(i);  // Error: i is not defined",
          "```",
          "In this case, the variable `i` is only accessible inside the `for` loop.",
        ],
      },
    ],
  },
  {
    heading: "5. Lexical Scope",
    subHeading: "Understanding Lexical Scoping",
    bulletpoints: [
      {
        bulletHeading: "What is Lexical Scope?",
        points: [
          "Lexical scope refers to how JavaScript determines the scope of variables based on their position in the source code.",
          "A function's lexical scope is determined by where the function is declared, not where it is called.",
          "The outer function's variables are accessible to inner functions, but the reverse is not true.",
        ],
      },
      {
        bulletHeading: "Example of Lexical Scope",
        points: [
          "```javascript",
          "function outer() {",
          "  let outerVar = 'I am outer';",
          "  function inner() {",
          "    console.log(outerVar);  // Output: 'I am outer'",
          "  }",
          "  inner();",
          "}",
          "outer();",
          "```",
          "In this example, the `inner()` function can access the `outerVar` variable from the `outer()` function because of lexical scoping.",
        ],
      },
      {
        bulletHeading: "Lexical Scope in Closures",
        points: [
          "Lexical scope is essential when dealing with closures, which are functions that remember the scope in which they were created.",
          "Example:",
          "```javascript",
          "function outer() {",
          "  let outerVar = 'I am outer';",
          "  return function inner() {",
          "    console.log(outerVar);  // Output: 'I am outer'",
          "  };",
          "}",
          "const closure = outer();",
          "closure();  // Output: 'I am outer'",
          "```",
          "The `inner()` function in the closure remembers the `outerVar` from its lexical scope.",
        ],
      },
    ],
  },
  {
    heading: "6. Scope Chain",
    subHeading: "How the Scope Chain Works",
    bulletpoints: [
      {
        bulletHeading: "What is the Scope Chain?",
        points: [
          "The scope chain is a mechanism that JavaScript uses to look up variable values.",
          "When a variable is referenced, JavaScript looks for it in the local scope. If it is not found, it looks in the outer scope, and continues upwards until it reaches the global scope.",
        ],
      },
      {
        bulletHeading: "Example of Scope Chain",
        points: [
          "```javascript",
          "let globalVar = 'I am global';",
          "function outer() {",
          "  let outerVar = 'I am outer';",
          "  function inner() {",
          "    let innerVar = 'I am inner';",
          "    console.log(innerVar);  // Output: 'I am inner'",
          "    console.log(outerVar);  // Output: 'I am outer'",
          "    console.log(globalVar);  // Output: 'I am global'",
          "  }",
          "  inner();",
          "}",
          "outer();",
          "```",
          "In this example, the inner function has access to both the `outerVar` and `globalVar` variables because of the scope chain.",
        ],
      },
    ],
  },
  {
    heading: "7. Conclusion",
    subHeading: "Summary",
    bulletpoints: [
      {
        bulletHeading: "Key Takeaways",
        points: [
          "Scope determines where variables and functions are accessible in JavaScript.",
          "JavaScript has global scope, local scope, and block scope, with `let` and `const` introducing block scope.",
          "Lexical scoping defines how inner functions can access variables from outer functions.",
          "The scope chain is the process JavaScript uses to resolve variable references, starting from the current scope and going outward.",
        ],
      },
    ],
  },
];
export const jsErrorArray = [
  {
    heading: "1. JavaScript Errors",

    bulletpoints: [
      {
        bulletHeading: "What are JavaScript Errors?",
        points: [
          "JavaScript errors occur when the code encounters a problem that prevents it from executing as intended.",
          "Errors can occur due to syntax issues, runtime problems, or logical mistakes in the code.",
        ],
      },
      {
        bulletHeading: "Why Errors Occur?",
        points: [
          "Errors can happen because of incorrect syntax, undefined variables, out-of-bounds array access, etc.",
          "The purpose of error handling is to prevent the program from crashing and to provide useful feedback to developers.",
        ],
      },
      {
        bulletHeading: "Types of JavaScript Errors",
        points: [
          "1. **Syntax Errors**: Occur when there is a mistake in the structure of the code, such as missing brackets, parentheses, or semicolons.",
          "2. **Runtime Errors**: Occur during the execution of the code, such as trying to access an undefined variable or calling a function on an undefined value.",
          "3. **Logical Errors**: Occur when the program runs without crashing but produces incorrect results due to faulty logic.",
          "4. **Type Errors**: Occur when a value is used in an incorrect manner (e.g., calling a method on a non-object or performing operations on incompatible data types).",
        ],
      },
    ],
  },
  {
    heading: "2. Syntax Errors",
    subHeading: "Understanding Syntax Errors",
    bulletpoints: [
      {
        bulletHeading: "What is a Syntax Error?",
        points: [
          "Syntax errors occur when the code is not written in a valid form according to JavaScript's syntax rules.",
          "These errors are typically detected by the JavaScript engine before the code is executed.",
        ],
      },
      {
        bulletHeading: "Examples of Syntax Errors",
        points: [
          "1. Missing parentheses or braces:",
          "```javascript",
          "if (true {",
          "  console.log('Missing closing parenthesis');",
          "}",
          "```",
          "2. Unmatched quotes or missing semicolons:",
          "```javascript",
          "let name = 'John;",
          "console.log(name);",
          "```",
        ],
      },
      {
        bulletHeading: "How to Fix Syntax Errors",
        points: [
          "Check for missing or extra parentheses, brackets, or braces.",
          "Ensure that all string literals have matching quotation marks ",
          "Ensure that semicolons are placed at the end of statements (though optional in some cases).",
        ],
      },
    ],
  },
  {
    heading: "3. Runtime Errors",
    subHeading: "Understanding Runtime Errors",
    bulletpoints: [
      {
        bulletHeading: "What is a Runtime Error?",
        points: [
          "Runtime errors occur while the program is running, after the JavaScript engine successfully parses the code.",
          "These errors typically arise due to logic problems, incorrect operations, or unavailable resources.",
        ],
      },
      {
        bulletHeading: "Examples of Runtime Errors",
        points: [
          "1. Trying to access a variable that doesn't exist:",
          "```javascript",
          "console.log(nonExistentVariable);  // ReferenceError: nonExistentVariable is not defined",
          "```",
          "2. Calling a method on a non-object:",
          "```javascript",
          "let num = 10;",
          "num.toUpperCase();  // TypeError: num.toUpperCase is not a function",
          "```",
        ],
      },
      {
        bulletHeading: "How to Fix Runtime Errors",
        points: [
          "Check for variables that may not be defined or initialized properly.",
          "Ensure that you're using functions or methods that are applicable to the correct data types.",
          "Use `try...catch` blocks to catch errors and handle them gracefully during runtime.",
        ],
      },
    ],
  },
  {
    heading: "4. Logical Errors",
    subHeading: "Understanding Logical Errors",
    bulletpoints: [
      {
        bulletHeading: "What is a Logical Error?",
        points: [
          "Logical errors are mistakes in the program's logic that lead to incorrect behavior or output.",
          "The program may run without crashing, but the results will be incorrect or unexpected.",
        ],
      },
      {
        bulletHeading: "Examples of Logical Errors",
        points: [
          "1. Incorrect conditional logic:",
          "```javascript",
          "let age = 25;",
          "if (age > 18) {",
          "  console.log('You are an adult');",
          "} else {",
          "  console.log('You are underage');",
          "}",
          "```",
          "This is correct, but if you accidentally used `if (age < 18)` it would result in incorrect output.",
          "2. Misuse of operators or incorrect assumptions about input data.",
        ],
      },
      {
        bulletHeading: "How to Fix Logical Errors",
        points: [
          "Double-check the program’s logic, conditions, and assumptions to ensure they are correct.",
          "Use debugging tools (e.g., `console.log()`, breakpoints) to examine variable values during execution.",
          "Consider writing unit tests to verify the expected behavior of each function or logic branch.",
        ],
      },
    ],
  },
  {
    heading: "5. Type Errors",
    subHeading: "Understanding Type Errors",
    bulletpoints: [
      {
        bulletHeading: "What is a Type Error?",
        points: [
          "Type errors occur when a value is used in a way that is incompatible with its type.",
          "For example, trying to call a method on a primitive value or attempting an operation between incompatible data types.",
        ],
      },
      {
        bulletHeading: "Examples of Type Errors",
        points: [
          "1. Calling a non-function value as a function:",
          "```javascript",
          "let num = 5;",
          "num();  // TypeError: num is not a function",
          "```",
          "2. Performing an operation on incompatible types:",
          "```javascript",
          "'hello' + 5;  // 'hello5' (correct), but 5 + 'hello' may cause unexpected behavior in certain conditions",
          "```",
        ],
      },
      {
        bulletHeading: "How to Fix Type Errors",
        points: [
          "Ensure that values are of the correct type before performing operations.",
          "Use `typeof` to check data types before attempting operations or calling methods.",
          "Consider using type-checking libraries like TypeScript for better type safety.",
        ],
      },
    ],
  },
  {
    heading: "6. Common Error Objects",
    subHeading: "Error Objects in JavaScript",
    bulletpoints: [
      {
        bulletHeading: "Built-in Error Objects",
        points: [
          "JavaScript provides several built-in error objects to describe various types of errors.",
          "Some common error objects include:",
          "1. **Error**: The generic error object.",
          "2. **ReferenceError**: Thrown when a variable is referenced but not declared.",
          "3. **TypeError**: Thrown when a value is not the expected type.",
          "4. **RangeError**: Thrown when a number is outside an allowable range.",
          "5. **SyntaxError**: Thrown when JavaScript encounters invalid syntax.",
        ],
      },
      {
        bulletHeading: "Creating Custom Errors",
        points: [
          "You can create custom error types by extending the built-in `Error` class.",
          "Example:",
          "```javascript",
          "class CustomError extends Error {",
          "  constructor(message) {",
          "    super(message);",
          "    this.name = 'CustomError';",
          "  }",
          "}",
          "throw new CustomError('This is a custom error');",
          "```",
        ],
      },
    ],
  },
  {
    heading: "7. Error Handling",
    subHeading: "Techniques to Handle Errors in JavaScript",
    bulletpoints: [
      {
        bulletHeading: "1. Try...Catch...Finally",
        points: [
          "The `try...catch` statement allows you to handle errors gracefully by catching exceptions.",
          "The `finally` block will always execute regardless of whether an error occurs.",
          "Example:",
          "```javascript",
          "try {",
          "  let result = riskyFunction();",
          "} catch (error) {",
          "  console.error('Error occurred:', error);",
          "} finally {",
          "  console.log('This will always run');",
          "}",
          "```",
        ],
      },
      {
        bulletHeading: "2. Throwing Errors",
        points: [
          "You can throw your own errors using the `throw` keyword to halt the execution of the program and handle the error.",
          "Example:",
          "```javascript",
          "function validateNumber(num) {",
          "  if (typeof num !== 'number') {",
          "    throw new TypeError('Expected a number');",
          "  }",
          "  return num;",
          "}",
          "validateNumber('a');  // Throws a TypeError",
          "```",
        ],
      },
      {
        bulletHeading: "3. Custom Error Messages",
        points: [
          "Custom error messages can provide more specific feedback, helping with debugging and understanding why an error occurred.",
          "Example:",
          "```javascript",
          "throw new Error('Custom error message');",
          "```",
        ],
      },
    ],
  },
  {
    heading: "8. Conclusion",
    subHeading: "Summary",
    bulletpoints: [
      {
        bulletHeading: "Key Takeaways",
        points: [
          "Errors are part of programming and can be classified into syntax errors, runtime errors, logical errors, and type errors.",
          "Proper error handling helps in identifying, managing, and debugging errors.",
          "JavaScript provides built-in error objects and mechanisms like `try...catch` to help you manage errors effectively.",
          "Custom error types can be created, and errors can be thrown and handled appropriately to enhance code stability.",
        ],
      },
    ],
  },
];
export const jsifElseArray = [
  {
    heading: "Control Flow",
    subHeading: "if Statement",
    bulletpoints: [
      {
        bulletHeading: "What is an if Statement?",
        points: [
          "The `if` statement is used to execute a block of code if a specified condition evaluates to true.",
          "Syntax: `if (condition) { // code to run if condition is true }`",
          "Example: `if (x > 10) { console.log('Greater than 10'); }`",
        ],
      },
      {
        bulletHeading: "How the if Statement Works",
        points: [
          "If the condition inside the parentheses evaluates to `true`, the code inside the block (curly braces) is executed.",
          "If the condition evaluates to `false`, the code inside the `if` block is skipped.",
        ],
      },
    ],
  },
  {
    heading: "Control Flow",
    subHeading: "else Statement",
    bulletpoints: [
      {
        bulletHeading: "What is an else Statement?",
        points: [
          "The `else` statement provides an alternative block of code if the `if` condition evaluates to `false`.",
          "Syntax: `if (condition) { // code if true } else { // code if false }`",
          "Example: `if (x > 10) { console.log('Greater than 10'); } else { console.log('Less than or equal to 10'); }`",
        ],
      },
      {
        bulletHeading: "How the else Statement Works",
        points: [
          "The `else` block is executed only if the preceding `if` condition is false.",
          "It can help provide a default action or behavior when the condition does not hold.",
        ],
      },
    ],
  },
  {
    heading: "Control Flow",
    subHeading: "else if Statement",
    bulletpoints: [
      {
        bulletHeading: "What is an else if Statement?",
        points: [
          "The `else if` statement is used to specify a new condition to check if the previous `if` or `else if` conditions are false.",
          "Syntax: `if (condition1) { // code if condition1 is true } else if (condition2) { // code if condition2 is true } else { // code if both conditions are false }`",
          "Example: `if (x > 10) { console.log('Greater than 10'); } else if (x === 10) { console.log('Equal to 10'); } else { console.log('Less than 10'); }`",
        ],
      },
      {
        bulletHeading: "How the else if Statement Works",
        points: [
          "The `else if` statement is checked only if the initial `if` or previous `else if` conditions are false.",
          "It allows for multiple conditions to be tested sequentially, offering more control over decision-making.",
        ],
      },
    ],
  },
];

export const jsSwitchArray = [
  {
    heading: "Control Flow",
    subHeading: "switch Statement",
    bulletpoints: [
      {
        bulletHeading: "What is a switch Statement?",
        points: [
          "The `switch` statement is used to evaluate an expression against multiple possible values (cases).",
          "It is an alternative to using multiple `if` and `else if` statements when you have many conditions to check.",
          "Syntax: `switch (expression) { case value1: // code; break; case value2: // code; break; default: // code; }`",
          "The `switch` statement matches the expression with one of the `case` values and executes the corresponding block of code.",
        ],
      },
      {
        bulletHeading: "How the switch Statement Works",
        points: [
          "The `switch` statement evaluates the expression once and compares it with each `case` value in sequence.",
          "If a match is found, the corresponding block of code is executed.",
          "The `break` statement is used to exit the `switch` statement after a case block is executed. Without `break`, the code will continue to execute the following cases (this is called 'fall-through').",
          "The `default` case is optional and will run if no case matches the expression. It works like the `else` block in `if-else` statements.",
        ],
      },
    ],
  },
  {
    heading: "Example",
    subHeading: "Example of switch Statement:",
    bulletpoints: [
      {
        bulletHeading: "",
        points: [
          `
          let day = 3;
let dayName;

switch (day) {
  case 1:
    dayName = 'Monday';
    break;
  case 2:
    dayName = 'Tuesday';
    break;
  case 3:
    dayName = 'Wednesday';
    break;
  case 4:
    dayName = 'Thursday';
    break;
  case 5:
    dayName = 'Friday';
    break;
  case 6:
    dayName = 'Saturday';
    break;
  case 7:
    dayName = 'Sunday';
    break;
  default:
    dayName = 'Invalid day';
    break;
}

console.log(dayName);
          `,
        ],
      },
    ],
  },
];

export const jsforLoopArray = [
  {
    heading: "Loops",
    subHeading: "for Loop",
    bulletpoints: [
      {
        bulletHeading: "What is a for Loop?",
        points: [
          "The `for` loop is used to repeatedly execute a block of code for a specific number of iterations.",
          "It is commonly used when the number of iterations is known beforehand.",
          "Syntax: `for (initialization; condition; increment) { // code to run }`",
        ],
      },
      {
        bulletHeading: "How the for Loop Works",
        points: [
          "The `for` loop consists of three parts: initialization, condition, and increment.",
          "Initialization: A variable is initialized, typically to set the starting point of the loop (e.g., `let i = 0`).",
          "Condition: The loop continues running as long as this condition evaluates to `true` (e.g., `i < 10`).",
          "Increment: After each iteration, the variable is updated (e.g., `i++`), moving the loop toward the stopping point.",
        ],
      },
    ],
  },
  {
    heading: "Example of for Loop:",
    subHeading: `  for (let i = 0; i < 5; i++) {
  console.log(i);  // Output: 0, 1, 2, 3, 4 }`,
    bulletpoints: [
      {
        bulletHeading: "Explanation",
        points: [
          "The loop starts with let i = 0, which is the initialization.",
          "It then checks if i < 5 (the condition).",
          "Since the condition is true, it enters the loop and logs i.",
          "After each iteration, i++ increments i by 1.",
          "This repeats until i reaches 5, at which point the condition i < 5 becomes false, and the loop stops.",
          ,
        ],
      },
    ],
  },
  {
    heading: "Example with Array:",
    subHeading: `  let colors = ['red', 'green', 'blue'];
   for (let i = 0; i < colors.length; i++) {
   console.log(colors[i]);  // Output: red, green, blue
   }
`,
    bulletpoints: [
      {
        bulletHeading: "Explanation",
        points: [
          "The for loop here is used to iterate over an array of colors.",
          "The condition i < colors.length ensures the loop runs until i reaches the length of the array.",
          "During each iteration, the loop accesses the i-th element of the colors array and logs it.",
          ,
        ],
      },
    ],
  },
];

export const jsForInArray = [
  {
    heading: "Loops",
    subHeading: "for...in Loop",
    bulletpoints: [
      {
        bulletHeading: "What is a for...in Loop?",
        points: [
          "The `for...in` loop is used to iterate over the **enumerable properties** of an object or the **indices** of an array.",
          "It is ideal for iterating through object properties when you don't know the exact number or names of the properties in advance.",
          "Syntax: `for (variable in object) { // code to run }`",
        ],
      },
      {
        bulletHeading: "How the for...in Loop Works",
        points: [
          "The `for...in` loop iterates through the keys (or property names) of an object or array.",
          "In the case of an object, the loop returns the **property names** one by one.",
          "In the case of an array, it returns the **index numbers**.",
          "For each iteration, the loop assigns the key (or index) to the variable and executes the block of code.",
        ],
      },
    ],
  },
  {
    heading: "Examples of for...in Loop",
    subHeading: "Using for...in with Objects",
    bulletpoints: [
      {
        bulletHeading: "Object Example",
        points: [
          "In this example, we use `for...in` to loop through the properties of an object.",
          "We access both the key and the value for each property in the object.",
        ],
      },
    ],
    example: `
    let person = {
      name: 'Alice',
      age: 25,
      city: 'New York'
    };

    for (let key in person) {
      console.log(key + ": " + person[key]);
    }
    // Output:
    // name: Alice
    // age: 25
    // city: New York
    `,
  },
  {
    heading: "Using for...in with Arrays",
    subHeading: "Array Example",
    bulletpoints: [
      {
        bulletHeading: "Array Example",
        points: [
          "The `for...in` loop can also be used with arrays, but it will iterate over the indices (keys) of the array.",
          "This allows us to access both the index and the value of each array element during iteration.",
        ],
      },
    ],
    example: `
    let colors = ['red', 'green', 'blue'];

    for (let index in colors) {
      console.log(index + ": " + colors[index]);
    }
    // Output:
    // 0: red
    // 1: green
    // 2: blue
    `,
  },
  {
    heading: "Extra Properties in Arrays",
    subHeading: "Array with Additional Properties",
    bulletpoints: [
      {
        bulletHeading: "Extra Property in Array Example",
        points: [
          "If you add extra properties to an array, the `for...in` loop will iterate over those as well.",
          "While arrays are typically indexed numerically, additional properties will also show up in the loop.",
        ],
      },
    ],
    example: `
    let colors = ['red', 'green', 'blue'];
    colors.extraProperty = 'yellow';

    for (let index in colors) {
      console.log(index + ": " + colors[index]);
    }
    // Output:
    // 0: red
    // 1: green
    // 2: blue
    // extraProperty: yellow
    `,
  },
];

export const jsForOfArray = [
  {
    heading: "Loops",
    subHeading: "for...of Loop",
    bulletpoints: [
      {
        bulletHeading: "What is a for...of Loop?",
        points: [
          "The `for...of` loop is used to iterate over the **values** of iterable objects such as arrays, strings, maps, and sets.",
          "Unlike `for...in`, which iterates over the keys or indices, `for...of` gives you access to the actual value of each element.",
          "Syntax: `for (variable of iterable) { // code to run }`",
        ],
      },
      {
        bulletHeading: "How the for...of Loop Works",
        points: [
          "The `for...of` loop iterates over the values in an iterable object.",
          "It assigns each value to a variable and executes the block of code for each iteration.",
          "It is most commonly used with arrays and other iterable objects when you need to work with the values directly.",
        ],
      },
    ],
  },
  {
    heading: "Examples of for...of Loop",
    subHeading: "Using for...of with Arrays",
    bulletpoints: [
      {
        bulletHeading: "Array Example",
        points: [
          "The `for...of` loop can be used with arrays to iterate over the actual elements of the array, not the indices.",
          "This is helpful when you only need the values and don't need the index of each item.",
        ],
      },
    ],
    example: `
    let colors = ['red', 'green', 'blue'];

    for (let color of colors) {
      console.log(color);
    }
    // Output:
    // red
    // green
    // blue
    `,
  },
  {
    heading: "Using for...of with Strings",
    subHeading: "String Example",
    bulletpoints: [
      {
        bulletHeading: "String Example",
        points: [
          "The `for...of` loop also works with strings, allowing you to iterate over each character in the string.",
          "This is useful when you want to work with individual characters rather than the whole string.",
        ],
      },
    ],
    example: `
    let word = "hello";

    for (let char of word) {
      console.log(char);
    }
    // Output:
    // h
    // e
    // l
    // l
    // o
    `,
  },
  {
    heading: "Using for...of with Maps and Sets",
    subHeading: "Map and Set Example",
    bulletpoints: [
      {
        bulletHeading: "Map Example",
        points: [
          "The `for...of` loop can also iterate over a `Map` object, providing access to both keys and values.",
          "It iterates over the entries in the Map in insertion order.",
        ],
      },
      {
        bulletHeading: "Set Example",
        points: [
          "Similarly, the `for...of` loop can be used with a `Set` to iterate over its unique values.",
          "A Set does not have any indices, but the loop iterates over its values in the order of insertion.",
        ],
      },
    ],
    example: `
    // Map Example
    let map = new Map();
    map.set('name', 'Alice');
    map.set('age', 25);

    for (let [key, value] of map) {
      console.log(key + ": " + value);
    }
    // Output:
    // name: Alice
    // age: 25

    // Set Example
    let uniqueNumbers = new Set([1, 2, 3, 4, 5]);

    for (let number of uniqueNumbers) {
      console.log(number);
    }
    // Output:
    // 1
    // 2
    // 3
    // 4
    // 5
    `,
  },
];

export const jsWhileLoopArray = [
  {
    heading: "Loops",
    subHeading: "while Loop",
    bulletpoints: [
      {
        bulletHeading: "What is a while Loop?",
        points: [
          "The `while` loop executes a block of code repeatedly as long as a given condition is true.",
          "The condition is evaluated before each iteration, and if the condition is `true`, the block of code runs again.",
          "If the condition is `false` at the start, the loop will not run at all.",
          "Syntax: `while (condition) { // code to run }`",
        ],
      },
      {
        bulletHeading: "How the while Loop Works",
        points: [
          "The loop starts by evaluating the condition.",
          "If the condition evaluates to `true`, the loop executes the block of code.",
          "After each iteration, the condition is evaluated again.",
          "This continues until the condition evaluates to `false`, at which point the loop exits.",
        ],
      },
    ],
  },
  {
    heading: "Examples of while Loop",
    subHeading: "Basic while Loop Example",
    bulletpoints: [
      {
        bulletHeading: "Basic Example",
        points: [
          "In this example, the `while` loop runs as long as the variable `x` is less than 5.",
          "It prints the value of `x` in each iteration and increments `x` by 1.",
        ],
      },
    ],
    example: `
    let x = 0;

    while (x < 5) {
      console.log(x);
      x++;
    }
    // Output:
    // 0
    // 1
    // 2
    // 3
    // 4
    `,
  },
  {
    heading: "Infinite Loops in while Loop",
    subHeading: "Handling Infinite Loops",
    bulletpoints: [
      {
        bulletHeading: "Infinite Loop Example",
        points: [
          "A `while` loop can result in an infinite loop if the condition never becomes `false`.",
          "It is essential to modify the condition within the loop to avoid getting stuck in an infinite loop.",
          "Use `break` to forcefully exit an infinite loop if needed.",
        ],
      },
    ],
    example: `
    let i = 0;

    while (i < 10) {
      console.log(i);
      if (i === 5) {
        break;  // Exits the loop when i equals 5
      }
      i++;
    }
    // Output:
    // 0
    // 1
    // 2
    // 3
    // 4
    // 5
    `,
  },
  {
    heading: "Do...while Loop",
    subHeading: "Difference Between while and do...while Loop",
    bulletpoints: [
      {
        bulletHeading: "do...while Loop",
        points: [
          "The `do...while` loop is similar to the `while` loop, but with a key difference: it executes the code block once before checking the condition.",
          "In a `while` loop, the condition is checked before the code block runs, whereas in `do...while`, the code block runs at least once.",
        ],
      },
    ],
    example: `
    let j = 0;

    do {
      console.log(j);
      j++;
    } while (j < 5);
    // Output:
    // 0
    // 1
    // 2
    // 3
    // 4
    `,
  },
];

export const jsBreakandContinueArray = [
  {
    heading: "Control Flow",
    subHeading: "Break and Continue",
    bulletpoints: [
      {
        bulletHeading: "What is the `break` Statement?",
        points: [
          "The `break` statement is used to exit out of a loop prematurely, regardless of whether the loop's condition has been satisfied.",
          "It can be used in `for`, `while`, `do...while`, and `switch` statements.",
          "Once the `break` statement is encountered, the control flow immediately jumps to the next statement after the loop or switch.",
        ],
      },
      {
        bulletHeading: "What is the `continue` Statement?",
        points: [
          "The `continue` statement skips the current iteration of the loop and moves to the next iteration.",
          "Unlike `break`, which exits the loop entirely, `continue` only skips the current iteration and resumes the loop at the next one.",
          "It is used when you want to skip some code within the loop based on a condition.",
        ],
      },
    ],
  },
  {
    heading: "Examples of `break` and `continue`",
    subHeading: "`break` Statement Example",
    bulletpoints: [
      {
        bulletHeading: "Using `break` to Exit a Loop",
        points: [
          "The `break` statement can be used to exit the loop when a certain condition is met, without completing the rest of the iterations.",
          "This is useful in scenarios where further iterations are unnecessary once a particular condition is met.",
        ],
      },
    ],
    example: `
    let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

    for (let i = 0; i < numbers.length; i++) {
      if (numbers[i] === 5) {
        break;  // Exit the loop when the value is 5
      }
      console.log(numbers[i]);
    }
    // Output:
    // 1
    // 2
    // 3
    // 4
    `,
  },
  {
    heading: "Examples of `continue`",
    subHeading: "`continue` Statement Example",
    bulletpoints: [
      {
        bulletHeading: "Using `continue` to Skip Iterations",
        points: [
          "The `continue` statement is useful when you want to skip a particular iteration but keep the loop running.",
          "In the example, when the number is even, the iteration will be skipped, and only odd numbers will be logged.",
        ],
      },
    ],
    example: `
    let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

    for (let i = 0; i < numbers.length; i++) {
      if (numbers[i] % 2 === 0) {
        continue;  // Skip even numbers
      }
      console.log(numbers[i]);
    }
    // Output:
    // 1
    // 3
    // 5
    // 7
    // 9
    `,
  },
  {
    heading: "Using `break` and `continue` in Nested Loops",
    subHeading: "Working with Nested Loops",
    bulletpoints: [
      {
        bulletHeading: "Break and Continue in Nested Loops",
        points: [
          "Both `break` and `continue` can be used in nested loops, but they affect only the innermost loop unless specifically targeted.",
          "`break` exits the innermost loop, while `continue` skips the current iteration of the innermost loop.",
          "To control outer loops, you can use labeled `break` or `continue`.",
        ],
      },
    ],
    example: `
    outerLoop:
    for (let i = 0; i < 3; i++) {
      for (let j = 0; j < 3; j++) {
        if (i === 2 && j === 1) {
          break outerLoop;  // Exits the outer loop entirely
        }
        console.log(i, j);
      }
    }
    // Output:
    // 0 0
    // 0 1
    // 0 2
    // 1 0
    // 1 1
    // 1 2
    `,
  },
];

export const jsIterablesArray = [
  {
    heading: "Iterables",
    subHeading: "What is an Iterable?",
    bulletpoints: [
      {
        bulletHeading: "Understanding Iterables",
        points: [
          "An **iterable** is any object in JavaScript that implements the `Symbol.iterator` method.",
          "This method is responsible for returning an iterator, which is an object that defines the behavior of the iteration (i.e., how the object is traversed).",
          "Examples of built-in iterables in JavaScript include arrays, strings, sets, and maps.",
        ],
      },
      {
        bulletHeading: "The Iterable Protocol",
        points: [
          "To be considered an iterable, an object must have a method named `[Symbol.iterator]`, which returns an iterator.",
          "The iterator must implement a `next()` method that returns an object with two properties: `value` (the next value in the iteration) and `done` (a boolean indicating whether the iteration is complete).",
        ],
      },
    ],
  },
  {
    heading: "Examples of Iterables",
    subHeading: "Array as an Iterable",
    bulletpoints: [
      {
        bulletHeading: "Array Example",
        points: [
          "Arrays are built-in iterables in JavaScript.",
          "You can use a `for...of` loop to iterate through all the elements of an array.",
        ],
      },
    ],
    example: `
    const numbers = [10, 20, 30, 40, 50];

    for (const num of numbers) {
      console.log(num);
    }
    // Output:
    // 10
    // 20
    // 30
    // 40
    // 50
    `,
  },
  {
    heading: "String as an Iterable",
    subHeading: "String as an Iterable",
    bulletpoints: [
      {
        bulletHeading: "String Example",
        points: [
          "Strings are also iterables in JavaScript.",
          "You can iterate over each character of a string just like an array.",
        ],
      },
    ],
    example: `
    const greeting = 'Hello';

    for (const char of greeting) {
      console.log(char);
    }
    // Output:
    // H
    // e
    // l
    // l
    // o
    `,
  },
  {
    heading: "Set as an Iterable",
    subHeading: "Set as an Iterable",
    bulletpoints: [
      {
        bulletHeading: "Set Example",
        points: [
          "A `Set` is a collection of unique values, and it is also iterable.",
          "You can iterate through the values of a `Set` using a `for...of` loop.",
        ],
      },
    ],
    example: `
    const uniqueNumbers = new Set([1, 2, 3, 4, 5]);

    for (const num of uniqueNumbers) {
      console.log(num);
    }
    // Output:
    // 1
    // 2
    // 3
    // 4
    // 5
    `,
  },
  {
    heading: "Map as an Iterable",
    subHeading: "Map as an Iterable",
    bulletpoints: [
      {
        bulletHeading: "Map Example",
        points: [
          "A `Map` is a collection of key-value pairs, and it is iterable too.",
          "You can iterate through a `Map` to get both keys and values.",
        ],
      },
    ],
    example: `
    const map = new Map([
      ['a', 1],
      ['b', 2],
      ['c', 3]
    ]);

    for (const [key, value] of map) {
      console.log(key, value);
    }
    // Output:
    // a 1
    // b 2
    // c 3
    `,
  },
  {
    heading: "Custom Iterable Example",
    subHeading: "Creating Custom Iterables",
    bulletpoints: [
      {
        bulletHeading: "Custom Iterable Example",
        points: [
          "You can create your own iterable objects by implementing the `Symbol.iterator` method.",
          "This allows you to define custom iteration behavior for your objects.",
        ],
      },
    ],
    example: `
    const range = {
      start: 1,
      end: 5,
      [Symbol.iterator]() {
        let current = this.start;
        let end = this.end;
        return {
          next() {
            if (current <= end) {
              return { value: current++, done: false };
            } else {
              return { done: true };
            }
          },
        };
      },
    };

    for (const num of range) {
      console.log(num);
    }
    // Output:
    // 1
    // 2
    // 3
    // 4
    // 5
    `,
  },
];

export const jsSetsArray = [
  {
    heading: "Sets",
    subHeading: "What is a Set?",
    bulletpoints: [
      {
        bulletHeading: "Understanding Sets",
        points: [
          "A **Set** is a collection of unique values in JavaScript. It allows you to store values of any type, whether primitive values or references to objects.",
          "Unlike arrays, sets do not allow duplicate values. If a duplicate value is added, it is ignored.",
          "Sets maintain the insertion order of values, meaning the order in which values are added is preserved.",
        ],
      },
      {
        bulletHeading: "Creating a Set",
        points: [
          "You can create a new set using the `Set` constructor. You can pass an array or any iterable object to initialize the set.",
          "Example: `let mySet = new Set([1, 2, 3, 4, 5]);`",
        ],
      },
      {
        bulletHeading: "Properties and Methods of Sets",
        points: [
          "A `Set` has several useful properties and methods like `add()`, `delete()`, `has()`, `clear()`, and `size`.",
        ],
      },
    ],
  },
  {
    heading: "Basic Set Operations",
    subHeading: "Adding and Checking Values in a Set",
    bulletpoints: [
      {
        bulletHeading: "`add()` Method",
        points: [
          "The `add()` method adds a value to the set. If the value already exists, it will not be added again.",
          "Example: `mySet.add(10);`",
        ],
      },
      {
        bulletHeading: "`has()` Method",
        points: [
          "The `has()` method checks if a value exists in the set and returns `true` if the value is present, otherwise `false`.",
          "Example: `mySet.has(10);`",
        ],
      },
    ],
    example: `
    let mySet = new Set([1, 2, 3]);

    mySet.add(4);  // Adds 4 to the set
    mySet.add(4);  // Duplicate, won't be added again

    console.log(mySet.has(4));  // true
    console.log(mySet.has(5));  // false

    console.log(mySet);  // Set { 1, 2, 3, 4 }
    `,
  },
  {
    heading: "Removing Values from a Set",
    subHeading: "Deleting Values in a Set",
    bulletpoints: [
      {
        bulletHeading: "`delete()` Method",
        points: [
          "The `delete()` method removes a specific value from the set.",
          "Example: `mySet.delete(3);`",
        ],
      },
      {
        bulletHeading: "`clear()` Method",
        points: [
          "The `clear()` method removes all elements from the set, making it empty.",
          "Example: `mySet.clear();`",
        ],
      },
    ],
    example: `
    let mySet = new Set([1, 2, 3, 4, 5]);

    mySet.delete(3);  // Removes 3 from the set
    console.log(mySet);  // Set { 1, 2, 4, 5 }

    mySet.clear();  // Removes all elements from the set
    console.log(mySet);  // Set {}
    `,
  },
  {
    heading: "Iterating Over a Set",
    subHeading: "Looping Through a Set",
    bulletpoints: [
      {
        bulletHeading: "Using `for...of` Loop",
        points: [
          "You can use the `for...of` loop to iterate over the values of a set.",
          "Example: `for (const value of mySet) { console.log(value); }`",
        ],
      },
      {
        bulletHeading: "Using `forEach()` Method",
        points: [
          "The `forEach()` method allows you to iterate over the elements of the set with a callback function.",
          "Example: `mySet.forEach(value => console.log(value));`",
        ],
      },
    ],
    example: `
    let mySet = new Set([10, 20, 30, 40]);

    // Using for...of loop
    for (const value of mySet) {
      console.log(value);
    }
    // Output:
    // 10
    // 20
    // 30
    // 40

    // Using forEach()
    mySet.forEach(value => console.log(value));
    // Output:
    // 10
    // 20
    // 30
    // 40
    `,
  },
  {
    heading: "Set Size",
    subHeading: "Checking the Number of Elements in a Set",
    bulletpoints: [
      {
        bulletHeading: "`size` Property",
        points: [
          "The `size` property returns the number of elements in the set.",
          "Example: `mySet.size`",
        ],
      },
    ],
    example: `
    let mySet = new Set([1, 2, 3, 4, 5]);

    console.log(mySet.size);  // 5
    mySet.add(6);
    console.log(mySet.size);  // 6
    mySet.delete(4);
    console.log(mySet.size);  // 5
    `,
  },
];

export const jsMapsArray = [
  {
    heading: "Maps",
    subHeading: "What is a Map?",
    bulletpoints: [
      {
        bulletHeading: "Understanding Maps",
        points: [
          "A **Map** is a collection of key-value pairs where both the key and value can be any data type.",
          "Maps are ordered by the insertion of key-value pairs, which means you can rely on the order of iteration.",
          "In a Map, each key must be unique. If you attempt to add a duplicate key, the previous value associated with the key will be overwritten.",
        ],
      },
      {
        bulletHeading: "Creating a Map",
        points: [
          "You can create a Map using the `Map` constructor or by passing an array of key-value pairs.",
          "Example: `let myMap = new Map();`",
        ],
      },
      {
        bulletHeading: "Properties and Methods of Maps",
        points: [
          "Maps have several properties and methods for adding, deleting, and checking key-value pairs, such as `set()`, `get()`, `delete()`, `has()`, and `size`.",
        ],
      },
    ],
  },
  {
    heading: "Basic Map Operations",
    subHeading: "Adding and Accessing Values in a Map",
    bulletpoints: [
      {
        bulletHeading: "`set()` Method",
        points: [
          "The `set()` method is used to add key-value pairs to a map.",
          "Example: `myMap.set('name', 'Alice');`",
        ],
      },
      {
        bulletHeading: "`get()` Method",
        points: [
          "The `get()` method retrieves the value associated with a given key.",
          "Example: `myMap.get('name');`",
        ],
      },
    ],
    example: `
    let myMap = new Map();

    myMap.set('name', 'Alice');
    myMap.set('age', 25);

    console.log(myMap.get('name'));  // Alice
    console.log(myMap.get('age'));   // 25
    `,
  },
  {
    heading: "Removing Values from a Map",
    subHeading: "Deleting Values in a Map",
    bulletpoints: [
      {
        bulletHeading: "`delete()` Method",
        points: [
          "The `delete()` method removes a specific key-value pair from the map.",
          "Example: `myMap.delete('age');`",
        ],
      },
      {
        bulletHeading: "`clear()` Method",
        points: [
          "The `clear()` method removes all key-value pairs from the map, leaving it empty.",
          "Example: `myMap.clear();`",
        ],
      },
    ],
    example: `
    let myMap = new Map();

    myMap.set('name', 'Alice');
    myMap.set('age', 25);

    myMap.delete('age');  // Removes the 'age' key-value pair
    console.log(myMap);  // Map { 'name' => 'Alice' }

    myMap.clear();  // Clears all entries in the map
    console.log(myMap);  // Map {}
    `,
  },
  {
    heading: "Iterating Over a Map",
    subHeading: "Looping Through a Map",
    bulletpoints: [
      {
        bulletHeading: "Using `for...of` Loop",
        points: [
          "You can use the `for...of` loop to iterate over a map's entries (key-value pairs).",
          "Example: `for (let [key, value] of myMap) { console.log(key, value); }`",
        ],
      },
      {
        bulletHeading: "Using `forEach()` Method",
        points: [
          "The `forEach()` method can be used to loop through the map and apply a callback function to each key-value pair.",
          "Example: `myMap.forEach((value, key) => { console.log(key, value); });`",
        ],
      },
    ],
    example: `
    let myMap = new Map([['name', 'Alice'], ['age', 25]]);

    // Using for...of loop
    for (let [key, value] of myMap) {
      console.log(key, value);
    }

    // Output:
    // name Alice
    // age 25

    // Using forEach()
    myMap.forEach((value, key) => {
      console.log(key, value);
    });

    // Output:
    // name Alice
    // age 25
    `,
  },
  {
    heading: "Map Size",
    subHeading: "Checking the Number of Entries in a Map",
    bulletpoints: [
      {
        bulletHeading: "`size` Property",
        points: [
          "The `size` property returns the number of key-value pairs in the map.",
          "Example: `myMap.size`",
        ],
      },
    ],
    example: `
    let myMap = new Map([['name', 'Alice'], ['age', 25]]);

    console.log(myMap.size);  // 2
    myMap.set('city', 'New York');
    console.log(myMap.size);  // 3
    myMap.delete('age');
    console.log(myMap.size);  // 2
    `,
  },
  {
    heading: "Maps vs Objects",
    subHeading: "Differences Between Maps and Objects",
    bulletpoints: [
      {
        bulletHeading: "Maps",
        points: [
          "Maps allow any data type as a key (including objects, functions, etc.).",
          "Maps preserve the insertion order of keys.",
          "Maps have built-in methods like `set()`, `get()`, `has()`, `delete()`, and `clear()`.",
        ],
      },
      {
        bulletHeading: "Objects",
        points: [
          "Objects can only have strings or symbols as keys (before ES6, only strings).",
          "Objects do not guarantee the order of keys.",
          "Objects do not have the same set of methods as maps and require a different syntax to manipulate keys and values.",
        ],
      },
    ],
    example: `
    let myObject = { name: 'Alice', age: 25 };
    let myMap = new Map([['name', 'Alice'], ['age', 25]]);

    console.log(myObject);  // { name: 'Alice', age: 25 }
    console.log(myMap);  // Map { 'name' => 'Alice', 'age' => 25 }
    `,
  },
];

export const jsTypeOfArray = [
  {
    heading: "typeof Operator",
    subHeading: "What is `typeof`?",
    bulletpoints: [
      {
        bulletHeading: "Understanding `typeof`",
        points: [
          "The **`typeof`** operator is used to determine the type of a given variable or expression in JavaScript.",
          "It returns a string indicating the type of the operand. The result can be one of the following: 'undefined', 'object', 'boolean', 'number', 'string', 'function', 'symbol', or 'bigint'.",
          "Example: `typeof 42;` will return `'number'`.",
        ],
      },
      {
        bulletHeading: "Syntax",
        points: [
          "The syntax of `typeof` is: `typeof expression`.",
          "The expression can be any valid JavaScript expression or variable.",
        ],
      },
      {
        bulletHeading: "Common Use Cases",
        points: [
          "You can use `typeof` to check the type of variables before performing operations that depend on data type.",
          "For example, checking if a variable is a function before calling it, or if a variable is a number before performing mathematical operations.",
        ],
      },
    ],
  },
  {
    heading: "`typeof` for Primitive Types",
    subHeading: "Checking Primitives with `typeof`",
    bulletpoints: [
      {
        bulletHeading: "Primitive Types",
        points: [
          "`typeof` is commonly used to check the types of primitive values like numbers, strings, booleans, and undefined.",
          "Example: `typeof 42` returns `'number'`, `typeof 'hello'` returns `'string'`.",
        ],
      },
    ],
    example: `
    console.log(typeof 42);          // 'number'
    console.log(typeof 'hello');     // 'string'
    console.log(typeof true);        // 'boolean'
    console.log(typeof undefined);   // 'undefined'
    console.log(typeof Symbol());    // 'symbol'
    console.log(typeof 10n);         // 'bigint'
    `,
  },
  {
    heading: "`typeof` for Objects and Functions",
    subHeading: "Checking Objects and Functions",
    bulletpoints: [
      {
        bulletHeading: "`typeof` and Objects",
        points: [
          "When used on an object, `typeof` will return `'object'`, regardless of whether it is an array, object, or null.",
          "Example: `typeof {}` returns `'object'`, `typeof []` returns `'object'`, `typeof null` returns `'object'`.",
          "Note: This is a known JavaScript quirk.",
        ],
      },
      {
        bulletHeading: "`typeof` and Functions",
        points: [
          "If the operand is a function, `typeof` will return `'function'`.",
          "Example: `typeof function() {}` returns `'function'`.",
        ],
      },
    ],
    example: `
    console.log(typeof { name: 'Alice' });   // 'object'
    console.log(typeof []);                   // 'object'
    console.log(typeof null);                 // 'object'
    console.log(typeof function() {});        // 'function'
    `,
  },
  {
    heading: "`typeof` Quirks and Limitations",
    subHeading: "Behavior and Quirks of `typeof`",
    bulletpoints: [
      {
        bulletHeading: "Behavior with Arrays and Null",
        points: [
          "`typeof` returns `'object'` for both arrays and null, which is a known limitation in JavaScript.",
          "Example: `typeof []` returns `'object'`, and `typeof null` returns `'object'`.",
          "To specifically check for arrays, you should use `Array.isArray()`.",
        ],
      },
      {
        bulletHeading: "Type of NaN",
        points: [
          "`typeof` returns `'number'` for `NaN`, which can be counterintuitive since `NaN` stands for 'Not-a-Number'.",
          "Example: `typeof NaN` returns `'number'`.",
        ],
      },
    ],
    example: `
    console.log(typeof []);      // 'object' (quirk)
    console.log(typeof null);    // 'object' (quirk)
    console.log(typeof NaN);     // 'number' (quirk)
    `,
  },
  {
    heading: "Practical Examples of `typeof`",
    subHeading: "Using `typeof` in Real Code",
    bulletpoints: [
      {
        bulletHeading: "Checking Function Types",
        points: [
          "You can use `typeof` to check whether a value is a function before calling it.",
          "Example: `if (typeof callback === 'function') { callback(); }`.",
        ],
      },
      {
        bulletHeading: "Checking Undefined Values",
        points: [
          "You can use `typeof` to check if a variable is `undefined` before using it.",
          "Example: `if (typeof myVar === 'undefined') { console.log('myVar is undefined'); }`.",
        ],
      },
    ],
    example: `
    // Checking if a variable is undefined
    let myVar;
    if (typeof myVar === 'undefined') {
      console.log('myVar is undefined');
    }

    // Checking if a variable is a function before calling it
    function doSomething() {
      console.log('Function executed');
    }
    let callback = doSomething;
    if (typeof callback === 'function') {
      callback();  // Function executed
    }
    `,
  },
];

export const jsTypeConversionArray = [
  {
    heading: "Type Conversion",

    bulletpoints: [
      {
        bulletHeading: "What is Type Conversion?",
        points: [
          "Type conversion is the process of changing a value from one data type to another.",
          "JavaScript performs two types of type conversion: implicit (automatic) and explicit (manual).",
          "Implicit type conversion happens automatically by JavaScript, whereas explicit type conversion is done manually by the developer.",
        ],
      },
    ],
  },
  {
    heading: "Implicit Type Conversion (Type Coercion)",
    subHeading: "Automatic Type Conversion by JavaScript",
    bulletpoints: [
      {
        bulletHeading: "What is Implicit Type Conversion?",
        points: [
          "Implicit type conversion, also known as type coercion, happens automatically when JavaScript converts one type to another.",
          "This usually occurs when performing operations that involve different data types, such as adding a number to a string.",
        ],
      },
      {
        bulletHeading: "Examples of Implicit Type Conversion",
        points: [
          "Example 1: Adding a number and a string.",
          "Example 2: Comparing values of different types.",
        ],
      },
    ],
    example: `
      console.log('5' + 10); // '510' (string + number -> number is converted to string)
      console.log('5' - 10); // -5 (string is converted to number)
      console.log('5' == 5); // true (string is converted to number)
    `,
  },
  {
    heading: "Explicit Type Conversion",
    subHeading: "Manual Type Conversion by the Developer",
    bulletpoints: [
      {
        bulletHeading: "What is Explicit Type Conversion?",
        points: [
          "Explicit type conversion occurs when the developer manually converts a value to another type using specific functions or methods.",
          "Common functions for explicit conversion include `String()`, `Number()`, `Boolean()`, and `Object()`.",
        ],
      },
      {
        bulletHeading: "Examples of Explicit Type Conversion",
        points: [
          "Example 1: Converting a number to a string.",
          "Example 2: Converting a string to a number.",
        ],
      },
    ],
    example: `
      let str = 123;
      console.log(String(str));   // '123' (number to string)
      
      let num = '456';
      console.log(Number(num));   // 456 (string to number)
      
      let bool = 0;
      console.log(Boolean(bool)); // false (0 is falsy)
    `,
  },
  {
    heading: "Converting to String",
    subHeading: "Converting Different Types to String",
    bulletpoints: [
      {
        bulletHeading: "Using `String()` for Conversion",
        points: [
          "`String()` converts various types to their string representation.",
          "Example: `String(123)` results in `'123'`.",
        ],
      },
      {
        bulletHeading: "Using `.toString()` Method",
        points: [
          "Objects, arrays, and other types can also be converted to strings using the `.toString()` method.",
          "Example: `(123).toString()` results in `'123'`.",
        ],
      },
    ],
    example: `
      let num = 123;
      console.log(String(num)); // '123'

      let obj = { name: 'Alice' };
      console.log(obj.toString()); // '[object Object]'
    `,
  },
  {
    heading: "Converting to Number",
    subHeading: "Converting Different Types to Number",
    bulletpoints: [
      {
        bulletHeading: "Using `Number()` for Conversion",
        points: [
          "`Number()` converts different data types to a number, following certain rules.",
          "For example: `Number('123')` converts the string `'123'` to the number `123`.",
        ],
      },
      {
        bulletHeading: "Using Unary Plus `+` Operator",
        points: [
          "The unary `+` operator is a shorthand for converting values to numbers.",
          "Example: `+'123'` will convert the string `'123'` to the number `123`.",
        ],
      },
    ],
    example: `
      let str = '123';
      console.log(Number(str)); // 123

      let bool = true;
      console.log(Number(bool)); // 1

      let notANumber = 'abc';
      console.log(Number(notANumber)); // NaN
    `,
  },
  {
    heading: "Converting to Boolean",
    subHeading: "Converting Different Types to Boolean",
    bulletpoints: [
      {
        bulletHeading: "Using `Boolean()` for Conversion",
        points: [
          "`Boolean()` converts different data types to their boolean representation.",
          "For example: `Boolean(1)` converts to `true`, while `Boolean(0)` converts to `false`.",
        ],
      },
      {
        bulletHeading: "Falsy and Truthy Values",
        points: [
          "In JavaScript, all values are either truthy or falsy when converted to a boolean.",
          "Falsy values include `false`, `0`, `NaN`, `''` (empty string), `null`, and `undefined`.",
          "Truthy values include everything else (even `'0'`, `'false'`, and other non-zero numbers).",
        ],
      },
    ],
    example: `
      console.log(Boolean(1));        // true
      console.log(Boolean(0));        // false
      console.log(Boolean('hello'));  // true
      console.log(Boolean(''));       // false
      console.log(Boolean(undefined)); // false
    `,
  },
  {
    heading: "Type Conversion and `NaN`",
    subHeading: "Handling NaN during Type Conversion",
    bulletpoints: [
      {
        bulletHeading: "`NaN` Behavior",
        points: [
          "`NaN` (Not-a-Number) is a special value in JavaScript representing an invalid number.",
          "When converting a non-numeric string to a number, `Number('string')` will return `NaN`.",
        ],
      },
    ],
    example: `
      let invalidNum = 'abc';
      console.log(Number(invalidNum)); // NaN
    `,
  },
];

export const jsDestructuringArray = [
  {
    heading: "Destructuring",

    bulletpoints: [
      {
        bulletHeading: "What is Destructuring?",
        points: [
          "Destructuring is a syntax feature in JavaScript that enables extracting multiple values from arrays or properties from objects.",
          "It helps in unpacking values from complex data structures into individual variables with less code.",
          "Destructuring can be applied to arrays and objects, both with similar syntax but with different rules.",
        ],
      },
    ],
  },
  {
    heading: "Array Destructuring",
    subHeading: "Extracting Values from Arrays",
    bulletpoints: [
      {
        bulletHeading: "Basic Array Destructuring",
        points: [
          "Array destructuring allows you to extract values from arrays and assign them to variables.",
          "The variables are assigned based on their position (index) in the array.",
        ],
      },
      {
        bulletHeading: "Example of Array Destructuring",
        points: [
          "Destructuring works by assigning array elements to variables using square brackets.",
        ],
      },
    ],
    example: `
      let arr = [1, 2, 3];
      let [a, b, c] = arr;
      console.log(a); // 1
      console.log(b); // 2
      console.log(c); // 3
    `,
  },
  {
    heading: "Skipping Values in Arrays",
    subHeading: "Omitting Values Using Comma",
    bulletpoints: [
      {
        bulletHeading: "Skipping Array Elements",
        points: [
          "You can skip values in an array by using a comma and leaving the variable empty.",
          "This can be helpful when you want to ignore certain values in an array but still unpack the rest.",
        ],
      },
    ],
    example: `
      let arr = [1, 2, 3, 4];
      let [a, , c] = arr;
      console.log(a); // 1
      console.log(c); // 3
    `,
  },
  {
    heading: "Default Values in Destructuring",
    subHeading: "Providing Default Values for Missing Values",
    bulletpoints: [
      {
        bulletHeading: "Default Values",
        points: [
          "You can provide default values in destructuring when an element or property is undefined.",
          "If the value is not provided in the array or object, the default value will be used instead.",
        ],
      },
    ],
    example: `
      let arr = [1];
      let [a, b = 2] = arr;
      console.log(a); // 1
      console.log(b); // 2 (default value used)
    `,
  },
  {
    heading: "Object Destructuring",
    subHeading: "Extracting Properties from Objects",
    bulletpoints: [
      {
        bulletHeading: "Basic Object Destructuring",
        points: [
          "Object destructuring allows extracting properties from an object into distinct variables.",
          "The variable names must match the property names of the object.",
        ],
      },
      {
        bulletHeading: "Example of Object Destructuring",
        points: [
          "Destructuring works by using curly braces `{}` to specify the properties you want to extract.",
        ],
      },
    ],
    example: `
      let person = { name: 'Alice', age: 25 };
      let { name, age } = person;
      console.log(name); // 'Alice'
      console.log(age);  // 25
    `,
  },
  {
    heading: "Renaming Variables with Destructuring",
    subHeading: "Changing Variable Names While Destructuring",
    bulletpoints: [
      {
        bulletHeading: "Renaming During Destructuring",
        points: [
          "You can rename variables during object destructuring by using a colon and specifying the new variable name.",
          "This is useful when you want to avoid name conflicts or have more meaningful variable names.",
        ],
      },
    ],
    example: `
      let person = { name: 'Alice', age: 25 };
      let { name: fullName, age: yearsOld } = person;
      console.log(fullName); // 'Alice'
      console.log(yearsOld); // 25
    `,
  },
  {
    heading: "Nested Destructuring",
    subHeading: "Extracting Nested Properties from Objects and Arrays",
    bulletpoints: [
      {
        bulletHeading: "Nested Destructuring",
        points: [
          "You can destructure nested objects or arrays by applying destructuring syntax at each level.",
          "This helps in extracting deep properties without having to manually access them one by one.",
        ],
      },
    ],
    example: `
      let person = { name: 'Alice', address: { city: 'Wonderland', country: 'Fantasy' } };
      let { name, address: { city, country } } = person;
      console.log(name); // 'Alice'
      console.log(city); // 'Wonderland'
      console.log(country); // 'Fantasy'
    `,
  },
  {
    heading: "Destructuring with Rest Operator",
    subHeading: "Using Rest to Collect Remaining Values",
    bulletpoints: [
      {
        bulletHeading: "Rest Operator in Destructuring",
        points: [
          "The rest operator `...` allows you to collect the remaining elements in an array or object after destructuring.",
          "This is useful when you want to unpack some values but keep the rest in a separate variable.",
        ],
      },
    ],
    example: `
      let arr = [1, 2, 3, 4];
      let [a, b, ...rest] = arr;
      console.log(a); // 1
      console.log(b); // 2
      console.log(rest); // [3, 4]
    `,
  },
  {
    heading: "Destructuring in Function Parameters",
    subHeading: "Using Destructuring for Function Arguments",
    bulletpoints: [
      {
        bulletHeading: "Destructuring in Function Arguments",
        points: [
          "You can destructure function parameters directly, allowing easy access to specific properties or elements.",
          "This is especially useful when working with complex objects or arrays as arguments in functions.",
        ],
      },
    ],
    example: `
      function greet({ name, age }) {
        console.log(\`Hello, my name is \${name} and I am \${age} years old.\`);
      }
      
      let person = { name: 'Alice', age: 25 };
      greet(person); // 'Hello, my name is Alice and I am 25 years old.'
    `,
  },
];

export const jsOperatorPrecedenceArray = [
  {
    heading: "Operator Precedence",

    bulletpoints: [
      {
        bulletHeading: "What is Operator Precedence?",
        points: [
          "Operator precedence refers to the order in which operators are evaluated in an expression.",
          "Operators with higher precedence are evaluated first, and those with lower precedence are evaluated later.",
          "Understanding operator precedence helps in writing correct and predictable code without needing excessive parentheses.",
        ],
      },
    ],
  },
  {
    heading: "Precedence Order",
    subHeading: "Common Operator Precedence in JavaScript",
    bulletpoints: [
      {
        bulletHeading: "Operator Precedence List",
        points: [
          "1. Parentheses `()` – The highest precedence, ensuring the expression inside is evaluated first.",
          "2. Unary operators (`+`, `-`, `++`, `--`, `!`, `typeof`, `void`, `delete`) – These operators act on a single operand and are evaluated before other operators.",
          "3. Multiplication, division, and modulus (`*`, `/`, `%`) – These operators have higher precedence than addition and subtraction.",
          "4. Addition and subtraction (`+`, `-`) – These operators come after multiplication, division, and modulus.",
          "5. Relational operators (`<`, `>`, `<=`, `>=`, `instanceof`, `in`) – These operators are used for comparisons and have lower precedence than arithmetic operators.",
          "6. Equality operators (`==`, `!=`, `===`, `!==`) – These operators have lower precedence than relational operators.",
          "7. Logical AND (`&&`) – Evaluated after comparison and equality operators.",
          "8. Logical OR (`||`) – Has the lowest precedence among most common operators.",
          "9. Assignment operators (`=`, `+=`, `-=`, `*=`, `/=`, etc.) – These have the lowest precedence among the operators.",
        ],
      },
    ],
  },
  {
    heading: "Operator Associativity",
    subHeading: "Left-to-Right vs Right-to-Left Evaluation",
    bulletpoints: [
      {
        bulletHeading: "Left-to-Right Associativity",
        points: [
          "Most operators in JavaScript are evaluated left-to-right (also called *left-associative*).",
          "This means that operators are evaluated from left to right when they have the same precedence.",
        ],
      },
      {
        bulletHeading: "Right-to-Left Associativity",
        points: [
          "Some operators, like assignment (`=`), conditional (`? :`), and logical assignment operators (`&&=`, `||=`), have right-to-left associativity.",
          "This means they are evaluated from right to left when they appear in an expression with equal precedence.",
        ],
      },
    ],
  },
  {
    heading: "Examples of Operator Precedence",
    subHeading: "How Operator Precedence Affects Expressions",
    bulletpoints: [
      {
        bulletHeading: "Example 1: Parentheses Override Precedence",
        points: [
          "Parentheses always take the highest precedence and can be used to alter the evaluation order of other operators.",
        ],
      },
      {
        bulletHeading: "Example 2: Multiplication vs Addition",
        points: [
          "When no parentheses are used, multiplication is performed before addition due to higher precedence.",
        ],
      },
      {
        bulletHeading: "Example 3: Using Assignment Operators",
        points: [
          "Assignment operators have the lowest precedence, so they are evaluated last in expressions.",
        ],
      },
    ],
    example: `
      // Example 1: Parentheses override precedence
      let result = (5 + 2) * 3;
      console.log(result);  // 21, not 5 + (2 * 3) = 11
      
      // Example 2: Multiplication comes before addition
      let result2 = 5 + 2 * 3;
      console.log(result2);  // 11, because 2 * 3 is evaluated first
      
      // Example 3: Assignment happens last
      let x = 5 + 2 * 3;
      console.log(x);  // 11, assignment happens after the evaluation of 5 + 2 * 3
    `,
  },
  {
    heading: "Using Parentheses for Clarity",
    subHeading: "Avoiding Mistakes by Using Parentheses",
    bulletpoints: [
      {
        bulletHeading: "Using Parentheses to Avoid Confusion",
        points: [
          "Even though operator precedence exists, using parentheses can make your code clearer and prevent subtle bugs.",
          "When in doubt, wrap complex expressions in parentheses to make the order of operations explicit.",
        ],
      },
    ],
    example: `
      let result = (3 + 2) * (4 - 1);
      console.log(result); // 15, parentheses clarify order of operations
    `,
  },
  {
    heading: "Operator Precedence Table",
    subHeading: "A Quick Reference Table",
    bulletpoints: [
      {
        bulletHeading: "Precedence and Associativity",
        points: [
          "The following table gives a quick reference for operator precedence and associativity in JavaScript:",
        ],
      },
    ],
    example: `
      Precedence        | Operator                   | Associativity
      ---------------------------------------------------------------
      1. Parentheses    | ()                         | Left-to-right
      2. Unary          | +, -, ++, --, !, typeof     | Right-to-left
      3. Multiplication | *, /, %                    | Left-to-right
      4. Addition       | +, -                       | Left-to-right
      5. Comparison     | <, >, <=, >=, ==, !=       | Left-to-right
      6. Logical AND    | &&                         | Left-to-right
      7. Logical OR     | ||                         | Left-to-right
      8. Assignment     | =, +=, -=, *=, /=          | Right-to-left
    `,
  },
];

export const jsHostingArray = [
  {
    heading: "Hoisting",

    bulletpoints: [
      {
        bulletHeading: "What is Hoisting?",
        points: [
          "Hoisting is the behavior in JavaScript where variables and function declarations are moved to the top of their scope before the code is executed.",
          "This means that you can refer to variables or functions before they are declared in the code, although the results may not always be what you expect.",
          "JavaScript hoists variables declared with `var`, function declarations, and class declarations differently.",
        ],
      },
    ],
  },
  {
    heading: "Hoisting with Variables",
    subHeading: "How Hoisting Affects Variable Declarations",
    bulletpoints: [
      {
        bulletHeading: "`var` Declarations",
        points: [
          "Variables declared with `var` are hoisted to the top of their scope, but their value is not initialized until the assignment is executed.",
          "This means that a `var` variable can be accessed before its declaration, but its value will be `undefined` until the assignment happens.",
        ],
      },
      {
        bulletHeading: "`let` and `const` Declarations",
        points: [
          "Variables declared with `let` and `const` are also hoisted, but they are not initialized until the code execution reaches the variable's declaration.",
          "This creates a 'temporal dead zone' (TDZ) where the variables cannot be accessed before their declaration line in the code, resulting in a `ReferenceError` if accessed prematurely.",
        ],
      },
    ],
    example: `
      // Hoisting with var
      console.log(a); // undefined
      var a = 5;
      console.log(a); // 5

      // Hoisting with let and const
      console.log(b); // ReferenceError: Cannot access 'b' before initialization
      let b = 10;
    `,
  },
  {
    heading: "Hoisting with Functions",
    subHeading: "How Hoisting Affects Function Declarations",
    bulletpoints: [
      {
        bulletHeading: "Function Declarations",
        points: [
          "Function declarations are hoisted to the top of their scope along with their implementation, not just their signature.",
          "This means that you can call a function before it is declared in the code, and it will work as expected.",
        ],
      },
    ],
    example: `
      // Function Declaration Hoisting
      greet(); // 'Hello!'
      function greet() {
        console.log('Hello!');
      }
    `,
  },
  {
    heading: "Hoisting with Function Expressions",
    subHeading: "How Hoisting Affects Function Expressions",
    bulletpoints: [
      {
        bulletHeading: "Function Expressions",
        points: [
          "Unlike function declarations, function expressions are not hoisted in the same way.",
          "A function expression is treated as a variable assignment, meaning the function is only accessible after the assignment is made.",
          "If you try to call the function before it’s assigned, you will get an error.",
        ],
      },
    ],
    example: `
      // Function Expression Hoisting
      greet(); // TypeError: greet is not a function
      var greet = function() {
        console.log('Hello!');
      };
    `,
  },
  {
    heading: "Hoisting with Classes",
    subHeading: "How Hoisting Affects Class Declarations",
    bulletpoints: [
      {
        bulletHeading: "Class Declarations",
        points: [
          "Class declarations in JavaScript are hoisted, but they are not initialized until the code reaches the declaration.",
          "Accessing a class before its declaration results in a `ReferenceError`, similar to how `let` and `const` behave.",
        ],
      },
    ],
    example: `
      // Class Hoisting
      const obj = new Person(); // ReferenceError: Cannot access 'Person' before initialization
      class Person {
        constructor() {
          this.name = 'Alice';
        }
      }
    `,
  },
  {
    heading: "Temporal Dead Zone (TDZ)",
    subHeading: "Understanding Temporal Dead Zone",
    bulletpoints: [
      {
        bulletHeading: "What is the Temporal Dead Zone?",
        points: [
          "The Temporal Dead Zone (TDZ) is the time between the entering of a scope (e.g., inside a function or block) and the actual initialization of variables declared with `let` or `const`.",
          "During this period, if you try to access a `let` or `const` variable, you will get a `ReferenceError`.",
          "This is because the variables are hoisted but are not initialized yet, meaning they are in the 'dead zone'.",
        ],
      },
    ],
    example: `
      // Temporal Dead Zone Example
      console.log(a); // ReferenceError: Cannot access 'a' before initialization
      let a = 5;
    `,
  },
  {
    heading: "Common Hoisting Pitfalls",
    subHeading: "Common Mistakes Related to Hoisting",
    bulletpoints: [
      {
        bulletHeading: "Mistakes with `var`",
        points: [
          "Due to hoisting, variables declared with `var` are initialized as `undefined` rather than causing an error.",
          "This can lead to bugs where you expect a variable to have a value but it is `undefined` instead.",
        ],
      },
      {
        bulletHeading: "Mistakes with `let` and `const`",
        points: [
          "Accessing `let` or `const` variables before their declaration causes a `ReferenceError` because of the Temporal Dead Zone.",
          "To avoid this, always declare variables before you use them in your code.",
        ],
      },
    ],
  },
  {
    heading: "Best Practices for Working with Hoisting",
    subHeading: "Tips to Avoid Hoisting Issues",
    bulletpoints: [
      {
        bulletHeading: "Declare Before Use",
        points: [
          "Always declare variables and functions before using them to avoid any hoisting-related issues.",
          "This is especially important when using `let` and `const` to avoid the Temporal Dead Zone.",
        ],
      },
      {
        bulletHeading: "Use Function Declarations Over Function Expressions",
        points: [
          "To avoid unexpected behavior with function hoisting, prefer function declarations over function expressions.",
          "Function declarations are fully hoisted along with their implementations, making them safer to call before declaration.",
        ],
      },
    ],
  },
];

export const jsJsonArray = [
  {
    heading: "JSON (JavaScript Object Notation)",

    bulletpoints: [
      {
        bulletHeading: "What is JSON?",
        points: [
          "JSON (JavaScript Object Notation) is a text-based format for representing structured data.",
          "It is used primarily for transmitting data between a server and a client as a string, which can then be parsed into JavaScript objects.",
          "JSON is language-independent but closely related to JavaScript, making it a popular choice for data exchange in web development.",
        ],
      },
    ],
  },
  {
    heading: "JSON Syntax",
    subHeading: "Basic Structure and Syntax",
    bulletpoints: [
      {
        bulletHeading: "JSON Objects and Arrays",
        points: [
          "JSON data is represented as a collection of key-value pairs, like JavaScript objects. Keys must be strings, and values can be various types, including strings, numbers, arrays, and objects.",
          "JSON objects are enclosed in curly braces `{}`, and key-value pairs are separated by commas.",
          "JSON arrays are ordered lists of values enclosed in square brackets `[]`.",
        ],
      },
      {
        bulletHeading: "Valid JSON Format",
        points: [
          'Keys must be enclosed in double quotes `"`.',
          "Values can be strings, numbers, objects, arrays, booleans, or `null`.",
          "No trailing commas are allowed at the end of key-value pairs or array elements.",
        ],
      },
    ],
    example: `
      // Example of a JSON Object
      const jsonString = '{"name": "Alice", "age": 30, "isAdmin": false}';
      
      // Example of a JSON Array
      const jsonArray = '[{"name": "Alice"}, {"name": "Bob"}]';
    `,
  },
  {
    heading: "JSON.stringify()",
    subHeading: "Converting JavaScript Objects to JSON",
    bulletpoints: [
      {
        bulletHeading: "What is JSON.stringify()?",
        points: [
          "The `JSON.stringify()` method converts a JavaScript object or value to a JSON string.",
          "It is useful when sending data to a server or saving data in a string format for storage.",
        ],
      },
    ],
    example: `
      const user = {
        name: "Alice",
        age: 30,
        isAdmin: false
      };

      const jsonString = JSON.stringify(user);
      console.log(jsonString); // '{"name":"Alice","age":30,"isAdmin":false}'
    `,
  },
  {
    heading: "JSON.parse()",
    subHeading: "Parsing JSON to JavaScript Objects",
    bulletpoints: [
      {
        bulletHeading: "What is JSON.parse()?",
        points: [
          "The `JSON.parse()` method parses a JSON string and converts it into a JavaScript object.",
          "It is useful when receiving JSON data from a server or reading JSON from a file.",
          "The input string must be a valid JSON format; otherwise, a `SyntaxError` will be thrown.",
        ],
      },
    ],
    example: `
      const jsonString = '{"name": "Alice", "age": 30, "isAdmin": false}';
      const user = JSON.parse(jsonString);
      console.log(user);  // { name: 'Alice', age: 30, isAdmin: false }
    `,
  },
  {
    heading: "JSON vs JavaScript Objects",
    subHeading: "Differences Between JSON and JavaScript Objects",
    bulletpoints: [
      {
        bulletHeading: "Key Differences",
        points: [
          'JSON keys must always be strings and enclosed in double quotes `"`. In JavaScript, object keys can be unquoted (if they are valid identifiers).',
          "JSON values can be strings, numbers, objects, arrays, `true`, `false`, or `null`. JavaScript objects can also include functions and undefined values.",
          "JSON is a data format, while JavaScript objects are more flexible and can include methods (functions) as well.",
        ],
      },
    ],
    example: `
      // JavaScript Object
      const user = {
        name: "Alice",
        age: 30,
        greet() { console.log("Hello!"); }
      };
      
      // JSON (converted version)
      const jsonString = '{"name": "Alice", "age": 30}';  // No methods
    `,
  },
  {
    heading: "Common Errors with JSON",
    subHeading: "Common Pitfalls and Errors in Working with JSON",
    bulletpoints: [
      {
        bulletHeading: "Invalid JSON Format",
        points: [
          "One of the most common issues with JSON is an incorrect format, such as missing quotes around keys, trailing commas, or using single quotes instead of double quotes.",
          "To avoid errors, ensure your JSON is properly formatted and follows the rules of valid JSON syntax.",
        ],
      },
      {
        bulletHeading: "Circular References",
        points: [
          "When using `JSON.stringify()`, circular references (where an object references itself directly or indirectly) will cause an error.",
          "To handle circular references, you can either remove them before stringifying or use a custom serializer.",
        ],
      },
    ],
  },
  {
    heading: "Best Practices for Working with JSON",
    subHeading: "Tips for Using JSON Effectively",
    bulletpoints: [
      {
        bulletHeading: "Ensure Proper Formatting",
        points: [
          "Always ensure your JSON data is properly formatted with double quotes for keys and without trailing commas.",
          "Use online tools like JSONLint to validate your JSON before using it.",
        ],
      },
      {
        bulletHeading: "Handle Parsing Errors Gracefully",
        points: [
          "Always wrap `JSON.parse()` in a try-catch block to handle possible parsing errors.",
          "This helps prevent your application from crashing when receiving invalid JSON data.",
        ],
      },
    ],
  },
];

import iconjs from "@/public/js.png";

export const JSArray: any[] = [
  {
    id: "Js-Basic",
    topic: "Js Basic",
    type: "js",
    icon: iconjs,
    pagesInfoArr: basicInfoArray,
  },

  {
    id: "Js-Syntax",
    topic: "JS Syntax",
    type: "js",
    icon: iconjs,
    pagesInfoArr: jsSyntaxArray,
  },

  {
    id: "Js-Comments",
    topic: "JS Comments",
    type: "js",
    icon: iconjs,
    pagesInfoArr: jsCommentsArray,
  },
  {
    id: "Js-Variables",
    topic: "JS Variables",
    type: "js",
    icon: iconjs,
    pagesInfoArr: jsVariableArray,
  },
  {
    id: "Js-let",
    topic: "JS let",
    type: "js",
    icon: iconjs,
    pagesInfoArr: jsLetArray,
  },
  {
    id: "Js-const",
    topic: "JS const",
    type: "js",
    icon: iconjs,
    pagesInfoArr: jsConstArray,
  },
  {
    id: "Js-Arithmetic",
    topic: "JS Arithmetic",
    type: "js",
    icon: iconjs,
    pagesInfoArr: jsArithmaticArray,
  },

  {
    id: "Js-AssignmentOperators",
    topic: "JS Assignment Operators",
    type: "js",
    icon: iconjs,
    pagesInfoArr: jsAssignmentArray,
  },
  {
    id: "Js-DataTypes",
    topic: "JS Data Types",
    type: "js",
    icon: iconjs,
    pagesInfoArr: jsDataTypesArray,
  },
  {
    id: "Js-Functions",
    topic: "JS Functions",
    type: "js",
    icon: iconjs,
    pagesInfoArr: jsFunctionArray,
  },

  {
    id: "Js-Objects",
    topic: "JS Objects",
    type: "js",
    icon: iconjs,
    pagesInfoArr: jsObjectsArray,
  },
  {
    id: "Js-PrimitiveDataTypes",
    topic: "JS Primitive Data Types",
    type: "js",
    icon: iconjs,
    pagesInfoArr: jsPrimitiveArray,
  },
  {
    id: "Js-ComparisonandLogicalOperations",
    topic: "JS Comparison and Logical Operations",
    type: "js",
    icon: iconjs,
    pagesInfoArr: jsComarisonLogicalArray,
  },
  {
    id: "Js-usestrict",
    topic: "Use strict",
    type: "js",
    icon: iconjs,
    pagesInfoArr: jsUseStrictArray,
  },
  {
    id: "Js-ArrowFunctions",
    topic: "Arrow Functions",
    type: "js",
    icon: iconjs,
    pagesInfoArr: jsArrowFunctionArray,
  },
  {
    id: "Js-Functions",
    topic: "Debugging in JavaScript",
    type: "js",
    icon: iconjs,
    pagesInfoArr: jsDebugingArray,
  },
  {
    id: "Js-Scope",
    topic: "JavaScript Scope",
    type: "js",
    icon: iconjs,
    pagesInfoArr: jsScopeArray,
  },
  {
    id: "Js-Errors",
    topic: "JavaScript Errors",
    type: "js",
    icon: iconjs,
    pagesInfoArr: jsErrorArray,
  },
  {
    id: "Js-if",
    topic: "JS if, else, and else if",
    type: "js",
    icon: iconjs,
    pagesInfoArr: jsifElseArray,
  },
  {
    id: "Js-Statement",
    topic: "Switch Statement",
    type: "js",
    icon: iconjs,
    pagesInfoArr: jsSwitchArray,
  },
  {
    id: "Js-forLoop",
    topic: "For Loop",
    type: "js",
    icon: iconjs,
    pagesInfoArr: jsforLoopArray,
  },
  {
    id: "Js-forinLoop",
    topic: "For In Loop",
    type: "js",
    icon: iconjs,
    pagesInfoArr: jsForInArray,
  },
  {
    id: "Js-forOfLoop",
    topic: "For Of Loop",
    type: "js",
    icon: iconjs,
    pagesInfoArr: jsForOfArray,
  },
  {
    id: "Js-jsWhileLoopArray",
    topic: "While Loop",
    type: "js",
    icon: iconjs,
    pagesInfoArr: jsWhileLoopArray,
  },
  {
    id: "Js-Breakandc",
    topic: "Break and Continue",
    type: "js",
    icon: iconjs,
    pagesInfoArr: jsBreakandContinueArray,
  },
  {
    id: "Js-Iterable",
    topic: "Iterable",
    type: "js",
    icon: iconjs,
    pagesInfoArr: jsIterablesArray,
  },
  {
    id: "Js-Sets",
    topic: "Sets",
    type: "js",
    icon: iconjs,
    pagesInfoArr: jsSetsArray,
  },
  {
    id: "Js-jsMapsArray",
    topic: "Map",
    type: "js",
    icon: iconjs,
    pagesInfoArr: jsMapsArray,
  },
  {
    id: "Js-typeof",
    topic: "Typeof",
    type: "js",
    icon: iconjs,
    pagesInfoArr: jsTypeOfArray,
  },
  {
    id: "Js-TypeConversion",
    topic: "Type Conversion",
    type: "js",
    icon: iconjs,
    pagesInfoArr: jsTypeConversionArray,
  },
  {
    id: "Js-OperatorPrecedence",
    topic: "Operator Precedence",
    type: "js",
    icon: iconjs,
    pagesInfoArr: jsOperatorPrecedenceArray,
  },
  {
    id: "Js-Destructuring",
    topic: "JS Destructuring",
    type: "js",
    icon: iconjs,
    pagesInfoArr: jsDestructuringArray,
  },
  {
    id: "Js-Hoisting",
    topic: "Hoisting",
    type: "js",
    icon: iconjs,
    pagesInfoArr: jsHostingArray,
  },
  {
    id: "Js-JSON",
    topic: "JSON",
    type: "js",
    icon: iconjs,
    pagesInfoArr: jsJsonArray,
  },
];
