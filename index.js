import React from "react";
import ReactDOM from "react-dom/client";


// const App = () => {
//     return (
//         <div>
//             <h1>header</h1>
//             <ul>
//                 <li>Contact us</li>
//                 <li>Help</li>
//             </ul>
//         </div>
//     )
// }

const element = React.createElement('h1', {}, "Heading");

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(element)