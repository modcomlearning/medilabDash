import { useEffect } from "react"
import { useState } from "react"
import axiosInstance from "../helpers/axiosInstance"
import CheckSession from "../helpers/CheckSession"
import Layout from "../helpers/Layout"
import Main from "../styles/Main"
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
            <Main>
                <table className="table table-striped bg-light p-5 m-1">
                    <thead>
                    <tr>
                        <th>Name</th>
                        <th>Description</th>
                        <th>Cost</th>
                        <th>Discount</th>
                        <th>Available</th>
                        <th>More</th>                    
                    </tr>
                    </thead>
                    <tbody>
                    {lab_tests && lab_tests.map((test) => (
                        <tr className="mt-5" key={test.test_id}>        
                            <td>{test.test_name}</td>
                            <td>{test.test_description}</td>
                            <td>{test.test_cost}</td>
                            <td>{test.test_discount}</td>
                            <td>{test.availability}</td>
                            <td>{test.more_info}</td>      
                            <td><button className="btn btn-danger btn-sm">Remove</button></td>
                            <td><button className="btn btn-warning btn-sm">Update</button></td>
                        </tr>    
                      ))}
                    </tbody>
                 </table>
            
            </Main>
        </div>
        
     );
}
 
export default LabTests