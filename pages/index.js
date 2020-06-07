/**
 * Remi P
 * June 6, 2020
 * Final project
 * Advanced React
 * UCI extension Spring 2020
 */

import React from "react";
import FormRest from "./FormRest";
import ShowDetails from "./ShowDetails";


const App = () =>(
    <> 
    <div id="root">
        <div id="rightdiv">
            <ShowDetails/>
                <style jsx>{`
                    text-align: left;
                    color: #000;
                    height: 200px;
                    float: right
                `}</style>
        </div>      
        <h2>Travel Destination</h2>
        <FormRest />
    </div>
    </>
);

export default App;