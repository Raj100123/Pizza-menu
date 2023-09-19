import React from "react";
import  ReactDOM from "react-dom/client";
import "./index.css";
const pizzaData = [
    {
      name: "Focaccia",
      ingredients: "Bread with italian olive oil and rosemary",
      price: 6,
      photoName: "pizzas/focaccia.jpg",
      soldOut: false,
    },
    {
      name: "Pizza Margherita",
      ingredients: "Tomato and mozarella",
      price: 10,
      photoName: "pizzas/margherita.jpg",
      soldOut: false,
    },
    {
      name: "Pizza Spinaci",
      ingredients: "Tomato, mozarella, spinach, and ricotta cheese",
      price: 12,
      photoName: "pizzas/spinaci.jpg",
      soldOut: false,
    },
    {
      name: "Pizza Funghi",
      ingredients: "Tomato, mozarella, mushrooms, and onion",
      price: 12,
      photoName: "pizzas/funghi.jpg",
      soldOut: false,
    },
    {
      name: "Pizza Salamino",
      ingredients: "Tomato, mozarella, and pepperoni",
      price: 15,
      photoName: "pizzas/salamino.jpg",
      soldOut: true,
    },
    {
      name: "Pizza Prosciutto",
      ingredients: "Tomato, mozarella, ham, aragula, and burrata cheese",
      price: 18,
      photoName: "pizzas/prosciutto.jpg",
      soldOut: false,
    },
  ];
  
function App() {
  //const x="jonas"
  return (
  
     <div className="container">  
       <Header/>
       <Menu/>
        <Footer/>
    </div> 
  )
  
}

function Header() {
  //const style={color:"red",fontSize:'100px',textTransform:"lowercase"}
  const style={};

 return (
 <header className="header footer">
 <h1 style={style}>Fast Pizza Co.</h1>
 </header>
 )
 
}
function Menu() {
 //const pizzas=pizzaData;
 
//const pizzas=[]
 const pizzas=pizzaData
 const numPizzas=pizzas.length;
  return (
    <main className=" menu">
     
    <h2>Our Menu</h2>
  
    {numPizzas >0 ?(
      <React.Fragment >

      <p>Authentic Italina Pizza</p>
      <ul className="pizzas">
      {pizzas.map((pizza)=>(<Pizza pizzaObj={pizza} key={pizza.key}/>))}
    </ul>
      </React.Fragment>
    
  ) : (<p>We are still working on our menu please come back later :)</p>
  
)}
</main>
)};
    




  
  

//component
function Pizza({pizzaObj}){
  console.log(pizzaObj);
  

  return (
    <li className={`pizza ${pizzaObj.soldOut?"sold-out":""}`}>
    <img src={pizzaObj.photoName} alt={pizzaObj.name}/>
    <li>
  <h1>{pizzaObj.name}</h1>
  <p>{pizzaObj.ingredient}</p>
  {/* {pizzaObj.soldOut ?(
    <span>SOlD OUT</span>):(
      <span>{pizzaObj.price}</span>
    )} */}
    
  <span>{pizzaObj.soldOut?"Sold OUT":pizzaObj.price}</span>
  
  </li>
  </li>
  )

}
function Footer(props){
  console.log(props);
 

  
  const hour = new Date().getHours();
  console.log(hour);
  const openHour= -1;
  const closeHour=2;
  const isOpen= hour>=openHour && hour<=closeHour;
  console.log(isOpen);
  //console.log(hour);
  //  if(isOpen){
  //    return (
        
      
  //     )
  //     } 

  return (
  <footer className="footer">
    {isOpen ? (<Order closeHour={closeHour}/>
      ):(<p>We are happy to welcome you between {openHour}:00 and {closeHour}:00</p>)}
  </footer>
  );
}


  function Order({closeHour,openHour}){
    return <div className="order">
 <p>We are open until closeHour{closeHour}:00 am.Come visit us or order online{openHour}:00</p>
   
    <button className="btn">Order</button>
    </div>
  }
//   const openHour=1;
//   const closeHour=5;
//   const isOpen=hour>=openHour && hour<=closeHour;
//   console.log(isOpen);
//   if(hour >= openHour && hour <= closeHour)
//   alert("We are currently open!") 
// else
// alert("Sorry, we are currently closed!");
//  return (
//  <footer>{new Date().toLocaleTimeString()}We are currently open merey bhai</footer>
//  );
   //return React.createElement('footer',10,"We are currently open")

 




const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<React.StrictMode><App/></React.StrictMode>)