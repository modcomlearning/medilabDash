import { useState } from "react";
import styled from "styled-components"
import axios from "axios";
import Main from "../styles/Main";
import Layout from "../helpers/Layout";
import axiosInstance from "../helpers/axiosInstance";
import CheckSession from "../helpers/CheckSession";

const AddNurses = () => {
      //Protect
    const { lab_name, lab_id, refresh_token } = CheckSession()
      //User Must be loggen in 
      //const lab_id = localStorage.getItem("lab_id")
      //const refresh_token = localStorage.getItem("refresh_token")
      //Hooks
        const [surname, setName] = useState(null)
        const [others, setOthers] = useState(null)
        const [gender, setGender] = useState(null)
        const [email, setEmail] = useState(null)
        const [phone, setPhone] = useState(null)
        const [loading, setLoading] = useState(false)
        const [success, setSuccess] = useState(null)
        const [failure, setFailure] = useState(null)
    
       //submit
 const submit = (e) => {
        e.preventDefault();
        setLoading(true)
        setSuccess(null)
        setFailure(null)
        console.log("submitting")
            //Post
            axiosInstance.post('/add_nurse', {
                lab_id: lab_id,
                surname: surname,
                others: others,
                email: email,
                gender: gender,
                phone: phone
            })
            .then(function (response) {
                console.log(response.data);
                setLoading(false)
                setSuccess(response.data.message)
                // setName(''); setDescription(''); setCost(''); setDiscount(''); setAvailability('');
                // setInfo('');
                //setEmail(''); setName(''); setPassword(''); setPhone(''); setPermit('');
            })
            .catch(function (error) {
                console.log(error.message);
                setLoading(false)
                setFailure(error.message);
            });

    }//End submit

    return (
        <div>
                <Layout/>
                <Main>
                    <form onSubmit={submit} className="card shadow p-4">
                        <div className="card-body">
                                {loading  && <div className="text-warning"> Please Wait..</div>}
                                {success && <div className="text-success"> {success}</div>}  
                                {failure && <div className="text-danger"> { failure}</div>} 
                                <input type="text" placeholder="Enter Test Name" value={surname}
                                    onChange={(e) => setName(e.target.value)} required
                                className="form-control"/> <br /> 
                                
                                <input type="text" placeholder="Enter Others" value={others}
                                    onChange={(e) => setOthers(e.target.value)} required
                                className="form-control"/> <br />
                                
                                <input type="text" placeholder="Enter Gender" value={gender}
                                    onChange={(e) => setGender(e.target.value)} required
                                className="form-control"/> <br />
                                
                                <input type="text" placeholder="Enter Test Discount" value={email}
                                    onChange={(e) => setEmail(e.target.value)} required
                                className="form-control"/> <br />
                                
                                <input type="text" placeholder="Enter Phone" value={phone}
                                    onChange={(e) => setPhone(e.target.value)} required
                                className="form-control"/> <br />
                                
                                
                                <button className="btn btn-dark">Add Nurse</button>
                        </div>
                    </form>
                </Main>  
        </div>
        
     );

}
 

export default Add;
