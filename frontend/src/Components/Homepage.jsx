import React, { useEffect, useState } from 'react'
import Header from './Header'
import Footer from './Footer'
import './Homepage.css'
import toast from 'react-hot-toast'
import axios from 'axios';

const Homepage = () => {
  const [info, setInfo] = useState([]);

  async function GetData() {
    try {
      const response = await axios.get('https://quadbtech-assignment-tb4m.onrender.com/api/v1/info/get-data')
      if (response.data.info) {
        setInfo(response.data.info);
      }
      else {
        toast.error("Not get Info")
      }
    } catch (error) {
      toast.error(error)
    }
  }

  console.log("This is data................", info)

  useEffect(() => {
    GetData();
  }, [])

  return (
    <div className='homepage_container'>
      <Header />

      <div className='homepage_body'>
        <p>Best Price to Trade</p>
        <div className='display_board'>
          <div>
            <p>0.71%</p>
            <p>5 Mins</p>
          </div>
          <div>
            <p>0.96 %</p>
            <p>1 Hour</p>
          </div>
          <div>₹ 38,90,375</div>
          <div>
            <p>4.68 %</p>
            <p>1 Day</p>
          </div>
          <div>
            <p>12.29 %</p>
            <p>7 Days</p>
          </div>
        </div>
        <div>Average BTC/INR net price including commission</div>
        <table className='table_box'>
          <thead>
            <tr>
              <th>#</th>
              <th>Name</th>
              <th>Last Traded Price</th>
              <th>Buy / Sell Price</th>
              <th>Volume</th>
              <th>Base Unit</th>
            </tr>
          </thead>
          {
            info.map((information, index) => (
              <tbody>
                <tr>
                  <td>{index + 1}</td>
                  <td>{information.name}</td>
                  <td>{information.last}</td>
                  <td>{information.buy} / {information.sell}</td>
                  <td>{information.volume}</td>
                  <td>{information.base_unit}</td>
                </tr>
              </tbody>
            ))
          }

        </table>
      </div>

      <Footer />
    </div>
  )
}

export default Homepage