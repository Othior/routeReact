import React, { createRef } from "react"
import { BrowserRouter as Router, Route, Switch, Link ,useHistory} from "react-router-dom";

export default function Redirect(){
    
    const history = useHistory()
    history.push("/show")

    return(
        <>
        <h2>je vois pas ca </h2>
        </>
    )
}