# 1. What is the difference between Named Export,Default export and * as export?
 In JavaScript, when working with modules, there are different ways to export and import functionality between files. Let's explore the differences between named exports, default exports, and the * as export syntax:
   1. Named Exports: Named exports allow you to export multiple functions, objects, or values from a module. Each export has a specific name associated with it.
  To export something as a named export, you use the export keyword followed by the name and the value you want to export. For example: 
  ``` 
// ModuleA.js
export const foo = 'Foo';
export function bar() {
  // Function implementation
}
 ```
 2. Default Export: Default export allows you to export a single function, object, or value as the default export from a module. There can only be one default export per module.
To export something as the default export, you use the export default syntax followed by the value you want to export. For example:
```
// ModuleB.js
const myFunction = () => {
  // Function implementation
}
export default myFunction;
```

3. `*` as Export: The `* ` as syntax allows you to import all exports from a module into a single object.To use `*` as export, you first need to export multiple values or functions using named exports. Then, in the importing module, you can import all of them using the `*` as syntax. For example:
```
// ModuleC.js
export const a = 'A';
export const b = 'B';
export const c = 'C';
```

```
/ ModuleD.js
import * as moduleC from './ModuleC';
console.log(moduleC.a); // Output: 'A'
console.log(moduleC.b); // Output: 'B'
console.log(moduleC.c); // Output: 'C'
```

In summary, named exports allow you to export multiple values with specific names, default exports allow you to export a single value as the default export, and * as exports let you import all exports from a module into a single object.



# 2.What are React Hooks?
In React version 16.8, React introduced a new pattern called Hooks. React Hooks are simple JavaScript functions that we can use to isolate the reusable part from a functional component. Hooks can be stateful and can manage side-effects. Hooks allow you to reuse stateful logic without changing your component hierarchy. This makes it easy to share Hooks among many components or with the community.

- useState: To manage states. Returns a stateful value and an updater function to update it.



# 3.Why do we need useState Hook ?
__useState__ hook is used to maintain the state in our React application. It keeps track of the state changes so basically useState has the ability to encapsulate local state in a functional component. The useState hook is a special function that takes the initial state as an argument and returns an array of two entries. UseState encapsulate only singular value from the state, for multiple state need to have useState calls.

Syntax for useState hook
```
const [state, setState] = useState(initialstate);
```
Importing: To use useState you need to import useState from react as shown below:
import React, { useState } from "react";
we can use Hooks in Functional Components
```
const Example = (props) => {
  // You can use Hooks here!
  return <div />;
  ```




