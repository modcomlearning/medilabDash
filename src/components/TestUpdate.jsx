import Modal from 'react-modal'
import { useEffect, useState } from 'react'
import axiosInstance from '../helpers/axiosInstance'
const TestUpdate = ({ isOpen, onClose, test_id, test_name, test_description,
    test_cost, test_discount, availability, more_info }) => {
        const custom = {
        content: {
            top: '10%',
            left: '30%',
            bottom: '20%'
       }//end       
    }//end

        const [loading, setLoading] = useState(false)
        const [success, setSuccess] = useState(null)
        const [failure, setFailure] = useState(null)
        const [name, setName] = useState(null)
        const [description, setDesription] = useState(null)
        const [cost, setCost] = useState(null)
        const [discount, setDiscount] = useState(null)
        const [avail, setAvailability] = useState(null)
        const [info, setInfo] = useState(null)
    

        //Update hooks
        const update = () => {
            setName(test_name)
            setDesription(test_description)
            setCost(test_cost)
            setDiscount(test_discount)
            setAvailability(availability)
            setInfo(more_info)
        }//end 
        useEffect(()=>{
            update()
        }, [test_name, test_description, test_cost,
            test_discount, availability, more_info])

        const request = {
            test_id:test_id,
            test_name: name,
            test_description: description,
            test_cost: cost,
            test_discount: discount,
            availability: avail,
            more_info: info
        }
    
        const {instance}  = axiosInstance()
            const submit = (e) => {
            e.preventDefault(); 
            setLoading(true)
                instance.get("/update_test", { params: request}).then(function (response) {
                alert(response.data.message)
                setLoading(false)
            }).catch(function (error) {
                alert(error.message)
                setLoading(false)
            });
        }//end
    

    
    return (
        <Modal
            isOpen={isOpen}
            onRequestClose={onClose}
            style={custom}
            contentLabel="Nurses Popup">
            
            <form onSubmit={submit} className="card shadow p-4">
                        <div className="card-body">
                            {loading && <div className="text-warning"> Please Wait..</div>}
                            {success && <div className="text-success"> {success}</div>}
                            {failure && <div className="text-danger"> {failure}</div>}
                            <input type="text" placeholder="Enter Test Name" value={name}
                                required onChange={(e)=> setName(e.target.value)}
                                className="form-control" /> <br />
                                
                            <input type="text" placeholder="Enter Test Desc" value={description}
                              required  onChange={(e)=> setDesription(e.target.value)}
                                className="form-control" /> <br />
                                
                            <input type="text" placeholder="Enter Test Cost" value={cost}
                               required  onChange={(e)=> setCost(e.target.value)}
                                className="form-control" /> <br />
                                
                            <input type="text" placeholder="Enter Test Discount" value={discount}
                                 required onChange={(e)=> setDiscount(e.target.value)}
                                className="form-control" /> <br />
                                
                            <input type="text" placeholder="Enter Test Availability" value={avail}
                             required onChange={(e)=> setAvailability(e.target.value)}
                                className="form-control" /> <br />
                                
                            <input type="text" placeholder="Enter More" value={info}
                                required onChange={(e)=> setInfo(e.target.value)}
                                className="form-control" /> <br />
                                
                            <button className="btn btn-dark">Update Test</button> <br />
                   
                        </div>
              </form>

        </Modal>
     );
}
 
export default TestUpdate;