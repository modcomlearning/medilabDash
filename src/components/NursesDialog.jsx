import React, { useState, useEffect } from "react";
import styled from "styled-components"
import Main from "../styles/Main";
import axiosInstance from "../helpers/axiosInstance";
import CheckSession from "../helpers/CheckSession";
import Modal from 'react-modal'
//Prop is passing data from 1 component to another
const NursesDialog = ({isOpen, onClose, invoice_no}) => {
    //check session
    const { lab_name, lab_id, refresh_token } = CheckSession()
    //hook 
    const [nurses, setNurses] = useState([]) //Empty
    //below hook will show picked nurse as first option 
    const [selected, setSelected] = useState('');
    //update hook based on user selection, call it onChange in <select>
    const handleSelection = (e) => {
        setSelected(e.target.value);
    }//end

    const { instance } = axiosInstance()
    useEffect(() => {
        instance.post("/view_nurses", {
            lab_id: lab_id
        }).then(function (response) {
            console.log("Response:", response);
            setNurses(response.data) //update nurses Hook
        }).catch(function (error) {
            alert('Error'+error)
        })
    },[lab_id]);


    return (  
        <Modal
            isOpen={isOpen}
            onRequestClose={onClose}
            contentLabel="Nurses Popup">
            <h4>Assignment Section</h4>
            <div className="text-center">
                Inv No: {invoice_no} <br /><br />
                <label htmlFor="">Select A Nurse</label> <br />
                <select className="form-control" value={selected}
                    onChange={handleSelection}>
                    <option value="">-- Select --</option>
                    {nurses && nurses.map((nurse) => {
                        <option key={nurse.nurse_id}>{nurse.surname} {nurse.others} </option>
                    })}
                </select><br /><br />
                <button className="btn btn-dark">Assign Nurse</button>
            </div>        
        </Modal>
    );
}
 
export default NursesDialog;