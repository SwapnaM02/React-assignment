# 1.What is Emmet?
 Emmet is a feature of text-editor(vS code).Emmet allows to type shortcuts that are then expanded into full pieces of code.By using Emmet, developers type less and save the time.Relying on Emmet's auto completion means less typos and missing tags.Heance leading to more robust and valid files.



# 2. Difference between a Library and Framework?
 A library is a collection of code to do a specific tasks like connecting to database while a framework is like a blueprint or structure that provides guidelines on how to build an application.

# 3. What is CDN?
 `CDN` stands for __CONTENT DELIVERY NETWORK__.It is network of severs distributed across different geographical locations around the world.The purpose of a CDN is to provide faster delivery of digital content from the nearest server location to the user's geographical location.

# 4. What is cross-origin in the script tag? 

 The crossorigin attribute is an HTML attribute that can be added to the `<script>` tag when including external scripts in a web page. It is used to control how the browser should handle the script's request for resources from another domain (i.e., a different origin) than the one that served the HTML page.

# 5. Why is React know as React?
 React is a JavaScript library for building user interfaces, and it was developed by Facebook. The name "React" comes from the way the library works, which is by reacting to changes in a component's state and then rendering the user interface accordingly.

 The name "React" also reflects the library's philosophy of being declarative, meaning that you describe what you want to happen in the user interface, and React takes care of the underlying logic of how to achieve it.

 # 6. What is difference between React and ReactDOM?  
 React is the core library that provides the functionality for building UI components, while ReactDOM provides the methods for rendering those components into the browser DOM. 

 # 7. What is difference between react.development.js and react.production.js files via CDN?
 React provides two different builds for its library: a development build (react.development.js) and a production build (react.production.js). The difference between these two builds is primarily in their size and performance characteristics.

The development build of React includes extra warnings and error messages to help developers debug their code. It's also larger in size because it includes additional code and features that are useful during development but not necessary for production use.

On the other hand, the production build of React is optimized for performance and file size. It's smaller and faster than the development build because it includes only the essential code needed to run a React application in production.

Development is the stage of an application before it's made public while production is the term used for the same application when it's made public. Development build is several times (maybe 3-5x) slower than the production build.

# 8. What are aync and defer?
"async" and "defer" are attributes that can be used with the "script" element in HTML to control how a script file is loaded and executed.

The `async` attribute tells the browser to load the script file asynchronously, which means that the script will be downloaded in the background while the rest of the HTML page is being parsed and rendered. Once the script is downloaded, it will be executed immediately, regardless of whether the HTML page has finished loading. This can lead to faster page load times, but it can also cause problems if the script relies on other parts of the page that haven't finished loading yet.

The "defer" attribute, on the other hand, tells the browser to load the script file asynchronously, but to wait until the HTML page has finished parsing before executing the script. This ensures that the script doesn't interfere with the rendering of the page.

In summary, "async" and "defer" are both techniques to improve page load times by loading scripts asynchronously, but "async" executes the script immediately when it's downloaded, while "defer" waits until the HTML page has finished parsing.





