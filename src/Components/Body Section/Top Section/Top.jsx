import React from 'react'
import './top.css'

// Impoted Icon=============>
import { TfiSearch } from 'react-icons/tfi'
import { MdOutlineDateRange } from 'react-icons/md'
import { MdOutlineNotificationsNone } from 'react-icons/md'
import { BsGrid } from 'react-icons/bs'

// Imported Images==========>
import img1 from '../../../Assets/user(3).png'


const Top = () => {
  return (
    <div className="topSection">
      <div className="headerSection flex">

        <div className="searchBar flex">
          <TfiSearch className="icon" />
          <input type="text" placeholder='Search...' />
          <div style={{ width: "100%" }}>
            <div className="adminDiv flex">
              <MdOutlineNotificationsNone className="icon" />
              <MdOutlineDateRange className="icon" />
              <BsGrid className="icon" />
              <div className="adminImage">
                <img src={img1} alt="Admin Image" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="cardSection flex">
        <div className='mainContent'>
          <div className='vender'>
            <div>
              <span className='name' style={{paddingTop: "20px"}}>Carbon FootPrint</span><br />
              <div className='count'>
                <h2>2,412,314t <br /> CO2e</h2>
                <br />
                <div style={{border:"0.5px solid #DCFFF5", borderRadius:"100px", background:"#DCFFF5",width:"70px", paddingLeft:"15px", marginLeft:"20px"}}>
                <span className='Num'>-45%</span>
                </div>
              </div>
            </div>
          </div>
          <div className='Emissions'>
            <span className='name2'style={{paddingTop: "20px"}}>Emissions by Spinning</span><br />  
            <span className='Spinning'>72,3694t</span>
            <br />
            <span className='co2'>CO2e</span>
            <br />
            <br />
            <div style={{border:"0.5px solid #DCFFF5", borderRadius:"100px", background:"#DCFFF5",width:"70px", paddingLeft:"15px",marginLeft:"20px"}}>
            <span className='Num'>-60%</span>
            </div>
          </div>
          <div className='Emission'>
            <span className='name3' style={{paddingTop: "20px"}}>Emission By Transportation</span><br />
            <div>
            <span className='Transportation'>361,874t</span>
            <br />
            <span className='co2'>CO2e</span>
            <br />
            <br />
            <div style={{border:"0.5px solid #F2F4F7", borderRadius:"100px", background:"#F2F4F7",width:"70px", paddingLeft:"15px",marginLeft:"20px"}}>
            <span className='Num' style={{color:"black", }}>0.00</span>
            </div>
            </div>
          </div>
          <div className='Emission'>
            <span className='name3' style={{paddingTop: "20px"}}>Emission by Carding</span><br />
            <span className='Transportation'>241,231</span>
            <br />
            <span className='co2'>CO2e</span>
            <br />
            <br />
            <div style={{border:"0.5px solid #DCFFF5", borderRadius:"100px", background:"#DCFFF5",width:"70px", paddingLeft:"15px",marginLeft:"20px"}}>
            <span className='Num'>+0.6%</span>
            </div>
            <span className='incrmt'>From 4.6%</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Top