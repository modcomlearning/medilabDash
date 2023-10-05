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
                            <input type="text" placeholder="Enter Test Name" value={test_name}
                                required
                                className="form-control" /> <br />
                                
                            <input type="text" placeholder="Enter Test Desc" value={test_description}
                              required
                                className="form-control" /> <br />
                                
                            <input type="text" placeholder="Enter Test Cost" value={test_cost}
                               required
                                className="form-control" /> <br />
                                
                            <input type="text" placeholder="Enter Test Discount" value={test_discount}
                                 required
                                className="form-control" /> <br />
                                
                            <input type="text" placeholder="Enter Test Availability" value={availability}
                             required
                                className="form-control" /> <br />
                                
                            <input type="text" placeholder="Enter More" value={more_info}
                                required
                                className="form-control" /> <br />
                                
                    <button className="btn btn-dark">Add Test</button> <br />
                   
                        </div>
              </form>

        </Modal>
     );
}
 
export default TestUpdate;