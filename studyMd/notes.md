# var / let / const
```
1. var is function scoped variable that can hold value.variable is a container that can hold data value in javascript.var can allow us to store data that can be used and modifed in the code.
```
```
2.let is modred javascript keyword to declase block scoped variable. allow us to decalere the value in block scope.
```
```
3. const is a keyword in javascript used to declare the variable and that value can't be modify.
```

# Data-type
```
1. Data types in javascript define the kind fo the value a variable can hold.
javascript is dynamicly typed language, mean that not have need to decalere the type.

They have two data type : 
```
## 1: Primitive:
```
Primitive data type are most basic data type of the javascript. they are immuateable cant change directly, and stored by value.
 they have 7 types
> string
> number
> boolean
> bigint
> undifind
> symbol
> null
```
## 2: non-Primitive: 
```
Non-primitive data types in Java are not predefined. They are created by the programmer.
they have 3 types
> object
> array
> function
```
# Hoisting
```
Hosting is the behavior in javascript where variable and function declaration are move to the top of their scop before
the code is executed.
```

# Hooks

```
Hooks : useState, useEffect,useRef,cutomhook,useContext,
```

# Map and .map

## Map (The Data Structure)
```
Map is a built-in object in JavaScript used to store key-value pairs.
Each key in a Map must be unique, and each key maps to a specific value.
You can use Map when you need to store data that can be accessed by a unique identifier (the key), and you want to retrieve or modify it later.
Example of using Map:
javascript

let myMap = new Map();
myMap.set('name', 'Alice');
myMap.set('age', 25);

console.log(myMap.get('name'));  // Output: Alice
console.log(myMap.get('age'));   // Output: 25
Map is for storing data in key-value pairs.
```
## 2. .map() (Array Method)
```
.map() is a method available for arrays in JavaScript. It allows you to transform or modify each element of an array and create a new array with the modified elements.
It does not modify the original array. Instead, it returns a new array with the results of calling the provided function on each element.
Example of using .map():
javascript

let numbers = [1, 2, 3, 4];

let squaredNumbers = numbers.map(num => num * num);

console.log(squaredNumbers);  // Output: [1, 4, 9, 16]
.map() loops through an array, applies a function to each element, and returns a new array with the results.
In the example above, it squares each number in the array.

```

 Major Differences Between Map and .map():



| Feature | Map (Data Structure) | .map() (Array Method) |
| :---- | :----: | ----: |
| Type | Object/Collection (stores key-value pairs) | Method on Arrays (creates a new array) |
| Purpose | Used to store and retrieve data by unique keys | Used to transform or modify each element of an array |
| Usage | .set(key, value) to store key-value pairs, .get(key) to access values | .map() is used to iterate over array elements and apply a transformation function |
| Modification | Allows you to store key-value pairs, modify, delete, etc. | Creates a new array, does not modify the original array |
| Return Type |A Map object with key-value pairs | A new array with transformed elements |
| ---- | ---- | ---- |







### In Simple Terms:
```
> Map (the data structure) is a collection of key-value pairs. You use it to store data with a unique identifier.
> .map() (the method) is used to transform or modify elements of an array and returns a new array with those changes.
```
### Example Comparison:
```
Using Map:

let personMap = new Map();
personMap.set('name', 'Alice');
personMap.set('age', 25);
console.log(personMap.get('name'));  // Output: Alice

Map here stores a name and age with unique keys.
```
```
Using .map():
let numbers = [1, 2, 3, 4];
let doubled = numbers.map(num => num * 2);
console.log(doubled);  // Output: [2, 4, 6, 8]
.map() takes each number in the array and doubles it, creating a new array with the results.
```
### Summary:
``` 
> Map is a data structure for storing key-value pairs.
> .map() is an array method used for transforming elements in an array.
```

