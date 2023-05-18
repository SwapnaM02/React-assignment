import React from "react";
import ReactDOM from "react-dom/client";


// using react
// const div=React.createElement("div",{},[
//     React.createElement("h1",{className:"title","key":"h1"},"I'm heading1"),
//     React.createElement("h2",{className:"title","key":"h2"},"I'm heading2"),
//     React.createElement("h3",{className:"title","key":"h3"},"I'm heading3")]);


// using JSX
// const div=<div>
//     <h1>I'm heading1 from JSX</h1>
//     <h2>I'm heading2 from JSX</h2>
//     <h3>I'm heading3 from JSX</h3>
// </div>

// functional component of JSX

// const Functionalcomponent = ( ) => {
//      return (
//             <div>
//                 <h1 id="title" key="h1">I'm heading1 from JSX</h1>
//                 <h2 id="title" key="h2">I'm heading2 from JSX</h2>
//                 <h3 id="title" key="h3">I'm heading3 from JSX</h3>
//             </div>
//         );
//      };

// composition of component

// const Heading4 = () => (
//      <h4>heading4</h4>
// );

// const Functionalcomponent = ( ) => {
//     return (
//            <div>
//                <h1 id="title" key="h1">I'm heading1 from JSX</h1>
//                <h2 id="title" key="h2">I'm heading2 from JSX</h2>
//                <h3 id="title" key="h3">I'm heading3 from JSX</h3>
//                <Heading4/>
//            </div>
//        );
//     };

// {TitleComponent} vs <TitleComponent/> vs <TitleComponent></titleComponent>


// {TitleComponent}
// const TitleComponent = <h5>Heading 5 from JSX</h5>;


// const Functionalcomponent = ( ) => {
//          return (
//                 <div>
//                     <h1 id="title" key="h1">I'm heading1 from JSX</h1>
//                     <h2 id="title" key="h2">I'm heading2 from JSX</h2>
//                     <h3 id="title" key="h3">I'm heading3 from JSX</h3>
//                     {TitleComponent}
//                </div>
//            );
//         };


    // <TitleComponent/>
    // const TitleComponent = () => (
    //           <h4>heading4</h4>
    //      );


    // const Functionalcomponent = ( ) => {
    //         return (
    //                <div>
    //                    <h1 id="title" key="h1">I'm heading1 from JSX</h1>
    //                    <h2 id="title" key="h2">I'm heading2 from JSX</h2>
    //                    <h3 id="title" key="h3">I'm heading3 from JSX</h3>
    //                    <TitleComponent/>
    //               </div>
    //           );
    //        };


    //    <TitleComponent></titleComponent>

    const TitleComponent = () => {

    };
        
   
    const One = () => 
    (
   <h5>Heading 5</h5>
  );
   

   const Two = () => 
     (
    <h6>Heading 6</h6>
   );
   


const Functionalcomponent = ( ) => {
      return (
            <div>
               
                    <One/>
                    <Two/>
                
                 
                  <h1 id="title" key="h1">I'm heading1 from JSX</h1>
                 <h2 id="title" key="h2">I'm heading2 from JSX</h2>
                 <h3 id="title" key="h3">I'm heading3 from JSX</h3>  
                 
            </div>
        );
     };


          //  <Functionalcomponent>
          //       <One/>
          //       <Two/>
          //       </Functionalcomponent>
            
             
             
   



        


const root=ReactDOM.createRoot(document.getElementById("root"));
root.render(<Functionalcomponent/>);
// console.log("Swapna");




