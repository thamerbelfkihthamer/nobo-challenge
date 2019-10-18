import React from 'react';
import {
    Link,
  } from "react-router-dom";

  export default function routes(){
      return(
        <div style={{ marginLeft: '20px', fontSize: '16px'}}>
            <Link to="/films">Films</Link>        
        </div>
      )
  }