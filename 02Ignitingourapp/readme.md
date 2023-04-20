# 1. What is `NPM`
 `NPM` is a package manager used to manage all the packages in our code/application.`NPM` is initialized using the following command : `npm init`.NPM creates a package.json file to handle all the different packages in our code.

 # 2. What is `Parcel/Webpack`?Why do we need it?
  `Parcel` and `webpack` both are bundlers.We need bundlers to minify our files,remove co console log and to optimise our code for production ready.






  # 3. What is `.parcel-cache`?
   Parcel does lot of things like Hot module replacement,minifying our files and optimising,to do all that parcel needs a space.Hence that space is nothing but .parcel-cache.

   # 4. What is `npx`?
   NPX is node package execute.Execute our project using npm package manager.
   `npx parcel index.html`

   # 5. What is difference between 'dependencies' vs 'devDependencies'?
   dependencies : Packages required by your application in production. devDependencies : Packages that are only needed for local development and testing.

   # 6. What is Tree Shaking?
   Tree shaking is a technique used in modern JavaScript bundlers,  to eliminate unused code from a final bundle.

In JavaScript, modules can import and export functions, classes, variables, and other values from other modules. However, not all of these imports are actually used in the application code. Tree shaking analyzes the import statements and removes any code that is not actually used, resulting in a smaller bundle size.

The term "tree shaking" comes from the concept of shaking a tree to remove dead leaves. In the same way, tree shaking "shakes" the module tree to remove any "dead" code that is not used by the application.

# 7.What is Hot Module Replacement?
Hot module Replacement is the feature of Parcel.Hot Module Replacement uses the file watcher alogorithm written in C++.File watcher algorithm keeps track of all the files which are changed in real-time and tell the servers to reload.

# 8. List down your favourite 5 superpowers of parcel and describe any 3 of them in your words.
- Hot Module Replacement
- Caching while development
- zero configuration
- handles port number
- image optimization 
- compactabe with older version of brower.

- Zero configuration - Parcel doesn't require any configurations.We just install parcel and run our code using npx command.Hence parcel is zero configuration.

- Hot Module Replacement - Hot module Replacement is the feature of Parcel.Hot Module Replacement uses the file watcher alogorithm written in C++.File watcher algorithm keeps track of all the files which are changed in real-time and tell the servers to reload.

- Image optimization - when we load html page into browser,media like images and videos takes long time to load.Hence parcel does image optimization also. 

# 9. What is '.gitignore'?what should we add and not add into it?
The .gitignore file is a special file that is used by Git to determine which files and directories should be ignored when tracking changes in a project. When a file or directory is listed in the .gitignore file, Git will not include it in the repository, even if it has been modified.
- Add to .gitignore:Dependencies: Dependencies that are installed using a package manager, such as npm or Yarn, should be added to the .gitignore file. This is because they can be installed again by running the appropriate command and do not need to be included in the repository.
- Do not add to .gitignore: Source code: The source code for the project should not be added to the .gitignore file. This is because it is the main purpose of the repository and should be tracked by Git.

# 10. What is the difference between 'package.json' and 'package-lock-json'?
 'Package.json' file is created when we initialise the npm using the command, npm init.package.json file manages all the packages used in our code.'package-lock.json' file is created when we install the parcel bundler using the following command,npm install -D parcel.'Package-lock.json' file keeps the track of which version of parcel is used in production.

 # 11.Why should I not modify 'package-lock.json'?
  It is a generated file and is not designed to be manually edited. Its purpose is to track the entire tree of dependencies (including dependencies of dependencies) and the exact version of each dependency. You should commit package-lock.json to your code repository

You should avoid updating the package.json manually since it could break the synchronization between package.json and package-lock. json.

# 12. What is node_modules? Is it a good idea to push that on git?
 The node_modules folder contains generated code. This is not code you've written and you should never make any updates to the files inside Node modules.

 It is better to not commit the node_modules folder, and instead add it to your .gitignore file.

 Here are all the reasons why you shouldn't commit it: The node_modules folder has a massive size (up to Gigabytes). It is easy to recreate the node_modules folder via packages-lock. json

# 13.  What is the dist folder?
 The /dist stands for distributable. The /dist folder contains the minimized version of the source code. The code present in the /dist folder is actually the code which is used on production web applications.

 # 14. What is browserlists?
  Browserslist defines and shares the list of target browsers between various frontend build tools. 


 