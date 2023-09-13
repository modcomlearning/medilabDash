import { useState } from "react";
import axios from "axios"
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
                console.log(response.data);
                console.log(response.data.message);
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
            <h1>Register Lab</h1>
              {loading  && <div className="loading"> Please Wait..</div>}
              {success && <div className="success"> {success}</div>}  
              {failure && <div className="failure"> { failure}</div>}  
            <form  onSubmit={submit}>
                <input type="email" placeholder="Enter Email" value={email}
                    onChange={(e) => setEmail(e.target.value)} required /> <br /><br />
                
                <input type="password" placeholder="Enter Password" value={password}
                    onChange={(e) => setPassword(e.target.value)} required/> <br /><br />

                <button>Login Account</button>
                
            </form>
        </div>
     );
}
 
export default Signin;
