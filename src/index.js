import React from 'react';
import ReactDOM from "react-dom/client";
import App from './app/App';
import './index.css';

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <App />
);


const contact = function(props) {
    return (
        <div>
            <h1>Contact</h1>
        </div>
    )
}
