import React from 'react';
import "../Inputs/Input.css"
import {FiUsers} from "react-icons/fi";

const Input = ({icon, type, label}) => {
  return (  
    <div class="container">
        <div class="icon">
            {icon}
        </div>
        <div class="input-container">
          <input type={type} id="input-box" required />
          <label for="input-box">{label}</label>
        </div>
    </div>
  )
}

export default Input
