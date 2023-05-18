import React from 'react'
import "../Profile/Profile.css";
import Input from '../Inputs/Input';
import {FiUsers} from "react-icons/fi";
import {MdEmail} from "react-icons/md";
import {AiOutlineMobile} from "react-icons/ai";
import {AiFillLinkedin} from "react-icons/ai";
import {AiFillFlag} from "react-icons/ai";
import {GrMapLocation} from "react-icons/gr";
import logo from "../logo.png";
import {FaCity} from "react-icons/fa";
import {TbSortAscendingNumbers} from "react-icons/tb";


const Profile = () => {
  return (
    <div>
        <h1>Create Investor <span>Profile</span></h1>
        <div className='profile'>
            <div className='image'>
              <img src={logo} className='logo'/>
            </div>
            <div>
                <Input icon={<FiUsers />} type="text" label="Name"/>
                <Input icon={<MdEmail />} type="email" label="Email"/>
                <Input icon={<AiOutlineMobile />} type="tel" label="Phone no."/>
                <Input icon={<AiFillLinkedin />} type="url" label="Likedin Link"/>
                <Input icon={<AiFillFlag />} type="text" label="Country"/>
                <Input icon={<GrMapLocation />} type="text" label="State"/>
                <div className='end-input'>
                  <Input type="text" label="City" icon={<FaCity />}/>
                  <Input type="number" label="Pin Code" icon={<TbSortAscendingNumbers />}/>
            `   </div>
                <div className='checkbox'>
                  <div>
                    <input type="checkbox" name="" id="" />
                  </div>
                  <div>
                    <label htmlFor="">I hereby by agree to terms and conditions and whatever information is asked for i have provided the right information</label>
                  </div>
                </div>
                <button>Next</button>
            </div>
        </div>
    </div>
  )
}

export default Profile