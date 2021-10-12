import React from 'react'
import Heading from './Heading'
import Clients from './Clients'
import './styles/AboutUs.css'
import { useDocumentTitle } from './CustomHooks'

function AboutUs() {
    useDocumentTitle("Beyond Pixel · About Us")
    
    return (
        <div className="max_width">
            <div className="d-flex about_us_container">
                <div className="about_content">
                    <Heading LWidth="86px" fontSize="40px" heading={<>About the company</>}></Heading>
                    <div className="about_para">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                    </div>
                </div>
                <div className="about_content">
                    <Heading LWidth="86px" fontSize="40px" heading={<>What we do</>}></Heading>
                    <div className="about_para">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                    </div>
                </div>
            </div>
            <Heading LWidth="86px" fontSize="40px" heading={<>Meet The Principals</>}></Heading>
            <div className="d-flex about_us_container">
                <div className="about_content">
                    <div style={{ margin: "47px 0", width: "455px", height: "500px", border: "1px solid" }}></div>
                    <div className="owner_name">Rishi Arora</div>
                    <div className="about_owner">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                    </div>
                </div>
                <div className="about_content">
                    <div style={{ margin: "47px 0", width: "455px", height: "500px", border: "1px solid" }}></div>
                    <div className="owner_name">Nitish Malhotra</div>
                    <div className="about_owner">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                    </div>
                </div>
            </div>
            <Clients bgColor="#FFFF" />
        </div>
    )
}

export default AboutUs
