import React, { useState, useEffect } from 'react';
import styled from "styled-components"
import Layout from '../helpers/Layout';
import Main from '../styles/Main';
//*** */
import { useNavigate } from 'react-router-dom';
import CheckSession from '../helpers/CheckSession';
import axiosInstance from '../helpers/axiosInstance';
import MyPieChart from '../plots/MyPieChart';
import MyBarChart from '../plots/MyBarChart';
const MainContent = () => {
   //Protect
    const { lab_name, lab_id, refresh_token } = CheckSession()
    
    //hooks
    const [num_of_nurses, setNumNurses] = useState('')
    const [num_of_tests, setNumTests] = useState('')
    const [pending, setPending] = useState('')
    const [average, setAverage] = useState('')//Not used
    
      const {instance}  = axiosInstance()
      useEffect(() => {
        instance.post("/analysis", {
            lab_id: lab_id
            })
            .then(function (response) {
                setNumNurses(response.data.num_of_nurses)
                setNumTests(response.data.num_of_tests)
                setPending(response.data.pending)
                setAverage(response.data.average)
                console.log("hellooo"+num_of_nurses)
            })
            .catch(function (error) {
                console.log(error);
        })//end catch
    }, [lab_id]);// end useeffect


    return ( 
        <div>
            
            <Layout/>
            <Main>
               
                <div className="main">
                    <h1>Dashboard</h1>
                    <div class = "row">
                        <div className='col-md-4'>
                            <div className='card shadow p-4'>
                                No of Nurses 
                                <div className='card-body'>
                                    <h1>{ num_of_nurses}</h1>
                                </div>
                            </div>
                        </div>
                        <div className='col-md-4'>
                             <div className='card shadow p-4'>
                                Pending Bookings 
                                <div className='card-body'>
                                    <h1>{ pending}</h1>
                                </div>
                            </div>
                        </div>
                        <div className='col-md-4'>
                            <div className='card shadow p-4'>
                                 Total Tests 
                                <div className='card-body'>
                                       <h1>{num_of_tests}</h1>
                                </div>
                            </div>
                         </div>
                    </div>

                    <div className='row ms-1 mt-5'>
                        <div className='col-md-5 card shadow me-3 ms-4'>
                             <MyPieChart/>
                        </div>
                         <div className='col-md-5 card shadow'>
                            <MyBarChart/>
                        </div>
                    </div>

                  
                </div>
            </Main>
        </div>
      

     );
}
 
export default MainContent;

