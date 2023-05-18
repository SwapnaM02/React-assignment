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
const restList = [
    {
      type: 'restaurant',
      data: {
        type: 'F',
        id: '121603',
        name: 'Kannur Food Point',
        uuid: '51983905-e698-4e31-b0d7-e376eca56320',
        city: '1',
        area: 'Tavarekere',
        totalRatingsString: '10000+ ratings',
        cloudinaryImageId: 'bmwn4n4bn6n1tcpc8x2h',
        cuisines: ['Kerala', 'Chinese'],
        tags: [],
        costForTwo: 30000,
        costForTwoString: '₹300 FOR TWO',
        deliveryTime: 24,
        minDeliveryTime: 24,
        maxDeliveryTime: 24,
        slaString: '24 MINS',
        lastMileTravel: 3,
        slugs: {
          restaurant: 'kannur-food-point-btm',
          city: 'bangalore',
        },
        cityState: '1',
        address:
          '6/21,9TH CROSS ,1ST MAIN, VENKATESHWARA LAYOUT,SG PALYA, BENGALURU, - 560093',
        locality: 'SG Palya',
        parentId: 20974,
        unserviceable: false,
        veg: false,
        select: false,
        favorite: false,
        tradeCampaignHeaders: [],
        aggregatedDiscountInfo: {
          header: '50% off',
          shortDescriptionList: [
            {
              meta: '50% off on all orders',
              discountType: 'Percentage',
              operationType: 'RESTAURANT',
            },
          ],
          descriptionList: [
            {
              meta: '50% off on all orders',
              discountType: 'Percentage',
              operationType: 'RESTAURANT',
            },
          ],
          subHeader: '',
          headerType: 0,
          superFreedel: '',
        },
        aggregatedDiscountInfoV2: {
          header: '50% OFF',
          shortDescriptionList: [
            {
              meta: '',
              discountType: 'Percentage',
              operationType: 'RESTAURANT',
            },
          ],
          descriptionList: [
            {
              meta: '50% off on all orders',
              discountType: 'Percentage',
              operationType: 'RESTAURANT',
            },
          ],
          subHeader: '',
          headerType: 0,
          superFreedel: '',
        },
        ribbon: [
          {
            type: 'PROMOTED',
          },
        ],
        chain: [],
        feeDetails: {
          fees: [
            {
              name: 'distance',
              fee: 3700,
              message: '',
            },
            {
              name: 'time',
              fee: 0,
              message: '',
            },
            {
              name: 'special',
              fee: 0,
              message: '',
            },
          ],
          totalFees: 3700,
          message: '',
          title: 'Delivery Charge',
          amount: '3700',
          icon: '',
        },
        availability: {
          opened: true,
          nextOpenMessage: '',
          nextCloseMessage: '',
        },
        longDistanceEnabled: 0,
        rainMode: 'NONE',
        thirdPartyAddress: false,
        thirdPartyVendor: '',
        adTrackingID: 'cid=6274849~p=1~eid=00000187-2c1c-96f0-0062-eea200b00103',
        badges: {
          imageBased: [],
          textBased: [],
          textExtendedBadges: [],
        },
        lastMileTravelString: '3 kms',
        hasSurge: false,
        sla: {
          restaurantId: '121603',
          deliveryTime: 24,
          minDeliveryTime: 24,
          maxDeliveryTime: 24,
          lastMileTravel: 3,
          lastMileDistance: 0,
          serviceability: 'SERVICEABLE',
          rainMode: 'NONE',
          longDistance: 'NOT_LONG_DISTANCE',
          preferentialService: false,
          iconType: 'EMPTY',
        },
        promoted: true,
        avgRating: '3.9',
        totalRatings: 10000,
        new: false,
      },
      subtype: 'basic',
    },
    {
      type: 'restaurant',
      data: {
        type: 'F',
        id: '229',
        name: 'Meghana Foods',
        uuid: '4fdd19e2-5d0f-4bde-9c7f-dc3e8d36021f',
        city: '1',
        area: 'Koramangala',
        totalRatingsString: '10000+ ratings',
        cloudinaryImageId: 'xqwpuhgnsaf18te7zvtv',
        cuisines: [
          'Biryani',
          'Andhra',
          'South Indian',
          'North Indian',
          'Chinese',
          'Seafood',
        ],
        tags: [],
        costForTwo: 50000,
        costForTwoString: '₹500 FOR TWO',
        deliveryTime: 16,
        minDeliveryTime: 16,
        maxDeliveryTime: 16,
        slaString: '16 MINS',
        lastMileTravel: 1.399999976158142,
        slugs: {
          restaurant: 'meghana-foods-5th-block-koramangala',
          city: 'bangalore',
        },
        cityState: '1',
        address:
          '124, Near Jyothi Nivas College, 1st Cross, KHB Colony, Koramangala 5th Block, Bangalore',
        locality: '5th Block',
        parentId: 635,
        unserviceable: false,
        veg: false,
        select: false,
        favorite: false,
        tradeCampaignHeaders: [],
        chain: [],
        feeDetails: {
          fees: [
            {
              name: 'distance',
              fee: 2900,
              message: '',
            },
            {
              name: 'time',
              fee: 0,
              message: '',
            },
            {
              name: 'special',
              fee: 0,
              message: '',
            },
          ],
          totalFees: 2900,
          message: '',
          title: 'Delivery Charge',
          amount: '2900',
          icon: '',
        },
        availability: {
          opened: true,
          nextOpenMessage: '',
          nextCloseMessage: '',
        },
        longDistanceEnabled: 0,
        rainMode: 'NONE',
        thirdPartyAddress: false,
        thirdPartyVendor: '',
        adTrackingID: '',
        badges: {
          imageBased: [],
          textBased: [],
          textExtendedBadges: [],
        },
        lastMileTravelString: '1.3 kms',
        hasSurge: false,
        sla: {
          restaurantId: '229',
          deliveryTime: 16,
          minDeliveryTime: 16,
          maxDeliveryTime: 16,
          lastMileTravel: 1.399999976158142,
          lastMileDistance: 0,
          serviceability: 'SERVICEABLE',
          rainMode: 'NONE',
          longDistance: 'NOT_LONG_DISTANCE',
          preferentialService: false,
          iconType: 'EMPTY',
        },
        promoted: false,
        avgRating: '4.4',
        totalRatings: 10000,
        new: false,
      },
      subtype: 'basic',
    },
    {
      type: 'restaurant',
      data: {
        type: 'F',
        id: '428',
        name: 'Biryani Pot',
        uuid: '6db20a8b-dd85-4148-b750-107169f7f826',
        city: '1',
        area: 'Btm Layout',
        totalRatingsString: '10000+ ratings',
        cloudinaryImageId: 'mdipoyzfzsa7n7igskht',
        cuisines: ['North Indian', 'Biryani'],
        tags: [],
        costForTwo: 50000,
        costForTwoString: '₹500 FOR TWO',
        deliveryTime: 19,
        minDeliveryTime: 19,
        maxDeliveryTime: 19,
        slaString: '19 MINS',
        lastMileTravel: 1.899999976158142,
        slugs: {
          restaurant: 'biryani-pot-madiwala-junction-btm',
          city: 'bangalore',
        },
        cityState: '1',
        address: '14th  Cross, 4th link Road Maruthi Nagar Madiwala Bangalore 68',
        locality: 'Maruti Nagar',
        parentId: 21798,
        unserviceable: false,
        veg: false,
        select: false,
        favorite: false,
        tradeCampaignHeaders: [],
        aggregatedDiscountInfo: {
          header: '20% off',
          shortDescriptionList: [
            {
              meta: '20% off | Use TRYNEW',
              discountType: 'Percentage',
              operationType: 'RESTAURANT',
            },
          ],
          descriptionList: [
            {
              meta: '20% off up to ₹50 | Use code TRYNEW',
              discountType: 'Percentage',
              operationType: 'RESTAURANT',
            },
          ],
          subHeader: '',
          headerType: 0,
          superFreedel: '',
        },
        aggregatedDiscountInfoV2: {
          header: '20% OFF',
          shortDescriptionList: [
            {
              meta: 'Use TRYNEW',
              discountType: 'Percentage',
              operationType: 'RESTAURANT',
            },
          ],
          descriptionList: [
            {
              meta: '20% off up to ₹50 | Use code TRYNEW',
              discountType: 'Percentage',
              operationType: 'RESTAURANT',
            },
          ],
          subHeader: '',
          headerType: 0,
          superFreedel: '',
        },
        chain: [],
        feeDetails: {
          fees: [
            {
              name: 'distance',
              fee: 2900,
              message: '',
            },
            {
              name: 'time',
              fee: 0,
              message: '',
            },
            {
              name: 'special',
              fee: 0,
              message: '',
            },
          ],
          totalFees: 2900,
          message: '',
          title: 'Delivery Charge',
          amount: '2900',
          icon: '',
        },
        availability: {
          opened: true,
          nextOpenMessage: '',
          nextCloseMessage: '',
        },
        longDistanceEnabled: 0,
        rainMode: 'NONE',
        thirdPartyAddress: false,
        thirdPartyVendor: '',
        adTrackingID: '',
        badges: {
          imageBased: [],
          textBased: [],
          textExtendedBadges: [],
        },
        lastMileTravelString: '1.8 kms',
        hasSurge: false,
        sla: {
          restaurantId: '428',
          deliveryTime: 19,
          minDeliveryTime: 19,
          maxDeliveryTime: 19,
          lastMileTravel: 1.899999976158142,
          lastMileDistance: 0,
          serviceability: 'SERVICEABLE',
          rainMode: 'NONE',
          longDistance: 'NOT_LONG_DISTANCE',
          preferentialService: false,
          iconType: 'EMPTY',
        },
        promoted: false,
        avgRating: '3.9',
        totalRatings: 10000,
        new: false,
      },
      subtype: 'basic',
    },
    {
      type: 'restaurant',
      data: {
        type: 'F',
        id: '223',
        name: 'Truffles',
        uuid: '8250cc38-4752-4f42-928b-4da5f01e5cbe',
        city: '1',
        area: 'Koramangala',
        totalRatingsString: '10000+ ratings',
        cloudinaryImageId: 'cd832b6167eb9f88aeb1ccdebf38d942',
        cuisines: ['American', 'Continental', 'Desserts', 'Italian'],
        tags: [],
        costForTwo: 45000,
        costForTwoString: '₹450 FOR TWO',
        deliveryTime: 30,
        minDeliveryTime: 30,
        maxDeliveryTime: 30,
        slaString: '30 MINS',
        lastMileTravel: 1.600000023841858,
        slugs: {
          restaurant: 'truffles-ice-spice-5th-block-koramangala',
          city: 'bangalore',
        },
        cityState: '1',
        address:
          "93/A, Appek Building, 'A' Wing,  4th 'B' Cross,  Koramangala Industrial Layout, 5th Block, Koramangala, Bangalore - 560 095",
        locality: '5th Block',
        parentId: 218065,
        unserviceable: false,
        veg: false,
        select: false,
        favorite: false,
        tradeCampaignHeaders: [],
        aggregatedDiscountInfo: {
          header: '40% off',
          shortDescriptionList: [
            {
              meta: '40% off | Use TRYNEW',
              discountType: 'Percentage',
              operationType: 'RESTAURANT',
            },
          ],
          descriptionList: [
            {
              meta: '40% off up to ₹80 | Use code TRYNEW',
              discountType: 'Percentage',
              operationType: 'RESTAURANT',
            },
          ],
          subHeader: '',
          headerType: 0,
          superFreedel: '',
        },
        aggregatedDiscountInfoV2: {
          header: '40% OFF',
          shortDescriptionList: [
            {
              meta: 'Use TRYNEW',
              discountType: 'Percentage',
              operationType: 'RESTAURANT',
            },
          ],
          descriptionList: [
            {
              meta: '40% off up to ₹80 | Use code TRYNEW',
              discountType: 'Percentage',
              operationType: 'RESTAURANT',
            },
          ],
          subHeader: '',
          headerType: 0,
          superFreedel: '',
        },
        ribbon: [
          {
            type: 'PROMOTED',
          },
        ],
        chain: [],
        feeDetails: {
          fees: [
            {
              name: 'distance',
              fee: 2900,
              message: '',
            },
            {
              name: 'time',
              fee: 0,
              message: '',
            },
            {
              name: 'special',
              fee: 0,
              message: '',
            },
          ],
          totalFees: 2900,
          message: '',
          title: 'Delivery Charge',
          amount: '2900',
          icon: '',
        },
        availability: {
          opened: true,
          nextOpenMessage: '',
          nextCloseMessage: '',
        },
        longDistanceEnabled: 0,
        rainMode: 'NONE',
        thirdPartyAddress: false,
        thirdPartyVendor: '',
        adTrackingID: 'cid=6275692~p=4~eid=00000187-2c1c-96f0-0062-eea300b00430',
        badges: {
          imageBased: [],
          textBased: [],
          textExtendedBadges: [],
        },
        lastMileTravelString: '1.6 kms',
        hasSurge: false,
        sla: {
          restaurantId: '223',
          deliveryTime: 30,
          minDeliveryTime: 30,
          maxDeliveryTime: 30,
          lastMileTravel: 1.600000023841858,
          lastMileDistance: 0,
          serviceability: 'SERVICEABLE',
          rainMode: 'NONE',
          longDistance: 'NOT_LONG_DISTANCE',
          preferentialService: false,
          iconType: 'EMPTY',
        },
        promoted: true,
        avgRating: '4.4',
        totalRatings: 10000,
        new: false,
      },
      subtype: 'basic',
    },
    {
      type: 'restaurant',
      data: {
        type: 'F',
        id: '425',
        name: 'Hotel Empire',
        uuid: 'c0c37758-2e83-4429-aad6-eb94debb48f5',
        city: '1',
        area: 'Koramangala',
        totalRatingsString: '10000+ ratings',
        cloudinaryImageId: 'un4omn7rcunkmlw6vikr',
        cuisines: ['North Indian', 'Kebabs', 'Biryani'],
        tags: [],
        costForTwo: 45000,
        costForTwoString: '₹450 FOR TWO',
        deliveryTime: 23,
        minDeliveryTime: 23,
        maxDeliveryTime: 23,
        slaString: '23 MINS',
        lastMileTravel: 1.2999999523162842,
        slugs: {
          restaurant: 'hotel-empire-5th-block-koramangala',
          city: 'bangalore',
        },
        cityState: '1',
        address:
          '103, Industrial Area, 5th Block, Near Jyothi Nivas College, Koramangala 5th Block, Bangalore',
        locality: 'Koramangala',
        parentId: 475,
        unserviceable: false,
        veg: false,
        select: false,
        favorite: false,
        tradeCampaignHeaders: [],
        aggregatedDiscountInfo: {
          header: '10% off',
          shortDescriptionList: [
            {
              meta: '10% off | Use TRYNEW',
              discountType: 'Percentage',
              operationType: 'RESTAURANT',
            },
          ],
          descriptionList: [
            {
              meta: '10% off up to ₹40 | Use code TRYNEW',
              discountType: 'Percentage',
              operationType: 'RESTAURANT',
            },
          ],
          subHeader: '',
          headerType: 0,
          superFreedel: '',
        },
        aggregatedDiscountInfoV2: {
          header: '10% OFF',
          shortDescriptionList: [
            {
              meta: 'Use TRYNEW',
              discountType: 'Percentage',
              operationType: 'RESTAURANT',
            },
          ],
          descriptionList: [
            {
              meta: '10% off up to ₹40 | Use code TRYNEW',
              discountType: 'Percentage',
              operationType: 'RESTAURANT',
            },
          ],
          subHeader: '',
          headerType: 0,
          superFreedel: '',
        },
        chain: [],
        feeDetails: {
          fees: [
            {
              name: 'distance',
              fee: 2900,
              message: '',
            },
            {
              name: 'time',
              fee: 0,
              message: '',
            },
            {
              name: 'special',
              fee: 0,
              message: '',
            },
          ],
          totalFees: 2900,
          message: '',
          title: 'Delivery Charge',
          amount: '2900',
          icon: '',
        },
        availability: {
          opened: true,
          nextOpenMessage: '',
          nextCloseMessage: '',
        },
        longDistanceEnabled: 0,
        rainMode: 'NONE',
        thirdPartyAddress: false,
        thirdPartyVendor: '',
        adTrackingID: '',
        badges: {
          imageBased: [],
          textBased: [],
          textExtendedBadges: [],
        },
        lastMileTravelString: '1.2 kms',
        hasSurge: false,
        sla: {
          restaurantId: '425',
          deliveryTime: 23,
          minDeliveryTime: 23,
          maxDeliveryTime: 23,
          lastMileTravel: 1.2999999523162842,
          lastMileDistance: 0,
          serviceability: 'SERVICEABLE',
          rainMode: 'NONE',
          longDistance: 'NOT_LONG_DISTANCE',
          preferentialService: false,
          iconType: 'EMPTY',
        },
        promoted: false,
        avgRating: '4.1',
        totalRatings: 10000,
        new: false,
      },
      subtype: 'basic',
    },
    {
      type: 'restaurant',
      data: {
        type: 'F',
        id: '201224',
        name: 'Asha tiffins',
        uuid: 'e32381cf-6468-4c10-9bad-47fa08e898a8',
        city: '1',
        area: 'HSR Layout',
        totalRatingsString: '10000+ ratings',
        cloudinaryImageId: 'n15vckntsiboiod3gpco',
        cuisines: ['Indian', 'South Indian', 'Beverages'],
        tags: [],
        costForTwo: 20000,
        costForTwoString: '₹200 FOR TWO',
        deliveryTime: 26,
        minDeliveryTime: 26,
        maxDeliveryTime: 26,
        slaString: '26 MINS',
        lastMileTravel: 4,
        slugs: {
          restaurant: 'asha-tiffins-hsr-hsr-2',
          city: 'bangalore',
        },
        cityState: '1',
        address:
          'Asha Tiffins, 5th Main Road, Sector 7, HSR Layout, Bengaluru, Karnataka, India',
        locality: '7th Sector',
        parentId: 236243,
        unserviceable: false,
        veg: true,
        select: false,
        favorite: false,
        tradeCampaignHeaders: [],
        aggregatedDiscountInfo: {
          header: '30% off',
          shortDescriptionList: [
            {
              meta: '30% off | Use TRYNEW-XL',
              discountType: 'Percentage',
              operationType: 'RESTAURANT',
            },
          ],
          descriptionList: [
            {
              meta: '30% off upto ₹80 | Use TRYNEW-XL',
              discountType: 'Percentage',
              operationType: 'RESTAURANT',
            },
          ],
          subHeader: '',
          headerType: 0,
          superFreedel: '',
        },
        aggregatedDiscountInfoV2: {
          header: '30% OFF',
          shortDescriptionList: [
            {
              meta: 'Use TRYNEW-XL',
              discountType: 'Percentage',
              operationType: 'RESTAURANT',
            },
          ],
          descriptionList: [
            {
              meta: '30% off upto ₹80 | Use TRYNEW-XL',
              discountType: 'Percentage',
              operationType: 'RESTAURANT',
            },
          ],
          subHeader: '',
          headerType: 0,
          superFreedel: '',
        },
        ribbon: [
          {
            type: 'PROMOTED',
          },
        ],
        chain: [],
        feeDetails: {
          fees: [
            {
              name: 'distance',
              fee: 3700,
              message: '',
            },
            {
              name: 'time',
              fee: 0,
              message: '',
            },
            {
              name: 'special',
              fee: 0,
              message: '',
            },
          ],
          totalFees: 3700,
          message: '',
          title: 'Delivery Charge',
          amount: '3700',
          icon: '',
        },
        availability: {
          opened: true,
          nextOpenMessage: '',
          nextCloseMessage: '',
        },
        longDistanceEnabled: 0,
        rainMode: 'NONE',
        thirdPartyAddress: false,
        thirdPartyVendor: '',
        adTrackingID: 'cid=6196512~p=7~eid=00000187-2c1c-96f0-0062-eea400b00725',
        badges: {
          imageBased: [],
          textBased: [],
          textExtendedBadges: [],
        },
        lastMileTravelString: '4 kms',
        hasSurge: false,
        sla: {
          restaurantId: '201224',
          deliveryTime: 26,
          minDeliveryTime: 26,
          maxDeliveryTime: 26,
          lastMileTravel: 4,
          lastMileDistance: 0,
          serviceability: 'SERVICEABLE',
          rainMode: 'NONE',
          longDistance: 'NOT_LONG_DISTANCE',
          preferentialService: false,
          iconType: 'EMPTY',
        },
        promoted: true,
        avgRating: '4.4',
        totalRatings: 10000,
        new: false,
      },
      subtype: 'basic',
    },
    {
      type: 'restaurant',
      data: {
        type: 'F',
        id: '59593',
        name: 'Al Daaz',
        uuid: 'c189b92c-d842-4595-9a1f-ff85bd67bc2a',
        city: '1',
        area: 'Hsr Layout',
        totalRatingsString: '10000+ ratings',
        cloudinaryImageId: 'rxsvhvcdip9dbfdijzk9',
        cuisines: [
          'American',
          'Arabian',
          'Chinese',
          'Desserts',
          'Mughlai',
          'North Indian',
        ],
        tags: [],
        costForTwo: 40000,
        costForTwoString: '₹400 FOR TWO',
        deliveryTime: 36,
        minDeliveryTime: 36,
        maxDeliveryTime: 36,
        slaString: '36 MINS',
        lastMileTravel: 4.5,
        slugs: {
          restaurant: 'al-daaz-hsr-hsr',
          city: 'bangalore',
        },
        cityState: '1',
        address: '#64 & 65, 27th Main Rd, 1st Sector HSR Layout - 560102',
        locality: 'HSR',
        parentId: 21640,
        unserviceable: false,
        veg: false,
        select: false,
        favorite: false,
        tradeCampaignHeaders: [],
        chain: [],
        feeDetails: {
          fees: [
            {
              name: 'distance',
              fee: 3700,
              message: '',
            },
            {
              name: 'time',
              fee: 0,
              message: '',
            },
            {
              name: 'special',
              fee: 0,
              message: '',
            },
          ],
          totalFees: 3700,
          message: '',
          title: 'Delivery Charge',
          amount: '3700',
          icon: '',
        },
        availability: {
          opened: true,
          nextOpenMessage: '',
          nextCloseMessage: '',
        },
        longDistanceEnabled: 0,
        rainMode: 'NONE',
        thirdPartyAddress: false,
        thirdPartyVendor: '',
        adTrackingID: '',
        badges: {
          imageBased: [],
          textBased: [],
          textExtendedBadges: [],
        },
        lastMileTravelString: '4.5 kms',
        hasSurge: false,
        sla: {
          restaurantId: '59593',
          deliveryTime: 36,
          minDeliveryTime: 36,
          maxDeliveryTime: 36,
          lastMileTravel: 4.5,
          lastMileDistance: 0,
          serviceability: 'SERVICEABLE',
          rainMode: 'NONE',
          longDistance: 'NOT_LONG_DISTANCE',
          preferentialService: false,
          iconType: 'EMPTY',
        },
        promoted: false,
        avgRating: '4.3',
        totalRatings: 10000,
        new: false,
      },
      subtype: 'basic',
    },
    {
      type: 'restaurant',
      data: {
        type: 'F',
        id: '56589',
        name: 'Roti-Wala',
        uuid: '257a0889-b243-4252-b84a-6c9f1760d58f',
        city: '1',
        area: 'BTM Layout',
        totalRatingsString: '10000+ ratings',
        cloudinaryImageId: 'ptetuqkrhmpd8tiqiztg',
        cuisines: [
          'North Indian',
          'Home Food',
          'Thalis',
          'Chinese',
          'Punjabi',
          'South Indian',
          'Ice Cream',
        ],
        tags: [],
        costForTwo: 20000,
        costForTwoString: '₹200 FOR TWO',
        deliveryTime: 37,
        minDeliveryTime: 37,
        maxDeliveryTime: 37,
        slaString: '37 MINS',
        lastMileTravel: 4,
        slugs: {
          restaurant: 'roti-wala-lavelle-road-central-bangalore',
          city: 'bangalore',
        },
        cityState: '1',
        address: '#239, 7TH Cross, Btm Stage 2. NS Palya, 560076',
        locality: '2nd Stage',
        parentId: 415860,
        unserviceable: false,
        veg: false,
        select: false,
        favorite: false,
        tradeCampaignHeaders: [],
        aggregatedDiscountInfo: {
          header: '40% off',
          shortDescriptionList: [
            {
              meta: '40% off | Use GUILTFREE',
              discountType: 'Percentage',
              operationType: 'RESTAURANT',
            },
          ],
          descriptionList: [
            {
              meta: '40% off up to ₹100 | Use code GUILTFREE',
              discountType: 'Percentage',
              operationType: 'RESTAURANT',
            },
          ],
          subHeader: '',
          headerType: 0,
          superFreedel: '',
        },
        aggregatedDiscountInfoV2: {
          header: '40% OFF',
          shortDescriptionList: [
            {
              meta: 'Use GUILTFREE',
              discountType: 'Percentage',
              operationType: 'RESTAURANT',
            },
          ],
          descriptionList: [
            {
              meta: '40% off up to ₹100 | Use code GUILTFREE',
              discountType: 'Percentage',
              operationType: 'RESTAURANT',
            },
          ],
          subHeader: '',
          headerType: 0,
          superFreedel: '',
        },
        chain: [],
        feeDetails: {
          fees: [
            {
              name: 'distance',
              fee: 3700,
              message: '',
            },
            {
              name: 'time',
              fee: 0,
              message: '',
            },
            {
              name: 'special',
              fee: 0,
              message: '',
            },
          ],
          totalFees: 3700,
          message: '',
          title: 'Delivery Charge',
          amount: '3700',
          icon: '',
        },
        availability: {
          opened: true,
          nextOpenMessage: '',
          nextCloseMessage: '',
        },
        longDistanceEnabled: 0,
        rainMode: 'NONE',
        thirdPartyAddress: false,
        thirdPartyVendor: '',
        adTrackingID: '',
        badges: {
          imageBased: [],
          textBased: [],
          textExtendedBadges: [],
        },
        lastMileTravelString: '4 kms',
        hasSurge: false,
        sla: {
          restaurantId: '56589',
          deliveryTime: 37,
          minDeliveryTime: 37,
          maxDeliveryTime: 37,
          lastMileTravel: 4,
          lastMileDistance: 0,
          serviceability: 'SERVICEABLE',
          rainMode: 'NONE',
          longDistance: 'NOT_LONG_DISTANCE',
          preferentialService: false,
          iconType: 'EMPTY',
        },
        promoted: false,
        avgRating: '4.2',
        totalRatings: 10000,
        new: false,
      },
      subtype: 'basic',
    },
    {
      type: 'restaurant',
      data: {
        type: 'F',
        id: '560153',
        name: 'Rice Bowl',
        uuid: 'b5652b7d-5df8-4be5-8fe9-27648b668e79',
        city: '1',
        area: 'Koramangala',
        totalRatingsString: '1000+ ratings',
        cloudinaryImageId: 'z2ahvclpmdv6lekyth39',
        cuisines: ['North Indian', 'South Indian'],
        tags: [],
        costForTwo: 30000,
        costForTwoString: '₹300 FOR TWO',
        deliveryTime: 22,
        minDeliveryTime: 22,
        maxDeliveryTime: 22,
        slaString: '22 MINS',
        lastMileTravel: 2.5,
        slugs: {
          restaurant: 'rice-bowl-koramangala-koramangala-2',
          city: 'bangalore',
        },
        cityState: '1',
        address:
          '42A, Old House List No 148/11, Katha No 296, BBMP PID No 68-327-98/1, Jakkasandra Village, Sarjapur Main Road, Bengaluru -, BTM Layout , B.B.M.P South, Karnataka - 560034',
        locality: 'Jakkasandra',
        parentId: 169302,
        unserviceable: false,
        veg: false,
        select: false,
        favorite: false,
        tradeCampaignHeaders: [],
        aggregatedDiscountInfo: {
          header: 'FLAT125 off',
          shortDescriptionList: [
            {
              meta: 'FLAT125 off | Use FLATDEAL',
              discountType: 'Flat',
              operationType: 'RESTAURANT',
            },
          ],
          descriptionList: [
            {
              meta: 'FLAT125 off | Use FLATDEAL',
              discountType: 'Flat',
              operationType: 'RESTAURANT',
            },
          ],
          subHeader: '',
          headerType: 0,
          superFreedel: '',
        },
        aggregatedDiscountInfoV2: {
          header: '₹125 OFF',
          shortDescriptionList: [
            {
              meta: 'Use FLATDEAL',
              discountType: 'Flat',
              operationType: 'RESTAURANT',
            },
          ],
          descriptionList: [
            {
              meta: 'FLAT125 off | Use FLATDEAL',
              discountType: 'Flat',
              operationType: 'RESTAURANT',
            },
          ],
          subHeader: '',
          headerType: 0,
          superFreedel: '',
        },
        ribbon: [
          {
            type: 'PROMOTED',
          },
        ],
        chain: [],
        feeDetails: {
          fees: [
            {
              name: 'distance',
              fee: 2900,
              message: '',
            },
            {
              name: 'time',
              fee: 0,
              message: '',
            },
            {
              name: 'special',
              fee: 0,
              message: '',
            },
          ],
          totalFees: 2900,
          message: '',
          title: 'Delivery Charge',
          amount: '2900',
          icon: '',
        },
        availability: {
          opened: true,
          nextOpenMessage: '',
          nextCloseMessage: '',
        },
        longDistanceEnabled: 0,
        rainMode: 'NONE',
        thirdPartyAddress: false,
        thirdPartyVendor: '',
        adTrackingID: 'cid=6081264~p=10~eid=00000187-2c1c-96f0-0062-eea500b00a3d',
        badges: {
          imageBased: [],
          textBased: [],
          textExtendedBadges: [],
        },
        lastMileTravelString: '2.5 kms',
        hasSurge: false,
        sla: {
          restaurantId: '560153',
          deliveryTime: 22,
          minDeliveryTime: 22,
          maxDeliveryTime: 22,
          lastMileTravel: 2.5,
          lastMileDistance: 0,
          serviceability: 'SERVICEABLE',
          rainMode: 'NONE',
          longDistance: 'NOT_LONG_DISTANCE',
          preferentialService: false,
          iconType: 'EMPTY',
        },
        promoted: true,
        avgRating: '4.1',
        totalRatings: 1000,
        new: false,
      },
      subtype: 'basic',
    },
    {
      type: 'restaurant',
      data: {
        type: 'F',
        id: '337335',
        name: 'Kannur food kitchen',
        uuid: 'c70b61bc-0f68-4e24-996b-749fbf295c35',
        city: '1',
        area: 'BTM Layout',
        totalRatingsString: '5000+ ratings',
        cloudinaryImageId: 'a27weqanhnszqiuzsoik',
        cuisines: ['Kerala', 'Biryani', 'Beverages'],
        tags: [],
        costForTwo: 20000,
        costForTwoString: '₹200 FOR TWO',
        deliveryTime: 24,
        minDeliveryTime: 24,
        maxDeliveryTime: 24,
        slaString: '24 MINS',
        lastMileTravel: 2.5,
        slugs: {
          restaurant: 'kannur-food-kitchen-btm-btm',
          city: 'bangalore',
        },
        cityState: '1',
        address:
          'kannur food point, Chocolate Factory Road, Tavarekere, Cashier Layout, 1st Stage, BTM Layout, thavrakharea, Karnataka, India',
        locality: '1st  Stage',
        parentId: 114756,
        unserviceable: false,
        veg: false,
        select: false,
        favorite: false,
        tradeCampaignHeaders: [],
        aggregatedDiscountInfo: {
          header: '50% off',
          shortDescriptionList: [
            {
              meta: '50% off on all orders',
              discountType: 'Percentage',
              operationType: 'RESTAURANT',
            },
            {
              meta: 'Free Limejuice on orders above ₹499',
              discountType: 'Freebie',
              operationType: 'RESTAURANT',
            },
          ],
          descriptionList: [
            {
              meta: '50% off on all orders',
              discountType: 'Percentage',
              operationType: 'RESTAURANT',
            },
            {
              meta: 'Free Limejuice on orders above ₹499',
              discountType: 'Freebie',
              operationType: 'RESTAURANT',
            },
          ],
          subHeader: '',
          headerType: 0,
          superFreedel: '',
        },
        aggregatedDiscountInfoV2: {
          header: '50% OFF',
          shortDescriptionList: [
            {
              meta: '',
              discountType: 'Percentage',
              operationType: 'RESTAURANT',
            },
          ],
          descriptionList: [
            {
              meta: '50% off on all orders',
              discountType: 'Percentage',
              operationType: 'RESTAURANT',
            },
            {
              meta: 'Free Limejuice on orders above ₹499',
              discountType: 'Freebie',
              operationType: 'RESTAURANT',
            },
          ],
          subHeader: '',
          headerType: 0,
          superFreedel: '',
        },
        chain: [],
        feeDetails: {
          fees: [
            {
              name: 'distance',
              fee: 2900,
              message: '',
            },
            {
              name: 'time',
              fee: 0,
              message: '',
            },
            {
              name: 'special',
              fee: 0,
              message: '',
            },
          ],
          totalFees: 2900,
          message: '',
          title: 'Delivery Charge',
          amount: '2900',
          icon: '',
        },
        availability: {
          opened: true,
          nextOpenMessage: '',
          nextCloseMessage: '',
        },
        longDistanceEnabled: 0,
        rainMode: 'NONE',
        thirdPartyAddress: false,
        thirdPartyVendor: '',
        adTrackingID: '',
        badges: {
          imageBased: [],
          textBased: [],
          textExtendedBadges: [],
        },
        lastMileTravelString: '2.5 kms',
        hasSurge: false,
        sla: {
          restaurantId: '337335',
          deliveryTime: 24,
          minDeliveryTime: 24,
          maxDeliveryTime: 24,
          lastMileTravel: 2.5,
          lastMileDistance: 0,
          serviceability: 'SERVICEABLE',
          rainMode: 'NONE',
          longDistance: 'NOT_LONG_DISTANCE',
          preferentialService: false,
          iconType: 'EMPTY',
        },
        promoted: false,
        avgRating: '3.8',
        totalRatings: 5000,
        new: false,
      },
      subtype: 'basic',
    },
    {
      type: 'restaurant',
      data: {
        type: 'F',
        id: '601',
        name: 'Litti Twist',
        uuid: 'e7dcc8d7-fea9-4312-8c4e-7a6516a026db',
        city: '1',
        area: 'Btm Layout',
        totalRatingsString: '10000+ ratings',
        cloudinaryImageId: 'zyahkuhlgnxp3prkvttv',
        cuisines: ['North Indian'],
        tags: [],
        costForTwo: 25000,
        costForTwoString: '₹250 FOR TWO',
        deliveryTime: 28,
        minDeliveryTime: 28,
        maxDeliveryTime: 28,
        slaString: '28 MINS',
        lastMileTravel: 4.5,
        slugs: {
          restaurant: 'litti-twist-2nd-stage-btm',
          city: 'bangalore',
        },
        cityState: '1',
        address:
          '#5, 6th cross, 1st Main, Bannerghatta Main Rd, NS Palya, Stage 2, Bengaluru, Karnataka 560076',
        locality: '2nd Stage',
        parentId: 3455,
        unserviceable: false,
        veg: false,
        select: false,
        favorite: false,
        tradeCampaignHeaders: [],
        aggregatedDiscountInfo: {
          header: '50% off',
          shortDescriptionList: [
            {
              meta: '50% off | Use TRYNEW',
              discountType: 'Percentage',
              operationType: 'RESTAURANT',
            },
          ],
          descriptionList: [
            {
              meta: '50% off up to ₹100 | Use code TRYNEW',
              discountType: 'Percentage',
              operationType: 'RESTAURANT',
            },
          ],
          subHeader: '',
          headerType: 0,
          superFreedel: '',
        },
        aggregatedDiscountInfoV2: {
          header: '50% OFF',
          shortDescriptionList: [
            {
              meta: 'Use TRYNEW',
              discountType: 'Percentage',
              operationType: 'RESTAURANT',
            },
          ],
          descriptionList: [
            {
              meta: '50% off up to ₹100 | Use code TRYNEW',
              discountType: 'Percentage',
              operationType: 'RESTAURANT',
            },
          ],
          subHeader: '',
          headerType: 0,
          superFreedel: '',
        },
        ribbon: [
          {
            type: 'PROMOTED',
          },
        ],
        chain: [],
        feeDetails: {
          fees: [
            {
              name: 'distance',
              fee: 3700,
              message: '',
            },
            {
              name: 'time',
              fee: 0,
              message: '',
            },
            {
              name: 'special',
              fee: 0,
              message: '',
            },
          ],
          totalFees: 3700,
          message: '',
          title: 'Delivery Charge',
          amount: '3700',
          icon: '',
        },
        availability: {
          opened: true,
          nextOpenMessage: '',
          nextCloseMessage: '',
        },
        longDistanceEnabled: 0,
        rainMode: 'NONE',
        thirdPartyAddress: false,
        thirdPartyVendor: '',
        adTrackingID: 'cid=6276197~p=13~eid=00000187-2c1c-96f0-0062-eea600b00d24',
        badges: {
          imageBased: [],
          textBased: [],
          textExtendedBadges: [],
        },
        lastMileTravelString: '4.5 kms',
        hasSurge: false,
        sla: {
          restaurantId: '601',
          deliveryTime: 28,
          minDeliveryTime: 28,
          maxDeliveryTime: 28,
          lastMileTravel: 4.5,
          lastMileDistance: 0,
          serviceability: 'SERVICEABLE',
          rainMode: 'NONE',
          longDistance: 'NOT_LONG_DISTANCE',
          preferentialService: false,
          iconType: 'EMPTY',
        },
        promoted: true,
        avgRating: '4.2',
        totalRatings: 10000,
        new: false,
      },
      subtype: 'basic',
    },
    {
      type: 'restaurant',
      data: {
        type: 'F',
        id: '256957',
        name: 'Shanmukha Restaurant',
        uuid: 'c1972fbf-2e19-42d6-ac49-54f412f78d86',
        city: '1',
        area: 'Jayanagar',
        totalRatingsString: '10000+ ratings',
        cloudinaryImageId: 'c5howge9hbdor7uqf949',
        cuisines: [
          'Biryani',
          'Hyderabadi',
          'Andhra',
          'North Indian',
          'South Indian',
          'Chinese',
          'Tandoor',
          'Seafood',
          'Beverages',
        ],
        tags: [],
        costForTwo: 30000,
        costForTwoString: '₹300 FOR TWO',
        deliveryTime: 36,
        minDeliveryTime: 36,
        maxDeliveryTime: 36,
        slaString: '36 MINS',
        lastMileTravel: 5,
        slugs: {
          restaurant: 'shanmukha-restaurant-jayanagar-jayanagar',
          city: 'bangalore',
        },
        cityState: '1',
        address:
          '1313, Near Bangalore Central Mall, 25th Main, 9th Block, Jayanagar, Bengaluru, Karnataka 560069, India',
        locality: '9th Block',
        parentId: 9954,
        unserviceable: false,
        veg: false,
        select: false,
        favorite: false,
        tradeCampaignHeaders: [],
        aggregatedDiscountInfo: {
          header: '50% off',
          shortDescriptionList: [
            {
              meta: '50% off | Use TRYNEW',
              discountType: 'Percentage',
              operationType: 'RESTAURANT',
            },
          ],
          descriptionList: [
            {
              meta: '50% off up to ₹100 | Use code TRYNEW',
              discountType: 'Percentage',
              operationType: 'RESTAURANT',
            },
          ],
          subHeader: '',
          headerType: 0,
          superFreedel: '',
        },
        aggregatedDiscountInfoV2: {
          header: '50% OFF',
          shortDescriptionList: [
            {
              meta: 'Use TRYNEW',
              discountType: 'Percentage',
              operationType: 'RESTAURANT',
            },
          ],
          descriptionList: [
            {
              meta: '50% off up to ₹100 | Use code TRYNEW',
              discountType: 'Percentage',
              operationType: 'RESTAURANT',
            },
          ],
          subHeader: '',
          headerType: 0,
          superFreedel: '',
        },
        chain: [],
        feeDetails: {
          fees: [
            {
              name: 'distance',
              fee: 4900,
              message: '',
            },
            {
              name: 'time',
              fee: 0,
              message: '',
            },
            {
              name: 'special',
              fee: 0,
              message: '',
            },
          ],
          totalFees: 4900,
          message: '',
          title: 'Delivery Charge',
          amount: '4900',
          icon: '',
        },
        availability: {
          opened: true,
          nextOpenMessage: '',
          nextCloseMessage: '',
        },
        longDistanceEnabled: 0,
        rainMode: 'NONE',
        thirdPartyAddress: false,
        thirdPartyVendor: '',
        adTrackingID: '',
        badges: {
          imageBased: [],
          textBased: [],
          textExtendedBadges: [],
        },
        lastMileTravelString: '5 kms',
        hasSurge: false,
        sla: {
          restaurantId: '256957',
          deliveryTime: 36,
          minDeliveryTime: 36,
          maxDeliveryTime: 36,
          lastMileTravel: 5,
          lastMileDistance: 0,
          serviceability: 'SERVICEABLE',
          rainMode: 'NONE',
          longDistance: 'NOT_LONG_DISTANCE',
          preferentialService: false,
          iconType: 'EMPTY',
        },
        promoted: false,
        avgRating: '4.1',
        totalRatings: 10000,
        new: false,
      },
      subtype: 'basic',
    },
    {
      type: 'restaurant',
      data: {
        type: 'F',
        id: '642459',
        name: 'Malnad Donne Biryani MDB',
        uuid: '4ae022a0-9296-40ac-8ea9-3e764200e6a5',
        city: '1',
        area: 'Jayanagar',
        totalRatingsString: '50+ ratings',
        cloudinaryImageId: 'tjw67zgzfehxgfo1vio2',
        cuisines: ['Biryani', 'South Indian', 'Kebabs'],
        tags: [],
        costForTwo: 25000,
        costForTwoString: '₹250 FOR TWO',
        deliveryTime: 36,
        minDeliveryTime: 36,
        maxDeliveryTime: 36,
        slaString: '36 MINS',
        lastMileTravel: 5,
        slugs: {
          restaurant: 'malnad-donne-biryani-mdb-jayanagar-jayanagar',
          city: 'bangalore',
        },
        cityState: '1',
        address:
          '1384, 32nd E Cross , near Axis bank, opp sanjay gandhi university. 4th T Block , Jayanagar, Bengaluru, Karnataka 560041',
        locality: 'T Block',
        parentId: 130946,
        unserviceable: false,
        veg: false,
        select: false,
        favorite: false,
        tradeCampaignHeaders: [],
        aggregatedDiscountInfo: {
          header: '40% off',
          shortDescriptionList: [
            {
              meta: '40% off | Use TRYNEW',
              discountType: 'Percentage',
              operationType: 'RESTAURANT',
            },
          ],
          descriptionList: [
            {
              meta: '40% off up to ₹80 | Use code TRYNEW',
              discountType: 'Percentage',
              operationType: 'RESTAURANT',
            },
          ],
          subHeader: '',
          headerType: 0,
          superFreedel: '',
        },
        aggregatedDiscountInfoV2: {
          header: '40% OFF',
          shortDescriptionList: [
            {
              meta: 'Use TRYNEW',
              discountType: 'Percentage',
              operationType: 'RESTAURANT',
            },
          ],
          descriptionList: [
            {
              meta: '40% off up to ₹80 | Use code TRYNEW',
              discountType: 'Percentage',
              operationType: 'RESTAURANT',
            },
          ],
          subHeader: '',
          headerType: 0,
          superFreedel: '',
        },
        chain: [],
        feeDetails: {
          fees: [
            {
              name: 'distance',
              fee: 4900,
              message: '',
            },
            {
              name: 'time',
              fee: 0,
              message: '',
            },
            {
              name: 'special',
              fee: 0,
              message: '',
            },
          ],
          totalFees: 4900,
          message: '',
          title: 'Delivery Charge',
          amount: '4900',
          icon: '',
        },
        availability: {
          opened: true,
          nextOpenMessage: '',
          nextCloseMessage: '',
        },
        longDistanceEnabled: 1,
        rainMode: 'NONE',
        thirdPartyAddress: false,
        thirdPartyVendor: '',
        adTrackingID: '',
        badges: {
          imageBased: [],
          textBased: [],
          textExtendedBadges: [],
        },
        lastMileTravelString: '5 kms',
        hasSurge: false,
        sla: {
          restaurantId: '642459',
          deliveryTime: 36,
          minDeliveryTime: 36,
          maxDeliveryTime: 36,
          lastMileTravel: 5,
          lastMileDistance: 0,
          serviceability: 'SERVICEABLE',
          rainMode: 'NONE',
          longDistance: 'IT_IS_LONG_DISTANCE',
          preferentialService: false,
          iconType: 'EMPTY',
        },
        promoted: false,
        avgRating: '3.9',
        totalRatings: 50,
        new: false,
      },
      subtype: 'basic',
    },
    {
      type: 'restaurant',
      data: {
        type: 'F',
        id: '27643',
        name: 'Ultimate Parathas',
        uuid: '925340c8-7945-4cdf-894b-01a90f5445a2',
        city: '1',
        area: 'Btm Layout',
        totalRatingsString: '10000+ ratings',
        cloudinaryImageId: 'm0bjo1ds8l6o4civx6ek',
        cuisines: ['Bihari', 'North Indian', 'Desserts'],
        tags: [],
        costForTwo: 25000,
        costForTwoString: '₹250 FOR TWO',
        deliveryTime: 29,
        minDeliveryTime: 29,
        maxDeliveryTime: 29,
        slaString: '29 MINS',
        lastMileTravel: 4.5,
        slugs: {
          restaurant: 'litti-twist-koramangala-koramangala',
          city: 'bangalore',
        },
        cityState: '1',
        address:
          '#5, 6th cross, 1st Main, Bannerghatta Main Rd, NS Palya, Stage 2, Bengaluru, Karnataka 560076',
        locality: '2nd Stage',
        parentId: 21591,
        unserviceable: false,
        veg: false,
        select: false,
        favorite: false,
        tradeCampaignHeaders: [],
        aggregatedDiscountInfo: {
          header: '50% off',
          shortDescriptionList: [
            {
              meta: '50% off | Use TRYNEW',
              discountType: 'Percentage',
              operationType: 'RESTAURANT',
            },
          ],
          descriptionList: [
            {
              meta: '50% off up to ₹100 | Use code TRYNEW',
              discountType: 'Percentage',
              operationType: 'RESTAURANT',
            },
          ],
          subHeader: '',
          headerType: 0,
          superFreedel: '',
        },
        aggregatedDiscountInfoV2: {
          header: '50% OFF',
          shortDescriptionList: [
            {
              meta: 'Use TRYNEW',
              discountType: 'Percentage',
              operationType: 'RESTAURANT',
            },
          ],
          descriptionList: [
            {
              meta: '50% off up to ₹100 | Use code TRYNEW',
              discountType: 'Percentage',
              operationType: 'RESTAURANT',
            },
          ],
          subHeader: '',
          headerType: 0,
          superFreedel: '',
        },
        ribbon: [
          {
            type: 'PROMOTED',
          },
        ],
        chain: [],
        feeDetails: {
          fees: [
            {
              name: 'distance',
              fee: 3700,
              message: '',
            },
            {
              name: 'time',
              fee: 0,
              message: '',
            },
            {
              name: 'special',
              fee: 0,
              message: '',
            },
          ],
          totalFees: 3700,
          message: '',
          title: 'Delivery Charge',
          amount: '3700',
          icon: '',
        },
        availability: {
          opened: true,
          nextOpenMessage: '',
          nextCloseMessage: '',
        },
        longDistanceEnabled: 0,
        rainMode: 'NONE',
        thirdPartyAddress: false,
        thirdPartyVendor: '',
        adTrackingID: 'cid=6276390~p=16~eid=00000187-2c1c-96f0-0062-eea700b01075',
        badges: {
          imageBased: [],
          textBased: [],
          textExtendedBadges: [],
        },
        lastMileTravelString: '4.5 kms',
        hasSurge: false,
        sla: {
          restaurantId: '27643',
          deliveryTime: 29,
          minDeliveryTime: 29,
          maxDeliveryTime: 29,
          lastMileTravel: 4.5,
          lastMileDistance: 0,
          serviceability: 'SERVICEABLE',
          rainMode: 'NONE',
          longDistance: 'NOT_LONG_DISTANCE',
          preferentialService: false,
          iconType: 'EMPTY',
        },
        promoted: true,
        avgRating: '4.2',
        totalRatings: 10000,
        new: false,
      },
      subtype: 'basic',
    },
    {
      type: 'restaurant',
      data: {
        type: 'F',
        id: '42294',
        name: 'Udupi Palace',
        uuid: '7e5fb1de-707b-4851-a0f7-a70df335efe2',
        city: '1',
        area: 'HSR Layout',
        totalRatingsString: '10000+ ratings',
        cloudinaryImageId: 'dbfp4mqtidbjh9sectlk',
        cuisines: [
          'Beverages',
          'Biryani',
          'Chinese',
          'Desserts',
          'North Indian',
          'South Indian',
        ],
        tags: [],
        costForTwo: 15000,
        costForTwoString: '₹150 FOR TWO',
        deliveryTime: 30,
        minDeliveryTime: 30,
        maxDeliveryTime: 30,
        slaString: '30 MINS',
        lastMileTravel: 5.599999904632568,
        slugs: {
          restaurant: 'udupi-palace-00-hsr',
          city: 'bangalore',
        },
        cityState: '1',
        address:
          'No 1188 HNR tower 24th main second SECTOR HSR LAYOUT BANGALORE 560102',
        locality: '2nd Sector',
        parentId: 6971,
        unserviceable: false,
        veg: true,
        select: false,
        favorite: false,
        tradeCampaignHeaders: [],
        aggregatedDiscountInfo: {
          header: '20% off',
          shortDescriptionList: [
            {
              meta: '20% off | Use TRYNEW',
              discountType: 'Percentage',
              operationType: 'RESTAURANT',
            },
          ],
          descriptionList: [
            {
              meta: '20% off up to ₹50 | Use code TRYNEW',
              discountType: 'Percentage',
              operationType: 'RESTAURANT',
            },
          ],
          subHeader: '',
          headerType: 0,
          superFreedel: '',
        },
        aggregatedDiscountInfoV2: {
          header: '20% OFF',
          shortDescriptionList: [
            {
              meta: 'Use TRYNEW',
              discountType: 'Percentage',
              operationType: 'RESTAURANT',
            },
          ],
          descriptionList: [
            {
              meta: '20% off up to ₹50 | Use code TRYNEW',
              discountType: 'Percentage',
              operationType: 'RESTAURANT',
            },
          ],
          subHeader: '',
          headerType: 0,
          superFreedel: '',
        },
        chain: [],
        feeDetails: {
          fees: [
            {
              name: 'distance',
              fee: 4900,
              message: '',
            },
            {
              name: 'time',
              fee: 0,
              message: '',
            },
            {
              name: 'special',
              fee: 0,
              message: '',
            },
          ],
          totalFees: 4900,
          message: '',
          title: 'Delivery Charge',
          amount: '4900',
          icon: '',
        },
        availability: {
          opened: true,
          nextOpenMessage: '',
          nextCloseMessage: '',
        },
        longDistanceEnabled: 0,
        rainMode: 'NONE',
        thirdPartyAddress: false,
        thirdPartyVendor: '',
        adTrackingID: '',
        badges: {
          imageBased: [],
          textBased: [],
          textExtendedBadges: [],
        },
        lastMileTravelString: '5.5 kms',
        hasSurge: false,
        sla: {
          restaurantId: '42294',
          deliveryTime: 30,
          minDeliveryTime: 30,
          maxDeliveryTime: 30,
          lastMileTravel: 5.599999904632568,
          lastMileDistance: 0,
          serviceability: 'SERVICEABLE',
          rainMode: 'NONE',
          longDistance: 'NOT_LONG_DISTANCE',
          preferentialService: false,
          iconType: 'EMPTY',
        },
        promoted: false,
        avgRating: '4.2',
        totalRatings: 10000,
        new: false,
      },
      subtype: 'basic',
    },
  ];
  

  


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
const Title = () => {
  return<a href="/"> <img src="https://png.pngtree.com/png-vector/20220726/ourlarge/pngtree-food-logo-png-image_6061627.png" alt="logo" className="logo"/> </a>
};

const HeaderComponent = () => {
  return (
      <div className="header">
          <Title/>
          <div className="nav-items">
              <ul>
                  <li>Home</li>
                  <li>About</li>
                  <li>contact</li>
                  <li>cart</li>
              </ul>

          </div>
      </div>
  );
};


const Restcard = ( {name,cuisines,cloudinaryImageId,lastMileTravelString} ) =>{
  
  return (
  <div className="card"> 
  <img 
  src={
      "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/" +cloudinaryImageId
      } />
  <h2>{name}</h2>
  <h5>{cuisines.join(",")}</h5>
  <h4>{lastMileTravelString} stars</h4>

  </div>
  );
};


// everytime we are passing different data into each functional call
const Body =() =>{
  return <div class="restcollection">
      
      {
           restList.map((restobj) => {
          return <Restcard {...restobj.data} keys={restobj.data.ID}/>
                                       })
      }

      
      
      
      
      
  </div>
};
const Footer =() =>{
  return <h2>Footer</h2>
};


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












