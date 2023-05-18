/**
Header
    -logo
    -Menulist/list items(right side)/nav items
    -cart

Body
    - RestaurantList 
        -RestaurantCard
            -Image
            -name
            -Rating
            -cusines

 */


// 1.Before we build anywebsite,we need to have a planning.planning helps to know what all components we require in our website.so we need to structure our website.


import React from "react";
import ReactDOM from "react-dom/client";
import HeaderComponent from "./header";
import Body from "./body";
import Footer from "./footer"
// first lets build the header

// const Title = () => {
//     return <h1 id="title" key="h1">Food good</h1>
// };

// const HeaderComponent = () => {
//     return (
//         <div className="header">
//             <Title/>
//             <div className="nav-items">
//                 <ul>
//                     <li>Home</li>
//                     <li>About</li>
//                     <li>contact</li>
//                     <li>cart</li>
//                 </ul>

//             </div>
//         </div>
//     );
// };
















// 2.make logo as heading

// const Title = () => {
//     return<a href="/"> <img src="https://png.pngtree.com/png-vector/20220726/ourlarge/pngtree-food-logo-png-image_6061627.png" alt="logo" className="logo"/> </a>
// };

// const HeaderComponent = () => {
//     return (
//         <div className="header">
//             <Title/>
//             <div className="nav-items">
//                 <ul>
//                     <li>Home</li>
//                     <li>About</li>
//                     <li>contact</li>
//                     <li>cart</li>
//                 </ul>

//             </div>
//         </div>
//     );
// };



// const AppLayout = () => {
//     return <HeaderComponent/>
// };

// const root = ReactDOM.createRoot(
//     document.getElementById("root")
//   );
// root.render(<AppLayout/>);







/** 3.B4 we build body,lets understand <React.Fragment>.AppLayout consists of headercomponenr,body and footer
 const Applayout = () =>{
    <headerComponent/>
    <Body/>
    <Footer/>
 } 
 */

//  const Title = () => {
//     return<a href="/"> <img src="https://png.pngtree.com/png-vector/20220726/ourlarge/pngtree-food-logo-png-image_6061627.png" alt="logo" className="logo"/> </a>
// };

// const HeaderComponent = () => {
//     return (
//         <div className="header">
//             <Title/>
//             <div className="nav-items">
//                 <ul>
//                     <li>Home</li>
//                     <li>About</li>
//                     <li>contact</li>
//                     <li>cart</li>
//                 </ul>

//             </div>
//         </div>
//     );
// };
// const Body = () =>{
//     return <h2>body</h2>
// };
// const footer = () =>{
//     return <h2>footer</h2>
// }


/** this will result error.caz when we hover on error.it says jsx should have one parent element */
// const AppLayout = () => {
//     return <HeaderComponent/>
//             <Body/>
//             <footer/>
// };


// a.const heading=<h1>JSX </h1>  ---proper JSX
// b.const heading=<h1>JSX</h1><h1>Second JSX</h1>  --invalid JSX
// c.1.const heading = <div>
//     <h1>JSX</h1>
//     <h2>second JSX</h2>
// </div> ---Valid JSX but inside browsers there will be two DIV's.

// const root = ReactDOM.createRoot(
//     document.getElementById("root")
//   );
// root.render(<heading/>);





/** c.2 without having two DIVS iniside the browser.I want <h1>,<h1>inside the header class.for that we use <React.Fragment>.<React.Fragment> is a component which is exported by react. */
// const Title = () => {
//     return<a href="/"> <img src="https://png.pngtree.com/png-vector/20220726/ourlarge/pngtree-food-logo-png-image_6061627.png" alt="logo" className="logo"/> </a>
// };

// const HeaderComponent = () => {
//     return (
//         <div className="header">
//             <Title/>
//             <div className="nav-items">
//                 <ul>
//                     <li>Home</li>
//                     <li>About</li>
//                     <li>contact</li>
//                     <li>cart</li>
//                 </ul>

//             </div>
//         </div>
//     );
// };



// const Heading = () =>{
//     return <React.Fragment>
//         <h1>hello JXS</h1>
//         <h1>Second JSX</h1>
//     </React.Fragment>
// }

// const root = ReactDOM.createRoot(
//     document.getElementById("root")
//   );

// root.render(<Heading/>);














// c.3 <React.Fragement></React.Fragement> is like empty tags,<> </>
// const Title = () => {
//     return<a href="/"> <img src="https://png.pngtree.com/png-vector/20220726/ourlarge/pngtree-food-logo-png-image_6061627.png" alt="logo" className="logo"/> </a>
// };

// const HeaderComponent = () => {
//     return (
//         <div className="header">
//             <Title/>
//             <div className="nav-items">
//                 <ul>
//                     <li>Home</li>
//                     <li>About</li>
//                     <li>contact</li>
//                     <li>cart</li>
//                 </ul>

//             </div>
//         </div>
//     );
// };



// const Heading = () =>{
//     return <>
//         <h1>hello JXS</h1>
//         <h1>Second JSX</h1>
//     </>
// }

// const root = ReactDOM.createRoot(
//     document.getElementById("root")
//   );

// root.render(<Heading/>);













// c.4 Suppose if i want to give background color to heading.we cant give style to empty tag caz where will that style go.to give styling for heading
// const Title = () => {
//     return<a href="/"> <img src="https://png.pngtree.com/png-vector/20220726/ourlarge/pngtree-food-logo-png-image_6061627.png" alt="logo" className="logo"/> </a>
// };

// const HeaderComponent = () => {
//     return (
//         <div className="header">
//             <Title/>
//             <div className="nav-items">
//                 <ul>
//                     <li>Home</li>
//                     <li>About</li>
//                     <li>contact</li>
//                     <li>cart</li>
//                 </ul>

//             </div>
//         </div>
//     );
// };

// const styleobj = {
//     backgroundColor:"red"
// };

// const Heading = () =>{  will throw error as Style takes object, styleobj is not JSX thing ,it is JS
//     return <div style=styleoj>
//         <h1>hello JXS</h1>
//         <h1>Second JSX</h1>
//     </div>
// }

// const root = ReactDOM.createRoot(
//     document.getElementById("root")
//   );

// root.render(<Heading/>);













// 3.e Give background color to0 heading using objects
// const Title = () => {
//     return<a href="/"> <img src="https://png.pngtree.com/png-vector/20220726/ourlarge/pngtree-food-logo-png-image_6061627.png" alt="logo" className="logo"/> </a>
// };

// const HeaderComponent = () => {
//     return (
//         <div className="header">
//             <Title/>
//             <div className="nav-items">
//                 <ul>
//                     <li>Home</li>
//                     <li>About</li>
//                     <li>contact</li>
//                     <li>cart</li>
//                 </ul>

//             </div>
//         </div>
//     );
// };

// const styleobj = {
//     backgroundColor:"red",
// }

// // const Heading = () =>{ 
// //     return <div style={styleobj}>
// //         <h1>hello JXS</h1>
// //         <h1>Second JSX</h1>
// //     </div>
// // }


// const Heading = () =>{
//     return <div style={{
//         backgroundColor:"red",
//     }}>
//         <h1>hello JXS</h1>
//         <h1>Second JSX</h1>
//     </div>
// }

// const root = ReactDOM.createRoot(
//     document.getElementById("root")
//   );

// root.render(<Heading/>);







// 4.complete header,body and footer inide applayout without getting error
// const Title = () => {
//     return<a href="/"> <img src="https://png.pngtree.com/png-vector/20220726/ourlarge/pngtree-food-logo-png-image_6061627.png" alt="logo" className="logo"/> </a>
// };

// const HeaderComponent = () => {
//     return (
//         <div className="header">
//             <Title/>
//             <div className="nav-items">
//                 <ul>
//                     <li>Home</li>
//                     <li>About</li>
//                     <li>contact</li>
//                     <li>cart</li>
//                 </ul>

//             </div>
//         </div>
//     );
// };

// const Body =() =>{
//     return <h2>body</h2>
// }
// const Footer =() =>{
//     return <h2>Footer</h2>
// }


// const AppLayout = () =>{
//     return <>
//         <HeaderComponent/>
//         <Body/>
//         <Footer/>
//     </>
// }

// const root = ReactDOM.createRoot(
//     document.getElementById("root")
//   );

// root.render(<AppLayout/>);
















/**5.Building resto cards
 * Restuarantlist
 *  -restuarantCard
 *      -Image
 *      -Name
 *      -Rating
 *      -cusines
 */
// 5.1 Hard core card data but everytime data wont be same.
// const Title = () => {
//     return<a href="/"> <img src="https://png.pngtree.com/png-vector/20220726/ourlarge/pngtree-food-logo-png-image_6061627.png" alt="logo" className="logo"/> </a>
// };

// const HeaderComponent = () => {
//     return (
//         <div className="header">
//             <Title/>
//             <div className="nav-items">
//                 <ul>
//                     <li>Home</li>
//                     <li>About</li>
//                     <li>contact</li>
//                     <li>cart</li>
//                 </ul>

//             </div>
//         </div>
//     );
// };
// const Restcard = () =>{
//     return (
//     <div className="card"> 
//     <img src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/28fb13049b4e55297bb3f703cde63c35" />
//     <h2>Burger King</h2>
//     <h5>Burgers,American</h5>
//     <h4>4.2 stars</h4>

//     </div>
//     );
// };

// const Body =() =>{
//     return <div>
//         <Restcard/>
        
//     </div>
// }
// const Footer =() =>{
//     return <h2>Footer</h2>
// }


// const AppLayout = () =>{
//     return <>
//         <HeaderComponent/>
//         <Body/>
//         <Footer/>
//     </>
// }

// const root = ReactDOM.createRoot(
//     document.getElementById("root")
//   );

// root.render(<AppLayout/>);


// 5.1 Lets make our data dynamic. in the below code the cusinies is not in array format.

// const Title = () => {
//     return<a href="/"> <img src="https://png.pngtree.com/png-vector/20220726/ourlarge/pngtree-food-logo-png-image_6061627.png" alt="logo" className="logo"/> </a>
// };

// const HeaderComponent = () => {
//     return (
//         <div className="header">
//             <Title/>
//             <div className="nav-items">
//                 <ul>
//                     <li>Home</li>
//                     <li>About</li>
//                     <li>contact</li>
//                     <li>cart</li>
//                 </ul>

//             </div>
//         </div>
//     );
// };

// // data comes something like object format
// const restobj = {
//     image:"https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/28fb13049b4e55297bb3f703cde63c35",
//     Name:"Burger King",
//     cusines:["Burgers","American"],
//     rating:"4.2"
// }
// const Restcard = () =>{
//     return (
//     <div className="card"> 
//     <img src={restobj.image} />
//     <h2>{restobj.Name}</h2>
//     <h4>{restobj.cusines}</h4>
//     <h4>{restobj.rating} stars</h4>

//     </div>
//     );
// };

// const Body =() =>{
//     return <div>
//         <Restcard/>
        
//     </div>
// }
// const Footer =() =>{
//     return <h2>Footer</h2>
// }


// const AppLayout = () =>{
//     return <>
//         <HeaderComponent/>
//         <Body/>
//         <Footer/>
//     </>
// }

// const root = ReactDOM.createRoot(
//     document.getElementById("root")
//   );

// root.render(<AppLayout/>);













// 5.2 Lets make our data dynamic and cusinies in array format by using join method in array
// const Title = () => {
//     return<a href="/"> <img src="https://png.pngtree.com/png-vector/20220726/ourlarge/pngtree-food-logo-png-image_6061627.png" alt="logo" className="logo"/> </a>
// };

// const HeaderComponent = () => {
//     return (
//         <div className="header">
//             <Title/>
//             <div className="nav-items">
//                 <ul>
//                     <li>Home</li>
//                     <li>About</li>
//                     <li>contact</li>
//                     <li>cart</li>
//                 </ul>

//             </div>
//         </div>
//     );
// };

// // data comes something like object format
// const restobj = {
//     image:"https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/28fb13049b4e55297bb3f703cde63c35",
//     Name:"Burger King",
//     cusines:["Burgers","American"],
//     rating:"4.2"
// }
// const Restcard = () =>{
//     return (
//     <div className="card"> 
//     <img src={restobj.image} />
//     <h2>{restobj.Name}</h2>
//     <h4>{restobj.cusines.join(",")}</h4>
//     <h4>{restobj.rating} stars</h4>

//     </div>
//     );
// };

// const Body =() =>{
//     return <div>
//         <Restcard/>
        
//     </div>
// }
// const Footer =() =>{
//     return <h2>Footer</h2>
// }


// const AppLayout = () =>{
//     return <>
//         <HeaderComponent/>
//         <Body/>
//         <Footer/>
//     </>
// }

// const root = ReactDOM.createRoot(
//     document.getElementById("root")
//   );

// root.render(<AppLayout/>);












// 5.3 In real world there will be so many restaurants.lets see how we can render many restaurants 
// const Title = () => {
//     return<a href="/"> <img src="https://png.pngtree.com/png-vector/20220726/ourlarge/pngtree-food-logo-png-image_6061627.png" alt="logo" className="logo"/> </a>
// };

// const HeaderComponent = () => {
//     return (
//         <div className="header">
//             <Title/>
//             <div className="nav-items">
//                 <ul>
//                     <li>Home</li>
//                     <li>About</li>
//                     <li>contact</li>
//                     <li>cart</li>
//                 </ul>

//             </div>
//         </div>
//     );
// };

// // data comes something like object format
// const restobj = {
//     image:"https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/28fb13049b4e55297bb3f703cde63c35",
//     Name:"Burger King",
//     cusines:["Burgers","American"],
//     rating:"4.2"
// }
// const Restcard = () =>{
//     return (
//     <div className="card"> 
//     <img src={restobj.image} />
//     <h2>{restobj.Name}</h2>
//     <h4>{restobj.cusines.join(",")}</h4>
//     <h4>{restobj.rating} stars</h4>

//     </div>
//     );
// };
// // all the cards have same data.
// const Body =() =>{
//     return <div className="restcollection">
//         <Restcard/>
//         <Restcard/>
//         <Restcard/>
//         <Restcard/>
//         <Restcard/>
//         <Restcard/>
//         <Restcard/>
//         <Restcard/>
//         <Restcard/>
//         <Restcard/>
//         <Restcard/>
//         <Restcard/>
//         <Restcard/>
//         <Restcard/>
//         <Restcard/>

        
//     </div>
// }
// const Footer =() =>{
//     return <h2>Footer</h2>
// }


// const AppLayout = () =>{
//     return <>
//         <HeaderComponent/>
//         <Body/>
//         <Footer/>
//     </>
// }

// const root = ReactDOM.createRoot(
//     document.getElementById("root")
//   );

// root.render(<AppLayout/>);













// 5.4 we dont want all the data to be same in our website.lets make our page more dynamic
/** in real world data comes in API format */


  


// const Title = () => {
//     return<a href="/"> <img src="https://png.pngtree.com/png-vector/20220726/ourlarge/pngtree-food-logo-png-image_6061627.png" alt="logo" className="logo"/> </a>
// };

// const HeaderComponent = () => {
//     return (
//         <div className="header">
//             <Title/>
//             <div className="nav-items">
//                 <ul>
//                     <li>Home</li>
//                     <li>About</li>
//                     <li>contact</li>
//                     <li>cart</li>
//                 </ul>

//             </div>
//         </div>
//     );
// };


// const Restcard = () =>{
//     return (
//     <div className="card"> 
//     <img 
//     src={
//         "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/" +restList[0].data.cloudinaryImageId
//         } />
//     <h2>{restList[0].data.name}</h2>
//     <h4>{restList[0].data.cuisines.join(",")}</h4>
//     <h4>{restList[0].lastMileTravelString} stars</h4>

//     </div>
//     );
// };

// const Body =() =>{
//     return <div>
//         <Restcard/>
        
//     </div>
// }
// const Footer =() =>{
//     return <h2>Footer</h2>
// }


// const AppLayout = () =>{
//     return <>
//         <HeaderComponent/>
//         <Body/>
//         <Footer/>
//     </>
// }

// const root = ReactDOM.createRoot(
//     document.getElementById("root")
//   );

// root.render(<AppLayout/>);










// 6.right now all our cards are same.
// const Title = () => {
//     return<a href="/"> <img src="https://png.pngtree.com/png-vector/20220726/ourlarge/pngtree-food-logo-png-image_6061627.png" alt="logo" className="logo"/> </a>
// };

// const HeaderComponent = () => {
//     return (
//         <div className="header">
//             <Title/>
//             <div className="nav-items">
//                 <ul>
//                     <li>Home</li>
//                     <li>About</li>
//                     <li>contact</li>
//                     <li>cart</li>
//                 </ul>

//             </div>
//         </div>
//     );
// };


// const Restcard = () =>{
//     return (
//     <div className="card"> 
//     <img 
//     src={
//         "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/" +restList[0].data.cloudinaryImageId
//         } />
//     <h2>{restList[0].data.name}</h2>
//     <h4>{restList[0].data.cuisines.join(",")}</h4>
//     <h4>{restList[0].lastMileTravelString} stars</h4>

//     </div>
//     );
// };

// const Body =() =>{
//     return <div class="restcollection">
//         <Restcard/>
//         <Restcard/>
//         <Restcard/>
        
//         <Restcard/>
        
//         <Restcard/>
        
//         <Restcard/>
//         <Restcard/>
        
//         <Restcard/>
        
        
        
        
        
//     </div>
// }
// const Footer =() =>{
//     return <h2>Footer</h2>
// }


// const AppLayout = () =>{
//     return <>
//         <HeaderComponent/>
//         <Body/>
//         <Footer/>
//     </>
// }

// const root = ReactDOM.createRoot(
//     document.getElementById("root")
//   );

// root.render(<AppLayout/>);









// 6.1 We dont want all our cards to be same.I want diff data in my cards.
/**const Body =() =>{
        <Restcard kfc }
        <Restcard buger King }
        <Restcard pizza hut }
        to get cards dynamic 1st card from 1st object in restlist,second card from second object in restlist and so on
*/
// const Title = () => {
//     return<a href="/"> <img src="https://png.pngtree.com/png-vector/20220726/ourlarge/pngtree-food-logo-png-image_6061627.png" alt="logo" className="logo"/> </a>
// };

// const HeaderComponent = () => {
//     return (
//         <div className="header">
//             <Title/>
//             <div className="nav-items">
//                 <ul>
//                     <li>Home</li>
//                     <li>About</li>
//                     <li>contact</li>
//                     <li>cart</li>
//                 </ul>

//             </div>
//         </div>
//     );
// };


// const Restcard = ( props ) =>{
//     console.log(props);
//     return (
//     <div className="card"> 
//     <img 
//     src={
//         "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/" +props.restobj.data.cloudinaryImageId
//         } />
//     <h2>{props.restobj.data.name}</h2>
//     <h5>{props.restobj.data.cuisines.join(",")}</h5>
//     <h4>{props.restobj.datalastMileTravelString} stars</h4>

//     </div>
//     );
// };


// // everytime we are passing different data into each functional call
// const Body =() =>{
//     return <div class="restcollection">
        
//         <Restcard restobj={restList[0]}/>
//         <Restcard restobj={restList[1]}/>
//         <Restcard restobj={restList[2]}/>
        
//         <Restcard restobj={restList[3]}/>
        
//         <Restcard restobj={restList[4]}/>
        
//         <Restcard restobj={restList[5]}/>
//         <Restcard restobj={restList[6]}/>
        
//         <Restcard restobj={restList[7]}/>
        
        
        
        
        
//     </div>
// };
// const Footer =() =>{
//     return <h2>Footer</h2>
// };


// const AppLayout = () =>{
//     return <>
//         <HeaderComponent/>
//         <Body/>
//         <Footer/>
//     </>
// };

// const root = ReactDOM.createRoot(
//     document.getElementById("root")
//   );

// root.render(<AppLayout/>);














// 6.3 some developers destructure on the fly.props is like restobj.hence props is and object.
// const Title = () => {
//     return<a href="/"> <img src="https://png.pngtree.com/png-vector/20220726/ourlarge/pngtree-food-logo-png-image_6061627.png" alt="logo" className="logo"/> </a>
// };

// const HeaderComponent = () => {
//     return (
//         <div className="header">
//             <Title/>
//             <div className="nav-items">
//                 <ul>
//                     <li>Home</li>
//                     <li>About</li>
//                     <li>contact</li>
//                     <li>cart</li>
//                 </ul>

//             </div>
//         </div>
//     );
// };


// const Restcard = ( {restobj} ) =>{
//     console.log(restobj);
//     return (
//     <div className="card"> 
//     <img 
//     src={
//         "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/" +restobj.data.cloudinaryImageId
//         } />
//     <h2>{restobj.data.name}</h2>
//     <h5>{restobj.data.cuisines.join(",")}</h5>
//     <h4>{restobj.datalastMileTravelString} stars</h4>

//     </div>
//     );
// };


// // everytime we are passing different data into each functional call
// const Body =() =>{
//     return <div class="restcollection">
        
//         <Restcard restobj={restList[0]}/>
//         <Restcard restobj={restList[1]}/>
//         <Restcard restobj={restList[2]}/>
        
//         <Restcard restobj={restList[3]}/>
        
//         <Restcard restobj={restList[4]}/>
        
//         <Restcard restobj={restList[5]}/>
//         <Restcard restobj={restList[6]}/>
        
//         <Restcard restobj={restList[7]}/>
        
        
        
        
        
//     </div>
// };
// const Footer =() =>{
//     return <h2>Footer</h2>
// };


// const AppLayout = () =>{
//     return <>
//         <HeaderComponent/>
//         <Body/>
//         <Footer/>
//     </>
// };

// const root = ReactDOM.createRoot(
//     document.getElementById("root")
//   );

// root.render(<AppLayout/>);












// 6.4 still above code is looking ugly.we can destructure the 'restobj' also
// const Title = () => {
//     return<a href="/"> <img src="https://png.pngtree.com/png-vector/20220726/ourlarge/pngtree-food-logo-png-image_6061627.png" alt="logo" className="logo"/> </a>
// };

// const HeaderComponent = () => {
//     return (
//         <div className="header">
//             <Title/>
//             <div className="nav-items">
//                 <ul>
//                     <li>Home</li>
//                     <li>About</li>
//                     <li>contact</li>
//                     <li>cart</li>
//                 </ul>

//             </div>
//         </div>
//     );
// };


// const Restcard = ( {restobj} ) =>{
//     const {name,cuisines,cloudinaryImageId,lastMileTravelString}=restobj.data;
//     return (
//     <div className="card"> 
//     <img 
//     src={
//         "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/" +cloudinaryImageId
//         } />
//     <h2>{name}</h2>
//     <h5>{cuisines.join(",")}</h5>
//     <h4>{lastMileTravelString} stars</h4>

//     </div>
//     );
// };


// // everytime we are passing different data into each functional call
// const Body =() =>{
//     return <div class="restcollection">
        
//         <Restcard restobj={restList[0]}/>
//         <Restcard restobj={restList[1]}/>
//         <Restcard restobj={restList[2]}/>
        
//         <Restcard restobj={restList[3]}/>
        
//         <Restcard restobj={restList[4]}/>
        
//         <Restcard restobj={restList[5]}/>
//         <Restcard restobj={restList[6]}/>
        
//         <Restcard restobj={restList[7]}/>
        
        
        
        
        
//     </div>
// };
// const Footer =() =>{
//     return <h2>Footer</h2>
// };


// const AppLayout = () =>{
//     return <>
//         <HeaderComponent/>
//         <Body/>
//         <Footer/>
//     </>
// };

// const root = ReactDOM.createRoot(
//     document.getElementById("root")
//   );

// root.render(<AppLayout/>);











// 6.4 i want to destructure on the fly. but it will produce error caz restobj[0].data is object
// const Title = () => {
//     return<a href="/"> <img src="https://png.pngtree.com/png-vector/20220726/ourlarge/pngtree-food-logo-png-image_6061627.png" alt="logo" className="logo"/> </a>
// };

// const HeaderComponent = () => {
//     return (
//         <div className="header">
//             <Title/>
//             <div className="nav-items">
//                 <ul>
//                     <li>Home</li>
//                     <li>About</li>
//                     <li>contact</li>
//                     <li>cart</li>
//                 </ul>

//             </div>
//         </div>
//     );
// };


// const Restcard = ( {name,cuisines,cloudinaryImageId,lastMileTravelString} ) =>{
    
//     return (
//     <div className="card"> 
//     <img 
//     src={
//         "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/" +cloudinaryImageId
//         } />
//     <h2>{name}</h2>
//     <h5>{cuisines.join(",")}</h5>
//     <h4>{lastMileTravelString} stars</h4>

//     </div>
//     );
// };


// // everytime we are passing different data into each functional call
// const Body =() =>{
//     return <div class="restcollection">
        
//         <Restcard restobj={restList[0].data}/>
//         <Restcard restobj={restList[1].data}/>
//         <Restcard restobj={restList[2].data}/>
        
//         <Restcard restobj={restList[3].data}/>
        
//         <Restcard restobj={restList[4].data}/>
        
//         <Restcard restobj={restList[5].data}/>
//         <Restcard restobj={restList[6].data}/>
        
//         <Restcard restobj={restList[7].data}/>
        
        
        
        
        
//     </div>
// };
// const Footer =() =>{
//     return <h2>Footer</h2>
// };


// const AppLayout = () =>{
//     return <>
//         <HeaderComponent/>
//         <Body/>
//         <Footer/>
//     </>
// };

// const root = ReactDOM.createRoot(
//     document.getElementById("root")
//   );

// root.render(<AppLayout/>);





// 6.6 to destructure on the way.we have to do like shown below.
// const Title = () => {
//     return<a href="/"> <img src="https://png.pngtree.com/png-vector/20220726/ourlarge/pngtree-food-logo-png-image_6061627.png" alt="logo" className="logo"/> </a>
// };

// const HeaderComponent = () => {
//     return (
//         <div className="header">
//             <Title/>
//             <div className="nav-items">
//                 <ul>
//                     <li>Home</li>
//                     <li>About</li>
//                     <li>contact</li>
//                     <li>cart</li>
//                 </ul>

//             </div>
//         </div>
//     );
// };


// const Restcard = ( {name,cuisines,cloudinaryImageId,lastMileTravelString} ) =>{
    
//     return (
//     <div className="card"> 
//     <img 
//     src={
//         "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/" +cloudinaryImageId
//         } />
//     <h2>{name}</h2>
//     <h5>{cuisines.join(",")}</h5>
//     <h4>{lastMileTravelString} stars</h4>

//     </div>
//     );
// };


// // everytime we are passing different data into each functional call
// const Body =() =>{
//     return <div class="restcollection">
        
//         <Restcard  cloudinaryImageId={restList[0].data.cloudinaryImageId
//         } name={restList[0].data.name} cuisines={restList[0].data.cuisines} lastMileTravelString={restList[0].data.lastMileTravelString}/>
        
        
        
        
        
//     </div>
// };
// const Footer =() =>{
//     return <h2>Footer</h2>
// };


// const AppLayout = () =>{
//     return <>
//         <HeaderComponent/>
//         <Body/>
//         <Footer/>
//     </>
// };

// const root = ReactDOM.createRoot(
//     document.getElementById("root")
//   );

// root.render(<AppLayout/>);




// 6.7 one more cool thing
// const Title = () => {
//     return<a href="/"> <img src="https://png.pngtree.com/png-vector/20220726/ourlarge/pngtree-food-logo-png-image_6061627.png" alt="logo" className="logo"/> </a>
// };

// const HeaderComponent = () => {
//     return (
//         <div className="header">
//             <Title/>
//             <div className="nav-items">
//                 <ul>
//                     <li>Home</li>
//                     <li>About</li>
//                     <li>contact</li>
//                     <li>cart</li>
//                 </ul>

//             </div>
//         </div>
//     );
// };


// const Restcard = ( {name,cuisines,cloudinaryImageId,lastMileTravelString} ) =>{
    
//     return (
//     <div className="card"> 
//     <img 
//     src={
//         "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/" +cloudinaryImageId
//         } />
//     <h2>{name}</h2>
//     <h5>{cuisines.join(",")}</h5>
//     <h4>{lastMileTravelString} stars</h4>

//     </div>
//     );
// };


// // everytime we are passing different data into each functional call
// const Body =() =>{
//     return <div class="restcollection">
        
//         <Restcard  {...restList[0].data}/>
//         <Restcard  {...restList[1].data}/>
//         <Restcard  {...restList[2].data}/>
//         <Restcard  {...restList[3].data}/>

        
        
        
        
        
//     </div>
// };
// const Footer =() =>{
//     return <h2>Footer</h2>
// };


// const AppLayout = () =>{
//     return <>
//         <HeaderComponent/>
//         <Body/>
//         <Footer/>
//     </>
// };

// const root = ReactDOM.createRoot(
//     document.getElementById("root")
//   );

// root.render(<AppLayout/>);





// 6.8 writing out code using map
// const Title = () => {
//     return<a href="/"> <img src="https://png.pngtree.com/png-vector/20220726/ourlarge/pngtree-food-logo-png-image_6061627.png" alt="logo" className="logo"/> </a>
// };

// const HeaderComponent = () => {
//     return (
//         <div className="header">
//             <Title/>
//             <div className="nav-items">
//                 <ul>
//                     <li>Home</li>
//                     <li>About</li>
//                     <li>contact</li>
//                     <li>cart</li>
//                 </ul>

//             </div>
//         </div>
//     );
// };


// const Restcard = ( {name,cuisines,cloudinaryImageId,lastMileTravelString} ) =>{
    
//     return (
//     <div className="card"> 
//     <img 
//     src={
//         "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/" +cloudinaryImageId
//         } />
//     <h2>{name}</h2>
//     <h5>{cuisines.join(",")}</h5>
//     <h4>{lastMileTravelString} stars</h4>

//     </div>
//     );
// };


// // everytime we are passing different data into each functional call
// const Body =() =>{
//     return <div class="restcollection">
        
//         {
//              restList.map((restobj) => {
//             return <Restcard {...restobj.data}/>
//                                          })
//         }

        
        
        
        
        
//     </div>
// };
// const Footer =() =>{
//     return <h2>Footer</h2>
// };


// const AppLayout = () =>{
//     return <>
//         <HeaderComponent/>
//         <Body/>
//         <Footer/>
//     </>
// };

// const root = ReactDOM.createRoot(
//     document.getElementById("root")
//   );

// root.render(<AppLayout/>);








// 6.9 uniques keys to the elements









const AppLayout = () =>{
  return <>
      <HeaderComponent/>
      <Body/>
      <Footer/>
  </>
};

const root = ReactDOM.createRoot(
  document.getElementById("root")
);

root.render(<AppLayout/>);












