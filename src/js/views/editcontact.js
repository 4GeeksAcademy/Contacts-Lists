import React, {useContext} from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";
export default function EditContact ({updatedContacts, id, email, phone, address}) {
    const {actions} = useContext(Context);
    const handleEdit = () => {
        actions.editContact(updatedContacts, id, email, phone, address);
    }
    return (
        <div className="container justify-content-center">
        <h1>Edit contact</h1>
        <div className="input-group mb-3">
            <span className="input-group-text" id="basic-addon1">Email</span>
            <input type="text" className="form-control" placeholder="Email..." aria-label="Username" aria-describedby="basic-addon1"/>
        </div>
        <div className="input-group mb-3">
            <span className="input-group-text" id="basic-addon1">Phone</span>
            <input type="text" className="form-control" placeholder="Phone Number..." aria-label="Username" aria-describedby="basic-addon1"/>
        </div>
        <div className="input-group mb-3">
            <span className="input-group-text" id="basic-addon1">Address</span>
            <input type="text" className="form-control" placeholder="Address..." aria-label="Username" aria-describedby="basic-addon1"/>
        </div>
        <div>
            <Link to={'/'}>
                <button className="btn btn-primary">Back</button>
            </Link>
            <button className="btn btn-primary" onClick={handleEdit}>
                Edit
            </button>
        </div>
    </div>
    )
}