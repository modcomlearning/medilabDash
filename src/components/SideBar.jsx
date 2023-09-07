import React, { useState, useEffect } from 'react';
import styled from "styled-components"
import { AiOutlineAppstore,AiFillAccountBook, AiFillAlert, AiOutlineLogout } from "react-icons/ai"
import {AiOutlineBank, AiOutlinePlusCircle, AiOutlineUser} from "react-icons/ai"
import {AiTwotoneCopy}  from "react-icons/ai"

//style
const Section = styled.section`
     background-color: orange;
     display: flex;
     flex-direction: column;
     width: 25vw;
     left: 0;
     align-items: center;
     justify-content: space-between;
     padding-top:10px;
     .top{
        display:flex ;
        flex-direction: column;
        width: 100%;
        .brand{
             width: 100%;
             display: flex;
             justify-content:center;
             align-items: center;
             span{
                font-size: 1.5rem;
                color: white;
                font-weight:bold;
             }  
            svg{
                color: aliceblue;
                font-size: 2rem;
                margin-right: 2px;
            }
        }//end brand
       
        .links{
            display: flex;
            flex-direction: column;
            ul{
                list-style-type: none;
                padding: 1rem;
                li {
                  padding: 1rem;
                  border-radius: 0.5rem;
                  text-align: left;
                  &:hover{
                    background-color: black;
                    a{
                         color: white;
                         text-decoration: none  ;
                    }
                  }//end hover
                  a{
                    color:#3498db;
                    text-decoration: none;
                     
                  }
                }//end li
            }//end ul            
        }//end links




     } //end top 
`
//Style End here
const SideBar = () => {
    //Hooks
const [currentLink, setCurrentLink] = useState(1)

    return ( 
        <Section>
            <div className="top">
                <div className="brand">
                    <AiOutlineBank />
                    <span>MEDILAB</span>
                </div>
                
                <div className="links">
                    <ul>
                        <li>
                              <a href=""><AiOutlinePlusCircle/>Dashboard</a>
                        </li>
                        <li>
                              <a href=""><AiOutlineAppstore/>My Profile</a>
                        </li>
                        <li>
                              <a href=""><AiTwotoneCopy/>Add Tests</a>
                        </li>
                        <li>
                              <a href=""><AiOutlineUser/>Lab Tests</a>
                        </li>
                        <li>
                              <a href=""><AiOutlinePlusCircle/>My Bookings</a>
                        </li>
                        <li>
                              <a href=""><AiFillAccountBook/>Add Nurses</a>
                        </li>

                        <li>
                              <a href=""><AiFillAlert/>Nurses</a>
                        </li>
                    </ul>                    
                </div>
            </div>    
            {/* End Topdiv */}
            <div className="bottom">
                <AiOutlineAppstore />
                <span>Unlock for more features. <button>Go Pro</button></span> <br />
                <br />
                <span><strong>Upgrade Now</strong></span>
            </div>

            <div className="logout">
                 <a href="">  <AiOutlineLogout/> Logout</a>
            </div>

        </Section>

     );
}






 
export default SideBar;