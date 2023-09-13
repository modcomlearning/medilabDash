import { useState } from "react";
import axios from "axios"
const Signup = () => {
    //hooks
    const [lab_name, setName] = useState(null)
    const [permit_id, setPermit] = useState(null)
    const [email, setEmail] = useState(null)
    const [phone, setPhone] = useState(null)
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
            axios.post('https://modcom.pythonanywhere.com/api/lab_signup', {
                lab_name: lab_name,
                permit_id: permit_id,
                email: email,
                phone: phone,
                password:password
            })
            .then(function (response) {
                console.log(response.data.message);
                setLoading(false)
                setSuccess(response.data.message)
                setTimeout((function () {
                    setSuccess('')
                }), 2000)
                
                setEmail(''); setName(''); setPassword(''); setPhone(''); setPermit('');
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
                <input type="text" placeholder="Enter Lab Name" value={lab_name}
                    onChange={(e) => setName(e.target.value)} required/> <br /><br />
            
                <input type="text" placeholder="Enter Permit ID" value={permit_id}
                    onChange={(e) => setPermit(e.target.value)} required/> <br /><br />
                
                <input type="email" placeholder="Enter Email" value={email}
                    onChange={(e) => setEmail(e.target.value)} required /> <br /><br />
                
                <input type="tel" placeholder="Enter Phone" value={phone}
                    onChange={(e) => setPhone(e.target.value)} required /> <br /><br />
            
                <input type="password" placeholder="Enter Password" value={password}
                    onChange={(e) => setPassword(e.target.value)} required/> <br /><br />

                <button>Create Account</button>
                
            </form>
        </div>
     );
}
 
export default Signup;