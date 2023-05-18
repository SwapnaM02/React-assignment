# 1. Is JSX mandatory for React? 
No, JSX is not mandatory for React, but it is a popular and recommended way of writing React code. JSX is a syntax extension for JavaScript that allows developers to write HTML-like syntax directly in their JavaScript code. This can make it easier to write and reason about complex UI components. However, it is possible to write React code using plain JavaScript without using JSX, although it may be more verbose and harder to read and maintain.
    const sample = `<h2>Greetings</h2>`;


# 2. Is ES6 mandatory for React?
No, ES6 (ECMAScript 2015) is not mandatory for React. While using ES6 features is highly recommended and commonly used in React development, it is not a requirement. React can be used with earlier versions of JavaScript, but using ES6 can greatly enhance the development experience and provide access to newer language features and improvements.


# 3.{TitleComponent} vs `{<TitleComponent/>}` vs `{<TitleComponent></TitleComponent>}`
In JSX, there are three different ways to render a React component:

{TitleComponent}: This syntax is used when you want to render the component as a self-closing tag, similar to an HTML tag without any children. This is appropriate when the component does not have any nested content or children elements. For example: `<TitleComponent />`.

`{<TitleComponent/>}`: This syntax is also used for rendering a component as a self-closing tag, but it explicitly wraps the component with curly braces. It is equivalent to the previous syntax but provides a more explicit representation.

`{<TitleComponent></TitleComponent>}`: This syntax is used when you want to render a component with nested content or children elements. It allows you to include other JSX elements or text content within the component tags. This syntax is typically used when you need to pass children to the component. For example:

`<TitleComponent>`
  `<h1>Hello, JSX!</h1>`
`</TitleComponent>`

In summary, the first two syntaxes ({TitleComponent} and `{<TitleComponent/>}`) are used for rendering a component without nested content, while the third syntax `({<TitleComponent></TitleComponent>})` is used when the component requires nested content or children elements.


# 4. How can I write comments in JSX?
JSX comments are written as follows:

{/*  */} - for single or multiline comments

```{/* A JSX comment */}
{/*
  Multi
  line
  JSX
  comment
*/} 
```





# 5. What is <React.Fragment></React.Fragment> and <></>?

<React.Fragment></React.Fragment> is a feature in React that allows you to return multiple elements from a React component by allowing you to group a list of children without adding extra nodes to the DOM. <></> is the shorthand tag for React.Fragment. The only difference between them is that the shorthand version does not support the key attribute.

```
return (
        <React.Fragment>
            <Header />
            <Navigation />
            <Main />
            <Footer />
        </React.Fragment>
    );

return (
        <>
            <Header />
            <Navigation />
            <Main />
            <Footer />
        </>
    );
```

# 6. What is Reconciliation in React?
Reconciliation is the process through which React updates the Browser DOM and makes React work faster. React use a diffing algorithm so that component updates are predictable and faster. React would first calculate the difference between the real DOM and the copy of DOM (Virtual DOM) when there's an update of components. React stores a copy of Browser DOM which is called Virtual DOM. When we make changes or add data, React creates a new Virtual DOM and compares it with the previous one. Comparison is done by Diffing Algorithm. React compares the Virtual DOM with Real DOM. It finds out the changed nodes and updates only the changed nodes in Real DOM leaving the rest nodes as it is. This process is called Reconciliation.

                or
Reconciliation is the process by which React updates the UI to reflect changes in the component state. The reconciliation algorithm is the set of rules that React uses to determine how to update the UI in the most efficient way possible. React uses a virtual DOM (Document Object Model) to update the UI.

# 7. What is React Fiber?
React Fiber is a concept of ReactJS that is used to render a system faster, smoother and smarter. The Fiber reconciler, which became the default reconciler for React 16 and above, is a complete rewrite of React’s reconciliation algorithm to solve some long-standing issues in React. Because Fiber is asynchronous, React can:

Pause, resume, and restart rendering work on components as new updates come in
Reuse previously completed work and even abort it if not needed
Split work into chunks and prioritize tasks based on importance


# 8. Why do we need keys in React?
A key is a special attribute you need to include when creating lists of elements in React. Keys are used in React to identify which items in the list are changed, updated, or deleted. In other words, we can say that keys are unique Identifier used to give an identity to the elements in the lists. Keys should be given to the elements within the array to give the elements a stable identity.

Example

```
<li key={0}>1</li>
<li key={1}>2</li>
<li key={2}>3</li>
```

# 9. Can we use index as keys in React?
Yes, we can use the index as keys, but it is not considered as a good practice to use them because if the order of items may change. This can negatively impact performance and may cause issues with component state. Keys are taken from each object which is being rendered. There might be a possibility that if we modify the incoming data react may render them in unusual order.


# 10. What is props in React? Ways to.
props stands for properties. Props are arguments passed into React components. props are used in React to pass data from one component to another (from a parent component to a child component(s)). They are useful when you want the flow of data in your app to be dynamic.

Example

```
function App() {
  return (
    <div className="App">
      <Tool name="Chetan Nada" tool="Figma"/> // name and tool are props
    </div>
  )
}
```

# 11.What is Config Driven UI?
__Config Driven UI__ are based on the configurations of the data application receives. It is rather a good practice to use config driven UIs to make application for dynamic. It is a very common & basic approach to interact with the User. It provides a generic interface to develop things which help your project scale well. It saves a lot of development time and effort. A typical login form, common in most of the Apps. Most of these forms also get frequent updates as the requirements increase in terms of Form Validations, dropdown options,.. or design changes.

# 12.Difference between Virtual DOM and Real DOM?
DOM stands for Document Object Model, which represents your application UI and whenever the changes are made in the application, this DOM gets updated and the user is able to visualize the changes. DOM is an interface that allows scripts to update the content, style, and structure of the document.

  - Virtual DOM - The Virtual DOM is a light-weight abstraction of the DOM. You can think of it as a copy of the DOM, that can be updated without affecting the actual DOM. It has all the same properties as the real DOM object, but doesn’t have the ability to write to the screen like the real DOM.
Virtual DOM is just like a blueprint of a machine, can do the changes in the blueprint but those changes will not directly apply to the machine.
Reconciliation is a process to compare and keep in sync the two files (Real and Virtual DOM). Diffing algorithm is a technique of reconciliation which is used by React.

  - Real DOM - The DOM represents the web page often called a document with a logical tree and each branch of the tree ends in a node and each node contains object programmers can modify the content of the document using a scripting language like javascript and the changes and updates to the dom are fast because of its tree-like structure but after changes, the updated element and its children have to be re-rendered to update the application UI so the re-rendering of the UI which make the dom slow all the UI components you need to be rendered for every dom update so real dom would render the entire list and not only those item that receives the update .