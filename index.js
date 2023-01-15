import React from "react";
import ReactDOM from "react-dom/client";


import App from './src/App';

// const element = React.createElement('h1', {}, "Heading");

const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(element);

root.render(<App />);