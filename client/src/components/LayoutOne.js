// for project name in project details
import React from 'react'
import './styles/LayoutOne.css'

function LayoutOne({ bgColor, projectName, content, src, displayHandler }) {
    return (
        <div style={{ backgroundColor: bgColor, position: "relative", marginBottom: "60px" }}>
            <div className="row layout_one_row max_width">
                <div className="col-12 col-lg-5 layout_one_container">
                    <div className="layout_one_heading">{projectName}</div>
                    <div className="layout_one_content">{content}</div>
                    <button onClick={displayHandler} className="btn_contact">
                        Contact Us
                    </button>
                </div>
                <div className="col-12 col-lg-7 layout_one_img_position">
                    <img
                        style={{ width: "100%", objectFit: "contain", maxHeight: "452px" }}
                        src={src}
                        alt="" 
                    />
                </div>
            </div>
        </div>
    )
}

export default LayoutOne
