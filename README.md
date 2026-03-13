1️⃣ What is the difference between var, let, and const?

--> Generally, we use var, let and const to declare variable in JavaScript. But it has difference during its uses. The differences depending on some issues. such as: scope, redeclaration, reassignment, hoisting, temporal dead zone, global binding, memory behavior.
I am explaining in detail below.

###  Main Characteristics of var
it is the first variable declaration keyword in JavaScript. Before coming ES6, It was used almost everywhere.

### 1. scope of var
1. var follows function scope. So, when we will write or declare a variable inside a function, it will work only inside this function.

### 2. Re-declaration Allowed
2. we can declare the variable multiples time by var.Using var, it is possible to declare the same variable more than once.

### 3. Re-assignment Allowed
3. The value of a var variable can be changed anytime.

### 4. hoisting
4. ar supports hoisting. This means you can use a variable before declaring it. JavaScript moves the variable declaration to the top, but the value is not assigned yet.

### 5. Global Object Attachment
5. If we use var outside any function, it is added as a property of the window object in the browser.

###  Main Characteristics of let
let has come with ES6 (ECMAScript) in 2015. it is most usable variable in Modern JavaScript.

### 1. Block-Scope of let
1. it is block-scoped. If we declare let variable inside {} (curly Bracket), It will be work only inside this block. we won't access it outside the block.

### 2. Re-declaration not allowed 
2. we will not it redeclare inside the same scope again.

### 3. Re-assignment allowed
3. we can modify or change our value If it is needed.

### 4. Hoisting And Temporal Dead Zone(TDZ)
4. It is hoisted after declaration. Before declaration if we want to access it, it is shown error. Because Before declaration It is remain in Temporal Dead Zone(TDZ). That's why It is hoisted but after declaration.

###  Main Characteristics of const
It is used when the value of this variable won't change. The value of this variable will remain constant.

### 1. Block Scope
1. It is also block-scoped. we won't access it outside the block.

### 2. Re-declaration not allowed
2. It is not possible to re-declare it.

### 3. Re-assignment not allowed
3.  we won't modify or change our main value If it is needed.

### 4. Must Assign Value During Declaration
4. we have to give our value during declaration of this const variable.

### 5. Object And Array Behavior
5. if we declare array or object in const variable, we won't change or modify the reference. But we can change or modify inside value.

### Conclusion
In Modern JavaScript, Developers generally, avoid the use of var. They use let variable when It is needed to change or modify or re-assignment. And usually, they use const variable as a default.


2️⃣ What is the spread operator (...)?

--> In JavaScript, spread operator is a feature of ES6 that is used in array, object or the elements of iterable to separate. That Means separate or take them out one by one. it helps to make code easy, small and also clean. The help of Three dot (...) is defined this spread operator. 

### use spread operator(...) with Array
1. It helps to add, copy or merge elements of array.
2. we can make the copy of an array by the help of spread operator.
3. we can add or merge multiples arrays together.
4. we can add new elements in array.

### use spread operator(...) with object
1. we can use it to copy or merge an object.

### use spread operator(...) as an argument of a function
1. By the help of it we can send the elements of array one by one or separately as an argument of the function.

### use spread operator(...) with string
1. We can spread the characters of strings.

3️⃣ What is the difference between map(), filter(), and forEach()?

--> These are the array methods of JavaScript. These are used to work in every elements of array. But the way of working process and result is different from each other.

### map()
This method is used to run a function on each element of the array to create or make a new array. Always it returns a new array. It won't change the original array. It is used to transform the array.

### filter()
This method is used to select elements based on a specific condition. It is also return a new array. It also won't change the original array.

### forEach()
This method is used to run a loop on each element of array. It won't return any new array. It works like loop. It won't return any value. Generally, It is used as side effect work.

4️⃣ What is an arrow function?

--> Arrow Function(=>) is a compact and the modern way of declaration of function. It has come from ES6(ECMAScript) in 2015. It is small and more readable rather than a function. The work of normal function and arrow function is same but there is a little bit difference during the writing way of code, that is it(arrow function) is easy and small to write code shortly. If arrow function works in one line, We won't write return. we can decrease our write rather than normal function.

5️⃣ What are template literals?

--> Template literals is a Modern Way to make text or string. We can make dynamic strings by the help of it. It means that we can add variable and expression easily inside the template literals. It has also come from ES6. we have to use backticks(``) in to work with this. we have to use ${}(dollar sign with curly bracket) to add variable or expression. we can write multi-line-string easily without using /n(slash n). we can write any dynamic expression inside ${} this syntax.


