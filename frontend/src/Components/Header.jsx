import React, { useEffect, useState } from 'react'
import './Header.css'
import { FaSortDown } from "react-icons/fa";
import { FaTelegramPlane } from "react-icons/fa";

const Header = () => {

    const [seconds, setSeconds] = useState(10);
    const [toggle,setToggle] = useState(false);

    useEffect(() => {
        const interval = setInterval(() => {
            // Decrement seconds
            setSeconds((prevSeconds) => prevSeconds - 1);

            // Check if timer reached zero
            if (seconds === 0) {
                // Reset timer to 10 seconds
                setSeconds(60);
            }
        }, 1000);

        // Cleanup interval on component unmount
        return () => clearInterval(interval);
    }, [seconds]);

    const handleclick =() =>{
        setToggle(!toggle)
    }

    return (
        <div className='header_container'>
            <div>
                <img src="https://hodlinfo.com/static/media/HODLINFO.8f78fc06.png" alt="1" />
            </div>
            <div className='header_mid'>
                <div>
                    <p>INR</p>
                    <FaSortDown />
                </div>
                <div>
                    <p>ALL</p>
                    <FaSortDown />
                </div>
                <div>
                    <p>BUY ALL</p>
                </div>
            </div>
            <div className='header_end'>
                <div>
                    {seconds}
                </div>
                <div>
                    <FaTelegramPlane style={{ marginRight: "10px" }} />
                    <p>Connect Telegram</p>
                </div>
                <div className='toggle' onClick={handleclick}>
                    {toggle?<div className='toggle_left'></div>:
                    <div className='toggle_right'></div>}
                </div>
            </div>
        </div> 
    )
}

export default Header