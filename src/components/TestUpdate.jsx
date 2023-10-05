import Modal from 'react-modal'
import { useState } from 'react'
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
        const [name, setName] = useState(test_name)
        const [description, setDesription] = useState(test_description)
        const [cost, setCost] = useState(test_cost)
        const [discount, setDiscount] = useState(test_discount)
        const [avail, setAvailability] = useState(availability)
        const [info, setInfo] = useState(more_info)

    return (
        <Modal
            isOpen={isOpen}
            onRequestClose={onClose}
            style={custom}
            contentLabel="Nurses Popup">
            
            <form  className="card shadow p-4">
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