import React from "react";

const Contact = ({fullname, imagen, address,phone, email}) => {
    return (
        <div className="container col-10 d-flex p-5 border border-light-subtle rounded">
            <div className="rounded-circle overflow-hidden me-5" style={{width: '200px', height: '200px'}}>
                <img className="img-fluid" src="https://www.xtrafondos.com/wallpapers/vertical/rick-sanchez-foto-policial-de-rick-y-morty-6533.jpg"/>
            </div>
            <div className="mb-2">
                <p className="fs-2">{fullname}</p>
                <div className="d-flex">
                    <i class="fa-solid fa-location-dot"></i>
                    <p className="ms-2">{address}</p>
                </div>
                <div className="d-flex">
                    <i class="fa-solid fa-phone-flip"></i>
                    <p className="ms-2">{phone}</p>
                </div>
                <div className="d-flex">
                    <i class="fa-solid fa-envelope"></i>
                    <p className="ms-2">{email}</p>
                </div>
            </div>
            <div className="ms-auto pt-4">
                <button className="border border-0 bg-transparent me-4">
                <i class="fa-solid fa-pen"></i>
                </button>
                <button className="border border-0 bg-transparent">
                    <i class="fa-solid fa-trash-can"></i>
                </button>
            </div>
        </div>
    )
}

export default Contact;