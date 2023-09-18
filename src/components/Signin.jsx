import { useState } from "react";
import axios from "axios"
import { styled } from "styled-components";
const Signin = () => {
    //hooks
    const [email, setEmail] = useState(null)
    const [password, setPassword] = useState(null)
    const [loading, setLoading] = useState(false)
    const [success, setSuccess] = useState(null)
    const [failure, setFailure] = useState(null)

    //Validation
    const submit = (e) => {
        e.preventDefault();
        setLoading(true)
        setSuccess(null)
        setFailure(null)
        console.log("submitting")
            //Post
            axios.post('https://modcom.pythonanywhere.com/api/lab_signin', {
                email: email,
                password:password
            })
                .then(function (response) {
                console.log("X"+response.data);
                console.log("Y"+response.data.message.lab_id);
                console.log("RT" + response.data.refresh_token);
                  
                //Assume Login Successfully
                localStorage.setItem("lab_id", response.data.message.lab_id);
                localStorage.setItem("refresh_token", response.data.refresh_token);
                console.log("Saved1" + localStorage.getItem("lab_id")) 
                console.log("Saved2"+localStorage.getItem("refresh_token"))     
                //Redirect
                    
                //console.log("Lab ID"+response.data.message);
                setLoading(false)
                //setSuccess(response.data.message)    
                //Seesions
                //LocalStorage/SQlite/WebSQL    
            
            })
            .catch(function (error) {
                console.log(error.message);
                setLoading(false)
                setFailure(error.message);
            });

    }//End submit
    return ( 
        <div className="form">
            <Section>
              {loading  && <div className="loading"> Please Wait..</div>}
              {success && <div className="success"> {success}</div>}  
              {failure && <div className="failure"> { failure}</div>}  
                <form onSubmit={submit} className="card shadow p-3 pt-4">
                    <h1>Login Lab</h1>
                    <div className="card-body">
                        <input type="email" placeholder="Enter Email" value={email}
                                onChange={(e) => setEmail(e.target.value)} required
                            className="form-control"/> <br />
                        
                        <input type="password" placeholder="Enter Password" value={password}
                                onChange={(e) => setPassword(e.target.value)} required
                            className="form-control"/> <br />

                        <button className="btn btn-dark">Login Account</button>
                </div>   
                </form>
             </Section>
        </div>
     );
}
export default Signin;
const Section = styled.section`
     display: flex;
     flex-direction: column;
     position: relative;
     align-items: center;
     justify-content: center;
     top: 50px;
`


