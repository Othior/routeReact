import React, { createRef } from "react"
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";


export default function Test(){
    
    return(
        <>
            <h1>Test</h1>
            <Link to="/redirect">Redirect</Link>
        </>
    )
}