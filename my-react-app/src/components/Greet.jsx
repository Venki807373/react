import React from "react";


// const Greet = () => {
//   const user = "Muniraju"
//   return (
//     <div>
//       <h2>Wellcom,{user}!</h2>
//       <p>Learning React is fun</p>
      
//     </div>
//   );
// };

const Greet =(props) =>{
    return <h2>Hello,{props.name}</h2>;
};



export default Greet;