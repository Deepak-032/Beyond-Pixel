import React from 'react'
import ContactUs from './ContactUs'
import './styles/Header.css'

function Header({ image, content, headerClass, display, captionClass, displayContact = false, mobile = false, displayHandler }) {

    return (
        <div className="header">
            <div className={`${headerClass}`}>
                <div className={`position-relative ${display}`}>
                    <img
                        className="header_spiral"
                        src={image}
                        alt=""
                    />
                    <div className={`${captionClass}`}>
                        {content}
                    </div>
                </div>
                {mobile &&
                    <div className="position-relative d-md-none">
                        <img
                            className="header_spiral position-absolute"
                            style={{ top: "28%", zIndex: "-1" }}
                            src="/assets/mobileSpiral.png"
                            alt=""
                        />
                        <div className={`${captionClass} header_caption_hero position-static`} style={{ fontSize: "80px" }}>
                            {content}
                        </div>
                    </div>
                }
            </div>
            {displayContact &&
                <div className="btn_container">
                    <button onClick={displayHandler} className="btn_contact">Contact Us</button>
                </div>
            }
            <ContactUs contactClass="pop_up_container" wrapper={true} />
        </div>
    )
}

export default Header
