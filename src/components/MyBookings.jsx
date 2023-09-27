import { useEffect } from "react"
import { useState } from "react"
import axiosInstance from "../helpers/axiosInstance"
import CheckSession from "../helpers/CheckSession"
import Layout from "../helpers/Layout"
import Main from "../styles/Main"
const MyBookings = () => {
     //Protect
    const { lab_name, lab_id, refresh_token } = CheckSession()
    //hooks
    const [bookings, setBookings] = useState(null) //Empty
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)
    //Add this  below
    const [filteredData, setFilteredData] = useState([]); 
    //Search
    const [query, setQuery] = useState('')  // null
  const {instance}  = axiosInstance()
    useEffect(() => {
        instance.post("/view_bookings", {
            lab_id: lab_id
        })
            .then(function (response) {
                console.log(response.data);
                setBookings(response.data)//important
                setFilteredData(response.data);
                setLoading(false)
            })
            .catch(function (error) {
                console.log(error);
                setError(error.message)
                setLoading(false)
        })//end catch
    }, [lab_id]);// end useeffect

 
    //add this
    const handleLiveSearch = (value) => {
       //ABove value comes from the typing 
    setQuery(value); //query has something as long someone is searching
    //check if lab tests are not empty
    const filtered = bookings && bookings.filter((item) =>
        item.appointment_date.toLowerCase().includes(value.toLowerCase()) ||
        item.invoice_no.toLowerCase().includes(value.toLowerCase()) 
    );
        //update setFilteredData with filtered items
    setFilteredData(filtered);
  };//end

    return ( 
        <div>
            <Layout />
            <Main>
                {/* add handleLiveSearch function onChange below */}
                <input type="text" placeholder="Search a date/Invoice No" value={query}
                    onChange={(e) => handleLiveSearch(e.target.value)}
                className = "form-control" /> 
                
                <table className="table table-striped bg-light p-5 m-1">
                     {loading && <div className="text-warning">Loading ... </div>}
                     {error && <div className="text-danger"> Error occured. Try Later </div>}
                    <thead>
                    <tr>
                        <th>Invoice No</th>
                        <th>Date</th>
                        <th>Time</th>
                        <th>Member</th>
                        <th>Where Taken</th>
                        <th>Test</th>                   
                    </tr>
                    </thead>
                    <tbody>
                        {/* add this filteredData */}
                    {filteredData && filteredData.map((booking) => (
                        <tr className="mt-5" key={booking.book_id}>   
                            <td>{booking.invoice_no}</td>    
                            <td>{booking.appointment_date}</td>
                            <td>{booking.appointment_time}</td>
                            <td>{booking.member.surname}</td>
                            <td>{booking.where_taken}</td>
                            <td>{booking.test_details.test_name}</td> 
                            <td><button className="btn btn-danger btn-sm">Accept</button></td>
                            <td><button className="btn btn-warning btn-sm">Decline</button></td>
                        </tr>    
                      ))}
                    </tbody>
                 </table>
            
            </Main>
        </div>
        
     );
}
 
export default MyBookings