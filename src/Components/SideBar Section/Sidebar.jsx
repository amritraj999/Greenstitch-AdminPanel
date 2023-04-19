import React from 'react'
import './sidebar.css';

// imported Images ============>
import logo from '../../Assets/logo.png'


// imported icons ==============>
import {CgCircleci} from 'react-icons/cg'
import {TfiWorld} from 'react-icons/tfi'
import {IoIosHelpBuoy} from 'react-icons/io'
import {FiFolder} from 'react-icons/fi'
import {CgOptions} from 'react-icons/cg'
import {RxExit} from 'react-icons/rx'


const Sidebar = () => {
  return (
    <div className='sideBar grid'>

      <div className="logoDiv flex">
        <img src={logo} alt="Image Name" />
      </div>

      <div className="menuDiv">
        <h3 className="divTitle">
        D A S H B O A R D
        </h3>
        <ul className="menuLists grid">

        <li className="listItems">
            <a href="#" className="menuLink">
              <CgCircleci className='icon'/>
              <span className="smallText">
              Dashboard
              </span>
              <select style={{marginLeft: "55px", border: "1px solid #fff", backgroundColor: 'transparent'}} name="" id="">
                
              </select>
            </a>
          </li>

          <li className="listItems">
            <a href="#" className="menuLink">
              <span style={{paddingLeft:"30px"}} className="smallText">
              Record
              </span>
            </a>
          </li>

          <li className="listItems">
            <a href="#" className="menuLink">
              <span style={{paddingLeft:"30px"}} className="smallText">
              Reports
              </span>
            </a>
          </li>

          <li className="listItems">
            <a href="#" className="menuLink">
              <span style={{paddingLeft:"30px"}} className="smallText">
              Analyse
              </span>
            </a>
          </li>

          <li className="listItems">
            <a href="#" className="menuLink">
              <span style={{paddingLeft:"30px"}} className="smallText">
              Learn
              </span>
            </a>
          </li>

        </ul>
      </div>

      <div className="settingDiv">
        <h3 className="divTitle">
          P A G E S
        </h3>
        <ul className="menuLists grid">

          <li className="listItems">
            <a href="#" className="menuLink">
              <IoIosHelpBuoy className='icon'/>
              <span className="smallText">
                Help Center
              </span>
              <select style={{marginLeft: "47.5px", border: "1px solid #fff", backgroundColor: 'transparent'}} name="" id=""></select>
            </a>
          </li>

          <li className="listItems">
            <a href="#" className="menuLink">
              <FiFolder className='icon'/>
              <span className="smallText">
                File Manager
              </span>
              <select style={{marginLeft: "40px", border: "1px solid #fff", backgroundColor: 'transparent'}} name="" id=""></select>
            </a>
          </li>

        </ul>
      </div>
      <div className="sideBarCard">
      <hr/>
        <CgOptions className='icon'/>
        <RxExit className='icon'/>
        <TfiWorld className='icon'/>
      </div>
    </div>
  )
}

export default Sidebar