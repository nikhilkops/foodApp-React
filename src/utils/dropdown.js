import React, { useState } from 'react';
import './Dropdown.css'; // You can create a separate CSS file for styling
import customFetch from "./customFetch";
import { toast } from 'react-toastify';

const Dropdown = (props) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };

    const logoutButton = async () => {
        try {
            await customFetch.get("/auth/logout");
            toast.success(`User Logged out successfully !`, {
                position: toast.POSITION.TOP_CENTER,
                autoClose: 2500, // milliseconds
                style: {
                    fontSize: '18px',
                    width: '350px'  // Set the desired font size
                }
            });
            props.setReloadUser((prev) => !prev)
        }
        catch (error) {
            toast.error(`Try again user is not logged out!`, {
                position: toast.POSITION.TOP_CENTER,
                autoClose: 2500, // milliseconds
                style: {
                    fontSize: '18px',
                    width: '350px'  // Set the desired font size
                }
            });
        }

        props.setUser(null)
    };

    return (
        <div className="dropdown main-nav-user" onClick={toggleDropdown} >
            <div className="dropdown-toggle" >
                {'Hi ' + props.user}
            </div>
            {isOpen && (
                <div style={{ "display": "block" }} className="dropdown-content" >
                    <div onClick={() => logoutButton()}> Logout </div>

                </div>
            )}
        </div>
    );
};

export default Dropdown;
