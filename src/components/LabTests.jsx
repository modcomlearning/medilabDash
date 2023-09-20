import { useEffect } from "react"
import { useState } from "react"
import axiosInstance from "../helpers/axiosInstance"
import CheckSession from "../helpers/CheckSession"
import Layout from "../helpers/Layout"
const LabTests = () => {
     //Protect
    const { lab_name, lab_id, refresh_token } = CheckSession()
    //hooks
    const [lab_tests, setLabTests] = useState(null) //Empty
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)
    useEffect(() => {
        axiosInstance.post("/view_lab_tests", {
            lab_id: lab_id
        })
            .then(function (response) {
                console.log(response.data);
                setLabTests(response.data)//important
            })
            .catch(function (error) {
                 console.log(error);
        })//end catch
    }, [lab_id]);// end useeffect
    return ( 
        <div>
            <Layout />
             <h1>Your Lab Tests</h1>
              {lab_tests && lab_tests.map((test) => (
                    <div className="single" key={test.test_id}>
                        <h3>{test.test_name}</h3>
                        <p>{test.test_description}</p>
                        <hr />
                     </div>    
                ))}
        </div>
        
     );
}
 
export default LabTests;