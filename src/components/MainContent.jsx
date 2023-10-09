import React, { useState, useEffect } from 'react';
import styled from "styled-components"
import Layout from '../helpers/Layout';
import Main from '../styles/Main';
//*** */
import { useNavigate } from 'react-router-dom';
import CheckSession from '../helpers/CheckSession';
const MainContent = () => {
   //Protect
    const { lab_name, lab_id, refresh_token } = CheckSession()
    
    return ( 
        <div>
            <Layout/>
            <Main>
                <div className="main">
                    <h1>Dashboard</h1>
                    <div class = "row">
                        <div className='col-md-4'>
                            <div className='card shadow p-4'>
                                No of Nurse 
                                <div className='card-body'>
                                       <h1>50</h1>
                                </div>
                            </div>
                        </div>
                        <div className='col-md-4'>
                             <div className='card shadow p-4'>
                                Pending Bookings 
                                <div className='card-body'>
                                       <h1>4</h1>
                                </div>
                            </div>
                        </div>
                        <div className='col-md-4'>
                            <div className='card shadow p-4'>
                                 Total Tests 
                                <div className='card-body'>
                                       <h1>50</h1>
                                </div>
                            </div>
                         </div>
                    </div>
                </div>
            </Main>
        </div>
      

     );
}
 
export default MainContent;

