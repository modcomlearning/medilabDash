import React, { useState, useEffect } from 'react';
import styled from "styled-components"
import CheckSession from '../helpers/CheckSession';
import Layout from '../helpers/Layout';
import Main from '../styles/Main';
const Profile = () => {
    //Protect
    const { lab_name, lab_id, refresh_token } = CheckSession()
    return ( 
        <div>
            <Layout/>
            <Main>
                <div className="main">
                    <h1>Profile</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum tenetur, eum doloremque voluptas debitis perspiciatis optio corrupti placeat? Neque sed assumenda rerum dolore suscipit commodi reprehenderit vitae pariatur sapiente doloribus!</p>
                </div>
            </Main>
        </div>
        

     );
}
 
export default Profile;
